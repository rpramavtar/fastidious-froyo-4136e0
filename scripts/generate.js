const fs = require('fs');
const path = require('path');

// Target Directories
const jobsDir = path.join(__dirname, '../jobs');
const dataJsPath = path.join(__dirname, '../assets/js/data.js');
const sitemapHtmlPath = path.join(__dirname, '../sitemap.html');
const sitemapXmlPath = path.join(__dirname, '../sitemap.xml');
const templatePath = path.join(__dirname, 'template.html');

// Ensure jobs directory exists
if (!fs.existsSync(jobsDir)) {
  fs.mkdirSync(jobsDir, { recursive: true });
}

// 50 Exams Metadata Database
const exams = [
  {
    id: "upsc-cse-2026",
    title: "UPSC Civil Services IAS & IFS Exam 2026 Online Form",
    shortTitle: "UPSC IAS 2026",
    department: "Union Public Service Commission (UPSC)",
    postDate: "2026-06-11",
    lastDate: "2026-07-15",
    totalVacancies: 1056,
    category: "Latest Jobs",
    subCategory: "UPSC",
    state: "All India",
    isTrending: true,
    basicSalary: "Level 10 Pay Matrix (₹56,100 - ₹1,77,500 basic pay plus DA, HRA, and travel allowances)",
    fee: { "General / OBC / EWS": "₹100", "SC / ST / Female / PH": "₹0 (Exempted)", "Payment Mode": "Online / Pay-in-slip Cash" },
    importantDates: { "Notification Date": "11/06/2026", "Apply Start": "11/06/2026", "Last Date to Apply": "15/07/2026 (06:00 PM)", "Exam Date Prelims": "04/10/2026", "Mains Exam Date": "January 2027" },
    ageLimit: { "Minimum Age": "21 Years", "Maximum Age": "32 Years", "Age Cut-off": "As on 01/08/2026", "Age Relaxation": "OBC (3 Years), SC/ST (5 Years), PwD (10 Years)" },
    qualification: "Bachelor's Degree in any discipline from a recognized University in India. Final year appearing students are also eligible to register.",
    examPattern: "1. Preliminary Exam: Paper I (General Studies - 200 Marks) & Paper II (CSAT - 200 Marks, qualifying with 33%). Both are objective multiple choice papers.\n2. Mains Exam: 9 descriptive written papers (Total 1750 Marks) covering Essay, General Studies I-IV, and Optional Subject Paper I-II.\n3. Interview/Personality Test: 275 Marks for evaluation of character, knowledge, and mental agility.",
    syllabus: "Prelims GS-I: History of India, Geography, Indian Polity, Economic & Social Development, General Science, Current Affairs. CSAT: Comprehension, Logical Reasoning, Basic Numeracy (Class 10 level). Mains GS-I to IV: Heritage & Culture, History & Geography, Governance, Constitution, Social Justice, Technology, Economic Development, Biodiversity, Ethics, Integrity, Aptitude.",
    books: ["'Indian Polity' by M. Laxmikanth", "'History of Modern India' by Rajiv Ahir (Spectrum)", "'Indian Economy' by Ramesh Singh", "'Certificate Physical & Human Geography' by G.C. Leong", "'Manorama Yearbook' for Current Affairs"],
    faqs: [
      { q: "How many attempts are permitted for General Category in UPSC?", a: "A total of 6 attempts are allowed for General candidates up to the age limit of 32 years." },
      { q: "Is the CSAT paper marks counted for Prelims ranking?", a: "No, CSAT (Paper II) is qualifying in nature. You only need to score 33% (66 marks out of 200) to clear it. Ranking is done on GS-I marks only." },
      { q: "Can I choose my regional language to write the Mains exam?", a: "Yes, candidates can choose to write their responses in any of the languages listed in the Eighth Schedule of the Indian Constitution." }
    ]
  },
  {
    id: "ssc-cgl-2026",
    title: "SSC CGL Combined Graduate Level 2026 Online Application Form",
    shortTitle: "SSC CGL 2026",
    department: "Staff Selection Commission (SSC)",
    postDate: "2026-06-10",
    lastDate: "2026-07-10",
    totalVacancies: 17727,
    category: "Latest Jobs",
    subCategory: "SSC",
    state: "All India",
    isTrending: true,
    basicSalary: "Pay Level 4 to Level 8 (₹25,500 to ₹1,51,100 basic monthly pay plus DA, HRA, and transport allowance depending on post location)",
    fee: { "General / OBC / EWS": "₹100", "SC / ST / PH / All Females": "₹0 (Exempted)", "Payment Mode": "Online BHIM UPI, Net Banking, Credit/Debit Cards" },
    importantDates: { "Notification Release": "10/06/2026", "Apply Start": "10/06/2026", "Last Date to Apply": "10/07/2026 (11:00 PM)", "Exam Date Tier I": "September-October 2026", "Exam Date Tier II": "December 2026" },
    ageLimit: { "Minimum Age": "18 Years", "Maximum Age": "27-32 Years (Post-wise)", "Age Cut-off": "As on 01/08/2026", "Age Relaxation": "OBC (3 Years), SC/ST (5 Years)" },
    qualification: "Bachelor's Degree in any stream from a recognized Indian University. Assistant Audit/Accounts Officer posts prefer Chartered Accountant, Cost & Management Accountant, or MBA/M.Com.",
    examPattern: "1. Tier-I: 100 Objective Questions (200 Marks) in 1 hour. Negative marking is 0.50 marks.\n2. Tier-II: Paper-I (Compulsory for all posts) - Section 1: Maths & Reasoning (60 Q); Section 2: English & General Awareness (70 Q); Section 3: Computer Knowledge (20 Q) & Data Entry Speed Typing Test (15 minutes).",
    syllabus: "Quantitative Aptitude: Number Systems, Algebra, Geometry, Trigonometry, Mensuration. Reasoning: Analogies, Venn Diagrams, Syllogisms. English: Reading Comprehension, Cloze Test, Spotting Errors. General Awareness: History, Geography, General Science, Current Events.",
    books: ["'Quantitative Aptitude' by Dr. R.S. Aggarwal", "'Plinth to Paramount' (English) by Neetu Singh", "'A Modern Approach to Verbal & Non-Verbal Reasoning' by R.S. Aggarwal", "'Lucent's General Knowledge'"],
    faqs: [
      { q: "Is there any negative marking in SSC CGL Tier-I?", a: "Yes, there is a negative marking of 0.50 marks for each wrong answer in the Tier-I examination." },
      { q: "What is the application fee for female candidates?", a: "All female candidates (General, OBC, SC, ST, EWS) are completely exempted from paying the application fee." }
    ]
  },
  {
    id: "rrb-ntpc-2026",
    title: "Railway RRB NTPC Graduate & Under Graduate Recruitment 2026 Online Form",
    shortTitle: "Railway RRB NTPC 2026",
    department: "Railway Recruitment Boards (RRB)",
    postDate: "2026-06-05",
    lastDate: "2026-07-05",
    totalVacancies: 11558,
    category: "Latest Jobs",
    subCategory: "Railway",
    state: "All India",
    isTrending: true,
    basicSalary: "Level 2 to Level 6 (₹19,900 - ₹35,400 starting basic pay plus allowances as per Central Railway guidelines)",
    fee: { "General / OBC / EWS": "₹500 (₹400 refunded after CBT-I)", "SC / ST / Female / PH / EBC": "₹250 (Full ₹250 refunded after CBT-I)", "Payment Mode": "Online via Internet Banking, Credit/Debit cards, UPI" },
    importantDates: { "Apply Start": "05/06/2026", "Last Date to Apply": "05/07/2026", "Last Date Fee Payment": "06/07/2026", "Exam Date CBT 1": "October-December 2026", "Exam Date CBT 2": "To be announced" },
    ageLimit: { "Under Graduate Posts": "18-30 Years", "Graduate Posts": "18-33 Years", "Age Cut-off": "As on 01/07/2026", "Age Relaxation": "OBC (3 Years), SC/ST (5 Years), Ex-Servicemen (As per rules)" },
    qualification: "Under Graduate Posts: 12th Class Pass (10+2) with minimum 50% marks. Graduate Posts: Bachelor's Degree in any stream from a recognized University.",
    examPattern: "1. CBT Stage 1: 100 Questions (90 Minutes) - General Awareness (40 Q), Mathematics (30 Q), Reasoning (30 Q). Negative marking: 1/3rd mark.\n2. CBT Stage 2: 120 Questions (90 Minutes) - General Awareness (50 Q), Mathematics (35 Q), Reasoning (35 Q).\n3. Typing Skill Test / Computer Based Aptitude Test (Depending on specific posts).\n4. Document Verification & Medical Exam.",
    syllabus: "Mathematics: Number System, Decimals, Fractions, LCM, HCF, Percentage, Time & Work, Interest, Profit & Loss. Reasoning: Analogies, Syllogisms, Coding-Decoding, Venn Diagrams. General Awareness: Current Affairs, Art & Culture of India, General Science, Indian History & Geography.",
    books: ["'Fast Track Objective Arithmetic' by Rajesh Verma", "'Analytical Reasoning' by M.K. Pandey", "'Lucent's General Knowledge' & 'Spardha' Monthly Current Affairs"],
    faqs: [
      { q: "Is there a negative marking in RRB NTPC?", a: "Yes, there is a negative marking of 1/3rd mark for each incorrect answer in both CBT-1 and CBT-2." },
      { q: "Will I get an application fee refund if I do not appear for the exam?", a: "No, the fee refund is only applicable to candidates who actually appear for the Stage-1 CBT." }
    ]
  },
  {
    id: "ibps-po-2026",
    title: "IBPS PO XIV Probationary Officers Recruitment 2026 Online Form",
    shortTitle: "IBPS PO XIV 2026",
    department: "Institute of Banking Personnel Selection (IBPS)",
    postDate: "2026-06-01",
    lastDate: "2026-06-21",
    totalVacancies: 4455,
    category: "Latest Jobs",
    subCategory: "Banking",
    state: "All India",
    isTrending: false,
    basicSalary: "Starting Basic Pay is ₹36,000 per month (Scale I). Gross salary including HRA, DA, Special Allowance is approx ₹57,000 per month",
    fee: { "General / OBC / EWS": "₹850", "SC / ST / PWBD": "₹175", "Payment Mode": "Online via Net Banking, Debit/Credit Card, UPI, Mobile Wallets" },
    importantDates: { "Apply Start": "01/06/2026", "Last Date to Apply": "21/06/2026", "Preliminary Exam Date": "October 2026", "Main Exam Date": "November 2026", "Interview Date": "January/February 2027" },
    ageLimit: { "Minimum Age": "20 Years", "Maximum Age": "30 Years", "Age Cut-off": "As on 01/06/2026", "Age Relaxation": "OBC (3 Years), SC/ST (5 Years), PwD (10 Years)" },
    qualification: "Graduation (Bachelor's Degree) in any discipline from a University recognized by the Government of India or equivalent qualification.",
    examPattern: "1. Prelims (Online Objective): 100 Questions (100 Marks) in 1 hour. Subjects: English (30 Q), Quantitative Aptitude (35 Q), Reasoning Ability (35 Q). Sectional timing is 20 minutes each.\n2. Mains (Online): 155 Questions (200 Marks) in 3 hours + English Descriptive Writing Essay & Letter (2 Questions, 25 Marks, 30 Minutes).\n3. Common Interview: 100 Marks (Minimum qualifying marks are 40% for General, 35% for SC/ST/OBC).",
    syllabus: "Reasoning & Computer Aptitude: Puzzles, Seating Arrangements, Coding-Decoding, Logical Reasoning, Computer basics. Quantitative Aptitude: Data Interpretation, Simplification, Quadratic Equations, Series. English: Reading Comprehension, Cloze Test, Fillers. Banking Awareness: RBI policies, Financial terms, Current Events.",
    books: ["'Quantitative Aptitude for Competitive Examinations' by R.S. Aggarwal", "'A Modern Approach to Verbal & Non-Verbal Reasoning' by R.S. Aggarwal", "'Word Power Made Easy' by Norman Lewis", "'Banking Awareness' by Arihant Publications"],
    faqs: [
      { q: "Are there sectional cut-offs in IBPS PO Exam?", a: "Yes, candidates must secure passing marks in each of the three tests in the Preliminary exam, and all tests in the Mains exam, to be shortlisted." },
      { q: "Is the exam bilingual?", a: "Yes, all tests except the English Language tests are available in English, Hindi, and regional languages depending on the state of vacancy." }
    ]
  },
  {
    id: "sbi-po-2026",
    title: "SBI Probationary Officers PO 2026 Online Form Recruitment",
    shortTitle: "SBI PO 2026",
    department: "State Bank of India (SBI)",
    postDate: "2026-06-11",
    lastDate: "2026-07-01",
    totalVacancies: 2000,
    category: "Latest Jobs",
    subCategory: "Banking",
    state: "All India",
    isTrending: true,
    basicSalary: "Starting Basic Pay is ₹41,960 (with 4 advance increments). Gross emoluments are approx ₹65,000 per month.",
    fee: { "General / OBC / EWS": "₹750", "SC / ST / PwD": "₹0 (Exempted)", "Payment Mode": "Online via Netbanking, Debit Cards, Credit Cards, UPI" },
    importantDates: { "Apply Start": "11/06/2026", "Last Date to Apply": "01/07/2026", "Prelims Exam Date": "November 2026", "Mains Exam Date": "December 2026", "Group Exercise & Interview": "February 2027" },
    ageLimit: { "Minimum Age": "21 Years", "Maximum Age": "30 Years", "Age Cut-off": "As on 01/04/2026", "Age Relaxation": "OBC (3 Years), SC/ST (5 Years), PwD (10-15 Years)" },
    qualification: "Graduation in any discipline from a recognized University or any equivalent qualification recognized as such by the Central Government. Those in final year/semester can also apply provisionally.",
    examPattern: "1. Phase-I: Preliminary Examination (100 Marks, 1 hour) consisting of English (30 Q), Quantitative Aptitude (35 Q), Reasoning (35 Q). No sectional cut-offs.\n2. Phase-II: Main Exam (200 Marks Objective, 3 hours) + Descriptive Test (50 Marks, 30 minutes). Subjects: Data Analysis, Reasoning, English, General/Economy/Banking Awareness.\n3. Phase-III: Psychometric Test, Group Exercises (20 Marks) & Interview (30 Marks).",
    syllabus: "Data Analysis: Bar Graphs, Line Graphs, Pie Charts, Probability, Permutation & Combination. Reasoning: Puzzles, Input-Output, Coding-Decoding, Critical Reasoning. English: Reading Comprehension, Vocabulary, Sentence Completion. General Awareness: Current affairs (last 6 months), Banking & Financial terms, RBI guidelines.",
    books: ["'Data Interpretation & Data Sufficiency' by Tarun Goyal", "'A Modern Approach to Verbal & Non-Verbal Reasoning' by R.S. Aggarwal", "'Objective General English' by S.P. Bakshi", "'Lucent's GK'"],
    faqs: [
      { q: "Is there any sectional cut-off in SBI PO Prelims?", a: "No, SBI PO has removed sectional cut-offs in both Prelims and Mains. Candidates are selected based on aggregate scores." },
      { q: "What is the number of attempts restriction for SBI PO?", a: "General Category candidates have 4 attempts, General (PWD) and EWS/OBC have 7 attempts. No attempt limits for SC/ST." }
    ]
  }
];

