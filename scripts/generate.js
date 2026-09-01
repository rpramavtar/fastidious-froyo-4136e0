const fs = require('fs');
const path = require('path');

// Target Directories
const jobsDir = path.join(__dirname, '../jobs');
const dataJsPath = path.join(__dirname, '../assets/js/data.js');
const sitemapHtmlPath = path.join(__dirname, '../sitemap.html');
const sitemapXmlPath = path.join(__dirname, '../sitemap.xml');
const rssXmlPath = path.join(__dirname, '../rss.xml');
const templatePath = path.join(__dirname, 'template.html');
const indexPath = path.join(__dirname, '../index.html');
const yojanaHtmlPath = path.join(__dirname, '../yojana.html');

// Ensure jobs directory exists
if (!fs.existsSync(jobsDir)) {
  fs.mkdirSync(jobsDir, { recursive: true });
}

// 50 Exams Metadata Database
const exams = [
  {
    id: "pnb-lbo-2026",
    title: "PNB Local Bank Officer LBO Recruitment 2026 Online Application Form",
    shortTitle: "PNB LBO 2026",
    department: "Punjab National Bank (PNB)",
    postDate: "2026-07-28",
    lastDate: "2026-08-09",
    totalVacancies: 545,
    category: "Latest Jobs",
    subCategory: "Banking",
    state: "All India",
    isTrending: true,
    basicSalary: "Pay Scale ₹36,000 - ₹63,840 plus allowances under bank rules",
    fee: { "General / OBC / EWS": "₹1,000", "SC / ST / Female": "₹0 (Exempted)", "Payment Mode": "Online Debit Card, Credit Card, Netbanking" },
    importantDates: { "Notification Date": "28/07/2026", "Apply Start": "28/07/2026", "Last Date to Apply": "09/08/2026", "Exam Date": "September 2026" },
    ageLimit: { "Minimum Age": "21 Years", "Maximum Age": "30 Years", "Age Cut-off": "As on 01/07/2026", "Age Relaxation": "OBC (3 Years), SC/ST (5 Years)" },
    qualification: "Bachelor's Degree in any discipline from a recognized University. Candidate must have proficiency in local language of the state applied for.",
    examPattern: "1. Online Written Test (Objective MCQ): Section I: Professional Knowledge (50 marks); Section II: Language & Reasoning (50 marks).\n2. Personal Interview (50 marks) for selected candidates.",
    syllabus: "Professional Banking knowledge, General financial awareness, English grammar, analytical reasoning, quantitative aptitude.",
    books: ["'PNB Officer Exam Guide' by Kiran Publications", "'Banking Awareness' by Arihant Publications", "'Objective General English' by S.P. Bakshi"],
    faqs: [
      { q: "How many vacancies are there for PNB LBO 2026?", a: "There are a total of 545 active vacancies." },
      { q: "Is proficiency in local language mandatory?", a: "Yes, candidate must write, read, and speak the local language of the applied state." }
    ]
  },
  {
    id: "isro-scientist-engineer-2026",
    title: "ISRO Scientist / Engineer SD & SC Recruitment 2026 Online Form",
    shortTitle: "ISRO Scientist 2026",
    department: "Indian Space Research Organisation (ISRO)",
    postDate: "2026-07-27",
    lastDate: "2026-08-17",
    totalVacancies: 92,
    category: "Latest Jobs",
    subCategory: "Central",
    state: "All India",
    isTrending: true,
    basicSalary: "Level 10 Pay Matrix (₹56,100 - ₹1,77,500 basic pay plus DA, HRA, and Transport Allowances)",
    fee: { "General / OBC / EWS": "₹750", "SC / ST / PH / Female": "₹0 (Exempted)", "Payment Mode": "Online UPI, Net Banking, Credit/Debit Cards" },
    importantDates: { "Notification Release": "27/07/2026", "Apply Start": "27/07/2026", "Last Date to Apply": "17/08/2026", "Written Exam Date": "October 2026" },
    ageLimit: { "Minimum Age": "18 Years", "Maximum Age": "28-35 Years (Post-wise)", "Age Cut-off": "As on 17/08/2026", "Age Relaxation": "As per ISRO standards" },
    qualification: "B.E / B.Tech or equivalent degree in Electronics, Mechanical, Civil or Computer Science with first class marks (minimum 65% aggregate).",
    examPattern: "1. Written Exam (Part A: Discipline Specific Technical MCQ - 80 Q; Part B: General Aptitude & Science - 20 Q).\n2. Interview: Weightage 50% for candidates scoring minimum qualifying marks.",
    syllabus: "Discipline core subjects (Electronics/Mechanical/CS syllabus), Mathematics, aptitude, reasoning, and space science fundamentals.",
    books: ["'GATE Guide' in respective engineering stream by GK Publications", "'Quantitative Aptitude' by R.S. Aggarwal", "'ISRO Technical Guide' by Kiran Editors"],
    faqs: [
      { q: "What is the minimum qualification percentage for ISRO?", a: "A minimum of 65% aggregate marks or CGPA of 6.84/10 is required in BE/B.Tech." },
      { q: "Are final year students eligible?", a: "Only candidates who have completed their graduation degree before the last date are eligible." }
    ]
  },
  {
    id: "rajasthan-hc-steno-2026",
    title: "Rajasthan High Court RHC Stenographer Grade II Recruitment 2026 Online Form",
    shortTitle: "Rajasthan HC Steno 2026",
    department: "Rajasthan High Court (RHC)",
    postDate: "2026-07-26",
    lastDate: "2026-08-10",
    totalVacancies: 163,
    category: "Latest Jobs",
    subCategory: "State Wise",
    state: "Rajasthan",
    isTrending: true,
    basicSalary: "Pay Matrix Level 10 (₹33,800 - ₹1,06,700 monthly scale with allowances)",
    fee: { "General / OBC": "₹700", "EWS / EBC": "₹550", "SC / ST / PH": "₹450", "Payment Mode": "Online Bank Gateway" },
    importantDates: { "Notification Release": "26/07/2026", "Apply Start": "26/07/2026", "Last Date to Apply": "10/08/2026", "Shorthand Skill Test": "September 2026" },
    ageLimit: { "Minimum Age": "18 Years", "Maximum Age": "40 Years", "Age Cut-off": "As on 01/01/2027", "Age Relaxation": "As per Rajasthan government norms" },
    qualification: "Passed Senior Secondary (12th class) Exam and must possess basic computer course certificate (RSCIT or equivalent O/A level).",
    examPattern: "1. Shorthand Test (80 words per minute dictation in English/Hindi for 6 minutes followed by transcription on computer in 50 minutes).\n2. Speed & Efficiency Test (Computer typing test of 50 marks).",
    syllabus: "Hindi/English Shorthand, computer typing speed rules, basic spreadsheet formatting, word formatting.",
    books: ["'Shorthand Speed Dictation Manual' by Pitman", "'RSCIT Computer Course Guide'", "'Rajasthan General Knowledge' by Kiran Publications"],
    faqs: [
      { q: "What is the typing speed required for RHC Stenographer?", a: "A minimum shorthand speed of 80 words per minute is required to pass the transcription test." },
      { q: "Is any computer certificate mandatory?", a: "Yes, RSCIT, O Level, COPA, or equivalent computer certificates are mandatory." }
    ]
  },
  {
    id: "hal-trainee-2026",
    title: "Hindustan Aeronautics Limited HAL Design & Management Trainee 2026 Online Form",
    shortTitle: "HAL Trainee 2026",
    department: "Hindustan Aeronautics Limited (HAL)",
    postDate: "2026-07-25",
    lastDate: "2026-08-14",
    totalVacancies: 120,
    category: "Latest Jobs",
    subCategory: "Central",
    state: "All India",
    isTrending: true,
    basicSalary: "Basic Pay Scale ₹40,000 - ₹1,40,000 monthly with perks, allowances, and variable pay",
    fee: { "General / OBC / EWS": "₹500", "SC / ST / PwBD": "₹0 (Exempted)", "Payment Mode": "Online Bank Transfer / SBI Challan" },
    importantDates: { "Notification Release": "25/07/2026", "Apply Start": "25/07/2026", "Last Date to Apply": "14/08/2026", "Online Test Date": "September 2026" },
    ageLimit: { "Minimum Age": "18 Years", "Maximum Age": "28 Years", "Age Cut-off": "As on 14/08/2026", "Age Relaxation": "OBC (3 Years), SC/ST (5 Years), PwD (10 Years)" },
    qualification: "Full-time Bachelor's Degree in Engineering / Technology (B.E / B.Tech) in Mechanical, Electrical, Electronics, Production, Computer Science with 65% aggregate marks.",
    examPattern: "1. All India Online Test (Objective 160 Q covering General Awareness, English, Reasoning, and Technical Subject).\n2. Personal Interview (for shortlisted candidates).",
    syllabus: "Core engineering subjects (Mechanical/Electrical/Electronics), General Knowledge, English grammar, analytical reasoning.",
    books: ["'HAL Trainee Exam Guide' by Kiran Publications", "'GATE Test Series' by GK Publications", "'Objective English' by Hari Mohan Prasad"],
    faqs: [
      { q: "What is the selection weightage for HAL?", a: "The online test carries 85% weightage and the personal interview carries 15% weightage." },
      { q: "Can I apply to multiple disciplines?", a: "No, candidates can apply in only one discipline matching their degree." }
    ]
  },
  {
    id: "mpsc-talathi-recruitment-2026",
    title: "MPSC Maharashtra Talathi Bharti 2026 Online Application Form",
    shortTitle: "MPSC Talathi 2026",
    department: "Maharashtra Public Service Commission (MPSC)",
    postDate: "2026-07-24",
    lastDate: "2026-08-05",
    totalVacancies: 1539,
    category: "Latest Jobs",
    subCategory: "State Wise",
    state: "Maharashtra",
    isTrending: true,
    basicSalary: "Pay Matrix Scale S-8 (₹25,500 - ₹81,100 monthly with local benefits and allowances)",
    fee: { "Open Category": "₹1,000", "Reserved Categories": "₹900", "Payment Mode": "Online Netbanking, Card Payments, UPI" },
    importantDates: { "Notification Date": "24/07/2026", "Apply Start": "24/07/2026", "Last Date to Apply": "05/08/2026", "Written Test Date": "October 2026" },
    ageLimit: { "Minimum Age": "18 Years", "Maximum Age": "38-43 Years (Category-wise)", "Age Cut-off": "As on 01/07/2026", "Age Relaxation": "Reserved category benefits as per rules" },
    qualification: "Graduate Degree in any discipline from a recognized University. Candidate must have fluent knowledge of Marathi language.",
    examPattern: "1. Computer Based Test (CBT): 100 Q (200 marks) testing Marathi, English, General Knowledge, and Intelligence Quotient.",
    syllabus: "Marathi Grammar, vocabulary. English Grammar, vocabulary. Maharashtra History, Geography, general science, math and reasoning.",
    books: ["'MPSC Talathi Bharti Margdarshak' by Balasaheb Shinde", "'Marathi Vyakaran' by M.R. Walimbe", "'Maharashtra General Knowledge' by Chinar Publications"],
    faqs: [
      { q: "Is knowledge of Marathi language mandatory?", a: "Yes, candidates must be able to read, write, and speak Marathi fluently." },
      { q: "What is the total marks of the exam?", a: "The exam is for 200 marks, consisting of 100 objective type questions." }
    ]
  },
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
  { id: "epfo-ssa-2026", name: "EPFO Social Security Assistant", dept: "Employees' Provident Fund Organisation (EPFO)", cat: "Latest Jobs", sub: "Central", vac: 2677, fee: "₹700 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 5 Pay Matrix (₹29,200 basic pay)", age: "18-27 Years", qual: "Graduation in any stream + English typing skill." },
  { id: "jssc-cgl-2026", name: "JSSC CGL Recruitment", dept: "Jharkhand Staff Selection Commission", cat: "Latest Jobs", sub: "State Wise", vac: 2017, fee: "₹100 for Gen, ₹50 SC/ST", sal: "Level 7 (₹44,900 - ₹1,42,400)", age: "21-35 Years", qual: "Graduation in any stream." },
  { id: "hpsc-hcs-2026", name: "Haryana Civil Services HCS", dept: "Haryana Public Service Commission (HPSC)", cat: "Latest Jobs", sub: "State Wise", vac: 121, fee: "₹1000 for Gen Male, ₹250 others", sal: "Level 10 (₹56,100 starting basic pay)", age: "18-42 Years", qual: "Graduation in any stream." },
  { id: "gpsc-class12-2026", name: "GPSC Class 1 & 2 Exam", dept: "Gujarat Public Service Commission", cat: "Latest Jobs", sub: "State Wise", vac: 293, fee: "₹100 for Gen, ₹0 Reserves", sal: "Pay Matrix Level 9 / 10", age: "20-35 Years", qual: "Graduation in any stream." },
  { id: "mpsc-rajyaseva-2026", name: "Maharashtra Rajyaseva Civil Services", dept: "Maharashtra Public Service Commission (MPSC)", cat: "Latest Jobs", sub: "State Wise", vac: 524, fee: "₹394 for Gen, ₹294 Reserves", sal: "Level 10 Pay scale (₹56,100 basic)", age: "19-38 Years", qual: "Graduation in any stream." },
  { id: "tnpsc-group1-2026", name: "TNPSC Group 1 Civil Services", dept: "Tamil Nadu Public Service Commission", cat: "Latest Jobs", sub: "State Wise", vac: 90, fee: "₹150 Registration, ₹200 Prelims", sal: "Level 22 Pay scale (₹56,100 - ₹1,77,500)", age: "21-34 Years", qual: "Graduation in any stream." },
  { id: "kpsc-kas-2026", name: "Karnataka KAS Civil Services", dept: "Karnataka Public Service Commission", cat: "Latest Jobs", sub: "State Wise", vac: 384, fee: "₹600 for Gen, ₹300 OBC, ₹0 SC/ST", sal: "Group A (₹28,100 - ₹50,100 starting basic)", age: "21-35 Years", qual: "Graduation in any stream." },
  { id: "appsc-group1-2026", name: "APPSC Group 1 Services", dept: "Andhra Pradesh Public Service Commission", cat: "Latest Jobs", sub: "State Wise", vac: 110, fee: "₹250 Processing, ₹120 Exam fee", sal: "Starting basic pay ₹56,100 plus allowances", age: "18-42 Years", qual: "Graduation in any stream." },
  { id: "tspsc-group1-2026", name: "TSPSC Group 1 Services", dept: "Telangana State Public Service Commission", cat: "Latest Jobs", sub: "State Wise", vac: 563, fee: "₹200 online app fee, ₹120 exam fee", sal: "Starting basic pay ₹58,850/month", age: "18-44 Years", qual: "Graduation in any stream." },
  { id: "opsc-ocs-2026", name: "Odisha OCS Civil Services", dept: "Odisha Public Service Commission (OPSC)", cat: "Latest Jobs", sub: "State Wise", vac: 399, fee: "₹0 for all candidates", sal: "Level 10/12 Pay matrix", age: "21-38 Years", qual: "Graduation in any stream." },
  { id: "wbcse-pre-2026", name: "West Bengal Civil Services Exam WBCS", dept: "West Bengal PSC", cat: "Latest Jobs", sub: "State Wise", vac: 250, fee: "₹210 for Gen, ₹0 SC/ST of WB", sal: "Group A starting basic pay ₹56,100", age: "21-36 Years", qual: "Graduation + Ability to read/write Bengali." },
  { id: "fci-manager-2026", name: "Food Corporation of India FCI Manager", dept: "Food Corporation of India (FCI)", cat: "Latest Jobs", sub: "Central", vac: 113, fee: "₹800 for Gen, ₹0 SC/ST/Female", sal: "₹40,000 - ₹1,40,000 starting basic pay", age: "18-28/35 Years", qual: "Graduation with 60% or MBA/CA." },
  { id: "isro-scientist-2026", name: "ISRO Scientist Engineer SC", dept: "Indian Space Research Organisation (ISRO)", cat: "Latest Jobs", sub: "Central", vac: 324, fee: "₹250 for all candidates", sal: "Level 10 Pay Matrix (₹56,100 starting basic pay)", age: "18-28 Years", qual: "B.E/B.Tech in Engg with minimum 65% aggregate." },
  { id: "epfo-eo-ao-2026", name: "EPFO Enforcement Officer EO AO", dept: "Union Public Service Commission (UPSC)", cat: "Latest Jobs", sub: "UPSC", vac: 418, fee: "₹25 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 8 Pay Matrix (₹47,600 basic pay)", age: "Maximum 30 Years", qual: "Graduation in any stream." },
  { id: "lic-ado-2026", name: "LIC Apprentice Development Officer ADO", dept: "Life Insurance Corporation of India (LIC)", cat: "Latest Jobs", sub: "Banking", vac: 9394, fee: "₹750 for Gen/OBC, ₹100 SC/ST", sal: "Stipend of ₹51,500/month during training", age: "21-30 Years", qual: "Graduation in any stream." },
  { id: "niacl-ao-2026", name: "NIACL Administrative Officer AO", dept: "New India Assurance", cat: "Latest Jobs", sub: "Banking", vac: 450, fee: "₹850 for Gen/OBC, ₹100 SC/ST/PwD", sal: "Starting basic pay ₹50,925 (Gross ₹80,000/mo)", age: "21-30 Years", qual: "Graduation/Post Graduation with 60% marks." },
  { id: "uiic-ao-2026", name: "UIIC Administrative Officer AO", dept: "United India Insurance", cat: "Latest Jobs", sub: "Banking", vac: 250, fee: "₹1000 for Gen/OBC, ₹250 SC/ST", sal: "Gross salary approx ₹88,000 per month", age: "21-30 Years", qual: "Graduation with 60% marks." },
  { id: "nicl-ao-2026", name: "NICL Administrative Officer AO", dept: "National Insurance Company", cat: "Latest Jobs", sub: "Banking", vac: 274, fee: "₹1000 for Gen/OBC, ₹250 SC/ST/PwD", sal: "Starting basic pay ₹50,925 (Total ₹85,000/mo)", age: "21-30 Years", qual: "Graduation/Post Graduation with 60% marks." },
  { id: "oicl-ao-2026", name: "OICL Administrative Officer AO", dept: "Oriental Insurance Company", cat: "Latest Jobs", sub: "Banking", vac: 100, fee: "₹1000 for Gen/OBC, ₹250 SC/ST", sal: "Gross salary approx ₹85,000 per month", age: "21-30 Years", qual: "Graduation with 60% marks." },
  { id: "nabard-grade-a-2026", name: "NABARD Assistant Manager Grade A", dept: "NABARD", cat: "Latest Jobs", sub: "Banking", vac: 150, fee: "₹800 for Gen/OBC, ₹150 SC/ST/PwD", sal: "Gross salary approx ₹84,000 per month", age: "21-30 Years", qual: "Graduation with 60% marks in relevant stream." },
  { id: "sidbi-grade-a-2026", name: "SIDBI Assistant Manager Grade A", dept: "SIDBI", cat: "Latest Jobs", sub: "Banking", vac: 120, fee: "₹1100 for Gen/OBC, ₹175 SC/ST/PwD", sal: "Gross salary approx ₹90,000 per month", age: "21-28 Years", qual: "Graduation in Law/Engineering or Post Graduation." },
  { id: "dmrc-je-2026", name: "DMRC Junior Engineer", dept: "Delhi Metro Rail Corporation", cat: "Latest Jobs", sub: "Central", vac: 150, fee: "₹500 for Gen/OBC, ₹250 SC/ST/Female", sal: "₹37,000 - ₹1,15,000 starting pay scale", age: "18-28 Years", qual: "3 Years Diploma in Engineering in relevant stream." },
  { id: "upmetro-je-2026", name: "UP Metro LMRC Junior Engineer JE", dept: "UPMRC", cat: "Latest Jobs", sub: "State Wise", vac: 132, fee: "₹590 for Gen/OBC, ₹236 SC/ST of UP", sal: "₹33,000 - ₹67,300 starting basic pay scale", age: "21-28 Years", qual: "3 Years Diploma in Civil/Electrical/Electronics." },
  { id: "rrb-sse-2026", name: "Railway RRB Senior Section Engineer SSE", dept: "RRB", cat: "Latest Jobs", sub: "Railway", vac: 1250, fee: "₹500 for Gen/OBC, ₹250 SC/ST/Female", sal: "Level 7 Pay scale starting basic ₹44,900/mo", age: "20-34 Years", qual: "B.E/B.Tech degree in engineering in relevant branch." },
  { id: "rrb-rpf-si-2026", name: "RPF Sub Inspector SI Recruitment", dept: "Railway Recruitment Boards", cat: "Latest Jobs", sub: "Railway", vac: 452, fee: "₹500 for Gen/OBC, ₹250 SC/ST/Female", sal: "Pay Level 6 starting basic ₹35,400 plus perks", age: "20-28 Years", qual: "Graduation in any stream." },
  { id: "rrb-rpf-constable-2026", name: "RPF Constable Recruitment 2026", dept: "Railway Recruitment Boards", cat: "Latest Jobs", sub: "Railway", vac: 4208, fee: "₹500 for Gen/OBC, ₹250 SC/ST/Female", sal: "Pay Level 3 starting basic ₹21,700 plus perks", age: "18-28 Years", qual: "10th Class Pass." },
  { id: "idbi-executive-2026", name: "IDBI Bank Executive Contractual", dept: "IDBI Bank", cat: "Latest Jobs", sub: "Banking", vac: 1300, fee: "₹1000 for Gen/OBC, ₹200 SC/ST/PwD", sal: "₹29,000/mo for 1st Year, ₹31,000/mo for 2nd Year", age: "20-25 Years", qual: "Graduation in any stream." },
  { id: "idbi-am-2026", name: "IDBI Bank Assistant Manager Grade A", dept: "IDBI Bank", cat: "Latest Jobs", sub: "Banking", vac: 600, fee: "₹1000 for Gen/OBC, ₹200 SC/ST/PwD", sal: "Starting basic pay ₹36,000 (Gross ₹60,000/mo)", age: "21-30 Years", qual: "Graduation in any stream + PGDBF Course." },
  { id: "nhb-am-2026", name: "National Housing Bank Assistant Manager", dept: "NHB", cat: "Latest Jobs", sub: "Banking", vac: 43, fee: "₹850 for Gen/OBC, ₹175 SC/ST/PwD", sal: "Starting basic pay Scale I (Total ₹75,000/mo)", age: "21-30 Years", qual: "Graduation with 60% marks in any stream." },
  { id: "eximbank-mt-2026", name: "EXIM Bank Management Trainee MT", dept: "India EXIM Bank", cat: "Latest Jobs", sub: "Banking", vac: 45, fee: "₹600 for Gen/OBC, ₹100 SC/ST/Females", sal: "Stipend of ₹55,000/month during training", age: "21-25 Years", qual: "MBA/PGDBA or Chartered Accountant." },
  { id: "ecgc-po-2026", name: "ECGC PO Probationary Officers", dept: "Export Credit Guarantee Corporation", cat: "Latest Jobs", sub: "Banking", vac: 75, fee: "₹850 for Gen/OBC, ₹175 SC/ST/PwD", sal: "Gross salary approx ₹1,02,000 per month", age: "21-30 Years", qual: "Graduation in any stream." },
  { id: "cisf-hc-2026", name: "CISF Head Constable Ministerial", dept: "Central Industrial Security Force", cat: "Latest Jobs", sub: "Central", vac: 418, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 4 Pay Matrix (₹25,500 - ₹81,100)", age: "18-25 Years", qual: "12th Class Pass + computer typing skill test." },
  { id: "cisf-constable-gd-2026", name: "CISF Constable GD Recruitment", dept: "Central Industrial Security Force", cat: "Latest Jobs", sub: "Central", vac: 11025, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Pay Level 3 (₹21,700 - ₹69,100)", age: "18-23 Years", qual: "10th Class Pass." },
  { id: "bsf-si-2026", name: "BSF Sub Inspector SI Recruitment", dept: "Border Security Force", cat: "Latest Jobs", sub: "Central", vac: 120, fee: "₹200 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 6 Pay scale starting basic ₹35,400/mo", age: "20-25 Years", qual: "Graduation in any stream." },
  { id: "bsf-constable-2026", name: "BSF Constable GD Recruitment", dept: "Border Security Force", cat: "Latest Jobs", sub: "Central", vac: 6174, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Pay Level 3 (₹21,700 - ₹69,100)", age: "18-23 Years", qual: "10th Class Pass." },
  { id: "crpf-si-2026", name: "CRPF Sub Inspector SI Recruitment", dept: "Central Reserve Police Force", cat: "Latest Jobs", sub: "Central", vac: 156, fee: "₹200 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 6 Pay Matrix (₹35,400 - ₹1,12,400)", age: "20-25 Years", qual: "Graduation in any stream." },
  { id: "crpf-constable-gd-2026", name: "CRPF Constable GD Recruitment", dept: "Central Reserve Police Force", cat: "Latest Jobs", sub: "Central", vac: 16927, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Pay Level 3 (₹21,700 - ₹69,100)", age: "18-23 Years", qual: "10th Class Pass." },
  { id: "itbp-si-2026", name: "ITBP Sub Inspector SI", dept: "Indo-Tibetan Border Police", cat: "Latest Jobs", sub: "Central", vac: 85, fee: "₹200 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 6 Pay scale starting basic ₹35,400/mo", age: "20-25 Years", qual: "Graduation in any stream." },
  { id: "itbp-constable-2026", name: "ITBP Constable GD Recruitment", dept: "Indo-Tibetan Border Police", cat: "Latest Jobs", sub: "Central", vac: 5410, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Pay Level 3 (₹21,700 - ₹69,100)", age: "18-23 Years", qual: "10th Class Pass." },
  { id: "ssb-si-2026", name: "SSB Sub Inspector SI Recruitment", dept: "Sashastra Seema Bal", cat: "Latest Jobs", sub: "Central", vac: 111, fee: "₹200 for Gen/OBC, ₹0 SC/ST/Female", sal: "Level 6 Pay scale starting basic ₹35,400/mo", age: "20-25 Years", qual: "Graduation in any stream." },
  { id: "ssb-constable-gd-2026", name: "SSB Constable GD Recruitment", dept: "Sashastra Seema Bal", cat: "Latest Jobs", sub: "Central", vac: 1928, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Pay Level 3 (₹21,700 - ₹69,100)", age: "18-23 Years", qual: "10th Class Pass." },
  { id: "rrb-paramedical-2026", name: "Railway RRB Paramedical Staff", dept: "Railway Recruitment Boards", cat: "Admit Card", sub: "Railway", vac: 1376, fee: "₹500 for Gen, ₹250 reserves", sal: "Level 4 to 7 Pay Matrix starting pay scale", age: "18-40 Years", qual: "Degree/Diploma in relevant paramedical field." },
  { id: "dsssb-tgt-pgt-2026", name: "DSSSB TGT PGT Teacher Recruitment", dept: "Delhi Subordinate Services Selection Board", cat: "Admit Card", sub: "State Wise", vac: 4762, fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female", sal: "Pay level 8 starting basic pay ₹47,600", age: "Maximum 30 Years (36 for PGT)", qual: "Graduation + B.Ed + CTET (for TGT)." },
  { id: "upsssc-pet-2026", name: "UPSSSC Preliminary Eligibility Test PET", dept: "Uttar Pradesh Subordinate Services Selection Commission", cat: "Result", sub: "State Wise", vac: 0, fee: "₹185 for Gen/OBC, ₹95 SC/ST", sal: "Eligibility Certificate (Valid for Group C recruitments)", age: "18-40 Years", qual: "10th Class Pass from recognized board." },
  { id: "upsssc-vdo-2026", name: "UPSSSC Gram Vikas Adhikari VDO", dept: "Uttar Pradesh Subordinate Services Selection Commission", cat: "Result", sub: "State Wise", vac: 1468, fee: "₹185 for Gen/OBC, ₹95 SC/ST", sal: "Pay level 3 (₹21,700 - ₹69,100 starting basic)", age: "18-40 Years", qual: "12th Class Pass + CCC computer certificate." },
  { id: "mppeb-patwari-2026", name: "MPPEB Patwari & Group 2 Sub Group 4", dept: "MP ESB Board", cat: "Result", sub: "State Wise", vac: 9073, fee: "₹500 for Gen, ₹250 SC/ST of MP", sal: "Pay scale ₹5200 - ₹20200 + Grade Pay ₹2100", age: "18-40 Years", qual: "Graduation in any stream + CPCT card." },
  { id: "rsmssb-patwari-2026", name: "RSMSSB Patwari Recruitment 2026", dept: "Rajasthan Staff Selection Board", cat: "Answer Key", sub: "State Wise", vac: 2998, fee: "₹600 for Gen/OBC, ₹400 SC/ST/Reserves", sal: "L-5 starting basic pay ₹20,800/month", age: "18-40 Years", qual: "Graduation in any stream + computer certificate." },
  { id: "uksssc-grad-2026", name: "UKSSSC Graduate Level VDO/VPDO", dept: "Uttarakhand Subordinate Services", cat: "Answer Key", sub: "State Wise", vac: 829, fee: "₹300 for Gen/OBC, ₹150 SC/ST", sal: "Pay Matrix Level 4/5 (₹25,500 - ₹81,100)", age: "18-42 Years", qual: "Graduation in any stream." },
  { id: "jssc-excise-2026", name: "JSSC Excise Constable JCECE", dept: "Jharkhand Selection Board", cat: "Syllabus", sub: "State Wise", vac: 583, fee: "₹100 for Gen, ₹50 SC/ST of JH", sal: "Pay level 3 (₹21,700 - ₹69,100 starting basic)", age: "18-25 Years", qual: "10th Class Pass." },
  { id: "gseb-tet-2026", name: "Gujarat Teacher Eligibility Test TET", dept: "Gujarat Secondary Education Board", cat: "Syllabus", sub: "State Wise", vac: 0, fee: "₹350 for Gen, ₹250 reserves", sal: "Eligibility Certificate for teacher hiring", age: "No age limit", qual: "Graduation + B.Ed / D.El.Ed." },
  { id: "bihar-cdpo-2026", name: "Bihar BPSC Child Development Officer CDPO", dept: "Bihar Public Service Commission (BPSC)", cat: "Syllabus", sub: "State Wise", vac: 55, fee: "₹600 for Gen, ₹150 Reserves", sal: "Starting basic pay ₹53,100 (Level 9 Pay scale)", age: "21-37 Years (Males), 40 (Females)", qual: "Graduation in any stream." }
];

// Dynamically generate 200 additional realistic exams
const extraStates = [
  { name: "Uttar Pradesh", code: "up", boards: [{ name: "UPSSSC", full: "Uttar Pradesh Subordinate Services Selection Commission" }, { name: "UPPRPB", full: "Uttar Pradesh Police Recruitment Board" }, { name: "UPPSC", full: "Uttar Pradesh Public Service Commission" }] },
  { name: "Bihar", code: "bihar", boards: [{ name: "BSSC", full: "Bihar Staff Selection Commission" }, { name: "BPSSC", full: "Bihar Police Subordinate Services Commission" }, { name: "BPSC", full: "Bihar Public Service Commission" }] },
  { name: "Rajasthan", code: "rajasthan", boards: [{ name: "RSMSSB", full: "Rajasthan Staff Selection Board" }, { name: "RPSC", full: "Rajasthan Public Service Commission" }] },
  { name: "Madhya Pradesh", code: "mp", boards: [{ name: "MPESB", full: "Madhya Pradesh Employees Selection Board" }, { name: "MPPSC", full: "Madhya Pradesh Public Service Commission" }] },
  { name: "Haryana", code: "haryana", boards: [{ name: "HSSC", full: "Haryana Staff Selection Commission" }, { name: "HPSC", full: "Haryana Public Service Commission" }] },
  { name: "West Bengal", code: "wb", boards: [{ name: "WBPSC", full: "West Bengal Public Service Commission" }, { name: "WBPPRB", full: "West Bengal Police Recruitment Board" }] },
  { name: "Maharashtra", code: "maha", boards: [{ name: "MPSC", full: "Maharashtra Public Service Commission" }] },
  { name: "Gujarat", code: "gujarat", boards: [{ name: "GPSC", full: "Gujarat Public Service Commission" }, { name: "GSSSB", full: "Gujarat Subordinate Service Selection Board" }] },
  { name: "Jharkhand", code: "jh", boards: [{ name: "JSSC", full: "Jharkhand Staff Selection Commission" }, { name: "JPSC", full: "Jharkhand Public Service Commission" }] },
  { name: "Uttarakhand", code: "uk", boards: [{ name: "UKSSSC", full: "Uttarakhand Subordinate Services Selection Commission" }, { name: "UKPSC", full: "Uttarakhand Public Service Commission" }] },
  { name: "Odisha", code: "odisha", boards: [{ name: "OSSSC", full: "Odisha Subordinate Staff Selection Commission" }, { name: "OPSC", full: "Odisha Public Service Commission" }] },
  { name: "Chhattisgarh", code: "cg", boards: [{ name: "CGVYAPAM", full: "Chhattisgarh Professional Examination Board" }, { name: "CGPSC", full: "Chhattisgarh Public Service Commission" }] }
];

const extraCentralDepts = [
  { name: "Staff Selection Commission (SSC)", sub: "SSC", prefix: "ssc" },
  { name: "Union Public Service Commission (UPSC)", sub: "UPSC", prefix: "upsc" },
  { name: "Railway Recruitment Boards (RRB)", sub: "Railway", prefix: "rrb" },
  { name: "Institute of Banking Personnel Selection (IBPS)", sub: "Banking", prefix: "ibps" },
  { name: "State Bank of India (SBI)", sub: "Banking", prefix: "sbi" },
  { name: "Reserve Bank of India (RBI)", sub: "Banking", prefix: "rbi" },
  { name: "Food Corporation of India (FCI)", sub: "Central", prefix: "fci" },
  { name: "Indian Space Research Organisation (ISRO)", sub: "Central", prefix: "isro" },
  { name: "Defence Research and Development Organisation (DRDO)", sub: "Central", prefix: "drdo" },
  { name: "Employees' Provident Fund Organisation (EPFO)", sub: "Central", prefix: "epfo" },
  { name: "Life Insurance Corporation of India (LIC)", sub: "Banking", prefix: "lic" },
  { name: "Employees' State Insurance Corporation (ESIC)", sub: "Central", prefix: "esic" },
  { name: "Intelligence Bureau (IB)", sub: "Central", prefix: "ib" },
  { name: "Department of Posts (India Post)", sub: "Central", prefix: "post" },
  { name: "National Bank for Agriculture and Rural Development (NABARD)", sub: "Banking", prefix: "nabard" },
  { name: "Securities and Exchange Board of India (SEBI)", sub: "Banking", prefix: "sebi" },
  { name: "Small Industries Development Bank of India (SIDBI)", sub: "Banking", prefix: "sidbi" },
  { name: "National Highways Authority of India (NHAI)", sub: "Central", prefix: "nhai" },
  { name: "Oil and Natural Gas Corporation (ONGC)", sub: "Central", prefix: "ongc" },
  { name: "Indian Oil Corporation Limited (IOCL)", sub: "Central", prefix: "iocl" },
  { name: "Steel Authority of India Limited (SAIL)", sub: "Central", prefix: "sail" },
  { name: "Bhabha Atomic Research Centre (BARC)", sub: "Central", prefix: "barc" }
];

const extraPostNames = [
  { title: "Assistant Section Officer ASO", vac: 950, sal: "Pay Level 7 (₹44,900 - ₹1,42,400)", qual: "Bachelor's Degree in any stream.", fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female" },
  { title: "Upper Division Clerk UDC", vac: 1200, sal: "Pay Level 4 (₹25,500 - ₹81,100)", qual: "Graduation in any stream + basic computer skills.", fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female" },
  { title: "Lower Division Clerk LDC", vac: 2400, sal: "Pay Level 2 (₹19,900 - ₹63,200)", qual: "12th Class Pass + typing speed of 35 wpm in English.", fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female" },
  { title: "Multi Tasking Staff MTS", vac: 3800, sal: "Pay Level 1 (₹18,000 - ₹56,900)", qual: "10th Class Pass (Matriculation) from recognized board.", fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female" },
  { title: "Junior Engineer JE Civil/Electrical", vac: 850, sal: "Pay Level 6 (₹35,400 - ₹1,12,400)", qual: "Diploma or Degree in Engineering in relevant branch.", fee: "₹200 for Gen/OBC, ₹0 SC/ST/Female" },
  { title: "Senior Section Engineer SSE", vac: 450, sal: "Pay Level 7 (₹44,900 - ₹1,42,400)", qual: "B.E. / B.Tech in Engineering in relevant stream.", fee: "₹500 for Gen/OBC, ₹250 reserves" },
  { title: "Stenographer Grade C & D", vac: 620, sal: "Level 4 / Level 6 Pay Matrix", qual: "12th Class Pass + Stenography test qualification.", fee: "₹100 for Gen/OBC, ₹0 SC/ST/Female" },
  { title: "Technical Assistant", vac: 730, sal: "Pay Level 5 (₹29,200 - ₹92,300)", qual: "B.Sc or Diploma in Engineering in relevant field.", fee: "₹100 for Gen/OBC, ₹0 SC/ST" },
  { title: "Scientific Assistant", vac: 340, sal: "Pay Level 6 (₹35,400 - ₹1,12,400)", qual: "Bachelor's Degree in Science (B.Sc) with Physics/Computer Science.", fee: "₹100 for Gen/OBC, ₹0 SC/ST" },
  { title: "Security Guard / Watchman", vac: 1800, sal: "Pay Level 1 (₹18,000 - ₹56,900)", qual: "10th Class Pass from recognized board.", fee: "₹100 for Gen/OBC, ₹0 SC/ST" },
  { title: "Officer Trainee", vac: 500, sal: "Pay Level 10 (₹56,100 - ₹1,77,500)", qual: "Post Graduation or Professional Degree in relevant field.", fee: "₹500 for Gen/OBC, ₹100 reserves" },
  { title: "Technical Officer", vac: 230, sal: "Pay Level 10 (₹56,100 - ₹1,77,500)", qual: "B.E. / B.Tech or M.Sc in relevant scientific stream.", fee: "₹500 for Gen/OBC, ₹0 SC/ST" },
  { title: "Junior Assistant", vac: 1100, sal: "Pay Level 3 (₹21,700 - ₹69,100)", qual: "Bachelor's degree in any discipline + computer typing.", fee: "₹100 for Gen/OBC, ₹0 SC/ST" },
  { title: "Data Entry Operator DEO", vac: 870, sal: "Pay Level 4 (₹25,500 - ₹81,100)", qual: "12th Class Pass with speed of 8000 key depressions per hour.", fee: "₹100 for Gen/OBC, ₹0 SC/ST" },
  { title: "Accounts Officer", vac: 150, sal: "Pay Level 10 (₹56,100 - ₹1,77,500)", qual: "CA / ICWA / MBA Finance or M.Com from recognized University.", fee: "₹800 for Gen/OBC" },
  { title: "Personal Assistant PA", vac: 450, sal: "Pay Level 6 (₹35,400 - ₹1,12,400)", qual: "Graduation + Stenography typing speed 100 wpm.", fee: "₹100 for Gen/OBC, ₹0 SC/ST" },
  { title: "Staff Nurse Grade II", vac: 1250, sal: "Pay Level 7 (₹44,900 - ₹1,42,400)", qual: "B.Sc Nursing or General Nursing & Midwifery (GNM).", fee: "₹300 for Gen/OBC" },
  { title: "Pharmacist", vac: 430, sal: "Pay Level 5 (₹29,200 - ₹92,300)", qual: "Diploma or Degree in Pharmacy (D.Pharm/B.Pharm) + registered.", fee: "₹100 for Gen/OBC, ₹0 SC/ST" },
  { title: "Lab Assistant", vac: 680, sal: "Pay Level 3 (₹21,700 - ₹69,100)", qual: "12th Class Pass in Science stream from recognized board.", fee: "₹100 for Gen/OBC, ₹0 SC/ST" },
  { title: "Executive Trainee", vac: 320, sal: "Pay Level 10 (₹56,100 - ₹1,77,500)", qual: "First class B.E. / B.Tech or PG Degree with GATE score.", fee: "₹500 for Gen/OBC" }
];

const extraStatePosts = [
  { title: "Constable GD Recruitment", vac: 15000, sal: "Pay Level 3 (₹21,700 - ₹69,100)", qual: "10th Class Pass from recognized board.", fee: "₹400 for all candidates" },
  { title: "Sub Inspector SI Uniform Post", vac: 1800, sal: "Pay Level 6 (₹35,400 - ₹1,12,400)", qual: "Bachelor's Degree in any stream.", fee: "₹400 for all candidates" },
  { title: "Lekhpal / Patwari Revenue Officer", vac: 4500, sal: "Pay Level 2 (₹19,900 - ₹63,200)", qual: "12th Class Pass + Computer CCC certificate.", fee: "₹250 for Gen/OBC, ₹100 reserves" },
  { title: "Forest Guard & Van Daroga", vac: 2100, sal: "Pay Level 2 (₹19,900 - ₹63,200)", qual: "12th Class Pass + physical fitness requirements.", fee: "₹250 for Gen/OBC, ₹100 reserves" },
  { title: "Assistant Teacher Primary Education", vac: 12500, sal: "Starting basic pay ₹35,400 per month plus perks", qual: "Graduation + B.Ed / D.El.Ed + State Teacher Eligibility Test (TET).", fee: "₹600 for Gen/OBC, ₹400 SC/ST" },
  { title: "Computer Operator & Programmer Grade A", vac: 930, sal: "Pay Level 4 (₹25,500 - ₹81,100)", qual: "12th Pass with Physics & Math + 'O' Level diploma in Computers.", fee: "₹400 for all candidates" },
  { title: "Revenue Inspector Kanungo", vac: 640, sal: "Pay Level 5 (₹29,200 - ₹92,300)", qual: "Bachelor's Degree in Commerce or Economics preferred.", fee: "₹250 for Gen/OBC" },
  { title: "Junior Assistant & Typing Typist", vac: 3200, sal: "Pay Level 2 (₹19,900 - ₹63,200)", qual: "12th Class Pass + Hindi/English typing certificate.", fee: "₹185 for Gen/OBC, ₹95 SC/ST" },
  { title: "Block Development Officer BDO", vac: 120, sal: "Level 10 Pay Matrix starting ₹56,100 basic pay", qual: "Graduation in any stream from recognized University.", fee: "₹600 for Gen/OBC, ₹150 reserves" },
  { title: "Agriculture Technical Assistant", vac: 1400, sal: "Pay Level 4 (₹25,500 - ₹81,100)", qual: "B.Sc in Agriculture or Horticulture.", fee: "₹185 for Gen/OBC, ₹95 SC/ST" },
  { title: "Revenue Inspector RI", vac: 580, sal: "Pay Level 5 (₹29,200 - ₹92,300)", qual: "Bachelor's Degree in Science/Commerce/Arts.", fee: "₹250 for Gen/OBC, ₹100 reserves" },
  { title: "Junior Stenographer", vac: 340, sal: "Pay Level 4 (₹25,500 - ₹81,100)", qual: "12th Class Pass + Stenography shorthand speed of 80 wpm.", fee: "₹200 for all candidates" },
  { title: "Technical Clerk", vac: 820, sal: "Pay Level 2 (₹19,900 - ₹63,200)", qual: "12th Class Pass + basic computer operating certificate.", fee: "₹150 for Gen/OBC" },
  { title: "Warder Jailor Recruitment", vac: 1100, sal: "Pay Level 3 (₹21,700 - ₹69,100)", qual: "12th Class Pass + physical standard metrics.", fee: "₹400 for all candidates" },
  { title: "Excise Sub Inspector", vac: 230, sal: "Pay Level 6 (₹35,400 - ₹1,12,400)", qual: "Bachelor's Degree in any discipline from recognized University.", fee: "₹400 for all candidates" },
  { title: "Assistant Engineer AE Civil/Electrical", vac: 410, sal: "Pay Level 10 (₹56,100 - ₹1,77,500)", qual: "Degree in Engineering (B.E. / B.Tech) in relevant discipline.", fee: "₹600 for Gen/OBC, ₹150 reserves" },
  { title: "Accountant Accounts Clerk", vac: 1500, sal: "Pay Level 4 (₹25,500 - ₹81,100)", qual: "Bachelor's Degree in Commerce (B.Com) from recognized University.", fee: "₹250 for Gen/OBC, ₹100 SC/ST" },
  { title: "Motor Vehicle Inspector MVI", vac: 180, sal: "Pay Level 6 (₹35,400 - ₹1,12,400)", qual: "Diploma in Automobile/Mechanical Engineering + Driving License.", fee: "₹400 for Gen/OBC" },
  { title: "Statistical Assistant", vac: 320, sal: "Pay Level 5 (₹29,200 - ₹92,300)", qual: "Master's Degree in Statistics or Mathematics or Economics.", fee: "₹250 for Gen/OBC, ₹100 reserves" },
  { title: "Librarian Grade III", vac: 470, sal: "Pay Level 5 (₹29,200 - ₹92,300)", qual: "Graduation + Diploma/Degree in Library Science (C.Lib/B.Lib).", fee: "₹300 for Gen/OBC" }
];

const categories = ["Latest Jobs", "Admit Card", "Result", "Answer Key", "Syllabus"];

// Generate 200 Central jobs
let extraCount = 0;
extraCentralDepts.forEach((dept, deptIdx) => {
  extraPostNames.forEach((post, postIdx) => {
    extraCount++;
    if (extraCount > 200) return; // limit to 200
    
    const cat = categories[extraCount % 5];
    const id = `${dept.prefix}-${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-2026`;
    
    remainingExams.push({
      id: id,
      name: `${dept.name} ${post.title}`,
      dept: dept.name,
      cat: cat,
      sub: dept.sub,
      vac: cat === "Admit Card" || cat === "Syllabus" || cat === "Answer Key" ? 0 : post.vac,
      fee: post.fee,
      sal: post.sal,
      age: "18-27 Years (Age relaxation applicable as per rules)",
      qual: post.qual
    });
  });
});

// Generate 200 State jobs
let extraStateCount = 0;
extraStates.forEach(state => {
  state.boards.forEach(board => {
    extraStatePosts.forEach(post => {
      extraStateCount++;
      if (extraStateCount > 200) return; // limit to 200
      
      const cat = categories[(extraStateCount + 2) % 5];
      const id = `${state.code}-${board.name.toLowerCase()}-${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-2026`;
      
      remainingExams.push({
        id: id,
        name: `${state.name} ${board.name} ${post.title}`,
        dept: `${board.full} (${board.name}), Government of ${state.name}`,
        cat: cat,
        sub: "State Wise",
        vac: cat === "Admit Card" || cat === "Syllabus" || cat === "Answer Key" ? 0 : post.vac,
        fee: post.fee,
        sal: post.sal,
        age: "18-40 Years (Age relaxation applicable for state residents)",
        qual: post.qual
      });
    });
  });
});


// Helper to format dates to text
const defaultDates = {
  "Apply Start": "11/06/2026",
  "Last Date to Apply": "15/07/2026",
  "Last Date Pay Fee": "16/07/2026",
  "Exam Date Paper 1": "September-October 2026",
  "Exam Date Paper 2": "To be notified later"
};

// Expand remaining exams list into full exam schemas
function getPostSpecificDetails(job) {
  const title = job.name.toLowerCase();
  let pattern = "";
  let syllabus = "";
  let books = [];
  
  if (title.includes("nurse") || title.includes("pharmacist") || title.includes("lab") || title.includes("medical") || title.includes("paramedical")) {
    pattern = `The medical selection process comprises:
1. Written Examination (Objective MCQ style) covering Professional Subject knowledge (60 marks) and General Awareness (40 marks).
2. Document Verification of Professional Registration Certificates.
3. Medical fitness standard evaluations.`;

    syllabus = `- Professional Subject Knowledge: Human Anatomy, Physiology, Pharmacology basics, General Nursing practices, or Pharmaceutical chemistry based on the trade.
- General Awareness: Basic general knowledge, current events, and local region updates.
- Analytical Ability: Simple arithmetic questions, basic logical reasoning.`;

    books = [
      "'Target High - Staff Nurse Recruitment Exam' by Muthuvenkatachalam S",
      "'Comprehensive Guide for Pharmacist Exams' by Dr. L. Vikraman",
      "'Lucent's General Knowledge' for General Awareness sections"
    ];
  } else if (title.includes("steno") || title.includes("typist") || title.includes("operator") || title.includes("clerk") || title.includes("assistant") || title.includes("deo") || title.includes("udc") || title.includes("ldc") || title.includes("personal assistant")) {
    pattern = `The administrative selection process comprises:
1. Written Examination (Objective MCQ style) testing Language, Reasoning, and Basic Math.
2. Typing Speed Skill Test on computer keyboard (Hindi/English as specified).
3. Stenography Shorthand dictation and transcription evaluation (for Stenographers).
4. Document Verification.`;

    syllabus = `- Language Proficiency: English and Hindi grammar, vocabulary, sentence correction, and comprehension.
- Computer Literacy: MS Office Suite (Word, Excel, PowerPoint), basic internet concepts, and shortcut keys.
- Mental Ability: Analogy, series, coding-decoding, and verbal reasoning.
- Numerical Aptitude: Simplification, percentages, profit & loss, and averages.`;

    books = [
      "'Objective General English' by S.P. Bakshi",
      "'Computer Awareness' by Arihant Publications",
      "'A Modern Approach to Verbal & Non-Verbal Reasoning' by R.S. Aggarwal"
    ];
  } else if (title.includes("accounts") || title.includes("auditor") || title.includes("accountant") || title.includes("finance")) {
    pattern = `The finance cadre selection process comprises:
1. Written Examination (MCQ) - Part A: Commerce & Accounting (70 marks); Part B: General Studies (30 marks).
2. Computer proficiency tests (basic spreadsheets and ledger records).
3. Document Verification.`;

    syllabus = `- Commerce & Accounts: Double-entry system, bank reconciliation statements, auditing principles, income tax basics, and cost accounting.
- General Studies: Indian Economy, basic general science, and current events.
- Quantitative Aptitude: Ratio and proportion, simple and compound interest, time & work.`;

    books = [
      "'Double Entry Bookkeeping' by T.S. Grewal",
      "'Auditing Principles and Practice' by Ravinder Kumar",
      "'Indian Economy' by Ramesh Singh"
    ];
  } else if (title.includes("engineer") || title.includes("ae") || title.includes("je") || title.includes("technical") || title.includes("scientist") || title.includes("sse") || title.includes("isro") || title.includes("drdo")) {
    pattern = `The technical/engineering selection process comprises:
1. Preliminary Examination (General Awareness & Aptitude).
2. Main Written Exam (Subject-Specific Technical Engineering papers).
3. Technical Interview / Viva-Voce evaluation (for executive grades).
4. Document Verification.`;

    syllabus = `- Technical Discipline: Core engineering concepts (Civil / Mechanical / Electrical / Electronics) based on the post trade.
- General Aptitude: Quantitative reasoning, logical deductions, and data sufficiency.
- General Awareness: Current technical advancements, national schemes, and general knowledge.`;

    books = [
      "'Civil/Mechanical/Electrical Engineering Handbook' by Khanna Publishers",
      "'Quantitative Aptitude for Competitive Examinations' by Dr. R.S. Aggarwal",
      "'General Knowledge' by Lucent Publications"
    ];
  } else if (title.includes("constable") || title.includes("si") || title.includes("guard") || title.includes("warder") || title.includes("police") || title.includes("daroga")) {
    pattern = `The police/uniformed service selection process comprises:
1. Written Examination (Objective MCQ) testing GK, Math, and Reasoning.
2. Physical Standard Test (PST) measuring height and chest expansion.
3. Physical Efficiency Test (PET) involving timed running and long jump events.
4. Medical Examination and Document Verification.`;

    syllabus = `- General Knowledge: National history, geography, constitution of India, and police administration details.
- Numerical & Mental Ability: Percentages, profit & loss, distance-speed-time, and general mathematics.
- Intelligence Quotient & Reasoning: Analytical reasoning, coding-decoding, and direction sense.`;

    books = [
      "'Kiran's Police Constable Recruitment Exam Guide'",
      "'Quantitative Aptitude' by Dr. R.S. Aggarwal",
      "'Lucent's General Knowledge'"
    ];
  } else {
    // Default/General Posts - Dynamically select from pools based on job ID hash to eliminate duplicate content footprint
    const defaultSyllabusPool = [
      `- General Studies: Indian History, Indian Polity, Geography, Basic Science, and General Knowledge.\n- Logical Reasoning: Coding-decoding, blood relations, analogies, series, and non-verbal reasoning.\n- Numerical Ability: Percentages, profit and loss, ratio & proportion, and arithmetic updates.`,
      `- Quantitative Aptitude: Number systems, simplification, decimals, HCF & LCM, average, and percentages.\n- English Language: Reading comprehension, sentence fillers, vocabulary, and basic grammar.\n- General Intelligence: Puzzles, syllogism, seating arrangement, and direction sense.`,
      `- General Awareness: Current national affairs, sports achievements, awards, books and authors.\n- Numerical Ability: Time & work, speed & distance, simple interest, and graphical data interpretation.\n- Language Ability: Grammar rules, synonyms, antonyms, and direct/indirect speech.`,
      `- Core General Studies: Constitution of India, history of independence movement, physical geography, and economics.\n- Reasoning Skills: Decision making, problem solving, visual memory, and relationship concepts.\n- Basic Mathematics: Fractions, profit and loss, interest, and tabular data tables.`,
      `- Mental Ability: Verbal and figure classification, arithmetical number series, coding and decoding.\n- General English: Vocabulary, spotting errors, cloze test, and sentence improvement rules.\n- GK Section: Local state events, history, geography, and administrative setups.`
    ];

    const defaultBooksPool = [
      ["'Quantitative Aptitude' by R.S. Aggarwal", "'Modern Verbal Reasoning' by Kiran Publications", "'General Knowledge' by Lucent Publishers"],
      ["'Fast Track Objective Arithmetic' by Rajesh Verma", "'Analytical Reasoning' by M.K. Pandey", "'Objective General English' by S.P. Bakshi"],
      ["'Quantitative Aptitude for Exams' by Abhijit Guha", "'Test of Reasoning' by Edgar Thorpe", "'GK Manual' by Pearson Education"],
      ["'Arithmetic for Competitive Exams' by Arihant Experts", "'General Intelligence & Reasoning' by R.S. Aggarwal", "'General Studies Guide' by Disha Publications"],
      ["'Magical Book on Quicker Maths' by M. Tyra", "'Logical Reasoning' by R.S. Aggarwal", "'Objective General English' by Arihant Experts"]
    ];

    const defaultPatternPool = [
      `The general recruitment examination comprises:
1. Written Examination (Objective MCQ style) testing GK, Aptitude, Reasoning, and Language.
2. Skill Test / Practical evaluation (where applicable as per department instructions).
3. Document Verification and Final Merit Selection.`,
      `The standard selection procedure consists of:
1. Online Computer Based Test (CBT) covering multiple choice objective questions.
2. Skill Test or Typing Test (as per the requirements of the specific post).
3. Detailed Document Verification and Medical Fitness check.`,
      `Candidates will undergo the following selection phases:
1. Written Exam (OMR/Online based) testing general knowledge and verbal aptitude.
2. Physical standard check or practical skill evaluation (where applicable).
3. Certificate verification and final merit listing.`,
      `The selection methodology is structured as follows:
1. Objective Type Written Examination (covering GK, Mathematics, Reasoning, and Language).
2. Typing test or computer proficiency assessment (post-specific).
3. Final interview or certificate validation stage.`,
      `The recruitment process follows a multi-stage criteria:
1. Phase I: Written Screening Test (Multiple choice questions with negative marking).
2. Phase II: Trade Test or Skill Assessment (qualifying in nature).
3. Phase III: Final document verification and medical check.`
    ];

    const poolIdx = job.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 5;
    pattern = defaultPatternPool[poolIdx];
    syllabus = defaultSyllabusPool[poolIdx];
    books = defaultBooksPool[poolIdx];
  }
  
  // 2. Generate post-specific FAQs
  const faqs = [
    { q: `What is the educational qualification required for ${job.name} 2026?`, a: job.qual },
    { q: `What is the salary scale offered for ${job.name}?`, a: job.sal },
    { q: `What is the selection process for ${job.name}?`, a: pattern.split("\n")[0] + " " + (pattern.split("\n")[1] || "") }
  ];

  // 3. Generate unique dates based on ID characters
  const idHash = job.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const startDay = (idHash % 15) + 1; // 1 to 15
  const startDayStr = startDay < 10 ? `0${startDay}` : `${startDay}`;
  const applyStart = `${startDayStr}/06/2026`;
  
  const endDay = (startDay + 15) % 28 + 1;
  const endDayStr = endDay < 10 ? `0${endDay}` : `${endDay}`;
  const lastDate = `${endDayStr}/07/2026`;
  
  const payDay = (endDay + 1) % 28 + 1;
  const payDayStr = payDay < 10 ? `0${payDay}` : `${payDay}`;
  const lastDatePay = `${payDayStr}/07/2026`;
  
  const importantDates = {
    "Apply Start": applyStart,
    "Last Date to Apply": lastDate,
    "Last Date Pay Fee": lastDatePay,
    "Exam Date": (idHash % 2 === 0) ? "October-November 2026" : "November-December 2026"
  };

  return { pattern, syllabus, books, faqs, importantDates };
}

// Expand remaining exams list into full exam schemas
remainingExams.forEach(rem => {
  const spec = getPostSpecificDetails(rem);

  const cleanRem = {
    id: rem.id,
    title: `${rem.dept} ${rem.name} 2026 Online Application Form`,
    shortTitle: rem.name,
    department: rem.dept,
    postDate: "2026-06-11",
    lastDate: spec.importantDates["Last Date to Apply"],
    totalVacancies: rem.vac,
    category: rem.cat,
    subCategory: rem.sub,
    state: rem.sub === "State Wise" ? "State Region" : "All India",
    isTrending: rem.vac > 5000,
    basicSalary: rem.sal,
    fee: { "Application Fee": rem.fee, "Payment Mode": "Online credit/debit card, netbanking, UPI" },
    importantDates: spec.importantDates,
    ageLimit: { "Age Limit": rem.age, "Age Relaxation": "Standard government relaxations (OBC 3 years, SC/ST 5 years)" },
    qualification: rem.qual,
    examPattern: spec.pattern,
    syllabus: spec.syllabus,
    books: spec.books,
    faqs: spec.faqs
  };

  exams.push(cleanRem);
});

// Helper function to resolve authentic official links for exams
function getOfficialLinks(job) {
  let officialUrl = "https://www.google.com";
  let applyUrl = "https://www.google.com";
  let notificationUrl = "https://www.google.com";

  const id = job.id.toLowerCase();
  const dept = (job.department || "").toLowerCase();
  const title = (job.title || "").toLowerCase();

  if (id.includes("upsc") || dept.includes("union public service commission")) {
    officialUrl = "https://upsc.gov.in";
    applyUrl = "https://upsconline.nic.in";
    notificationUrl = "https://upsc.gov.in/examinations/active-exams";
  } else if ((id.includes("ssc") && !id.includes("upsssc") && !id.includes("hssc") && !id.includes("jssc") && !id.includes("rsssb") && !id.includes("rsmssb") && !id.includes("uksssc") && !id.includes("bssc")) || dept.includes("staff selection commission")) {
    officialUrl = "https://ssc.gov.in";
    applyUrl = "https://ssc.gov.in";
    notificationUrl = "https://ssc.gov.in";
  } else if (id.includes("rrb") || dept.includes("railway recruitment board")) {
    officialUrl = "https://indianrailways.gov.in";
    applyUrl = "https://indianrailways.gov.in";
    notificationUrl = "https://indianrailways.gov.in";
  } else if (id.includes("ibps") || dept.includes("institute of banking personnel selection")) {
    officialUrl = "https://ibps.in";
    applyUrl = "https://ibps.in";
    notificationUrl = "https://ibps.in";
  } else if (id.includes("sbi") || dept.includes("state bank of india")) {
    officialUrl = "https://bank.sbi/careers";
    applyUrl = "https://bank.sbi/careers";
    notificationUrl = "https://bank.sbi/careers";
  } else if (id.includes("lic") || dept.includes("life insurance corporation")) {
    officialUrl = "https://licindia.in/careers";
    applyUrl = "https://licindia.in/careers";
    notificationUrl = "https://licindia.in/careers";
  } else if (id.includes("rbi") || dept.includes("reserve bank of india")) {
    officialUrl = "https://rbi.org.in";
    applyUrl = "https://rbi.org.in";
    notificationUrl = "https://rbi.org.in";
  } else if (id.includes("up-police") || dept.includes("uttar pradesh police")) {
    officialUrl = "https://uppbpb.gov.in";
    applyUrl = "https://uppbpb.gov.in";
    notificationUrl = "https://uppbpb.gov.in";
  } else if (id.includes("bpssc") || id.includes("daroga")) {
    officialUrl = "https://bpssc.bih.nic.in";
    applyUrl = "https://bpssc.bih.nic.in";
    notificationUrl = "https://bpssc.bih.nic.in";
  } else if (id.includes("bssc")) {
    officialUrl = "https://bssc.bihar.gov.in";
    applyUrl = "https://bssc.bihar.gov.in";
    notificationUrl = "https://bssc.bihar.gov.in";
  } else if (id.includes("bihar-police") || dept.includes("central selection board of constables")) {
    officialUrl = "https://csbc.bih.nic.in";
    applyUrl = "https://csbc.bih.nic.in";
    notificationUrl = "https://csbc.bih.nic.in";
  } else if (id.includes("delhi-police")) {
    officialUrl = "https://delhipolice.gov.in";
    applyUrl = "https://ssc.gov.in";
    notificationUrl = "https://ssc.gov.in";
  } else if (id.includes("airforce")) {
    officialUrl = "https://agnipathvayu.cdac.in";
    applyUrl = "https://agnipathvayu.cdac.in";
    notificationUrl = "https://agnipathvayu.cdac.in";
  } else if (id.includes("navy")) {
    officialUrl = "https://joinindiannavy.gov.in";
    applyUrl = "https://joinindiannavy.gov.in";
    notificationUrl = "https://joinindiannavy.gov.in";
  } else if (id.includes("army")) {
    officialUrl = "https://joinindianarmy.nic.in";
    applyUrl = "https://joinindianarmy.nic.in";
    notificationUrl = "https://joinindianarmy.nic.in";
  } else if (id.includes("super-tet") || id.includes("uptet") || dept.includes("basic education board")) {
    officialUrl = "https://updeled.gov.in";
    applyUrl = "https://updeled.gov.in";
    notificationUrl = "https://updeled.gov.in";
  } else if (id.includes("uppsc") || dept.includes("uppsc") || dept.includes("uttar pradesh public service")) {
    officialUrl = "https://uppsc.up.nic.in";
    applyUrl = "https://uppsc.up.nic.in";
    notificationUrl = "https://uppsc.up.nic.in";
  } else if (id.includes("bpsc") || dept.includes("bpsc") || dept.includes("bihar public service")) {
    officialUrl = "https://bpsc.bih.nic.in";
    applyUrl = "https://bpsc.bih.nic.in";
    notificationUrl = "https://bpsc.bih.nic.in";
  } else if (id.includes("mppsc") || dept.includes("mppsc") || dept.includes("madhya pradesh public service")) {
    officialUrl = "https://mppsc.mp.gov.in";
    applyUrl = "https://mppsc.mp.gov.in";
    notificationUrl = "https://mppsc.mp.gov.in";
  } else if (id.includes("mppeb") || dept.includes("mp esb") || dept.includes("employees selection board")) {
    officialUrl = "https://esb.mp.gov.in";
    applyUrl = "https://esb.mp.gov.in";
    notificationUrl = "https://esb.mp.gov.in";
  } else if (id.includes("rajasthan-police") || (id.includes("rajasthan") && title.includes("constable"))) {
    officialUrl = "https://police.rajasthan.gov.in";
    applyUrl = "https://police.rajasthan.gov.in";
    notificationUrl = "https://police.rajasthan.gov.in";
  } else if (id.includes("reet") || dept.includes("secondary education board rajasthan")) {
    officialUrl = "https://rajeduboard.rajasthan.gov.in";
    applyUrl = "https://rajeduboard.rajasthan.gov.in";
    notificationUrl = "https://rajeduboard.rajasthan.gov.in";
  } else if (id.includes("ras") || id.includes("rpsc") || dept.includes("rpsc") || dept.includes("rajasthan public service")) {
    officialUrl = "https://rpsc.rajasthan.gov.in";
    applyUrl = "https://rpsc.rajasthan.gov.in";
    notificationUrl = "https://rpsc.rajasthan.gov.in";
  } else if (id.includes("ukpsc") || dept.includes("ukpsc") || dept.includes("uttarakhand public service")) {
    officialUrl = "https://psc.uk.gov.in";
    applyUrl = "https://psc.uk.gov.in";
    notificationUrl = "https://psc.uk.gov.in";
  } else if (id.includes("hssc") || dept.includes("hssc") || dept.includes("haryana staff selection")) {
    officialUrl = "https://hssc.gov.in";
    applyUrl = "https://hssc.gov.in";
    notificationUrl = "https://hssc.gov.in";
  } else if (id.includes("gds") || dept.includes("india post")) {
    officialUrl = "https://indiapostgdsonline.gov.in";
    applyUrl = "https://indiapostgdsonline.gov.in";
    notificationUrl = "https://indiapostgdsonline.gov.in";
  } else if (id.includes("fci") || dept.includes("fci") || dept.includes("food corporation of india")) {
    officialUrl = "https://fci.gov.in";
    applyUrl = "https://fci.gov.in/category-three-pages.php?save_id=MTc=";
    notificationUrl = "https://fci.gov.in";
  } else if (id.includes("isro") || dept.includes("isro") || dept.includes("space research")) {
    officialUrl = "https://isro.gov.in";
    applyUrl = "https://isro.gov.in/careers";
    notificationUrl = "https://isro.gov.in";
  } else if (id.includes("drdo") || dept.includes("drdo") || dept.includes("defence research")) {
    officialUrl = "https://drdo.gov.in";
    applyUrl = "https://drdo.gov.in/careers";
    notificationUrl = "https://drdo.gov.in";
  } else if (id.includes("epfo") || dept.includes("epfo") || dept.includes("provident fund")) {
    officialUrl = "https://epfindia.gov.in";
    applyUrl = "https://epfindia.gov.in";
    notificationUrl = "https://epfindia.gov.in";
  } else if (id.includes("jssc") || dept.includes("jssc") || dept.includes("jharkhand staff selection")) {
    officialUrl = "https://jssc.nic.in";
    applyUrl = "https://jssc.nic.in";
    notificationUrl = "https://jssc.nic.in";
  } else if (id.includes("hpsc") || dept.includes("hpsc") || dept.includes("haryana public service")) {
    officialUrl = "https://hpsc.gov.in";
    applyUrl = "https://hpsc.gov.in";
    notificationUrl = "https://hpsc.gov.in";
  } else if (id.includes("gpsc") || dept.includes("gpsc") || dept.includes("gujarat public service")) {
    officialUrl = "https://gpsc.gujarat.gov.in";
    applyUrl = "https://gpsc.gujarat.gov.in";
    notificationUrl = "https://gpsc.gujarat.gov.in";
  } else if (id.includes("mpsc") || dept.includes("mpsc") || dept.includes("maharashtra public service")) {
    officialUrl = "https://mpsc.gov.in";
    applyUrl = "https://mpsc.gov.in";
    notificationUrl = "https://mpsc.gov.in";
  } else if (id.includes("tnpsc") || dept.includes("tnpsc") || dept.includes("tamil nadu public service")) {
    officialUrl = "https://tnpsc.gov.in";
    applyUrl = "https://tnpsc.gov.in";
    notificationUrl = "https://tnpsc.gov.in";
  } else if (id.includes("kpsc") || dept.includes("kpsc") || dept.includes("karnataka public service")) {
    officialUrl = "https://kpsc.kar.nic.in";
    applyUrl = "https://kpsc.kar.nic.in";
    notificationUrl = "https://kpsc.kar.nic.in";
  } else if (id.includes("appsc") || dept.includes("appsc") || dept.includes("andhra pradesh public service")) {
    officialUrl = "https://psc.ap.gov.in";
    applyUrl = "https://psc.ap.gov.in";
    notificationUrl = "https://psc.ap.gov.in";
  } else if (id.includes("tspsc") || dept.includes("tspsc") || dept.includes("telangana state public service")) {
    officialUrl = "https://tspsc.gov.in";
    applyUrl = "https://tspsc.gov.in";
    notificationUrl = "https://tspsc.gov.in";
  } else if (id.includes("opsc") || dept.includes("opsc") || dept.includes("odisha public service")) {
    officialUrl = "https://opsc.gov.in";
    applyUrl = "https://opsc.gov.in";
    notificationUrl = "https://opsc.gov.in";
  } else if (id.includes("wbcse") || id.includes("wbcs") || dept.includes("west bengal psc") || dept.includes("west bengal public service")) {
    officialUrl = "https://psc.wb.gov.in";
    applyUrl = "https://psc.wb.gov.in";
    notificationUrl = "https://psc.wb.gov.in";
  } else if (id.includes("niacl")) {
    officialUrl = "https://newindia.co.in";
    applyUrl = "https://newindia.co.in";
    notificationUrl = "https://newindia.co.in";
  } else if (id.includes("uiic")) {
    officialUrl = "https://uiic.co.in";
    applyUrl = "https://uiic.co.in";
    notificationUrl = "https://uiic.co.in";
  } else if (id.includes("nicl")) {
    officialUrl = "https://nationalinsurance.nic.in";
    applyUrl = "https://nationalinsurance.nic.in";
    notificationUrl = "https://nationalinsurance.nic.in";
  } else if (id.includes("oicl")) {
    officialUrl = "https://orientalinsurance.org.in";
    applyUrl = "https://orientalinsurance.org.in";
    notificationUrl = "https://orientalinsurance.org.in";
  } else if (id.includes("nabard")) {
    officialUrl = "https://nabard.org";
    applyUrl = "https://nabard.org";
    notificationUrl = "https://nabard.org";
  } else if (id.includes("sidbi")) {
    officialUrl = "https://sidbi.in";
    applyUrl = "https://sidbi.in";
    notificationUrl = "https://sidbi.in";
  } else if (id.includes("dmrc")) {
    officialUrl = "https://delhimetrorail.com";
    applyUrl = "https://delhimetrorail.com";
    notificationUrl = "https://delhimetrorail.com";
  } else if (id.includes("upmetro") || id.includes("lmrc")) {
    officialUrl = "https://upmetrorail.com";
    applyUrl = "https://upmetrorail.com";
    notificationUrl = "https://upmetrorail.com";
  } else if (id.includes("idbi")) {
    officialUrl = "https://idbibank.in";
    applyUrl = "https://idbibank.in";
    notificationUrl = "https://idbibank.in";
  } else if (id.includes("nhb")) {
    officialUrl = "https://nhb.org.in";
    applyUrl = "https://nhb.org.in";
    notificationUrl = "https://nhb.org.in";
  } else if (id.includes("eximbank")) {
    officialUrl = "https://eximbankindia.in";
    applyUrl = "https://eximbankindia.in";
    notificationUrl = "https://eximbankindia.in";
  } else if (id.includes("ecgc")) {
    officialUrl = "https://ecgc.in";
    applyUrl = "https://ecgc.in";
    notificationUrl = "https://ecgc.in";
  } else if (id.includes("cisf")) {
    officialUrl = "https://cisfrectt.cisf.gov.in";
    applyUrl = "https://cisfrectt.cisf.gov.in";
    notificationUrl = "https://cisfrectt.cisf.gov.in";
  } else if (id.includes("bsf")) {
    officialUrl = "https://rectt.bsf.gov.in";
    applyUrl = "https://rectt.bsf.gov.in";
    notificationUrl = "https://rectt.bsf.gov.in";
  } else if (id.includes("crpf")) {
    officialUrl = "https://rect.crpf.gov.in";
    applyUrl = "https://rect.crpf.gov.in";
    notificationUrl = "https://rect.crpf.gov.in";
  } else if (id.includes("itbp")) {
    officialUrl = "https://recruitment.itbpolice.nic.in";
    applyUrl = "https://recruitment.itbpolice.nic.in";
    notificationUrl = "https://recruitment.itbpolice.nic.in";
  } else if (id.includes("ssb")) {
    officialUrl = "https://ssbrectt.gov.in";
    applyUrl = "https://ssbrectt.gov.in";
    notificationUrl = "https://ssbrectt.gov.in";
  } else if (id.includes("dsssb")) {
    officialUrl = "https://dsssb.delhi.gov.in";
    applyUrl = "https://dsssb.delhi.gov.in";
    notificationUrl = "https://dsssb.delhi.gov.in";
  } else if (id.includes("upsssc")) {
    officialUrl = "https://upsssc.gov.in";
    applyUrl = "https://upsssc.gov.in";
    notificationUrl = "https://upsssc.gov.in";
  } else if (id.includes("rsmssb")) {
    officialUrl = "https://rsmssb.rajasthan.gov.in";
    applyUrl = "https://rsmssb.rajasthan.gov.in";
    notificationUrl = "https://rsmssb.rajasthan.gov.in";
  } else if (id.includes("uksssc")) {
    officialUrl = "https://sssc.uk.gov.in";
    applyUrl = "https://sssc.uk.gov.in";
    notificationUrl = "https://sssc.uk.gov.in";
  } else if (id.includes("ctet") || dept.includes("cbse")) {
    officialUrl = "https://ctet.nic.in";
    applyUrl = "https://ctet.nic.in";
    notificationUrl = "https://ctet.nic.in";
  } else if (id.includes("gseb")) {
    officialUrl = "https://gseb.org";
    applyUrl = "https://gseb.org";
    notificationUrl = "https://gseb.org";
  } else if (id.includes("esic")) {
    officialUrl = "https://esic.gov.in";
    applyUrl = "https://esic.gov.in";
    notificationUrl = "https://esic.gov.in";
  } else if (id.includes("ib")) {
    officialUrl = "https://mha.gov.in";
    applyUrl = "https://mha.gov.in";
    notificationUrl = "https://mha.gov.in";
  } else if (id.includes("ongc")) {
    officialUrl = "https://ongcindia.com";
    applyUrl = "https://ongcindia.com";
    notificationUrl = "https://ongcindia.com";
  } else if (id.includes("iocl")) {
    officialUrl = "https://iocl.com";
    applyUrl = "https://iocl.com";
    notificationUrl = "https://iocl.com";
  } else if (id.includes("sail")) {
    officialUrl = "https://sail.co.in";
    applyUrl = "https://sail.co.in";
    notificationUrl = "https://sail.co.in";
  } else if (id.includes("barc")) {
    officialUrl = "https://barc.gov.in";
    applyUrl = "https://barc.gov.in";
    notificationUrl = "https://barc.gov.in";
  } else if (id.includes("jpsc")) {
    officialUrl = "https://jpsc.gov.in";
    applyUrl = "https://jpsc.gov.in";
    notificationUrl = "https://jpsc.gov.in";
  } else if (id.includes("osssc")) {
    officialUrl = "https://osssc.gov.in";
    applyUrl = "https://osssc.gov.in";
    notificationUrl = "https://osssc.gov.in";
  } else if (id.includes("cgpsc")) {
    officialUrl = "https://psc.cg.gov.in";
    applyUrl = "https://psc.cg.gov.in";
    notificationUrl = "https://psc.cg.gov.in";
  } else if (id.includes("cgvyapam")) {
    officialUrl = "https://vyapam.cgstate.gov.in";
    applyUrl = "https://vyapam.cgstate.gov.in";
    notificationUrl = "https://vyapam.cgstate.gov.in";
  } else if (id.includes("sebi")) {
    officialUrl = "https://sebi.gov.in";
    applyUrl = "https://sebi.gov.in";
    notificationUrl = "https://sebi.gov.in";
  }

  return { officialUrl, applyUrl, notificationUrl };
}

// Load static HTML compilation template
const template = fs.readFileSync(templatePath, 'utf8');

// Loop through each exam record to generate unique static posts
exams.forEach(job => {
  // 1. Generate unique introduction, instructions, preparation tips, and links based on the category
  let introduction = "";
  let applyInstructions = "";
  let prepTips = "";
  let actionButtons = "";
  const urls = getOfficialLinks(job);

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
      <a href="${urls.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Download Admit Card (Server 1)</a>
      <a href="${urls.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Official Website</a>
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
      <a href="${urls.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Download Result PDF (Selected List)</a>
      <a href="${urls.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Check Score Card / Marks</a>
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
      <a href="${urls.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Apply Online Link</a>
      <a href="${urls.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Download Official Notification</a>
      <a href="${urls.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Official Website</a>
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
  const schemaGraph = [
    {
      "@type": "JobPosting",
      "title": job.title,
      "description": `Official notification details for ${job.title}. Department: ${job.department}. Qualification requirement: ${job.qualification}. Basic salary: ${job.basicSalary}. Check application dates, eligibility, and direct apply link details in the page.`,
      "datePosted": `${job.postDate}T09:00:00+05:30`,
      "validThrough": `${job.lastDate}T23:59:00+05:30`,
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": job.department,
        "sameAs": "https://jobvacanciesalert.com",
        "logo": "https://jobvacanciesalert.com/assets/logo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": job.state,
          "addressLocality": job.state === "All India" ? "New Delhi" : "State Capital",
          "postalCode": "110001",
          "streetAddress": "Government Exam Centers"
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
  ];

  if (job.faqs && job.faqs.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "mainEntity": job.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  const jobSchema = {
    "@context": "https://schema.org",
    "@graph": schemaGraph
  };

  const schemaHtml = `<script type="application/ld+json">\n${JSON.stringify(jobSchema, null, 2)}\n</script>`;

  // 11. Compile final HTML content
  let outputHtml = template
    .replace(/{{TITLE}}/g, job.title)
    .replace(/{{META_DESCRIPTION}}/g, `Apply Online for ${job.title}. Get total vacancies, age limits, syllabus outline, fees, and guidelines.`)
    .replace(/{{META_KEYWORDS}}/g, `${job.shortTitle}, ${job.department}, govt jobs 2026, sarkari result, eligibility, salary, job vacancies alert`)
    .replace(/{{JSON_LD_SCHEMA}}/g, schemaHtml)
    .replace(/{{JOB_ID}}/g, job.id)
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

console.log(`Successfully generated ${exams.length} static HTML postings inside jobs/ directory.`);

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
  config: {
    telegramUrl: "https://t.me/jobvacanciesalert",
    whatsappUrl: "https://chat.whatsapp.com/invite/placeholder"
  },
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
console.log(`Successfully generated sitemap.xml with ${exams.length} job entries.`);

// 13a. Generate RSS Feed (rss.xml) for Google Publisher Center / Google News
const sortedExamsForRss = [...exams].sort((a, b) => new Date(b.postDate) - new Date(a.postDate)).slice(0, 50);
let rssOutput = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Job Vacancies Alert</title>
  <link>https://jobvacanciesalert.com/</link>
  <description>Latest Government Job Alerts, Admit Cards, Results, Answer Keys, and Welfare Schemes.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="https://jobvacanciesalert.com/rss.xml" rel="self" type="application/rss+xml" />
`;

sortedExamsForRss.forEach(job => {
  const cleanTitle = job.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const cleanDesc = `Apply Online for ${job.title}. Department: ${job.department}. Get vacancies, age limits, syllabus outline, fees, and guidelines.`.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  rssOutput += `  <item>
    <title>${cleanTitle}</title>
    <link>https://jobvacanciesalert.com/jobs/${job.id}.html</link>
    <description>${cleanDesc}</description>
    <pubDate>${new Date(job.postDate).toUTCString()}</pubDate>
    <guid>https://jobvacanciesalert.com/jobs/${job.id}.html</guid>
  </item>\n`;
});

rssOutput += `</channel>\n</rss>`;
fs.writeFileSync(rssXmlPath, rssOutput, 'utf8');
console.log(`Successfully generated rss.xml with ${sortedExamsForRss.length} entries.`);

// 13b. Pre-render Static Lists in index.html, yojana.html, and sitemap.html for Search Engine Crawlers
try {
  const replaceStaticRegion = (content, startComment, endComment, replacement) => {
    const startIndex = content.indexOf(startComment);
    const endIndex = content.indexOf(endComment);
    if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
      return content;
    }
    return content.substring(0, startIndex + startComment.length) + 
           "\n" + replacement + "\n" + 
           content.substring(endIndex);
  };

  // Pre-render index.html
  if (fs.existsSync(indexPath)) {
    let indexHtml = fs.readFileSync(indexPath, 'utf8');

    const renderIndexGrid = (cat, limitVal) => exams
      .filter(item => item.category === cat)
      .slice(0, limitVal)
      .map(item => {
        const showBadge = item.isTrending ? '<span class="badge-new">New</span>' : '';
        return `        <a href="jobs/${item.id}.html" class="grid-item-link">
          <span class="grid-item-left">
            ${showBadge}
            ${item.shortTitle} Online Form 2026
          </span>
          <span class="grid-item-meta">${formatDate(item.postDate)}</span>
        </a>`;
      })
      .join("\n");

    const indexLatest = renderIndexGrid("Latest Jobs", 10);
    const indexAdmit = renderIndexGrid("Admit Card", 10);
    const indexResult = renderIndexGrid("Result", 10);
    const indexAnswerKey = renderIndexGrid("Answer Key", 10);
    const indexSyllabus = renderIndexGrid("Syllabus", 10);

    const indexYojana = yojanaList
      .slice(0, 8)
      .map(y => `        <a href="yojana.html#${y.id}" class="grid-item-link">
          <span class="grid-item-left">
            <span class="badge-new" style="background-color: var(--secondary)">Scheme</span>
            ${y.title}
          </span>
          <span class="grid-item-meta">${y.lastUpdate}</span>
        </a>`)
      .join("\n");

    const indexCentral = exams
      .filter(item => ["UPSC", "SSC", "Railway", "Banking", "Central"].includes(item.subCategory))
      .slice(0, 10)
      .map(item => {
        const showBadge = item.isTrending ? '<span class="badge-new">New</span>' : '';
        return `        <a href="jobs/${item.id}.html" class="grid-item-link">
          <span class="grid-item-left">
            ${showBadge}
            ${item.shortTitle} Online Form 2026
          </span>
          <span class="grid-item-meta">${formatDate(item.postDate)}</span>
        </a>`;
      })
      .join("\n");

    const indexState = exams
      .filter(item => item.subCategory === "State Wise" || item.state !== "All India")
      .slice(0, 10)
      .map(item => {
        const showBadge = item.isTrending ? '<span class="badge-new">New</span>' : '';
        return `        <a href="jobs/${item.id}.html" class="grid-item-link">
          <span class="grid-item-left">
            ${showBadge}
            ${item.shortTitle} Online Form 2026
          </span>
          <span class="grid-item-meta">${formatDate(item.postDate)}</span>
        </a>`;
      })
      .join("\n");

    indexHtml = replaceStaticRegion(indexHtml, '<!-- STATIC_LATEST_JOBS_START -->', '<!-- STATIC_LATEST_JOBS_END -->', indexLatest);
    indexHtml = replaceStaticRegion(indexHtml, '<!-- STATIC_ADMIT_CARD_START -->', '<!-- STATIC_ADMIT_CARD_END -->', indexAdmit);
    indexHtml = replaceStaticRegion(indexHtml, '<!-- STATIC_RESULT_START -->', '<!-- STATIC_RESULT_END -->', indexResult);
    indexHtml = replaceStaticRegion(indexHtml, '<!-- STATIC_ANSWER_KEY_START -->', '<!-- STATIC_ANSWER_KEY_END -->', indexAnswerKey);
    indexHtml = replaceStaticRegion(indexHtml, '<!-- STATIC_SYLLABUS_START -->', '<!-- STATIC_SYLLABUS_END -->', indexSyllabus);
    indexHtml = replaceStaticRegion(indexHtml, '<!-- STATIC_YOJANA_START -->', '<!-- STATIC_YOJANA_END -->', indexYojana);
    indexHtml = replaceStaticRegion(indexHtml, '<!-- STATIC_CENTRAL_START -->', '<!-- STATIC_CENTRAL_END -->', indexCentral);
    indexHtml = replaceStaticRegion(indexHtml, '<!-- STATIC_STATE_START -->', '<!-- STATIC_STATE_END -->', indexState);

    fs.writeFileSync(indexPath, indexHtml, 'utf8');
    console.log("Successfully pre-rendered static content lists inside index.html");
  }

  // Pre-render sitemap.html
  if (fs.existsSync(sitemapHtmlPath)) {
    let sitemapHtml = fs.readFileSync(sitemapHtmlPath, 'utf8');

    const renderSitemapList = (cat) => exams
      .filter(item => item.category === cat)
      .map(item => `          <li><a href="jobs/${item.id}.html">${item.title}</a></li>`)
      .join("\n");

    const sitemapLatest = renderSitemapList("Latest Jobs");
    const sitemapAdmit = renderSitemapList("Admit Card");
    const sitemapResult = renderSitemapList("Result");
    const sitemapAnswerKey = renderSitemapList("Answer Key");
    const sitemapSyllabus = renderSitemapList("Syllabus");
    const sitemapYojana = yojanaList
      .map(y => `          <li><a href="yojana.html#${y.id}">${y.title}</a></li>`)
      .join("\n");

    sitemapHtml = replaceStaticRegion(sitemapHtml, '<!-- STATIC_SITEMAP_LATEST_JOBS_START -->', '<!-- STATIC_SITEMAP_LATEST_JOBS_END -->', sitemapLatest);
    sitemapHtml = replaceStaticRegion(sitemapHtml, '<!-- STATIC_SITEMAP_ADMIT_CARD_START -->', '<!-- STATIC_SITEMAP_ADMIT_CARD_END -->', sitemapAdmit);
    sitemapHtml = replaceStaticRegion(sitemapHtml, '<!-- STATIC_SITEMAP_RESULT_START -->', '<!-- STATIC_SITEMAP_RESULT_END -->', sitemapResult);
    sitemapHtml = replaceStaticRegion(sitemapHtml, '<!-- STATIC_SITEMAP_ANSWER_KEY_START -->', '<!-- STATIC_SITEMAP_ANSWER_KEY_END -->', sitemapAnswerKey);
    sitemapHtml = replaceStaticRegion(sitemapHtml, '<!-- STATIC_SITEMAP_SYLLABUS_START -->', '<!-- STATIC_SITEMAP_SYLLABUS_END -->', sitemapSyllabus);
    sitemapHtml = replaceStaticRegion(sitemapHtml, '<!-- STATIC_SITEMAP_YOJANA_START -->', '<!-- STATIC_SITEMAP_YOJANA_END -->', sitemapYojana);

    fs.writeFileSync(sitemapHtmlPath, sitemapHtml, 'utf8');
    console.log("Successfully pre-rendered static index directory inside sitemap.html");
  }

  // Pre-render yojana.html
  if (fs.existsSync(yojanaHtmlPath)) {
    let yojanaHtml = fs.readFileSync(yojanaHtmlPath, 'utf8');

    const yojanaGridHtml = yojanaList
      .map(scheme => `      <div class="yojana-card" id="${scheme.id}">
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
      </div>`)
      .join("\n");

    yojanaHtml = replaceStaticRegion(yojanaHtml, '<!-- STATIC_YOJANA_GRID_START -->', '<!-- STATIC_YOJANA_GRID_END -->', yojanaGridHtml);

    fs.writeFileSync(yojanaHtmlPath, yojanaHtml, 'utf8');
    console.log("Successfully pre-rendered static welfare schemes inside yojana.html");
  }
} catch (preErr) {
  console.error("Error during static pre-rendering process:", preErr);
}

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
