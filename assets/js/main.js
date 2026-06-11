// Government Jobs Portal - Main Application Logic

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initTicker();

  // Determine current page and initialize features
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  if (page === "index.html" || page === "") {
    initHomepage();
  } else if (page === "job-detail.html") {
    initJobDetailPage();
  } else if (page === "yojana.html") {
    initYojanaPage();
  }
});

/* ==========================================================================
   THEME MANAGEMENT (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  themeToggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById("mobileNavToggle");
  const navMenu = document.getElementById("navMenu");
  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.innerHTML = navMenu.classList.contains("active") ? "✕" : "☰";
  });
}

/* ==========================================================================
   TICKER ANNOUNCEMENTS
   ========================================================================== */
function initTicker() {
  const tickerWrap = document.getElementById("tickerWrap");
  if (!tickerWrap) return;

  const announcements = window.portalData?.announcements || [];
  if (announcements.length === 0) return;

  // Duplicate items to ensure continuous scrolling
  const listHtml = [...announcements, ...announcements]
    .map(text => {
      // Look up if any announcement matches a current job for easy navigation
      const linkedJob = window.portalData.items.find(item => text.includes(item.shortTitle));
      const url = linkedJob ? `job-detail.html?id=${linkedJob.id}` : "#";
      return `<a href="${url}" class="ticker-item">${text}</a>`;
    })
    .join("");

  tickerWrap.innerHTML = `<div class="ticker-content">${listHtml}</div>`;
}

/* ==========================================================================
   HOMEPAGE CONTROLLER
   ========================================================================== */
function initHomepage() {
  const data = window.portalData;
  if (!data) return;

  // 1. Initialize Featured Slider
  initSlider();

  // 2. Initialize Live Search & Suggestions
  initSearch();

  // 3. Populate Sarkari Result Style Grids
  populateGrid("latestJobsList", data.items.filter(item => item.category === "Latest Jobs"));
  populateGrid("admitCardList", data.items.filter(item => item.category === "Admit Card"));
  populateGrid("resultList", data.items.filter(item => item.category === "Result"));
  populateGrid("answerKeyList", data.items.filter(item => item.category === "Answer Key"));
  populateGrid("syllabusList", data.items.filter(item => item.category === "Syllabus"));
  
  // Yojana grid on home
  const yojanaList = document.getElementById("yojanaList");
  if (yojanaList) {
    yojanaList.innerHTML = data.yojana
      .slice(0, 8)
      .map(y => `
        <a href="yojana.html#${y.id}" class="grid-item-link">
          <span class="grid-item-left">
            <span class="badge-new" style="background-color: var(--secondary)">Scheme</span>
            ${y.title}
          </span>
          <span class="grid-item-meta">${y.lastUpdate}</span>
        </a>
      `).join("");
  }

  // Central Jobs grid
  const centralList = document.getElementById("centralList");
  if (centralList) {
    const centralJobs = data.items.filter(item => 
      ["UPSC", "SSC", "Railway", "Banking", "Central"].includes(item.subCategory)
    );
    populateGrid("centralList", centralJobs);
  }

  // State Jobs grid
  const stateList = document.getElementById("stateList");
  if (stateList) {
    const stateJobs = data.items.filter(item => 
      item.subCategory === "State Wise" || item.state !== "All India"
    );
    populateGrid("stateList", stateJobs);
  }

  // Important Notifications grid
  const importantList = document.getElementById("importantList");
  if (importantList) {
    importantList.innerHTML = data.announcements
      .map((ann, idx) => `
        <div class="grid-item-link" style="cursor: default;">
          <span class="grid-item-left" style="white-space: normal;">
            <span class="badge-new">Info</span>
            ${ann}
          </span>
        </div>
      `).join("");
  }
}

function populateGrid(elementId, itemsList) {
  const container = document.getElementById(elementId);
  if (!container) return;

  if (itemsList.length === 0) {
    container.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 14px;">No updates available</div>`;
    return;
  }

  container.innerHTML = itemsList
    .map(item => {
      // Highlight trending/hot jobs with a badge
      const showBadge = item.isTrending ? '<span class="badge-new">New</span>' : '';
      return `
        <a href="job-detail.html?id=${item.id}" class="grid-item-link">
          <span class="grid-item-left">
            ${showBadge}
            ${item.shortTitle} Online Form 2026
          </span>
          <span class="grid-item-meta">${formatDate(item.postDate)}</span>
        </a>
      `;
    })
    .join("");
}