// Helper to expand dynamically to 50 exams using structural templates
const remainingExams = [
  { id: "sbi-clerk-2026", name: "SBI Junior Associates Clerk", dept: "State Bank of India (SBI)", cat: "Latest Jobs", sub: "Banking", vac: 8283, fee: "₹750 for Gen/OBC, ₹0 SC/ST", sal: "₹19,900 starting basic pay plus allowances", age: "20-28 Years", qual: "Graduation in any stream." },
  { id: "ssc-chsl-2026", name: "SSC CHSL 10+2 Recruitment", dept: "Staff Selection Commission (SSC)", cat: "Latest Jobs", sub: "SSC", vac: 3712, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 2 & Level 4 (₹19,900 - ₹81,100)", age: "18-27 Years", qual: "12th Class Pass." },
  { id: "ssc-gd-2026", name: "SSC GD Constable Recruitment", dept: "Staff Selection Commission (SSC)", cat: "Latest Jobs", sub: "SSC", vac: 39598, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Pay Level 3 (₹21,700 - ₹69,100)", age: "18-23 Years", qual: "10th Class Pass." },
  { id: "rrb-group-d-2026", name: "Railway RRB Group D Level 1", dept: "Railway Recruitment Boards (RRB)", cat: "Latest Jobs", sub: "Railway", vac: 22500, fee: "₹500 for Gen/OBC, ₹250 SC/ST/Female", sal: "Level 1 Pay Matrix (₹18,000 basic pay)", age: "18-33 Years", qual: "10th Class Pass or ITI certificate." },
  { id: "ibps-clerk-2026", name: "IBPS Clerk Recruitment XIV", dept: "Institute of Banking Personnel Selection (IBPS)", cat: "Latest Jobs", sub: "Banking", vac: 6128, fee: "₹850 for Gen/OBC, ₹175 SC/ST/PwD", sal: "₹19,900 starting basic pay", age: "20-28 Years", qual: "Graduation in any stream." },
  { id: "upsc-nda-2-2026", name: "UPSC NDA II Recruitment", dept: "Union Public Service Commission (UPSC)", cat: "Latest Jobs", sub: "UPSC", vac: 400, fee: "₹100 for Gen/OBC, ₹0 SC/ST", sal: "₹56,100 starting stipend during training", age: "16.5 - 19.5 Years", qual: "12th Pass (Physics & Math for Navy/Airforce)." },
  { id: "upsc-cds-2-2026", name: "UPSC CDS II Recruitment", dept: "Union Public Service Commission (UPSC)", cat: "Latest Jobs", sub: "UPSC", vac: 457, fee: "₹200 for Gen/OBC, ₹0 SC/ST/Female", sal: "₹56,100 starting basic pay scale", age: "19-25 Years", qual: "Graduation (Engineering/B.Sc for Navy/Air Force)." },
  { id: "rrb-alp-2026", name: "Railway RRB Assistant Loco Pilot", dept: "Railway Recruitment Boards (RRB)", cat: "Latest Jobs", sub: "Railway", vac: 18799, fee: "₹500 for Gen/OBC, ₹250 SC/ST/Female", sal: "Level 2 Pay Scale (₹19,900 basic pay)", age: "18-30 Years", qual: "10th Pass + ITI, or Diploma/Degree in Engineering." },
  { id: "rrb-je-2026", name: "Railway RRB Junior Engineer", dept: "Railway Recruitment Boards (RRB)", cat: "Latest Jobs", sub: "Railway", vac: 7911, fee: "₹500 for Gen/OBC, ₹250 SC/ST/Female", sal: "Level 6 Pay Scale (₹35,400 basic pay)", age: "18-33 Years", qual: "Diploma/Degree in Engineering in relevant field." },
  { id: "ctet-july-2026", name: "Central Teacher Eligibility Test CTET", dept: "Central Board of Secondary Education (CBSE)", cat: "Admit Card", sub: "Central", vac: 0, fee: "₹1000 for Single paper, ₹1200 for Both", sal: "Eligibility Certificate (Enables teaching jobs)", age: "No upper age limit", qual: "12th Pass + D.El.Ed, or Graduation + B.Ed." },
  { id: "lic-aao-2026", name: "LIC Assistant Administrative Officer", dept: "Life Insurance Corporation of India (LIC)", cat: "Latest Jobs", sub: "Banking", vac: 300, fee: "₹700 for Gen/OBC, ₹85 SC/ST/PwD", sal: "₹53,600 starting basic pay (Total ₹92,000/mo)", age: "21-30 Years", qual: "Graduation in any stream." },
  { id: "rbi-grade-b-2026", name: "RBI Grade B Officers", dept: "Reserve Bank of India (RBI)", cat: "Latest Jobs", sub: "Banking", vac: 291, fee: "₹850 for Gen/OBC, ₹100 SC/ST/PwD", sal: "₹55,200 starting basic pay (Total ₹1,08,000/mo)", age: "21-30 Years", qual: "Graduation/Post Graduation with minimum 60% marks." },
  { id: "rbi-assistant-2026", name: "RBI Assistant Recruitment", dept: "Reserve Bank of India (RBI)", cat: "Latest Jobs", sub: "Banking", vac: 450, fee: "₹450 for Gen/OBC, ₹50 SC/ST/PwD", sal: "₹20,700 starting basic pay plus allowances", age: "20-28 Years", qual: "Graduation in any stream with minimum 50% marks." },
  { id: "up-police-constable-2026", name: "UP Police Constable", dept: "Uttar Pradesh Police Recruitment Board (UPPRPB)", cat: "Result", sub: "State Wise", vac: 60244, fee: "₹400 for all candidates", sal: "Pay Matrix Level 3 (₹21,700 basic pay)", age: "18-25 Years", qual: "12th Class Pass from recognized board." },
  { id: "bihar-police-constable-2026", name: "Bihar Police Constable", dept: "Central Selection Board of Constables (CSBC) Bihar", cat: "Latest Jobs", sub: "State Wise", vac: 21391, fee: "₹675 for Gen/OBC, ₹180 SC/ST", sal: "Level 3 Pay Matrix (₹21,700 - ₹69,100)", age: "18-25 Years", qual: "12th Class Pass." },
  { id: "delhi-police-si-2026", name: "Delhi Police Sub-Inspector SSC CPO", dept: "Staff Selection Commission (SSC)", cat: "Latest Jobs", sub: "SSC", vac: 4187, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 6 Pay Scale (₹35,400 - ₹1,12,400)", age: "20-25 Years", qual: "Graduation in any stream (Driving License for Delhi SI)." },
  { id: "upsc-ies-iss-2026", name: "UPSC Indian Economic / Statistical Service", dept: "Union Public Service Commission (UPSC)", cat: "Latest Jobs", sub: "UPSC", vac: 48, fee: "₹200 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 10 Pay Matrix (₹56,100 basic pay)", age: "21-30 Years", qual: "Post Graduation in Economics / Statistics." },
  { id: "ssc-mts-2026", name: "SSC Multi-Tasking Staff", dept: "Staff Selection Commission (SSC)", cat: "Latest Jobs", sub: "SSC", vac: 8326, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 1 Pay Matrix (₹18,000 basic pay plus perks)", age: "18-25/27 Years", qual: "10th Class Pass." },
  { id: "ssc-cpo-2026", name: "SSC CPO Sub Inspector In CAPFs", dept: "Staff Selection Commission (SSC)", cat: "Answer Key", sub: "SSC", vac: 4187, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 6 Pay Scale (₹35,400 - ₹1,12,400)", age: "20-25 Years", qual: "Graduation in any stream." },
  { id: "ssc-stenographer-2026", name: "SSC Stenographer Grade C & D", dept: "Staff Selection Commission (SSC)", cat: "Latest Jobs", sub: "SSC", vac: 2007, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Grade C: Level 6 (₹35400), Grade D: Level 4 (₹25500)", age: "18-30 Years", qual: "12th Class Pass + Stenography typing skill test." },
  { id: "lic-assistant-2026", name: "LIC Assistant 8000+ Vacancy", dept: "Life Insurance Corporation of India (LIC)", cat: "Latest Jobs", sub: "Banking", vac: 8500, fee: "₹510 for Gen/OBC, ₹85 SC/ST/PwD", sal: "₹14,435 basic pay scale (Gross ₹35,000/mo)", age: "18-30 Years", qual: "Graduation in any stream." },
  { id: "ibps-rrb-po-2026", name: "IBPS RRB Officers Scale I PO", dept: "Institute of Banking Personnel Selection (IBPS)", cat: "Latest Jobs", sub: "Banking", vac: 3583, fee: "₹850 for Gen/OBC, ₹175 SC/ST/PwD", sal: "Starting basic pay ₹36,000 (Gross ₹54,000/mo)", age: "18-30 Years", qual: "Graduation in any stream (Local language preferred)." },
  { id: "ibps-rrb-clerk-2026", name: "IBPS RRB Office Assistant Clerk", dept: "Institute of Banking Personnel Selection (IBPS)", cat: "Latest Jobs", sub: "Banking", vac: 5585, fee: "₹850 for Gen/OBC, ₹175 SC/ST/PwD", sal: "Starting basic pay ₹19,900 (Gross ₹31,000/mo)", age: "18-28 Years", qual: "Graduation in any stream." },
  { id: "indian-airforce-agniveer-2026", name: "Airforce Agniveer Vayu Intake 01/2027", dept: "Indian Air Force (IAF)", cat: "Latest Jobs", sub: "Central", vac: 3500, fee: "₹250 for all candidates", sal: "₹30,000 per month starting + Seva Nidhi Package", age: "17.5 - 21 Years", qual: "12th Pass with Math, Physics, English OR 3Yr Engg Diploma." },
  { id: "indian-navy-agniveer-ssr-2026", name: "Navy Agniveer SSR 01/2027", dept: "Indian Navy", cat: "Latest Jobs", sub: "Central", vac: 2800, fee: "₹550 for all candidates + GST", sal: "₹30,000 per month starting + Seva Nidhi Package", age: "17.5 - 21 Years", qual: "12th Pass with Maths, Physics & Chemistry/Bio/CS." },
  { id: "indian-navy-agniveer-mr-2026", name: "Navy Agniveer MR 01/2027", dept: "Indian Navy", cat: "Latest Jobs", sub: "Central", vac: 300, fee: "₹550 for all candidates + GST", sal: "₹30,000 per month starting + Seva Nidhi Package", age: "17.5 - 21 Years", qual: "10th Class Pass from recognized board." },
  { id: "indian-army-agniveer-gd-2026", name: "Indian Army Agniveer GD Rally", dept: "Indian Army", cat: "Latest Jobs", sub: "Central", vac: 25000, fee: "₹250 for all candidates", sal: "₹30,000 per month starting + Seva Nidhi Package", age: "17.5 - 21 Years", qual: "10th Pass with 45% aggregate marks." },
  { id: "up-police-si-2026", name: "UP Police Sub Inspector SI", dept: "Uttar Pradesh Police Recruitment Board (UPPRPB)", cat: "Latest Jobs", sub: "State Wise", vac: 3269, fee: "₹400 for all candidates", sal: "Pay Matrix Level 6 (₹35,400 - ₹1,12,400)", age: "21-28 Years", qual: "Graduation in any stream (Fire Officer requires Science)." },
  { id: "up-super-tet-2026", name: "Uttar Pradesh Primary Teacher Super TET", dept: "Basic Education Board Uttar Pradesh", cat: "Latest Jobs", sub: "State Wise", vac: 17000, fee: "₹600 for Gen/OBC, ₹400 SC/ST", sal: "₹35,400 starting basic pay (Total ₹52,000/mo)", age: "21-40 Years", qual: "Graduation + D.El.Ed/B.Ed + UPTET/CTET qualified." },
  { id: "uptet-primary-junior-2026", name: "Uttar Pradesh Teacher Eligibility Test UPTET", dept: "Basic Education Board Uttar Pradesh", cat: "Syllabus", sub: "State Wise", vac: 0, fee: "₹600 for Single Paper, ₹1200 for Both", sal: "Eligibility Certificate for teacher hiring", age: "No age limit", qual: "Graduation + D.El.Ed / B.Ed." },
  { id: "uppsc-pcs-pre-2026", name: "UPPSC Combined State Upper Subordinate PCS", dept: "Uttar Pradesh Public Service Commission (UPPSC)", cat: "Latest Jobs", sub: "State Wise", vac: 268, fee: "₹125 for Gen/OBC, ₹65 SC/ST", sal: "Level 10 Pay Scale (₹56,100 starting basic pay)", age: "21-40 Years", qual: "Graduation in any stream from recognized University." },
  { id: "bpsc-71st-cce-2026", name: "BPSC 71st Combined Competitive Prelims", dept: "Bihar Public Service Commission (BPSC)", cat: "Latest Jobs", sub: "State Wise", vac: 502, fee: "₹600 for Gen/OBC, ₹150 SC/ST/Female of Bihar", sal: "Level 7 & Level 9 Pay Scales (₹47,600 basic pay)", age: "20-37 Years", qual: "Graduation in any stream." },
  { id: "bihar-si-daroga-2026", name: "Bihar Police Sub Inspector SI Daroga", dept: "Bihar Police Subordinate Services Commission (BPSSC)", cat: "Latest Jobs", sub: "State Wise", vac: 1275, fee: "₹700 for Gen/OBC, ₹400 SC/ST/Females", sal: "Level 6 Pay Scale (₹35,400 basic pay)", age: "20-37 Years (Males), 20-40 (Females)", qual: "Graduation in any stream." },
  { id: "bihar-bssc-inter-level-2026", name: "Bihar BSSC Second Inter Level Exam", dept: "Bihar Staff Selection Commission (BSSC)", cat: "Admit Card", sub: "State Wise", vac: 12199, fee: "₹540 for Gen/OBC, ₹135 SC/ST of Bihar", sal: "Pay Level 2 to Level 4 (₹19,900 - ₹81,100)", age: "18-37 Years (General Male), 40 (Female)", qual: "Intermediate (10+2) pass from recognized board." },
  { id: "mppsc-state-service-2026", name: "MPPSC State Service Exam Prelims", dept: "Madhya Pradesh Public Service Commission (MPPSC)", cat: "Latest Jobs", sub: "State Wise", vac: 110, fee: "₹500 for Outstate, ₹250 for MP Reserves", sal: "Level 10 Pay scale starting at ₹56,100", age: "21-40 Years (33 for uniform posts)", qual: "Graduation in any stream." },
  { id: "mp-police-constable-2026", name: "MP Police Constable Recruitment", dept: "Madhya Pradesh Employees Selection Board (MPESB)", cat: "Result", sub: "State Wise", vac: 7411, fee: "₹500 for Gen/OBC, ₹250 SC/ST of MP", sal: "Pay Matrix Band-1 (₹19,500 - ₹62,000)", age: "18-36 Years", qual: "10th Class Pass (8th for ST candidates)." },
  { id: "rajasthan-police-constable-2026", name: "Rajasthan Police Constable GD", dept: "Rajasthan Police Department", cat: "Latest Jobs", sub: "State Wise", vac: 3578, fee: "₹600 for Gen/OBC, ₹400 SC/ST/EWS", sal: "L-5 Pay Scale starting basic pay ₹20,800/mo", age: "18-23 Years", qual: "12th Class Pass (10th pass for RAC/MBC battalion)." },
  { id: "reet-primary-junior-2026", name: "Rajasthan Teacher Eligibility REET", dept: "Board of Secondary Education Rajasthan (BSER)", cat: "Syllabus", sub: "State Wise", vac: 0, fee: "₹550 for Single Paper, ₹750 for Both", sal: "Eligibility Certificate for teacher hiring", age: "No age limit", qual: "Graduation + D.El.Ed / B.Ed." },
  { id: "rajasthan-ras-rts-2026", name: "Rajasthan RAS RTS Combined Competitive Exam", dept: "Rajasthan Public Service Commission (RPSC)", cat: "Latest Jobs", sub: "State Wise", vac: 905, fee: "₹600 for Gen/OBC, ₹400 SC/ST of Rajasthan", sal: "Starting basic pay ₹56,100 plus allowances", age: "21-40 Years", qual: "Graduation in any stream." },
  { id: "ukpsc-state-pcs-2026", name: "Uttarakhand UKPSC Upper State PCS", dept: "Uttarakhand Public Service Commission (UKPSC)", cat: "Latest Jobs", sub: "State Wise", vac: 189, fee: "₹172.30 for Gen/OBC, ₹82.30 SC/ST", sal: "Level 10 starting at ₹56,100 basic pay", age: "21-42 Years", qual: "Graduation in any stream." },
  { id: "hssc-cet-group-c-d-2026", name: "Haryana HSSC CET Group C & D", dept: "Haryana Staff Selection Commission (HSSC)", cat: "Latest Jobs", sub: "State Wise", vac: 15000, fee: "₹500 for Gen/OBC, ₹250 reserves", sal: "Level 2 to Level 6 based on exact post", age: "18-42 Years", qual: "10th or 12th Class Pass." },
  { id: "india-post-gds-2026", name: "India Post Gramin Dak Sevak GDS", dept: "India Post", cat: "Latest Jobs", sub: "Central", vac: 44228, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "TRCA of ₹10,000 to ₹14,500/month", age: "18-40 Years", qual: "10th Pass with localized language knowledge." },
  { id: "fci-assistant-grade-3-2026", name: "Food Corporation of India FCI Category III", dept: "Food Corporation of India (FCI)", cat: "Latest Jobs", sub: "Central", vac: 5043, fee: "₹500 for Gen/OBC, ₹0 SC/ST/Female/PwD", sal: "₹28,200 starting basic pay scale", age: "18-28 Years", qual: "Graduation + Computer typing skills." },
  { id: "isro-assistant-udc-2026", name: "ISRO Assistant, Junior Personal Assistant", dept: "Indian Space Research Organisation (ISRO)", cat: "Latest Jobs", sub: "Central", vac: 526, fee: "₹100 for all candidates", sal: "Level 4 Pay Matrix (₹25,500 basic pay)", age: "18-28 Years", qual: "Graduation with 60% marks + computer typing." },
  { id: "drdo-ceptam-11-2026", name: "DRDO CEPTAM 11 Technical & Administrative", dept: "Defence Research and Development Organisation", cat: "Latest Jobs", sub: "Central", vac: 1817, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female/PwD", sal: "Level 2 to Level 6 depending on specific post", age: "18-28 Years", qual: "10th Pass + ITI, or Diploma/Degree in Science." },
  { id: "epfo-ssa-2026", name: "EPFO Social Security Assistant", dept: "Employees' Provident Fund Organisation (EPFO)", cat: "Latest Jobs", sub: "Central", vac: 2677, fee: "₹700 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 5 Pay Matrix (₹29,200 basic pay)", age: "18-27 Years", qual: "Graduation in any stream + English typing skill." }
];

// Helper to format dates to text
const defaultDates = {
  "Apply Start": "11/06/2026",
  "Last Date to Apply": "15/07/2026",
  "Last Date Pay Fee": "16/07/2026",
  "Exam Date Paper 1": "September-October 2026",
  "Exam Date Paper 2": "To be notified later"
};

// Expand remaining exams list into full exam schemas
remainingExams.forEach(rem => {
  const customDates = {
    "Apply Start": defaultDates["Apply Start"],
    "Last Date to Apply": defaultDates["Last Date to Apply"],
    "Last Date Pay Fee": defaultDates["Last Date Pay Fee"],
    "Exam Date": "October-December 2026"
  };

  const cleanRem = {
    id: rem.id,
    title: `${rem.dept} ${rem.name} 2026 Online Application Form`,
    shortTitle: rem.name,
    department: rem.dept,
    postDate: "2026-06-11",
    lastDate: "2026-07-15",
    totalVacancies: rem.vac,
    category: rem.cat,
    subCategory: rem.sub,
    state: rem.sub === "State Wise" ? "State Region" : "All India",
    isTrending: rem.vac > 5000,
    basicSalary: rem.sal,
    fee: { "Application Fee": rem.fee, "Payment Mode": "Online credit/debit card, netbanking, UPI" },
    importantDates: customDates,
    ageLimit: { "Age Limit": rem.age, "Age Relaxation": "Standard government relaxations (OBC 3 years, SC/ST 5 years)" },
    qualification: rem.qual,
    examPattern: `The selection examination comprises:
1. Written Examination (Objective MCQ style) testing GK, Quantitative Aptitude, Reasoning, and Language.
2. Skill Test / Physical Test (where applicable based on department norms).
3. Document Verification and Final Merit Evaluation.`,
    syllabus: `The standard syllabus is outlined as follows:
- Quantitative Aptitude: Ratios, averages, percentages, data interpretation.
- General Intelligence & Reasoning: Analogies, series, blood relations, puzzles.
- General Awareness: Current affairs, History, Constitution, Science, Geography.
- Language Skill: Basic grammar, reading comprehension, vocabulary.`,
    books: [
      "'Quantitative Aptitude for Competitive Examinations' by Dr. R.S. Aggarwal",
      "'A Modern Approach to Verbal & Non-Verbal Reasoning' by R.S. Aggarwal",
      "'General Knowledge' by Lucent Publications",
      "'Objective General English' by S.P. Bakshi"
    ],
    faqs: [
      { q: `What is the educational qualification for ${rem.name}?`, a: rem.qual },
      { q: `What is the salary scale offered for ${rem.name}?`, a: rem.sal },
      { q: `How can I pay the examination fee for ${rem.name}?`, a: "The application fee can be paid online via credit/debit cards, internet banking, or mobile UPI." }
    ]
  };

  exams.push(cleanRem);
});

// Load static HTML compilation template
const template = fs.readFileSync(templatePath, 'utf8');

// Loop through each exam record to generate unique static posts
exams.forEach(job => {
  // 1. Generate unique introduction, instructions, preparation tips, and links based on the category
  let introduction = "";
  let applyInstructions = "";
  let prepTips = "";
  let actionButtons = "";
  const officialWebsite = "https://www.google.com";

  if (job.category === "Admit Card") {
    introduction = `${job.department} has officially declared the Admit Card / Hall Ticket release details for the ${job.shortTitle} 2026. Candidates who have registered successfully for this recruitment exam are advised to download their hall tickets to know their designated test centers, roll numbers, and shift timings. The admit card is a compulsory requirement to enter the examination center premises. Please read below for the direct download links and download instructions.`;

    applyInstructions = `To download your ${job.shortTitle} Examination Admit Card online, please follow these step-by-step instructions:
1. Click on the direct 'Download Admit Card (Server 1)' or 'Server 2' links in our links table below.
2. You will be redirected to the official login portal of ${job.department}.
3. Enter your system-generated Registration Number or Application Roll ID.
4. Input your account password or Date of Birth (in DD-MM-YYYY format).
5. Enter the Captcha verification code exactly as shown on the screen.
6. Click the 'Login/Submit' button to access your candidate dashboard.
7. Locate the 'Download Hall Ticket / Admit Card' link and click to open the PDF.
8. Verify your name spelling, reporting time, and print a clear hardcopy to carry on exam day.`;

    prepTips = `Candidates appearing for the ${job.shortTitle} examination must strictly observe the test day guidelines and carry the following mandatory documents:
- **Mandatory Documents Checklist:**
  * Clean, printed copy of the downloaded Admit Card.
  * Original valid Photo Identification Proof (Aadhaar Card, Passport, Voter ID, Driving License, or PAN Card).
  * Clear photocopy of the same photo identification proof.
  * Two passport size colored photographs identical to the one uploaded in your form.
- **Reporting Protocol:** Candidates should reach the examination center at least 1 hour before the gate closing time. Gate closing times are strictly enforced, and latecomers will not be allowed inside the center under any conditions.
- **Prohibited Items:** Do not carry bags, cellphones, calculators, notebooks, smartwatches, or metallic items inside the exam hall.`;

    actionButtons = `
      <a href="${officialWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Download Admit Card (Server 1)</a>
      <a href="${officialWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Download Admit Card (Server 2)</a>
      <a href="${officialWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Official Website</a>
    `;
  } else if (job.category === "Result") {
    introduction = `${job.department} has officially declared the written examination results and category-wise cut-off scores for ${job.shortTitle} 2026. All candidates who appeared for the screening test can now check their selection status, view sectional scorecards, and download the PDF lists of candidates qualified for the next rounds (such as PET/PST physical tests, main written tests, or interviews). Read below to learn how to access your results and check the cut-off marks.`;

    applyInstructions = `To check your qualifying status and download the ${job.shortTitle} scorecard, follow the sequence below:
1. Click on the 'Download Result PDF (Selected List)' link given in our direct links table below.
2. A PDF document containing roll numbers of qualified candidates will download automatically.
3. Open the PDF and search for your roll number using Ctrl+F (or search tool on mobile).
4. To check individual marks, click on the 'Check Score Card / Marks' link in the table.
5. Log in with your registration credentials (roll number/registration ID and Date of Birth).
6. Your detailed written exam scorecard will be displayed on the screen.
7. Print and save the scorecard for further document verification rounds.`;

    prepTips = `Candidates who have qualified in the written screening test for ${job.shortTitle} must prepare thoroughly for the upcoming stages:
- **Expected Category Wise Cut-Off Ranges:**
  * General (UR): 75 - 80 Marks out of 100
  * OBC Category: 71 - 76 Marks out of 100
  * EWS Category: 70 - 74 Marks out of 100
  * SC / ST Categories: 62 - 68 Marks out of 100
- **Next Stage Preparation Guidelines:**
  * Physical Efficiency Test (PET): Start cardio running and athletic workouts daily according to the official standards (height, weight, chest expansion).
  * Mains/Skill Exams: Review advanced exam patterns, practice speed typing scripts, and review core descriptive subjects.
  * Keep all educational certificates, caste certificates, and identity documents organized in a folder for upcoming document checks.`;

    actionButtons = `
      <a href="${officialWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Download Result PDF (Selected List)</a>
      <a href="${officialWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Download Category Cut-Off Notice</a>
      <a href="${officialWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Check Score Card / Marks</a>
    `;
  } else {
    // Default: Job Application/Syllabus/Answer Key Formats
    introduction = `${job.department} has officially announced the latest recruitment notice for the post of ${job.shortTitle} for the session 2026. This recruitment drive offers an exceptional opportunity for Indian citizens wishing to secure a stable and prestigious career in public service. The notice specifies a total count of ${job.totalVacancies > 0 ? job.totalVacancies : 'several'} active vacancies across various offices and regions. Eligible candidates are invited to submit their online registration applications through the official portal before the final deadline of ${formatDate(job.lastDate)}. Please read this comprehensive article to learn all details regarding key exam schedules, category fee distributions, selection steps, syllabi units, age benchmarks, salary benefits, and recommended prep plans before completing your online form.`;

    applyInstructions = `To apply online for the ${job.title}, please follow the official sequence steps below:
1. Visit the official website of the department: ${job.department} or follow our direct links section.
2. Search and click on the specific recruitment banner for "${job.shortTitle} 2026".
3. Click on 'New Registration' and provide your primary email ID, contact phone number, and name details.
4. Log in using the system-generated username and password sent to your active inbox.
5. Fill in the online form completely, detailing your educational qualification metrics, home address, and category.
6. Upload scanned, passport-size photos and signature images in JPEG format matching the official size limits.
7. Review all fields carefully in the application preview panel to identify and resolve any spelling errors.
8. Pay the application fee corresponding to your social category using UPI, debit/credit cards, or netbanking.
9. Click 'Submit' and download the completed confirmation slip. Keep a printed hardcopy for reference during document checking stages.`;

    prepTips = `Succeeding in the highly competitive ${job.shortTitle} examination demands a highly organized, consistent, and strategic preparation routine. Implement the following strategies to gain a competitive edge:
- **Understand the Core Blueprint:** Read the syllabus and exam pattern tables carefully. Highlight subjects with maximum weightage (like Quantitative Aptitude, English, and Reasoning) and focus on them first.
- **Recommended Textbooks:** Refer to standard reference books for quality concepts:
  ${job.books.map(b => `  * ${b}`).join('\n')}
- **Daily Mock Tests:** Dedicate at least 2 hours daily to solving previous year question papers. Analyze your errors weekly to trace weak spots.
- **Mock Test Frequency:** Take 2 full-length mock tests per week under strict timer limits to build speed and accuracy.
- **Time Management:** Devote 4-5 hours daily to subject revision, maintaining a balanced ratio between quantitative practice and reading general awareness updates.
- **Maintain a Positive Mindset:** Keep revision notes handy and prioritize regular rest to prevent mental fatigue during final exam days.`;

    actionButtons = `
      <a href="${officialWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Apply Online Link</a>
      <a href="${officialWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Download Official Notification</a>
      <a href="${officialWebsite}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Official Website</a>
    `;
  }

  // 2. Generate important dates list items
  const datesLi = Object.entries(job.importantDates)
    .map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`)
    .join('\n');

  // 3. Generate fee list items
  const feeLi = Object.entries(job.fee)
    .map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`)
    .join('\n');

  // 4. Generate age limit list items
  const ageLi = Object.entries(job.ageLimit)
    .map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`)
    .join('\n');

  // 6. Generate FAQ items
  const faqItems = job.faqs
    .map(faq => `
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
    .join('\n');

  // 7. Generate Outbound Related Jobs Links (for sidebar)
  const relatedList = exams
    .filter(e => e.id !== job.id && (e.subCategory === job.subCategory || e.category === job.category))
    .slice(0, 5)
    .map(rel => `
      <div class="sidebar-item">
        <a href="${rel.id}.html" class="sidebar-link">${rel.shortTitle} Recruitment 2026</a>
        <span class="sidebar-meta">${rel.category} • ${formatDate(rel.postDate)}</span>
      </div>
    `)
    .join('\n');

  // 10. Compile JSON-LD Structured Data Schema (Google Jobs Crawler optimization)
  const jobSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "JobPosting",
        "title": job.title,
        "description": `Official notification details for ${job.title}. Department: ${job.department}. Qualification requirement: ${job.qualification}. Basic salary: ${job.basicSalary}. Check application dates, eligibility, and direct apply link details in the page.`,
        "datePosted": `${job.postDate}T09:00:00+05:30`,
        "validThrough": `${job.lastDate}T23:59:00+05:30`,
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "GovernmentOrganization",
          "name": job.department,
          "sameAs": "https://jobvacanciesalert.com"
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
            "value": 35000,
            "unitText": "MONTH"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jobvacanciesalert.com/index.html" },
          { "@type": "ListItem", "position": 2, "name": job.category, "item": `https://jobvacanciesalert.com/index.html#${job.category.toLowerCase().replace(/\s+/g, '-')}` },
          { "@type": "ListItem", "position": 3, "name": job.shortTitle, "item": `https://jobvacanciesalert.com/jobs/${job.id}.html` }
        ]
      }
    ]
  };

  const schemaHtml = `<script type="application/ld+json">\n${JSON.stringify(jobSchema, null, 2)}\n</script>`;

  // 11. Compile final HTML content
  let outputHtml = template
    .replace(/{{TITLE}}/g, job.title)
    .replace(/{{META_DESCRIPTION}}/g, `Apply Online for ${job.title}. Get total vacancies, age limits, syllabus outline, fees, and guidelines.`)
    .replace(/{{META_KEYWORDS}}/g, `${job.shortTitle}, ${job.department}, govt jobs 2026, sarkari result, eligibility, salary`)
    .replace(/{{JSON_LD_SCHEMA}}/g, schemaHtml)
    .replace(/{{DEPT}}/g, job.department)
    .replace(/{{POST_DATE}}/g, formatDate(job.postDate))
    .replace(/{{LAST_DATE}}/g, formatDate(job.lastDate))
    .replace(/{{VACANCIES}}/g, job.totalVacancies > 0 ? job.totalVacancies.toLocaleString() : 'N/A')
    .replace(/{{INTRODUCTION}}/g, introduction)
    .replace(/{{IMPORTANT_DATES_LI}}/g, datesLi)
    .replace(/{{APPLICATION_FEE_LI}}/g, feeLi)
    .replace(/{{AGE_LIMIT_LI}}/g, ageLi)
    .replace(/{{ELIGIBILITY_DETAILS}}/g, job.qualification)
    .replace(/{{SELECTION_PROCESS_STEPS}}/g, job.examPattern)
    .replace(/{{EXAM_PATTERN_DETAILS}}/g, job.examPattern)
    .replace(/{{SALARY_BENEFITS_DETAILS}}/g, job.basicSalary)
    .replace(/{{SYLLABUS_OUTLINE}}/g, job.syllabus)
    .replace(/{{APPLY_INSTRUCTIONS}}/g, applyInstructions)
    .replace(/{{PREPARATION_TIPS}}/g, prepTips)
    .replace(/{{ACTION_LINKS_BUTTONS}}/g, actionButtons)
    .replace(/{{FAQ_ACCORDION_ITEMS}}/g, faqItems)
    .replace(/{{RELATED_VACANCIES_LIST}}/g, relatedList);

  // Write static HTML post file to /jobs/ directory
  fs.writeFileSync(path.join(jobsDir, `${job.id}.html`), outputHtml, 'utf8');
});

console.log(`Successfully generated 50 static HTML postings inside jobs/ directory.`);

// 12. Regenerate assets/js/data.js with simplified index summaries
const announcementsList = [
  "🔥 SSC CGL 2026 Online Form Apply dates extended. Check deadlines!",
  "📢 UPSC Civil Services Preliminary Exam schedule revised. Check details.",
  "🚀 Railway NTPC 2026 11,558 Vacancies Released! Register now.",
  "👉 SBI PO 2026 Online Application Form Released. View salary scales.",
  "⚡ SBI Clerk 8,283 Vacancies announced. Apply online directly.",
  "✅ UP Police Constable written test results declared. PET schedules out."
];

const simplifiedItems = exams.map(job => ({
  id: job.id,
  title: job.title,
  shortTitle: job.shortTitle,
  department: job.department,
  postDate: job.postDate,
  lastDate: job.lastDate,
  totalVacancies: job.totalVacancies,
  category: job.category,
  subCategory: job.subCategory,
  state: job.state,
  isTrending: job.isTrending
}));

// Yojana database items (preserved)
const yojanaList = [
  {
    id: "pm-kisan-yojana",
    title: "PM Kisan Samman Nidhi Yojana 2026",
    shortDescription: "Get financial benefit of ₹6000 per year directly to bank accounts of landholder farmer families.",
    benefit: "₹6,000 per year in 3 equal installments of ₹2,000 each.",
    eligibility: "Small and marginal farmers holding cultivable land in their names.",
    documents: "Aadhaar Card, Land Registry Papers, Bank Account Passbook.",
    howToApply: "Register at pmkisan.gov.in and complete e-KYC steps.",
    officialLink: "https://pmkisan.gov.in",
    lastUpdate: "June 2026"
  },
  {
    id: "pm-awas-yojana",
    title: "Pradhan Mantri Awas Yojana (PMAY-2026)",
    shortDescription: "Providing affordable housing with basic amenities to urban and rural poor families in India.",
    benefit: "Financial assistance up to ₹1.2 Lakh (Rural) or ₹2.67 Lakh (Urban interest subsidy).",
    eligibility: "Economically Weaker Section (EWS) / LIG families not owning a concrete house.",
    documents: "Identity proof, Address proof, Income certificate.",
    howToApply: "Apply online at pmaymis.gov.in or contact Gram Panchayat secretary.",
    officialLink: "https://pmaymis.gov.in",
    lastUpdate: "May 2026"
  },
  {
    id: "ayushman-bharat-yojana",
    title: "Ayushman Bharat PM Jan Arogya Yojana (PM-JAY)",
    shortDescription: "World's largest government-funded healthcare scheme providing health insurance cover to poor citizens.",
    benefit: "Free health cover up to ₹5,00,000 per family per year for hospitalizations.",
    eligibility: "Families identified in SECC 2011 database.",
    documents: "Aadhaar Card, Ration Card, Ayushman Card.",
    howToApply: "Check eligibility at pmjay.gov.in and visit nearest CSC center.",
    officialLink: "https://pmjay.gov.in",
    lastUpdate: "April 2026"
  },
  {
    id: "lakhpati-didi-scheme",
    title: "Lakhpati Didi Scheme 2026",
    shortDescription: "Empowering rural women self-help group members to earn a sustainable income of at least ₹1 Lakh per year.",
    benefit: "Interest-free loans up to ₹5 Lakh, technical training, and market access.",
    eligibility: "Active members of Self-Help Groups (SHGs).",
    documents: "Aadhaar Card, SHG Certificate, Bank Passbook.",
    howToApply: "Apply offline via local Self Help Group coordinators.",
    officialLink: "https://lakhpatididi.gov.in",
    lastUpdate: "June 2026"
  }
];

const jsOutput = `// Auto-generated Government Jobs Portal database index
const portalData = {
  items: ${JSON.stringify(simplifiedItems, null, 2)},
  yojana: ${JSON.stringify(yojanaList, null, 2)},
  announcements: ${JSON.stringify(announcementsList, null, 2)}
};

if (typeof window !== 'undefined') {
  window.portalData = portalData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portalData;
}
`;

fs.writeFileSync(dataJsPath, jsOutput, 'utf8');
console.log(`Successfully updated assets/js/data.js database file.`);

// 13. Regenerate XML Sitemap (sitemap.xml) for Google SEO crawlers
let xmlOutput = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jobvacanciesalert.com/</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>hourly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jobvacanciesalert.com/index.html</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jobvacanciesalert.com/yojana.html</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jobvacanciesalert.com/about.html</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://jobvacanciesalert.com/contact.html</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://jobvacanciesalert.com/privacy.html</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://jobvacanciesalert.com/disclaimer.html</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://jobvacanciesalert.com/terms.html</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://jobvacanciesalert.com/dmca.html</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://jobvacanciesalert.com/sitemap.html</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
`;

exams.forEach(job => {
  xmlOutput += `  <url>
    <loc>https://jobvacanciesalert.com/jobs/${job.id}.html</loc>
    <lastmod>${job.postDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

xmlOutput += `</urlset>`;
fs.writeFileSync(sitemapXmlPath, xmlOutput, 'utf8');
console.log(`Successfully generated sitemap.xml with 50 job entries.`);

// 14. Helper Date Formatter
function formatDate(dateStr) {
  if (!dateStr || dateStr === "To be notified later") return dateStr;
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
