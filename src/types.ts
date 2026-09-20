export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'doc';
  isFree?: boolean;
  completed?: boolean;
  summary?: string;
}

export interface SyllabusChapter {
  chapterId: string;
  chapterTitle: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  grade: number | string;
  badge: string;
  badgeColor: string;
  statsText: string;
  statsIcon: 'video' | 'book' | 'clock' | 'zap';
  imageUrl: string;
  secondaryBadge?: string;
  accentColor?: string;
  isFree: boolean;
  originalPrice?: number;
  rating: number;
  totalReviews: number;
  enrolledStudents: number;
  totalLessons: number;
  totalHours: string;
  chapters: SyllabusChapter[];
}

export interface CategoryItem {
  id: string;
  title: string;
  icon: string;
  count: string;
  filterGrade?: string;
}

export interface ChemistryDocument {
  id: string;
  title: string;
  category: 'SGK' | 'SBT' | 'Chuyên đề' | 'Bảng tra cứu' | 'Đề thi';
  grade: string;
  fileType: 'PDF' | 'DOCX' | 'IMAGE';
  size: string;
  downloads: number;
  description: string;
  isPopular?: boolean;
}

export interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hint?: string;
}

export interface Exam {
  id: string;
  title: string;
  grade: string;
  category: 'Thi vào 10' | 'Khảo sát' | 'HSG THCS' | 'Kiểm tra 1 tiết';
  timeMinutes: number;
  totalQuestions: number;
  year: string;
  author: string;
  school: string;
  questions: ExamQuestion[];
}

export interface SolubilityCell {
  cation: string;
  anion: string;
  status: 'T' | 'K' | 'I' | 'B' | '-'; // T: Tan, K: Không tan (kết tủa), I: Ít tan, B: Bị thủy phân/không tồn tại, -: Không xác định
  color?: string;
  precipitateNote?: string;
  formula: string;
}

export interface ChemicalElement {
  number: number;
  symbol: string;
  name: string;
  atomicMass: number;
  valences: string;
  category: 'Phi kim' | 'Kim loại' | 'Khí hiếm';
  color: string;
}
