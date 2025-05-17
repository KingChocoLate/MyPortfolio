"use client";
import { Question } from "@/lib/types";
import { useState } from "react";
import QuestionContent from "./question-display/question-content";
import QuestionTabs from "./question-display/question-tabs";
import QuestionTabPanel from "./question-display/question-tab-panel";
import QuestionSidebar from "./question-display/question-sidebar";

export default function QuestionDisplay({
  questions,
}: {
  questions: Question[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(
    questions.map((q) => q.isCompleted)
  );
  const [activeTab, setActiveTab] = useState<
    "note" | "chatbot" | "hint" | "report"
  >("note");
  const [showSidebar, setShowSidebar] = useState(true);

  const markComplete = () => {
    const newStatus = [...completed];
    newStatus[currentIndex] = true;
    setCompleted(newStatus);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex flex-col lg:flex-row gap-4 relative">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="lg:hidden fixed top-4 right-4 z-20 bg-blue-600 text-white px-3 py-1 rounded shadow"
      >
        {showSidebar ? "Hide List" : "Show List"}
      </button>

      {/* Main Question Area */}
      <div className="flex-1 bg-white rounded shadow p-4">
        <h2 className="text-xl font-bold">Question {currentIndex + 1}</h2>
        <QuestionContent
          questionText={currentQuestion.text}
          onMarkDone={markComplete}
        />
        <QuestionTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <QuestionTabPanel activeTab={activeTab} hint={currentQuestion.hint} />
      </div>

      {/* Sidebar */}
      <QuestionSidebar
        visible={showSidebar}
        questions={questions}
        currentIndex={currentIndex}
        completed={completed}
        onSelect={setCurrentIndex}
      />
    </div>
  );
}
