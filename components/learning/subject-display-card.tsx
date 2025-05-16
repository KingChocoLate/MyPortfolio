import React from "react";

type Props = {
  subjectImage: string;
  subjectName: string;
  totalQuestions: number;
  completedQuestions: number;
};

function SubjectDisplayCard({
  subjectImage,
  subjectName,
  totalQuestions,
  completedQuestions,
}: Props) {
  const progress =
    totalQuestions > 0
      ? Math.round((completedQuestions / totalQuestions) * 100)
      : 0;

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full hover:shadow-md transition">
      <img
        src={subjectImage}
        alt={subjectName}
        className="w-full h-32 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold mb-1">{subjectName}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {completedQuestions} of {totalQuestions} questions completed
      </p>
      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-right text-gray-500 mt-1">{progress}%</p>
    </div>
  );
}

export default SubjectDisplayCard;