/* ==========================================================================
   FEATURED SLIDER CONTROLLER
   ========================================================================== */
function initSlider() {
  const sliderTrack = document.getElementById("sliderTrack");
  const dotsContainer = document.getElementById("sliderDots");
  if (!sliderTrack || !dotsContainer) return;

  // Filter top trending items
  const featuredJobs = window.portalData.items.filter(item => item.isTrending).slice(0, 3);
  if (featuredJobs.length === 0) return;

  // Populate slides
  sliderTrack.innerHTML = featuredJobs
    .map(job => `
      <div class="slide">
        <div class="slide-tag">Trending Vacancy</div>
        <h3 class="slide-title">${job.title}</h3>
        <p class="slide-desc">${job.department} • Total Vacancies: ${job.totalVacancies} • Last Date: ${formatDate(job.lastDate)}</p>
        <a href="job-detail.html?id=${job.id}" class="btn btn-primary" style="width: fit-content; padding: 8px 18px; font-size: 13px;">View Complete Details</a>
      </div>
    `).join("");

  // Populate navigation dots
  dotsContainer.innerHTML = featuredJobs
    .map((_, idx) => `<button class="slider-dot ${idx === 0 ? "active" : ""}" data-index="${idx}"></button>`)
    .join("");

  let currentSlide = 0;
  const totalSlides = featuredJobs.length;
  const dots = dotsContainer.querySelectorAll(".slider-dot");

  function goToSlide(index) {
    currentSlide = index;
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentSlide);
    });
  }

  // Auto scroll
  let interval = setInterval(() => {
    let next = (currentSlide + 1) % totalSlides;
    goToSlide(next);
  }, 5000);

  // Manual dot override
  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      clearInterval(interval);
      const targetIdx = parseInt(e.target.getAttribute("data-index"));
      goToSlide(targetIdx);
      // Restart interval after action
      interval = setInterval(() => {
        let next = (currentSlide + 1) % totalSlides;
        goToSlide(next);
      }, 6000);
    });
  });
}

/* ==========================================================================
   LIVE SEARCH SYSTEM
   ========================================================================== */
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  const suggestionsPanel = document.getElementById("searchSuggestions");
  if (!searchInput || !suggestionsPanel) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      suggestionsPanel.style.display = "none";
      return;
    }

    const items = window.portalData.items || [];
    const yojana = window.portalData.yojana || [];

    // Filter matching entries
    const matchedItems = items.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.department.toLowerCase().includes(query) ||
      item.shortTitle.toLowerCase().includes(query)
    ).slice(0, 5);

    const matchedYojana = yojana.filter(y => 
      y.title.toLowerCase().includes(query) || 
      y.shortDescription.toLowerCase().includes(query)
    ).slice(0, 3);

    // Merge results
    let html = "";
    matchedItems.forEach(item => {
      html += `
        <div class="suggestion-item" data-url="job-detail.html?id=${item.id}">
          <span class="suggestion-title">${item.title}</span>
          <span class="suggestion-cat">${item.category}</span>
        </div>
      `;
    });

    matchedYojana.forEach(y => {
      html += `
        <div class="suggestion-item" data-url="yojana.html#${y.id}">
          <span class="suggestion-title">${y.title}</span>
          <span class="suggestion-cat" style="background-color: var(--secondary-glow); color: var(--secondary)">Yojana</span>
        </div>
      `;
    });

    if (html) {
      suggestionsPanel.innerHTML = html;
      suggestionsPanel.style.display = "block";

      // Attach click listeners to suggestions
      suggestionsPanel.querySelectorAll(".suggestion-item").forEach(item => {
        item.addEventListener("click", () => {
          const url = item.getAttribute("data-url");
          window.location.href = url;
        });
      });
    } else {
      suggestionsPanel.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 14px;">No results found for "${e.target.value}"</div>`;
      suggestionsPanel.style.display = "block";
    }
  });

  // Hide suggestion list when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionsPanel.contains(e.target)) {
      suggestionsPanel.style.display = "none";
    }
  });
}

