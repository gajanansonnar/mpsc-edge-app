
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  PYQ = 'PYQ',
  STUDY_MATERIAL = 'STUDY_MATERIAL',
  TEST_SERIES = 'TEST_SERIES',
  UPDATES = 'UPDATES',
  DOUBT_SOLVER = 'DOUBT_SOLVER',
  SETTINGS = 'SETTINGS',
  ABOUT = 'ABOUT',
  DOWNLOADS = 'DOWNLOADS',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  PDF_VIEWER = 'PDF_VIEWER',
}

export type TestCategory = 'MOCK' | 'PYQ' | 'QUIZ' | 'LONG';

export interface TestPaper {
  id: string;
  title: string;
  category: TestCategory;
  questionsCount: number;
  durationMinutes: number;
  attempts?: number;
}

export interface PYQ {
  id: string;
  year: number;
  subject: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index
  explanation: string;
}

export interface PYQPdf {
  id: string;
  year: number;
  title: string;
  examType: 'Rajyaseva' | 'Combined' | 'Technical';
  paperType: 'Prelims' | 'Mains';
  fileName: string;
  downloadUrl?: string; // External URL for download
}

export interface StudyNote {
  id: string;
  title: string;
  subject: string;
  content: string; // Markdown or text content
  readTime: string;
}

export interface UpdateItem {
  id: string;
  title: string;
  category: 'News' | 'Job Alert' | 'Exam Update';
  date: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
}