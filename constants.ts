import { PYQ, StudyNote, UpdateItem, QuizQuestion, PYQPdf, TestPaper } from './types';

// Central Repository Link provided by user (Fallback)
export const PYQ_DRIVE_LINK = "https://drive.google.com/drive/folders/1EqoxILI0CvhN6mt2-4Cl9b3BedkUaAIC?usp=sharing";

export const MOCK_UPDATES: UpdateItem[] = [
  {
    id: '1',
    title: 'MPSC Rajyaseva Prelims 2024 Date Announced',
    category: 'Exam Update',
    date: '2024-05-20',
    description: 'The preliminary examination is scheduled for August 25th, 2024. Hall tickets will be available 10 days prior.'
  },
  {
    id: '2',
    title: 'New Recruitment for STI Posts',
    category: 'Job Alert',
    date: '2024-05-18',
    description: 'Maharashtra Public Service Commission has released a notification for 200+ STI vacancies.'
  },
  {
    id: '3',
    title: 'Current Affairs: G20 Summit Highlights',
    category: 'News',
    date: '2024-05-15',
    description: 'Key takeaways from the recent G20 summit relevant for the General Studies paper.'
  }
];

export const MOCK_NOTES: StudyNote[] = [
  {
    id: '1',
    title: 'History of Maratha Empire',
    subject: 'History',
    content: `# History of Maratha Empire\n\nThe Maratha Empire was a power that dominated a large portion of the Indian subcontinent in the 18th century. The empire formally began from 1674 with the coronation of Chhatrapati Shivaji.\n\n## Key Rulers\n- **Chhatrapati Shivaji Maharaj**: The founder.\n- **Sambhaji Maharaj**: Son of Shivaji.\n- **Peshwas**: Prime Ministers who became de facto rulers.`,
    readTime: '10 min'
  },
  {
    id: '2',
    title: 'Geography of Maharashtra',
    subject: 'Geography',
    content: `# Geography of Maharashtra\n\nMaharashtra is the third largest state in India by area.\n\n## Physical Divisions\n1. **Konkan Coast**: Narrow coastal strip.\n2. **Western Ghats (Sahyadri)**: Mountain range running parallel to the coast.\n3. **Deccan Plateau**: The vast plateau region.`,
    readTime: '15 min'
  },
  {
    id: '3',
    title: 'Indian Polity: Fundamental Rights',
    subject: 'Polity',
    content: `# Fundamental Rights\n\nPart III of the Indian Constitution guarantees fundamental rights to all citizens.\n\n- Right to Equality (Articles 14-18)\n- Right to Freedom (Articles 19-22)\n- Right against Exploitation (Articles 23-24)\n- Right to Freedom of Religion (Articles 25-28)`,
    readTime: '12 min'
  },
  {
    id: '4',
    title: 'Basics of Indian Economy',
    subject: 'Economics',
    content: `# Indian Economy Overview\n\nIndia is a mixed economy. It is the world's fifth-largest economy by nominal GDP.\n\n## Key Concepts\n- **GDP**: Gross Domestic Product.\n- **Inflation**: The rate at which prices rise.\n- **RBI**: The central banking institution, responsible for monetary policy.`,
    readTime: '14 min'
  }
];

export const TEST_PAPERS: TestPaper[] = [
  // Mock Tests
  { id: 'm1', title: 'MPSC Full Length Mock Test 1', category: 'MOCK', questionsCount: 100, durationMinutes: 120 },
  { id: 'm2', title: 'MPSC Full Length Mock Test 2', category: 'MOCK', questionsCount: 100, durationMinutes: 120 },
  { id: 'm3', title: 'GS Special Mock: History & Polity', category: 'MOCK', questionsCount: 50, durationMinutes: 60 },
  
  // PYQ Tests
  { id: 'p1', title: 'Rajyaseva Prelims 2023 Paper 1', category: 'PYQ', questionsCount: 100, durationMinutes: 120 },
  { id: 'p2', title: 'Rajyaseva Prelims 2022 Paper 1', category: 'PYQ', questionsCount: 100, durationMinutes: 120 },
  { id: 'p3', title: 'Combined Group B Prelims 2023', category: 'PYQ', questionsCount: 100, durationMinutes: 60 },
  
  // Long Tests
  { id: 'l1', title: 'Rajyaseva GS-1 Full Paper (History, Geo, Agri)', category: 'LONG', questionsCount: 150, durationMinutes: 120 },
  { id: 'l2', title: 'Rajyaseva GS-2 Full Paper (Polity & Law)', category: 'LONG', questionsCount: 150, durationMinutes: 120 },
  { id: 'l3', title: 'Combined Group B GS Full Syllabus', category: 'LONG', questionsCount: 100, durationMinutes: 60 },

  // Quizzes
  { id: 'q1', title: 'Daily History Quiz: 25 May', category: 'QUIZ', questionsCount: 10, durationMinutes: 5 },
  { id: 'q2', title: 'Daily Polity Quiz: 24 May', category: 'QUIZ', questionsCount: 10, durationMinutes: 5 },
  { id: 'q3', title: 'Current Affairs Weekly Quiz', category: 'QUIZ', questionsCount: 20, durationMinutes: 10 },
];