/* ==========================================================================
   JOB DETAILS PAGE CONTROLLER
   ========================================================================== */
function initJobDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get("id");

  if (!jobId) {
    renderJobNotFound();
    return;
  }

  const job = window.portalData?.items.find(item => item.id === jobId);
  if (!job) {
    renderJobNotFound();
    return;
  }

  // Update SEO Tags & Title
  document.title = `${job.title} - Sarkari Result Jobs`;
  updateMetaTag("description", `Check details for ${job.title}. Find notification details, age limits, syllabus, total vacancies, application fee, and online application direct links.`);
  updateMetaTag("keywords", `${job.shortTitle}, ${job.department}, government jobs 2026, sarkari result, admit card, syllabus, online application form`);

  // Inject JSON-LD Schema (Google Structured Data)
  injectJobSchema(job);

  // Render Page Content
  document.getElementById("detailDept").innerText = job.department;
  document.getElementById("detailTitle").innerText = job.title;
  document.getElementById("detailPostDate").innerText = formatDate(job.postDate);
  document.getElementById("detailLastDate").innerText = formatDate(job.lastDate);
  document.getElementById("detailVacancies").innerText = job.totalVacancies > 0 ? job.totalVacancies.toLocaleString() : "N/A / Eligibility Based";

  // Create Application Fee and Important Dates Table cells
  const datesHtml = Object.entries(job.importantDates)
    .map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`)
    .join("");
  document.getElementById("datesList").innerHTML = `<ul>${datesHtml}</ul>`;

  const feesHtml = Object.entries(job.applicationFee)
    .map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`)
    .join("");
  document.getElementById("feesList").innerHTML = `<ul>${feesHtml}</ul>`;

  // Age limits
  const ageHtml = Object.entries(job.ageLimit)
    .map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`)
    .join("");
  document.getElementById("ageList").innerHTML = `<ul>${ageHtml}</ul>`;

  // Render detailed requirements tables
  document.getElementById("qualificationText").innerText = job.qualification;
  document.getElementById("selectionText").innerText = job.selectionProcess;
  document.getElementById("salaryText").innerText = job.salary;
  document.getElementById("patternText").innerText = job.examPattern;
  document.getElementById("syllabusText").innerText = job.syllabus;

  // Render Action Links
  const linksContainer = document.getElementById("linksContainer");
  if (linksContainer) {
    linksContainer.innerHTML = Object.entries(job.links)
      .map(([label, href]) => {
        let btnClass = "btn-outline";
        if (label.includes("Apply Online")) btnClass = "btn-primary";
        if (label.includes("Notification")) btnClass = "btn-secondary";
        return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="btn ${btnClass}">${label}</a>`;
      })
      .join("");
  }

  // Render FAQs
  const faqList = document.getElementById("faqList");
  if (faqList && job.faqs && job.faqs.length > 0) {
    faqList.innerHTML = job.faqs
      .map((faq, index) => `
        <div class="faq-item">
          <div class="faq-question" onclick="toggleFaq(this)">
            <span>${faq.q}</span>
            <span class="faq-icon">+</span>
          </div>
          <div class="faq-answer">
            <p>${faq.a}</p>
          </div>
        </div>
      `)
      .join("");
  } else {
    document.getElementById("faqSection").style.display = "none";
  }

  // Render Related Jobs Sidebar
  renderSidebar(job);
}

