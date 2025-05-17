import { Question } from "@/lib/types";

type Props = {
  isVisible: boolean;
  questions: Question[];
  currentIndex: number;
  completed: boolean[];
  onSelect: (index: number) => void;
};

export default function QuestionSidebar({
  isVisible,
  questions,
  currentIndex,
  completed,
  onSelect,
}: Props) {
  if (!isVisible) return null;

  return (
    <div className="w-full lg:max-w-sm bg-gray-100 border rounded shadow h-full flex flex-col">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Question List</h3>
      </div>

      <ul className="flex-1 overflow-y-auto p-4 space-y-2">
        {questions.map((q, i) => (
          <li
            key={q.id}
            onClick={() => onSelect(i)}
            className={`cursor-pointer flex items-center gap-2 transition hover:bg-gray-200 p-2 rounded ${
              i === currentIndex ? "font-bold text-blue-600 bg-blue-50" : ""
            }`}
          >
            <input type="checkbox" checked={completed[i]} readOnly />
            <span className="truncate" title={q.text}>
              {q.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
