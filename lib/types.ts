export type Question = {
  id: string;
  text: string;
  isCompleted: boolean;
  hint: string;
};

export type Subject = {
  id: string;
  subjectName: string;
  subjectImage: string;
  questions: Question[];
};

export type School = {
  id: string;
  schoolImage: string;
  schoolName: string;
  subjects: Subject[];
};
