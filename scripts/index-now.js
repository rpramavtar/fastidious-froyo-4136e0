const fs = require('fs');
const path = require('path');
const https = require('https');

// Load exams from data file
const dataJsPath = path.join(__dirname, '../assets/js/data.js');
const keyFileName = 'b0f3f5968c152f68ae62c805498f62b0.txt'; // Verification Key
const keyFilePath = path.join(__dirname, `../${keyFileName}`);
const host = 'jobvacanciesalert.com';

// 1. Ensure the IndexNow verification key file exists in the root
const keyContent = 'b0f3f5968c152f68ae62c805498f62b0';
if (!fs.existsSync(keyFilePath)) {
  fs.writeFileSync(keyFilePath, keyContent, 'utf8');
  console.log(`Created IndexNow verification key file: ${keyFileName}`);
}

// 2. Load all URLs from assets/js/data.js
let portalData;
try {
  const fileContent = fs.readFileSync(dataJsPath, 'utf8');
  // Simple extraction since it's a module
  const jsonString = fileContent.match(/const portalData = (\{[\s\S]+?\});/)[1];
  portalData = eval(`(${jsonString})`);
} catch (err) {
  console.error("Error reading portal database index file:", err);
  process.exit(1);
}

const urls = [
  `https://${host}/`,
  `https://${host}/index.html`,
  `https://${host}/yojana.html`,
  `https://${host}/about.html`,
  `https://${host}/contact.html`,
  `https://${host}/sitemap.html`,
  `https://${host}/category.html`
];

portalData.items.forEach(job => {
  urls.push(`https://${host}/jobs/${job.id}.html`);
});

console.log(`Collected ${urls.length} URLs to submit for indexing.`);

// 3. Submit to IndexNow (Bing / Yahoo / Yandex)
function submitToIndexNow() {
  console.log("\nSubmitting URLs to IndexNow (Bing/Yahoo)...");
  
  const payload = JSON.stringify({
    host: host,
    key: keyContent,
    keyLocation: `https://${host}/${keyFileName}`,
    urlList: urls
  });

  const reqOptions = {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const req = https.request(reqOptions, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log(`✅ Success! All ${urls.length} URLs submitted to IndexNow successfully.`);
      } else {
        console.log(`❌ IndexNow returned status code: ${res.statusCode}`);
        console.log("Response:", body);
      }
    });
  });

  req.on('error', (err) => {
    console.error("IndexNow submission error:", err);
  });

  req.write(payload);
  req.end();
}

// 4. Submit to Google Indexing API (if service_account.json is present)
function submitToGoogle() {
  const serviceAccountPath = path.join(__dirname, '../service_account.json');
  if (!fs.existsSync(serviceAccountPath)) {
    console.log("\n⚠️  service_account.json not found in root. Skipping Google Indexing API submission.");
    console.log("ℹ️  To index on Google, place your Service Account key file 'service_account.json' in the root directory and run this script again.");
    return;
  }

  console.log("\nSubmitting URLs to Google Indexing API...");
  
  // Dynamic import of googleapis
  let google;
  try {
    google = require('googleapis').google;
  } catch (err) {
    console.log("❌ googleapis module is not installed. Please run: npm install googleapis");
    return;
  }

  const key = require(serviceAccountPath);
  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    null
  );

  jwtClient.authorize(async (err, tokens) => {
    if (err) {
      console.error("Google Authentication failed:", err);
      return;
    }

    console.log("✅ Google Auth Successful. Submitting URLs (Note: Google limit is 200 per day by default)...");

    // Google API endpoints require individual post requests or batches
    // We will loop and send up to 200 URLs
    const limit = Math.min(urls.length, 200);
    for (let i = 0; i < limit; i++) {
      const url = urls[i];
      const payload = JSON.stringify({
        url: url,
        type: 'URL_UPDATED'
      });

      const options = {
        hostname: 'indexing.googleapis.com',
        path: '/v3/urlNotifications:publish',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokens.access_token}`,
          'Content-Length': Buffer.byteLength(payload)
        }
      };

      const req = https.request(options, (res) => {
        if (res.statusCode === 200) {
          console.log(`[${i + 1}/${limit}] ✅ Submitted to Google: ${url}`);
        } else {
          console.log(`[${i + 1}/${limit}] ❌ Failed Google: ${url} (Status: ${res.statusCode})`);
        }
      });

      req.on('error', (e) => {
        console.error(`Google API request error for ${url}:`, e);
      });

      req.write(payload);
      req.end();

      // Small delay to prevent rate limit hits
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    if (urls.length > 200) {
      console.log(`\n📢 Google daily quota (200) reached. Remaining ${urls.length - 200} URLs can be submitted tomorrow.`);
    }
  });
}

// Run submissions
submitToIndexNow();
submitToGoogle();
