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
          {
            id: "q1",
            text: "What is 2 + 2?",
            isCompleted: true,
            hint: "It's the sum of two pairs.",
          },
          {
            id: "q2",
            text: "Solve for x: 2x = 10",
            isCompleted: true,
            hint: "Divide both sides by 2.",
          },
          {
            id: "q3",
            text: "What is 2 + 2?",
            isCompleted: false,
            hint: "It's the sum of two pairs.",
          },
          {
            id: "q4",
            text: "Solve for x: 2x = 10",
            isCompleted: false,
            hint: "Divide both sides by 2.",
          },
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
            hint: "It relates force, mass, and acceleration.",
          },
          {
            id: "q2",
            text: "Define gravity.",
            isCompleted: false,
            hint: "It's a force that attracts objects toward each other.",
          },
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
          {
            id: "q1",
            text: "What is H2O?",
            isCompleted: false,
            hint: "It's a common liquid essential for life.",
          },
          {
            id: "q2",
            text: "What is the atomic number of carbon?",
            isCompleted: false,
            hint: "It's a single-digit number.",
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
            hint: "All living things are made of these.",
          },
          {
            id: "q2",
            text: "Define photosynthesis.",
            isCompleted: false,
            hint: "It's how plants make food from sunlight.",
          },
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
            hint: "It happened in the 20th century.",
          },
          {
            id: "q2",
            text: "Who was Jayavarman VII?",
            isCompleted: false,
            hint: "A famous Khmer king.",
          },
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
            hint: "It flows through Phnom Penh.",
          },
          {
            id: "q2",
            text: "What is a delta?",
            isCompleted: false,
            hint: "It's a landform at a river's mouth.",
          },
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
          {
            id: "q1",
            text: "Define a noun.",
            isCompleted: false,
            hint: "It's a word for a person, place, or thing.",
          },
          {
            id: "q2",
            text: "What is the past tense of 'go'?",
            isCompleted: false,
            hint: "It starts with 'w'.",
          },
        ],
      },
    ],
  },
];
