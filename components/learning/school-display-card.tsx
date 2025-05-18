import { BookOpenIcon } from "@heroicons/react/24/outline";
import React from "react";

type SchoolDisplayCardProps = {
  schoolImage: string;
  schoolName: string;
  subjectCount: string;
};

function SchoolDisplayCard({
  schoolImage,
  schoolName,
  subjectCount,
}: SchoolDisplayCardProps) {
  return (
    <div className="w-full max-w-sm rounded-lg border bg-white p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={schoolImage}
        alt={schoolName}
        className="h-40 w-full rounded-md object-cover mb-4"
      />
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">{schoolName}</h3>
        <div className="flex">
          <BookOpenIcon className="w-5 h-5 text-gray-500" />
          <p className="text-sm text-gray-600">{subjectCount} subjects</p>
        </div>
      </div>
    </div>
  );
}

export default SchoolDisplayCard;
