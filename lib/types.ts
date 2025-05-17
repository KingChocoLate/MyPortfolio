export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  isCompleted: boolean;
  hint: string;
  options: Option[];
  correctOptionId: string;
}

export interface Subject {
  id: string;
  subjectName: string;
  subjectImage: string;
  questions: Question[];
}

export interface School {
  id: string;
  schoolImage: string;
  schoolName: string;
  subjects: Subject[];
}
