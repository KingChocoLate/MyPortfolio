"use client";

import { useState } from "react";
import { Question } from "@/lib/types";
import QuestionContent from "./question-display/question-content";
import QuestionTabs from "./question-display/question-tabs";
import QuestionTabPanel from "./question-display/question-tab-panel";
import QuestionSidebar from "./question-display/question-sidebar";

import { XMarkIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

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
  const [selectedOptionId, setSelectedOptionId] = useState<string | undefined>(
    undefined
  );

  const currentQuestion = questions[currentIndex];

  function handleSelectOption(optionId: string) {
    setSelectedOptionId(optionId);
  }

  function handleMarkDone() {
    const newStatus = [...completed];
    newStatus[currentIndex] = true;
    setCompleted(newStatus);
    // Move to next question if exists
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOptionId(undefined); // reset selection
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOptionId(undefined); // reset selection
    }
  }

  return (
    <div className="relative flex flex-col lg:flex-row gap-4">
      {/* Main Question Area */}
      <div className="relative flex-1 bg-white rounded shadow p-4">
        <h2 className="text-xl font-bold mb-4">Question {currentIndex + 1}</h2>
        <QuestionContent
          questionText={currentQuestion.text}
          options={currentQuestion.options}
          correctOptionId={currentQuestion.correctOptionId}
          selectedOptionId={selectedOptionId}
          onSelectOption={handleSelectOption}
          onMarkDone={handleMarkDone}
          onPrevious={handlePrevious}
        />
        <QuestionTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <QuestionTabPanel activeTab={activeTab} hint={currentQuestion.hint} />

        {/* Left Arrow to Show Panel */}
        {!showSidebar && (
          <button
            onClick={() => setShowSidebar(true)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-1 rounded-l"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>

      {/* Sidebar */}
      {showSidebar && (
        <div className="relative">
          {/* Close X Icon */}
          <button
            onClick={() => setShowSidebar(false)}
            className="absolute top-2 right-2 z-10 text-gray-500 hover:text-gray-800"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>

          <QuestionSidebar
            isVisible={showSidebar}
            questions={questions}
            currentIndex={currentIndex}
            completed={completed}
            onSelect={setCurrentIndex}
          />
        </div>
      )}
    </div>
  );
}
