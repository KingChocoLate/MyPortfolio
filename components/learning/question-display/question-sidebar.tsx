import { Question } from "@/lib/types";

type Props = {
  visible: boolean;
  questions: Question[];
  currentIndex: number;
  completed: boolean[];
  onSelect: (index: number) => void;
};

export default function QuestionSidebar({
  visible,
  questions,
  currentIndex,
  completed,
  onSelect,
}: Props) {
  return (
    <div
      className={`
        fixed lg:static top-0 right-0 h-full lg:h-auto w-72 bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${visible ? "translate-x-0" : "translate-x-full"}
        lg:translate-x-0
      `}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Question List</h3>
        <ul className="space-y-2 overflow-y-auto max-h-[calc(100vh-100px)] lg:max-h-none">
          {questions.map((q, i) => (
            <li
              key={q.id}
              onClick={() => onSelect(i)}
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
