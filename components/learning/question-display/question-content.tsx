import Latex from "react-latex-next";

type Option = {
  id: string;
  text: string;
};

type Props = {
  questionText: string;
  options: Option[];
  correctOptionId: string;
  onSelectOption: (optionId: string) => void;
  selectedOptionId?: string;
  onMarkDone: () => void;
  onPrevious: () => void;
};

export default function QuestionContent({
  questionText,
  options,
  correctOptionId,
  selectedOptionId,
  onSelectOption,
  onMarkDone,
  onPrevious,
}: Props) {
  return (
    <>
      <h2 className="text-xl font-bold">Question</h2>
      <p className="mt-2">
        <Latex>{questionText}</Latex>
      </p>

      <ul className="mt-4 space-y-2">
        {options.map((opt) => (
          <li key={opt.id}>
            <button
              className={`w-full text-left px-4 py-2 rounded border ${
                selectedOptionId === opt.id
                  ? opt.id === correctOptionId
                    ? "bg-green-200 border-green-600"
                    : "bg-red-200 border-red-600"
                  : "border-gray-300"
              }`}
              onClick={() => onSelectOption(opt.id)}
            >
              {opt.text}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-4">
        <button
          onClick={onPrevious}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
        >
          Previous
        </button>

        <button
          onClick={onMarkDone}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Mark as Done
        </button>
      </div>
    </>
  );
}
