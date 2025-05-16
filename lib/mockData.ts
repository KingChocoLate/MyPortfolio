import { School } from "./types";

export const schools: School[] = [
  {
    id: "1",
    schoolImage: "/images/ams.png",
    schoolName: "Angkor High School",
    subjects: [
      {
        id: "math",
        subjectName: "Mathematics",
        subjectImage: "/images/math.png",
        questions: [
          { id: "q1", text: "What is 2 + 2?", isCompleted: true },
          { id: "q2", text: "Solve for x: 2x = 10", isCompleted: true },
          { id: "q3", text: "What is 2 + 2?", isCompleted: false },
          { id: "q4", text: "Solve for x: 2x = 10", isCompleted: false },
        ],
      },
      {
        id: "physics",
        subjectName: "Physics",
        subjectImage: "/images/physics.png",
        questions: [
          {
            id: "q1",
            text: "What is Newton's Second Law?",
            isCompleted: false,
          },
          { id: "q2", text: "Define gravity.", isCompleted: false },
        ],
      },
    ],
  },
  {
    id: "2",
    schoolImage: "/images/phs.png",
    schoolName: "Phnom Penh High School",
    subjects: [
      {
        id: "chem",
        subjectName: "Chemistry",
        subjectImage: "/images/chemistry.png",
        questions: [
          { id: "q1", text: "What is H2O?", isCompleted: false },
          {
            id: "q2",
            text: "What is the atomic number of carbon?",
            isCompleted: false,
          },
        ],
      },
    ],
  },
  {
    id: "3",
    schoolImage: "/images/shs.png",
    schoolName: "Siem Reap High School",
    subjects: [
      {
        id: "bio",
        subjectName: "Biology",
        subjectImage: "/images/biology.png",
        questions: [
          {
            id: "q1",
            text: "What is the basic unit of life?",
            isCompleted: false,
          },
          { id: "q2", text: "Define photosynthesis.", isCompleted: false },
        ],
      },
    ],
  },
  {
    id: "4",
    schoolImage: "/images/bhs.png",
    schoolName: "Battambang High School",
    subjects: [
      {
        id: "history",
        subjectName: "History",
        subjectImage: "/images/history.png",
        questions: [
          {
            id: "q1",
            text: "When did Cambodia gain independence?",
            isCompleted: false,
          },
          { id: "q2", text: "Who was Jayavarman VII?", isCompleted: false },
        ],
      },
    ],
  },
  {
    id: "5",
    schoolImage: "/images/khs.png",
    schoolName: "Kampot High School",
    subjects: [
      {
        id: "geo",
        subjectName: "Geography",
        subjectImage: "/images/geography.png",
        questions: [
          {
            id: "q1",
            text: "Name the longest river in Cambodia.",
            isCompleted: false,
          },
          { id: "q2", text: "What is a delta?", isCompleted: false },
        ],
      },
    ],
  },
  {
    id: "6",
    schoolImage: "/images/kphs.png",
    schoolName: "Kep Province High School",
    subjects: [
      {
        id: "eng",
        subjectName: "English",
        subjectImage: "/images/english.png",
        questions: [
          { id: "q1", text: "Define a noun.", isCompleted: false },
          {
            id: "q2",
            text: "What is the past tense of 'go'?",
            isCompleted: false,
          },
        ],
      },
    ],
  },
];
