import type { School } from "./types";

export const schools: School[] = [
  {
    id: "s1",
    schoolImage:
      "https://res.cloudinary.com/djeq0lcxy/image/upload/v1747625425/Institute_of_Technology_of_Cambodia_logo_wbvh7d.png",
    schoolName: "Bak Touk High School",
    subjects: [
      {
        id: "sub1",
        subjectName: "Mathematics",
        subjectImage:
          "https://res.cloudinary.com/djeq0lcxy/image/upload/v1747625425/Institute_of_Technology_of_Cambodia_logo_wbvh7d.png",
        questions: [
          {
            id: "q1",
            text: "What is the value of $$\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$$ and why is this limit important in calculus?",
            isCompleted: false,
            hint: "Use the standard trigonometric limit identity.",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "Undefined" },
              { id: "d", text: "Infinity" },
            ],
            correctOptionId: "b",
          },
          {
            id: "q2",
            text: "Solve the quadratic equation $$2x^2 - 4x - 6 = 0$$ using the quadratic formula. Show all steps clearly.",
            isCompleted: false,
            hint: "Use: $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$.",
            options: [
              { id: "a", text: "x = 1 ± √10" },
              { id: "b", text: "x = 2 ± √10" },
              { id: "c", text: "x = -1 ± √10" },
              { id: "d", text: "x = 1 ± √5" },
            ],
            correctOptionId: "a",
          },
          {
            id: "q3",
            text: "Evaluate the following integral: $$\\int_0^2 (4x^3 + 3x^2 + x + 1) \\, dx$$. Use basic integration rules and compute the definite integral.",
            isCompleted: false,
            hint: "Integrate term by term, then substitute the limits.",
            options: [
              { id: "a", text: "34" },
              { id: "b", text: "38" },
              { id: "c", text: "42" },
              { id: "d", text: "44" },
            ],
            correctOptionId: "b",
          },
          {
            id: "q4",
            text: "If the function $$f(x) = \\frac{1}{x^2 - 4}$$, determine its domain and explain the reason for any restrictions.",
            isCompleted: false,
            hint: "Avoid division by zero.",
            options: [
              { id: "a", text: "All real numbers" },
              { id: "b", text: "All real numbers except x = 2 and x = -2" },
              { id: "c", text: "x > 0" },
              { id: "d", text: "x < -2 or x > 2" },
            ],
            correctOptionId: "b",
          },
        ],
      },
      {
        id: "sub2",
        subjectName: "Physics",
        subjectImage: "/images/subjects/physics.png",
        questions: [
          {
            id: "q1",
            text: "A car accelerates uniformly from rest to a speed of 20 m/s in 10 seconds. Calculate the acceleration and the total distance traveled during this time.",
            isCompleted: false,
            hint: "Use formulas: \\( a = \\frac{v - u}{t} \\) and \\( s = ut + \\frac{1}{2}at^2 \\)",
            options: [
              { id: "a", text: "2 m/s² and 100 m" },
              { id: "b", text: "2 m/s² and 200 m" },
              { id: "c", text: "4 m/s² and 100 m" },
              { id: "d", text: "3 m/s² and 150 m" },
            ],
            correctOptionId: "a",
          },
          {
            id: "q2",
            text: "State and explain Newton’s Second Law of Motion. A net force of 12 N is applied to a mass of 3 kg. What is the acceleration of the object?",
            isCompleted: false,
            hint: "Use: \\( F = ma \\Rightarrow a = \\frac{F}{m} \\)",
            options: [
              { id: "a", text: "2 m/s²" },
              { id: "b", text: "3 m/s²" },
              { id: "c", text: "4 m/s²" },
              { id: "d", text: "6 m/s²" },
            ],
            correctOptionId: "c",
          },
          {
            id: "q3",
            text: "A 10 kg object is raised vertically by 5 meters. Calculate the work done against gravity. Take \\(g = 9.8\\, m/s^2\\).",
            isCompleted: false,
            hint: "Work = Force × Distance = \\( m \\cdot g \\cdot h \\)",
            options: [
              { id: "a", text: "490 J" },
              { id: "b", text: "500 J" },
              { id: "c", text: "450 J" },
              { id: "d", text: "480 J" },
            ],
            correctOptionId: "a",
          },
          {
            id: "q4",
            text: "Describe the relationship between kinetic energy and mass and velocity. Then calculate the kinetic energy of a 2 kg object moving at 3 m/s.",
            isCompleted: false,
            hint: "Use: \\( KE = \\frac{1}{2}mv^2 \\)",
            options: [
              { id: "a", text: "3 J" },
              { id: "b", text: "6 J" },
              { id: "c", text: "9 J" },
              { id: "d", text: "12 J" },
            ],
            correctOptionId: "d",
          },
        ],
      },
      {
        id: "sub3",
        subjectName: "Chemistry",
        subjectImage: "/images/subjects/chemistry.png",
        questions: [
          {
            id: "q1",
            text: "What is the molecular mass of water (H₂O)? Show all calculations using atomic masses (H = 1, O = 16).",
            isCompleted: false,
            hint: "Add the atomic mass of 2 hydrogen atoms and 1 oxygen atom.",
            options: [
              { id: "a", text: "16 g/mol" },
              { id: "b", text: "17 g/mol" },
              { id: "c", text: "18 g/mol" },
              { id: "d", text: "20 g/mol" },
            ],
            correctOptionId: "c",
          },
          {
            id: "q2",
            text: "Balance the following chemical equation: $$ \\text{C}_2\\text{H}_6 + O_2 \\rightarrow CO_2 + H_2O $$",
            isCompleted: false,
            hint: "Balance carbon first, then hydrogen, then oxygen.",
            options: [
              { id: "a", text: "C₂H₆ + 3O₂ → 2CO₂ + 3H₂O" },
              { id: "b", text: "C₂H₆ + 2O₂ → CO₂ + 2H₂O" },
              { id: "c", text: "C₂H₆ + 3.5O₂ → 2CO₂ + 3H₂O" },
              { id: "d", text: "C₂H₆ + O₂ → 2CO₂ + H₂O" },
            ],
            correctOptionId: "c",
          },
          {
            id: "q3",
            text: "Define the pH scale. What is the pH of a solution with a hydrogen ion concentration of \\(1 \\times 10^{-5}\\) M?",
            isCompleted: false,
            hint: "pH = -log₁₀[H⁺]",
            options: [
              { id: "a", text: "3" },
              { id: "b", text: "5" },
              { id: "c", text: "7" },
              { id: "d", text: "9" },
            ],
            correctOptionId: "b",
          },
          {
            id: "q4",
            text: "A solution contains 2 moles of NaCl dissolved in 1 liter of water. What is the molarity of the solution? Also explain what molarity means.",
            isCompleted: false,
            hint: "Molarity = Moles of solute / Volume of solution (in liters)",
            options: [
              { id: "a", text: "1 M" },
              { id: "b", text: "2 M" },
              { id: "c", text: "0.5 M" },
              { id: "d", text: "4 M" },
            ],
            correctOptionId: "b",
          },
        ],
      },
    ],
  },
  {
    id: "s2",
    schoolImage:
      "https://res.cloudinary.com/djeq0lcxy/image/upload/v1747625425/Institute_of_Technology_of_Cambodia_logo_wbvh7d.png",
    schoolName: "Sisowath High School",
    subjects: [
      {
        id: "sub4",
        subjectName: "Mathematics",
        subjectImage: "/images/subjects/math.png",
        questions: [
          {
            id: "q1",
            text: "Find the derivative of the function $$f(x) = x^3 - 5x^2 + 7x - 2$$. Use the power rule.",
            isCompleted: false,
            hint: "Differentiate each term: \\(d/dx[x^n] = nx^{n-1}\\)",
            options: [
              { id: "a", text: "3x² - 5x + 7" },
              { id: "b", text: "3x² - 10x + 7" },
              { id: "c", text: "3x² + 7" },
              { id: "d", text: "x² - 10x + 7" },
            ],
            correctOptionId: "b",
          },
          {
            id: "q2",
            text: "Calculate the area under the curve of $$f(x) = x^2$$ from x = 0 to x = 3.",
            isCompleted: false,
            hint: "Use: $$\\int_0^3 x^2 dx = \\left[ \\frac{x^3}{3} \\right]_0^3$$",
            options: [
              { id: "a", text: "9" },
              { id: "b", text: "18" },
              { id: "c", text: "27" },
              { id: "d", text: "36" },
            ],
            correctOptionId: "a",
          },
        ],
      },
    ],
  },
];
