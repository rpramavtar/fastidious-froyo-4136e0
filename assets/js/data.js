// Government Jobs Portal - Centralized Mock Database
const portalData = {
  // Collection of all postings (Jobs, Admit Cards, Results, Answer Keys, Syllabus)
  items: [
    {
      id: "ssc-cgl-2026",
      title: "SSC CGL 2026 Online Application Form",
      shortTitle: "SSC CGL 2026",
      department: "Staff Selection Commission (SSC)",
      postDate: "2026-06-10",
      lastDate: "2026-07-10",
      totalVacancies: 17727,
      category: "Latest Jobs", // "Latest Jobs" | "Admit Card" | "Result" | "Answer Key" | "Syllabus"
      subCategory: "SSC", // "UPSC" | "SSC" | "Railway" | "Banking" | "State Wise" | "Central"
      state: "All India",
      isTrending: true,
      applicationFee: {
        "General / OBC / EWS": "₹100",
        "SC / ST / PH": "₹0 (Exempted)",
        "All Category Female": "₹0 (Exempted)",
        "Payment Mode": "Online via Net Banking, Credit Card, Debit Card, or UPI"
      },
      importantDates: {
        "Application Begin": "10/06/2026",
        "Last Date for Apply Online": "10/07/2026 (11:00 PM)",
        "Last Date for Fee Payment": "11/07/2026",
        "Correction Window Dates": "15-16 July 2026",
        "Exam Date Tier I": "September - October 2026",
        "Exam Date Tier II": "To be notified later"
      },
      ageLimit: {
        "Minimum Age": "18 Years (Post Wise)",
        "Maximum Age": "27, 30 or 32 Years (Post Wise)",
        "Age Cut-off Date": "As on 01/08/2026",
        "Age Relaxation": "Extra as per Staff Selection Commission (SSC) CGL Rules"
      },
      qualification: "Bachelor's Degree (Graduation) in any stream from a recognized University in India. (Certain posts require specific subject specialization).",
      salary: "Pay Level 4 to 8 (₹25,500 to ₹1,51,100 per month) plus allowances.",
      selectionProcess: "1. Tier-I Computer Based Exam (Qualifying)\n2. Tier-II Computer Based Exam & Speed Typing Test\n3. Document Verification",
      examPattern: "Tier-I: 100 Objective Questions (200 Marks) in 1 hour. Subjects: Reasoning (25 Q), Quantitative Aptitude (25 Q), English (25 Q), General Awareness (25 Q).\nTier-II: Paper-I (Compulsory for all posts) - Section 1: Maths & Reasoning (60 Q); Section 2: English & General Awareness (70 Q); Section 3: Computer Knowledge (20 Q) & Data Entry Speed Test.",
      syllabus: "Quantitative Aptitude: Arithmetic & Advanced Algebra, Geometry, Trigonometry, Data Interpretation. Reasoning: Analogies, Venn Diagrams, Syllogisms, Pattern Completion. English: Synonyms, Antonyms, Spotting Errors, Reading Comprehension. General Awareness: Current Affairs, History, Geography, Polity, Science.",
      faqs: [
        { q: "Can final year college students apply for SSC CGL 2026?", a: "Yes, final year students can apply provided they acquire the essential qualification on or before the cut-off date specified in the official notification." },
        { q: "Is there any negative marking in SSC CGL Tier-I?", a: "Yes, there is a negative marking of 0.50 marks for each wrong answer in the Tier-I examination." },
        { q: "What is the application fee for female candidates?", a: "All female candidates (General, OBC, SC, ST, EWS) are completely exempted from paying the application fee." }
      ],
      links: {
        "Apply Online": "https://ssc.gov.in",
        "Download Notification": "https://ssc.gov.in/api/attachment/uploads/portal/pressRelease/pdf/Notice_CGL_2026.pdf",
        "Official Website": "https://ssc.gov.in"
      }
    },
    {
      id: "upsc-cse-pre-admit-card-2026",
      title: "UPSC Civil Services (IAS/IFS) Pre Exam Admit Card 2026",
      shortTitle: "UPSC IAS Pre Admit Card 2026",
      department: "Union Public Service Commission (UPSC)",
      postDate: "2026-06-08",
      lastDate: "2026-06-25",
      totalVacancies: 1056,
      category: "Admit Card",
      subCategory: "UPSC",
      state: "All India",
      isTrending: true,
      applicationFee: {
        "Notification": "Admit Cards are free to download for all candidates who successfully registered."
      },
      importantDates: {
        "Admit Card Available": "08/06/2026",
        "Exam Date": "25/06/2026",
        "Mains Exam Date": "September 2026"
      },
      ageLimit: {
        "Info": "Not applicable for downloading admit cards. Registered candidates must check their allotted exam center on the admit card."
      },
      qualification: "Must have qualified UPSC Civil Services 2026 Registration Phase.",
      salary: "IAS Officer Pay Matrix Level 10 (₹56,100 starting basic pay) plus DA, HRA, and other perks.",
      selectionProcess: "1. Preliminary Exam (Objective - CSAT & GS)\n2. Main Written Exam (Descriptive)\n3. Personality Test (Interview)",
      examPattern: "Prelims: Paper-I General Studies (200 Marks) & Paper-II CSAT (200 Marks, qualifying with 33%). Both papers are objective multiple-choice.",
      syllabus: "Paper-I: History, Geography, Indian Polity, Economics, Environment, Science & Tech, Current Affairs.\nPaper-II: Reading Comprehension, Logical Reasoning, Quantitative Aptitude (Class 10 level), Decision Making.",
      faqs: [
        { q: "How do I download my UPSC Civil Services Admit Card?", a: "Visit the official UPSC website (upsconline.nic.in), enter your Registration ID or Roll Number along with your Date of Birth, and submit to download the PDF." },
        { q: "What documents must be carried to the exam center?", a: "You must carry a printed copy of the Admit Card along with the original photo identity card mentioned in the registration form (e.g., Aadhaar Card, PAN Card, Voter ID)." }
      ],
      links: {
        "Download Admit Card (Server 1)": "https://upsconline.nic.in/eadmitcard/sublogin.php?exam_code=CSP26",
        "Download Admit Card (Server 2)": "https://upsc.gov.in",
        "Official Website": "https://upsc.gov.in"
      }
    },
    {
      id: "rrb-ntpc-recruitment-2026",
      title: "Railway RRB NTPC Graduate & Under Graduate Posts Recruit 2026",
      shortTitle: "Railway RRB NTPC 2026",
      department: "Railway Recruitment Boards (RRB)",
      postDate: "2026-06-05",
      lastDate: "2026-07-05",
      totalVacancies: 11558,
      category: "Latest Jobs",
      subCategory: "Railway",
      state: "All India",
      isTrending: true,
      applicationFee: {
        "General / OBC / EWS": "₹500 (₹400 refunded after CBT Stage-I)",
        "SC / ST / Ex-Servicemen / Female / EBC / PH": "₹250 (Full ₹250 refunded after CBT Stage-I)",
        "Payment Mode": "Online using Debit/Credit Card, Internet Banking, or UPI"
      },
      importantDates: {
        "Application Begin": "05/06/2026",
        "Last Date for Apply Online": "05/07/2026",
        "Last Date Pay Exam Fee": "06/07/2026",
        "Exam Date CBT 1": "October - December 2026"
      },
      ageLimit: {
        "Under Graduate Posts Age Limit": "18-30 Years",
        "Graduate Posts Age Limit": "18-33 Years",
        "Age Relaxation": "As per Government Rules (OBC - 3 years, SC/ST - 5 years)"
      },
      qualification: "Under Graduate Posts: 12th Class Pass. Graduate Posts: Bachelor's Degree in any stream from a recognized University.",
      salary: "Undergraduate Posts: ₹19,900 - ₹21,700 basic pay. Graduate Posts: ₹25,500 - ₹35,400 basic pay plus DA and HRA.",
      selectionProcess: "1. Computer Based Test Stage-1 (CBT-1)\n2. Computer Based Test Stage-2 (CBT-2)\n3. Skill Test (Typing Test or Computer-Based Aptitude Test depending on post)\n4. Document Verification & Medical Examination",
      examPattern: "CBT-1: 100 Questions (90 Minutes) - Mathematics (30 Q), General Intelligence & Reasoning (30 Q), General Awareness (40 Q).\nCBT-2: 120 Questions (90 Minutes) - Mathematics (35 Q), Reasoning (35 Q), General Awareness (50 Q).",
      syllabus: "Mathematics: Number System, Decimals, Fractions, LCM, HCF, Ratio & Proportion, Percentage, Mensuration, Time & Work, Time & Distance, Profit & Loss. Reasoning: Analogies, Coding-Decoding, Relationships, Syllogisms, Jumbling. General Awareness: Current Events, Sports, Art & Culture of India, General Science.",
      faqs: [
        { q: "Will I get an application fee refund if I do not appear for the exam?", a: "No, the fee refund is only applicable to candidates who actually appear for the Stage-1 CBT." },
        { q: "Is there a negative marking in RRB NTPC?", a: "Yes, there is a negative marking of 1/3rd mark for each incorrect answer in both CBT-1 and CBT-2." }
      ],
      links: {
        "Apply Online (All Zones)": "https://www.rrbapply.gov.in",
        "Download PDF Notification": "https://www.rrbapply.gov.in/notifications/ntpc_2026.pdf",
        "Official Website": "https://indianrailways.gov.in"
      }
    },
    {
      id: "ibps-po-xiv-recruitment-2026",
      title: "IBPS Probationary Officers PO XIV Recruitment 2026 Online Form",
      shortTitle: "IBPS PO XIV Online Form 2026",
      department: "Institute of Banking Personnel Selection (IBPS)",
      postDate: "2026-06-01",
      lastDate: "2026-06-21",
      totalVacancies: 4455,
      category: "Latest Jobs",
      subCategory: "Banking",
      state: "All India",
      isTrending: false,
      applicationFee: {
        "General / OBC / EWS": "₹850",
        "SC / ST / PWBD": "₹175",
        "Payment Mode": "Online via Net Banking, Debit/Credit Card, or Mobile Wallets/UPI"
      },
      importantDates: {
        "Application Begin": "01/06/2026",
        "Last Date for Apply": "21/06/2026",
        "Preliminary Exam Date": "October 2026",
        "Main Exam Date": "November 2026",
        "Interview Date": "January / February 2027"
      },
      ageLimit: {
        "Minimum Age": "20 Years",
        "Maximum Age": "30 Years",
        "Age Relaxation": "Standard banking norms (OBC: 3 years, SC/ST: 5 years, PwD: 10 years)"
      },
      qualification: "A Degree (Graduation) in any discipline from a University recognized by the Govt. of India or any equivalent qualification recognized as such by the Central Government.",
      salary: "Starting Basic Pay is ₹36,000 per month (Scale I). Gross salary including allowances is approx ₹52,000 to ₹57,000 per month.",
      selectionProcess: "1. Preliminary Examination (Online Objective Test)\n2. Main Examination (Online Objective + Descriptive Test)\n3. Common Interview",
      examPattern: "Prelims: 100 Questions (100 Marks) in 1 hour with sectional time limits (20 mins each) - English (30 Q), Quantitative Aptitude (35 Q), Reasoning Ability (35 Q).\nMains: 155 Questions (200 Marks) in 3 hours + English Descriptive Essay & Letter (2 Questions, 25 Marks, 30 Minutes).",
      syllabus: "Quantitative Aptitude: Data Interpretation, Quadratic Equations, Number Series, Simplification, Commercial Maths. Reasoning: Puzzles, Seating Arrangements, Syllogisms, Coding-Decoding, Input-Output. English: Reading Comprehension, Cloze Test, Error Detection, Fillers. General/Economy/Banking Awareness: Financial terms, RBI guidelines, Current Events.",
      faqs: [
        { q: "Are there sectional cut-offs in IBPS PO Exam?", a: "Yes, candidates must secure passing marks in each of the three tests in the Preliminary exam, and all tests in the Mains exam, to be shortlisted." },
        { q: "Is the exam bilingual?", a: "Yes, all tests except the English Language tests are available in English, Hindi, and regional languages depending on the state of vacancy." }
      ],
      links: {
        "Apply Online": "https://ibps.in",
        "Download Notification PDF": "https://ibps.in/wp-content/uploads/Notification_PO_XIV.pdf",
        "Official Website": "https://ibps.in"
      }
    },
    {
      id: "up-police-constable-result-2026",
      title: "UP Police Constable Written Exam Result 2026 with Cut Off Marks",
      shortTitle: "UP Police Constable Result 2026",
      department: "Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB)",
      postDate: "2026-06-09",
      lastDate: "2026-07-30",
      totalVacancies: 60244,
      category: "Result",
      subCategory: "State Wise",
      state: "Uttar Pradesh",
      isTrending: true,
      applicationFee: {
        "Info": "Result checking is completely free. Successful candidates will move to the Physical Efficiency Test (PET/PST)."
      },
      importantDates: {
        "Exam Dates": "February 2026",
        "Written Result Declared": "09/06/2026",
        "Document Verification & PET Dates": "July 2026"
      },
      ageLimit: {
        "Info": "Checked during initial recruitment. Age limits were 18-25 for males, 18-28 for females at time of application."
      },
      qualification: "Must have cleared the Written Examination with scores above the category-wise cut-off.",
      salary: "Pay Matrix Band-1 (₹5,200 - ₹20,200) with Grade Pay ₹2,000 (Revised Level 3: ₹21,700 starting basic pay) plus allowances.",
      selectionProcess: "1. Written Examination (Completed)\n2. Document Verification (DV) & Physical Standard Test (PST)\n3. Physical Efficiency Test (PET - Run)\n4. Medical & Character Verification",
      examPattern: "Written exam consisted of 150 questions (300 Marks) with 2 hours duration. Subjects: General Knowledge, General Hindi, Numerical & Mental Ability, Mental Aptitude & Reasoning.",
      syllabus: "PET Standard: Male candidates must run 4.8 km in 25 minutes. Female candidates must run 2.4 km in 14 minutes. Height requirements: General/OBC Male (168 cm), SC Male (168 cm), ST Male (160 cm); Females: Gen/OBC/SC (152 cm), ST (147 cm).",
      faqs: [
        { q: "What are the cut-off marks for UP Police Constable Written Exam 2026?", a: "Cut-offs: General - 188.5, OBC - 173.2, EWS - 175.0, SC - 144.3, ST - 113.1 out of 300 marks." },
        { q: "How do I check my result card?", a: "Go to the official UPPRPB link, enter your registration ID and Date of Birth, verify the captcha, and view your scorecard/qualification status." }
      ],
      links: {
        "Check Written Exam Result (Server 1)": "https://uppbpb.gov.in",
        "Download Cut-Off PDF Notice": "https://uppbpb.gov.in/notices/Constable_Result_Cutoff.pdf",
        "Official Website": "https://uppbpb.gov.in"
      }
    },
    {
      id: "ctet-july-answer-key-2026",
      title: "CTET July 2026 Official Answer Key, Question Paper & OMR Sheet",
      shortTitle: "CTET July 2026 Answer Key",
      department: "Central Board of Secondary Education (CBSE)",
      postDate: "2026-06-11",
      lastDate: "2026-06-15",
      totalVacancies: 0, // CTET is an eligibility exam, no direct vacancy counts
      category: "Answer Key",
      subCategory: "Central",
      state: "All India",
      isTrending: false,
      applicationFee: {
        "Key Challenge Fee": "₹1000 per challenged question (Refundable if challenge is accepted)"
      },
      importantDates: {
        "Exam Date": "05/06/2026",
        "Provisional Answer Key Release": "11/06/2026",
        "Objection Window Closing": "15/06/2026",
        "Final Result Declaration": "July 2026"
      },
      ageLimit: {
        "Info": "No Age Limit for appearing in CTET. Valid for lifetime once qualified."
      },
      qualification: "Paper I (Primary: Classes 1-5): Senior Secondary with 50% marks + 2-year Diploma in Elementary Education OR Bachelor's Degree + B.Ed. Paper II (Elementary: Classes 6-8): Graduation + 2-year Diploma in Elementary Education OR B.Ed.",
      salary: "CTET qualification enables applying for Central/State Govt teaching jobs (PRT, TGT) with salaries ranging from Level 6 to Level 8 (₹35,400 to ₹47,600 basic pay).",
      selectionProcess: "Based on qualifying marks. General category candidates must score 60% (90/150 marks). OBC/SC/ST/Differently-abled must score 55% (82/150 marks).",
      examPattern: "OMR Based Offline Test. 150 Multiple Choice Questions, 150 Marks. Duration: 2.5 hours. No negative marking. Paper I covers Child Development, Maths, EVS, and two Languages. Paper II covers Child Development, Science & Maths or Social Studies, and two Languages.",
      syllabus: "Child Development and Pedagogy (30 Q), Language I (30 Q), Language II (30 Q), Mathematics/Environmental Studies or Social Sciences (60 Q). Pedagogy concepts form 50% of the syllabus weight.",
      faqs: [
        { q: "What is the validity period of the CTET Certificate?", a: "The validity of the CTET qualifying certificate for appointment is for lifetime for all categories." },
        { q: "How can I download my OMR sheet copy?", a: "Log in with your Roll Number and Date of Birth on ctet.nic.in during the answer key challenge window to download your scanned OMR image." }
      ],
      links: {
        "Download Official Answer Key PDF": "https://ctet.nic.in/downloads/Answer_Key_July_2026.pdf",
        "Submit Answer Key Objections": "https://ctet.nic.in/key-challenge-2026",
        "Official Website": "https://ctet.nic.in"
      }
    },
    {
      id: "bihar-bssc-inter-level-admit-card",
      title: "Bihar BSSC 2nd Inter Level Pre Exam Admit Card 2026",
      shortTitle: "BSSC Inter Level Admit Card 2026",
      department: "Bihar Staff Selection Commission (BSSC)",
      postDate: "2026-06-11",
      lastDate: "2026-06-30",
      totalVacancies: 12199,
      category: "Admit Card",
      subCategory: "State Wise",
      state: "Bihar",
      isTrending: true,
      applicationFee: {
        "Info": "Free to download. Enter your Registration Number and Password/Date of Birth."
      },
      importantDates: {
        "Admit Card Available": "11/06/2026",
        "Exam Dates": "22/06/2026 to 28/06/2026",
        "Result Date": "August 2026"
      },
      ageLimit: {
        "Checked at Application": "Minimum 18 Years, Maximum 37 Years for General Male, 40 Years for General Female/OBC, 42 Years for SC/ST."
      },
      qualification: "Intermediate (10+2) pass from a recognized board. Typing and computer typing knowledge is required for clerk/typist posts.",
      salary: "Pay Level 2 to Level 4 (₹19,900 to ₹81,100) based on specific clerical post.",
      selectionProcess: "1. Preliminary Objective Written Exam\n2. Mains Examination\n3. Typing Skill Test / Computer Test (where applicable)\n4. Document Verification",
      examPattern: "Prelims: 150 Questions, 4 marks each (Total 600 marks) in 2 hours 15 minutes. Negative marking of 1 mark for each wrong answer. Sections: General Studies (50 Q), General Science & Maths (50 Q), Mental Ability/Reasoning (50 Q).",
      syllabus: "General Studies: History of India & Bihar, Geography, Polity, Neighboring Countries, Sports, Awards. Science & Math: Physics, Chemistry, Biology, Percentages, Ratio/Proportion, Average, Simplification. Reasoning: Analogies, Syllogisms, Series, Coding-Decoding.",
      faqs: [
        { q: "What should I do if my BSSC Admit Card has spelling errors?", a: "Immediately contact the BSSC helpline or email the commission with your registration details and proof of correction application before the exam date." },
        { q: "Can I enter the exam center with a digital copy of the admit card?", a: "No, a hard copy printed on paper is mandatory. Digital copies on mobile phones are strictly prohibited." }
      ],
      links: {
        "Download BSSC Admit Card Link": "https://bssc.bihar.gov.in",
        "Download Exam Schedule PDF": "https://bssc.bihar.gov.in/notices/Exam_Schedule_Inter_Level.pdf",
        "Official Website": "https://bssc.bihar.gov.in"
      }
    },
    {
      id: "upsc-civil-services-syllabus-2026",
      title: "UPSC Civil Services IAS & IFS Exam Syllabus 2026 PDF",
      shortTitle: "UPSC IAS Syllabus 2026",
      department: "Union Public Service Commission (UPSC)",
      postDate: "2026-05-15",
      lastDate: "2026-12-31",
      totalVacancies: 1056,
      category: "Syllabus",
      subCategory: "UPSC",
      state: "All India",
      isTrending: false,
      applicationFee: {
        "Info": "Syllabus details are free to view and download."
      },
      importantDates: {
        "Release Date": "01/01/2026",
        "Exam Prelims": "25/06/2026",
        "Exam Mains": "September 2026"
      },
      ageLimit: {
        "Info": "Not applicable for syllabus reference."
      },
      qualification: "Graduation degree holder or final year appearing students.",
      salary: "Starts from Pay Level 10 (₹56,100 onwards) in IAS, IPS, IFS cadre.",
      selectionProcess: "Written exam and interview stages.",
      examPattern: "Detailed structural distribution: Prelims (GS-I 100 Q, CSAT 80 Q, qualifying), Mains (9 Descriptive papers, including 2 qualifying language papers, 1 Essay, 4 GS Papers, 2 Optional Subject papers. Total 1750 marks), Interview (275 marks).",
      syllabus: "General Studies I (Mains): Indian Heritage & Culture, History & Geography of the World, Society. General Studies II: Governance, Constitution, Polity, Social Justice, International Relations. General Studies III: Technology, Economic Development, Bio-diversity, Environment, Security, Disaster Management. General Studies IV: Ethics, Integrity, Aptitude.",
      faqs: [
        { q: "Is the IAS CSAT paper marks counted for Prelims ranking?", a: "No, the Civil Services Aptitude Test (CSAT/Paper II) is qualifying in nature. You only need to score 33% (66 marks out of 200) to clear it. Ranking is done on GS-I marks only." },
        { q: "Can I write the Mains answers in my mother tongue?", a: "Yes, candidates can choose to write their responses in any of the languages listed in the Eighth Schedule of the Indian Constitution." }
      ],
      links: {
        "Download Official Syllabus PDF": "https://upsc.gov.in/sites/default/files/Syllabus_UPSC_CSE_2026.pdf",
        "UPSC Mains Optional List PDF": "https://upsc.gov.in",
        "Official Website": "https://upsc.gov.in"
      }
    },
    {
      id: "neet-ug-result-2026",
      title: "NTA NEET UG 2026 Score Card, AIR Rank & Category Wise Cut Off",
      shortTitle: "NTA NEET UG Result 2026",
      department: "National Testing Agency (NTA)",
      postDate: "2026-06-03",
      lastDate: "2026-07-20",
      totalVacancies: 110000, // Approximate MBBS/BDS/AYUSH seats
      category: "Result",
      subCategory: "Central",
      state: "All India",
      isTrending: true,
      applicationFee: {
        "Counselling Fee": "Separate fee applicable at respective state and MCC websites for seat allocation."
      },
      importantDates: {
        "Exam Date": "03/05/2026",
        "Answer Key Released": "25/05/2026",
        "Result Declared": "03/06/2026",
        "MCC Counselling Begins": "July 2026"
      },
      ageLimit: {
        "Minimum Age": "17 Years complete on or before 31st December of year of admission.",
        "Maximum Age": "No upper age limit for NEET UG exam."
      },
      qualification: "Passed or appearing in 10+2 with Physics, Chemistry, Biology/Biotechnology, and English as core subjects with minimum 50% marks (40% for SC/ST/OBC).",
      salary: "Not applicable. Successful completion of MBBS leads to medical internships and residencies paying stipend ₹20,000 - ₹90,000/month depending on state/hospital.",
      selectionProcess: "Single National Eligibility cum Entrance Test (NEET-UG) written exam followed by national (MCC) and state level counselling registrations.",
      examPattern: "Pen & Paper (OMR) offline test. 200 Questions (attempt 180 Questions) in 3 hours 20 minutes. Total Marks: 720. Physics (45 Q), Chemistry (45 Q), Biology (90 Q: Botany 45 + Zoology 45). +4 for correct, -1 for wrong.",
      syllabus: "Based on CBSE Class 11 and 12 Syllabus. Physics: Mechanics, Thermodynamics, Optics, Modern Physics. Chemistry: Physical, Inorganic and Organic Chemistry. Biology: Plant/Animal Kingdom, Genetics, Human Physiology, Ecology.",
      faqs: [
        { q: "What is the NEET UG 2026 Cutoff Percentile?", a: "Qualifying percentile: General Category - 50th Percentile, SC/ST/OBC - 40th Percentile, UR-PH - 45th Percentile." },
        { q: "How can I access my scorecard copy?", a: "Go to exams.nta.ac.in/NEET, log in with your application number, DOB, and pin. You can download and print the Rank Card from your dashboard." }
      ],
      links: {
        "Check Score Card & Rank List": "https://exams.nta.ac.in/NEET",
        "Download Cut-Off Analytics PDF": "https://exams.nta.ac.in",
        "Official MCC Counselling Link": "https://mcc.nic.in"
      }
    }
  ],

  // Sarkari Yojana (Schemes) list
  yojana: [
    {
      id: "pm-kisan-yojana",
      title: "PM Kisan Samman Nidhi Yojana 2026",
      shortDescription: "Get financial benefit of ₹6000 per year directly to bank accounts of landholder farmer families.",
      benefit: "₹6,000 per year in 3 equal installments of ₹2,000 each.",
      eligibility: "Small and marginal farmers holding cultivable land in their names. Excludes institutional landowners, taxpayers, retired employees, etc.",
      documents: "Aadhaar Card, Land Registry Papers, Bank Account Passbook, Mobile Number linked with Aadhaar.",
      howToApply: "1. Visit pmkisan.gov.in.\n2. Click on 'New Farmer Registration'.\n3. Enter Aadhaar and mobile, fill state and district registry fields, submit land survey numbers, and link bank account.\n4. Complete e-KYC using OTP or biometric verification.",
      officialLink: "https://pmkisan.gov.in",
      lastUpdate: "June 2026"
    },
    {
      id: "pm-awas-yojana",
      title: "Pradhan Mantri Awas Yojana (PMAY-2026)",
      shortDescription: "Providing affordable housing with basic amenities to urban and rural poor families in India.",
      benefit: "Financial assistance up to ₹1.2 Lakh (Rural areas) and ₹2.67 Lakh (Urban interest subsidy on loans) to build permanent concrete houses.",
      eligibility: "Economically Weaker Section (EWS) / LIG / MIG families not owning a concrete brick (Pucca) house in any part of India.",
      documents: "Identity proof, Address proof, Income certificate, affidavit of not owning a pucca house, bank account, land certificate (for PMAY-G).",
      howToApply: "Apply online at pmaymis.gov.in for urban, or register through Gram Panchayat secretary/representative using PMAY-G app for rural.",
      officialLink: "https://pmaymis.gov.in",
      lastUpdate: "May 2026"
    },
    {
      id: "ayushman-bharat-yojana",
      title: "Ayushman Bharat PM Jan Arogya Yojana (PM-JAY)",
      shortDescription: "World's largest government-funded healthcare scheme providing health insurance cover to poor citizens.",
      benefit: "Free health cover up to ₹5,00,000 (Five Lakhs) per family per year for secondary and tertiary care hospitalization.",
      eligibility: "Families identified in SECC 2011 database, including rural poor, urban laborers, street vendors, ragpickers, etc.",
      documents: "Aadhaar Card, Ration Card, Ayushman Card (PM-JAY Card), Active Mobile Number.",
      howToApply: "Check eligibility online at pmjay.gov.in using Aadhaar/Ration Card. If eligible, visit nearest Common Service Centre (CSC) or empaneled hospital to get the Ayushman Golden Card.",
      officialLink: "https://pmjay.gov.in",
      lastUpdate: "April 2026"
    },
    {
      id: "lakhpati-didi-scheme",
      title: "Lakhpati Didi Scheme 2026",
      shortDescription: "Empowering rural women self-help group members to earn a sustainable income of at least ₹1 Lakh per year.",
      benefit: "Interest-free loans up to ₹5 Lakh, training in technical fields (drones, farming, crafts, led lights), financial planning guidance, and market access.",
      eligibility: "Women who are active members of Self-Help Groups (SHGs) across India.",
      documents: "Aadhaar Card, SHG Membership Certificate, Bank Account Passbook, Income Certificate, Mobile Number.",
      howToApply: "Apply offline by contacting the local Self Help Group coordinator or block development officer under National Rural Livelihoods Mission (NRLM).",
      officialLink: "https://lakhpatididi.gov.in",
      lastUpdate: "June 2026"
    }
  ],

  // Notifications or ticker messages
  announcements: [
    "🔥 SSC CGL 2026 Online Form Last Date is 10 July 2026. Apply now to avoid heavy server traffic!",
    "📢 UPSC Civil Services Preliminary Admit Card 2026 Released! Download now.",
    "👉 UP Police Constable Written Exam Results announced. Cut-offs and PET dates inside.",
    "🚀 Railway NTPC Graduate & Under Graduate Posts 11,558 Vacancies Released! Registration is open.",
    "✅ CTET July 2026 Official provisional Answer Key uploaded. Submit challenges by June 15.",
    "⚡ NTA NEET UG 2026 Scorecard and AIR Rank details updated."
  ]
};

// Expose portalData to window for global access
if (typeof window !== 'undefined') {
  window.portalData = portalData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = portalData;
}