export const MOCK_PYQ_PDFS: PYQPdf[] = [
  // Rajyaseva 2025
  { 
    id: 'rj-2025-p1', 
    year: 2025, 
    title: 'Rajyaseva Prelims 2025 GS (Paper 1)', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2025_GS.pdf',
    downloadUrl: 'https://drive.google.com/file/d/129VSyxzhyaFNA-xgtWVsCrnb_XF4_cGK/view?usp=drive_link'
  },
  { 
    id: 'rj-2025-p2', 
    year: 2025, 
    title: 'Rajyaseva Prelims 2025 CSAT (Paper 2)', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2025_CSAT.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1qbRGrBxQCNTJ_FoZDReWGXF1Z9ul9-Q5/view?usp=drive_link'
  },

  // Rajyaseva 2024
  { 
    id: 'rj-2024-p1', 
    year: 2024, 
    title: 'Rajyaseva Prelims 2024 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2024_GS_E21.pdf',
    downloadUrl: 'https://drive.google.com/file/d/160t-JDqbkkqx7gEhHYkXdgYBbt9GQ5u-/view?usp=drive_link'
  },
  { 
    id: 'rj-2024-p2', 
    year: 2024, 
    title: 'Rajyaseva Prelims 2024 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2024_CSAT.pdf',
    downloadUrl: 'https://drive.google.com/file/d/10s8WvFYDmpOjTuMTsqdvnUZoUpl9SlY0/view?usp=drive_link'
  },

  // Rajyaseva 2023
  { 
    id: 'rj-2023-p1', 
    year: 2023, 
    title: 'Rajyaseva Prelims 2023 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2023_GS_R17.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1RAUYDe-eZ0gCH1fBceqNJL68Y1UYSMWt/view?usp=drive_link'
  },
  { 
    id: 'rj-2023-p2', 
    year: 2023, 
    title: 'Rajyaseva Prelims 2023 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2023_CSAT.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1TqOM28yZT24_gTx_CGijCg4_dYG0YeQA/view?usp=drive_link'
  },

  // Rajyaseva 2022
  { 
    id: 'rj-2022-p1', 
    year: 2022, 
    title: 'Rajyaseva Prelims 2022 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2022_GS_H15.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1PRpT9muH697D8HLWxRxwGTKPlj3CtnpL/view?usp=drive_link'
  },
  { 
    id: 'rj-2022-p2', 
    year: 2022, 
    title: 'Rajyaseva Prelims 2022 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2022_CSAT_I15.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1DtXo8G4V4hnqFTt3T95kCpKdwG5X1e_O/view?usp=drive_link'
  },

  // Rajyaseva 2021
  { 
    id: 'rj-2021-p1', 
    year: 2021, 
    title: 'Rajyaseva Prelims 2021 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2021_GS_014.pdf',
    downloadUrl: 'https://drive.google.com/file/d/17LOVn9cNMnJ1ZEElzFlMs6ppYU8IUjc5/view?usp=drive_link'
  },
  { 
    id: 'rj-2021-p2', 
    year: 2021, 
    title: 'Rajyaseva Prelims 2021 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2021_CSAT_P14.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1y2431JVgov4ZuS8MNTZr5VFeA9lPkRyT/view?usp=drive_link'
  },

  // Rajyaseva 2020
  { 
    id: 'rj-2020-p1', 
    year: 2020, 
    title: 'Rajyaseva Prelims 2020 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2020_GS_Y13.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1HD0EGKzR4EzuGp6efMHuTUlv1mw-6rj8/view?usp=drive_link'
  },
  { 
    id: 'rj-2020-p2', 
    year: 2020, 
    title: 'Rajyaseva Prelims 2020 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2020_CSAT_U12.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1AjZFKvGzHbv5uLBfCho3DhNmS_Wgaa2T/view?usp=drive_link'
  },

  // Rajyaseva 2019
  { 
    id: 'rj-2019-p1', 
    year: 2019, 
    title: 'Rajyaseva Prelims 2019 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2019_GS_T12.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1Wd0x0fk0oSpBCOvIUib4QJnjFN7mfiRl/view?usp=drive_link'
  },
  { 
    id: 'rj-2019-p2', 
    year: 2019, 
    title: 'Rajyaseva Prelims 2019 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2019_CSAT.pdf',
    downloadUrl: 'https://drive.google.com/file/d/18DtniSMfP8NyLBtxm9xJkaY35eCxCd_5/view?usp=drive_link'
  },

  // Rajyaseva 2018
  { 
    id: 'rj-2018-p1', 
    year: 2018, 
    title: 'Rajyaseva Prelims 2018 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2018_GS.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1B_mmqnUQ25xdb6GtNf8hP-WE0_sUMSi-/view?usp=drive_link'
  },
  { 
    id: 'rj-2018-p2', 
    year: 2018, 
    title: 'Rajyaseva Prelims 2018 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2018_CSAT_G11.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1iurThBjrWm2dPjBTi1YGce4sGK2l41ut/view?usp=drive_link'
  },

  // Rajyaseva 2017
  { 
    id: 'rj-2017-p1', 
    year: 2017, 
    title: 'Rajyaseva Prelims 2017 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2017_GS_W08.pdf',
    downloadUrl: 'https://drive.google.com/file/d/15dUgF7lSLYTfMYD8shW71nkKKgzLniUv/view?usp=drive_link'
  },
  { 
    id: 'rj-2017-p2', 
    year: 2017, 
    title: 'Rajyaseva Prelims 2017 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2017_CSAT_X08.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1ih2azxRwSWkWLLuoUJSx3Eydhnb03u5k/view?usp=drive_link'
  },

  // Rajyaseva 2016
  { 
    id: 'rj-2016-p1', 
    year: 2016, 
    title: 'Rajyaseva Prelims 2016 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2016_GS_N07.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1n93geJyQewtUb4erdfIR4VFR8epDrmAD/view?usp=drive_link'
  },
  { 
    id: 'rj-2016-p2', 
    year: 2016, 
    title: 'Rajyaseva Prelims 2016 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2016_CSAT.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1l3byo4kHtiC-KSIa2sfeEmbTagDMAppW/view?usp=drive_link'
  },

  // Rajyaseva 2015
  { 
    id: 'rj-2015-p1', 
    year: 2015, 
    title: 'Rajyaseva Prelims 2015 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2015_GS_V05.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1s2PAm860E32cAuGTGIxhDnwSX1sf4rGv/view?usp=drive_link'
  },
  { 
    id: 'rj-2015-p2', 
    year: 2015, 
    title: 'Rajyaseva Prelims 2015 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2015_CSAT_W05.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1S_xD6ohdaJjriJ2nGIIEoF1J0iqsYYr3/view?usp=drive_link'
  },

  // Rajyaseva 2014
  { 
    id: 'rj-2014-p1', 
    year: 2014, 
    title: 'Rajyaseva Prelims 2014 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2014_GS.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1iBkbCH64C2v_nbrtIb55rNDkchcPIhFL/view?usp=drive_link'
  },
  { 
    id: 'rj-2014-p2', 
    year: 2014, 
    title: 'Rajyaseva Prelims 2014 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2014_CSAT_HO3.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1bV49Q6C7KcpZOV6o7QzKwa0kuY8USlOz/view?usp=drive_link'
  },

  // Rajyaseva 2013
  { 
    id: 'rj-2013-p1', 
    year: 2013, 
    title: 'Rajyaseva Prelims 2013 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2013_GS_XOI.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1P0dn4fTN5tBRLdTJgBGOhlv1g75FkvGZ/view?usp=drive_link'
  },
  { 
    id: 'rj-2013-p2', 
    year: 2013, 
    title: 'Rajyaseva Prelims 2013 CSAT', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2013_CSAT_YOI.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1wBwiV-o2KaYlvf8BAZpqyb0K8PejxUGZ/view?usp=drive_link'
  },

  // Rajyaseva 2012 (Single Paper)
  { 
    id: 'rj-2012-p1', 
    year: 2012, 
    title: 'Rajyaseva Prelims 2012 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2012_GS_PRM.pdf',
    downloadUrl: 'https://drive.google.com/file/d/14DRrbkYagqsU_4siBiKItGW6UmjpWSwP/view?usp=drive_link'
  },

  // Rajyaseva 2011 (Single Paper)
  { 
    id: 'rj-2011-p1', 
    year: 2011, 
    title: 'Rajyaseva Prelims 2011 GS', 
    examType: 'Rajyaseva', 
    paperType: 'Prelims', 
    fileName: 'Rajyaseva_Pre_2011_GS_KNM.pdf',
    downloadUrl: 'https://drive.google.com/file/d/1n0ih42i7IX3Ol6kMyLsDMVjvBd380anw/view?usp=drive_link'
  },
];

export const TEST_SERIES_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "Which article of the Indian Constitution deals with the 'Abolition of Untouchability'?",
    options: ["Article 16", "Article 17", "Article 18", "Article 23"],
    correctIndex: 1
  },
  {
    id: 2,
    text: "The 'Koyna Dam' is built on which river?",
    options: ["Koyna", "Krishna", "Godavari", "Bhima"],
    correctIndex: 0
  },
  {
    id: 3,
    text: "Who was the first Chief Minister of Maharashtra?",
    options: ["Vasantrao Naik", "Yashwantrao Chavan", "Sharad Pawar", "Vilasrao Deshmukh"],
    correctIndex: 1
  },
  {
    id: 4,
    text: "In which year was the MPSC established?",
    options: ["1947", "1950", "1960", "1937"],
    correctIndex: 2
  },
  {
    id: 5,
    text: "Which district in Maharashtra is known as the 'Orange City'?",
    options: ["Nashik", "Pune", "Nagpur", "Solapur"],
    correctIndex: 2
  }
];