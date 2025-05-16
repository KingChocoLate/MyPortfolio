"use client";
import { Question } from "@/lib/types";
import { useState } from "react";

export default function QuestionDisplay({
  questions,
}: {
  questions: Question[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(
    questions.map((q) => q.isCompleted)
  );

  const markComplete = () => {
    const newStatus = [...completed];
    newStatus[currentIndex] = true;
    setCompleted(newStatus);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Main Question Panel */}
      <div className="flex-1 bg-white rounded shadow p-4">
        <h2 className="text-xl font-bold">Question {currentIndex + 1}</h2>
        <p className="mt-2">{questions[currentIndex].text}</p>
        <button
          onClick={markComplete}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Mark as Done
        </button>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-white rounded shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Question List</h3>
        <ul className="space-y-2">
          {questions.map((q, i) => (
            <li
              key={q.id}
              onClick={() => setCurrentIndex(i)}
              className={`cursor-pointer flex items-center gap-2 ${
                i === currentIndex ? "font-bold text-blue-600" : ""
              }`}
            >
              <input type="checkbox" checked={completed[i]} readOnly />
              <span className="truncate">{q.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