function renderJobNotFound() {
  const container = document.getElementById("detailMainContent");
  if (container) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <h2 style="font-size: 24px; margin-bottom: 16px; color: var(--danger);">Job Details Not Found</h2>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">The request listing does not exist, has expired, or is currently unavailable.</p>
        <a href="index.html" class="btn btn-primary">Return to Homepage</a>
      </div>
    `;
  }
}

function renderSidebar(currentJob) {
  const sidebarList = document.getElementById("relatedJobsList");
  if (!sidebarList) return;

  const allItems = window.portalData.items || [];
  // Find related items matching subCategory or category, excluding the current page item
  const related = allItems
    .filter(item => item.id !== currentJob.id && (item.subCategory === currentJob.subCategory || item.category === currentJob.category))
    .slice(0, 5);

  if (related.length === 0) {
    sidebarList.innerHTML = `<p style="font-size: 13px; color: var(--text-muted);">No related updates found.</p>`;
    return;
  }

  sidebarList.innerHTML = related
    .map(item => `
      <div class="sidebar-item">
        <a href="job-detail.html?id=${item.id}" class="sidebar-link">${item.shortTitle} Online Update</a>
        <span class="sidebar-meta">${item.category} • ${formatDate(item.postDate)}</span>
      </div>
    `)
    .join("");
}

// Collapsible FAQ Handler
window.toggleFaq = function(element) {
  const faqItem = element.parentElement;
  faqItem.classList.toggle("active");
};

/* ==========================================================================
   SARKARI YOJANA PAGE CONTROLLER
   ========================================================================== */
function initYojanaPage() {
  const yojanaData = window.portalData?.yojana || [];
  const container = document.getElementById("yojanaGrid");
  if (!container) return;

  if (yojanaData.length === 0) {
    container.innerHTML = `<p style="text-align: center; grid-column: span 2; padding: 40px; color: var(--text-muted);">No welfare schemes found.</p>`;
    return;
  }

  container.innerHTML = yojanaData
    .map(scheme => `
      <div class="yojana-card" id="${scheme.id}">
        <h3 class="yojana-card-title">${scheme.title}</h3>
        <p class="yojana-card-desc">${scheme.shortDescription}</p>
        <div class="yojana-meta-list">
          <div><strong>Benefit:</strong> ${scheme.benefit}</div>
          <div><strong>Eligibility:</strong> ${scheme.eligibility}</div>
          <div><strong>Necessary Documents:</strong> ${scheme.documents}</div>
        </div>
        <div style="margin-top: auto;">
          <h4 style="font-size: 14px; margin-bottom: 8px;">How to Apply:</h4>
          <p style="font-size: 13px; color: var(--text-secondary); white-space: pre-line; margin-bottom: 16px;">${scheme.howToApply}</p>
          <a href="${scheme.officialLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 13px; padding: 8px 16px; width: 100%;">Apply on Official Portal</a>
        </div>
      </div>
    `)
    .join("");

  // Scroll to targeted scheme if URL has a hash anchor (e.g. #pm-kisan-yojana)
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        element.style.borderColor = "var(--primary)";
        element.style.boxShadow = "var(--hover-shadow)";
      }
    }, 300);
  }
}

/* ==========================================================================
   DYNAMIC SEO UTILITIES & SCHEMAS
   ========================================================================== */
function updateMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function injectJobSchema(job) {
  // 1. JobPosting Structured Data (For Google Jobs integration)
  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": `Department: ${job.department}. Qualification: ${job.qualification}. Selection Process: ${job.selectionProcess}. Total Vacancies: ${job.totalVacancies}. Last date to apply is ${job.lastDate}.`,
    "datePosted": `${job.postDate}T09:00:00+05:30`,
    "validThrough": `${job.lastDate}T23:59:00+05:30`,
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "GovernmentOrganization",
      "name": job.department,
      "sameAs": job.links["Official Website"] || "https://ssc.gov.in"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": job.state
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "value": 45000,
        "unitText": "MONTH"
      }
    }
  };

  // 2. BreadcrumbList Structured Data
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${window.location.origin}/index.html`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": job.category,
        "item": `${window.location.origin}/index.html#${job.category.toLowerCase().replace(/\s+/g, '-')}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": job.shortTitle,
        "item": window.location.href
      }
    ]
  };

  // Inject into Head
  const script1 = document.createElement("script");
  script1.type = "application/ld+json";
  script1.text = JSON.stringify(jobPosting);
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.type = "application/ld+json";
  script2.text = JSON.stringify(breadcrumb);
  document.head.appendChild(script2);
}

/* ==========================================================================
   HELPER UTILITIES
   ========================================================================== */
function formatDate(dateStr) {
  if (!dateStr || dateStr === "To be notified later") return dateStr;
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr; // fallback if already formatted

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
