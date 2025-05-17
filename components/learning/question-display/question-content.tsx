// Displays the current question text and "Mark as Done"

type Props = {
  questionText: string;
  onMarkDone: () => void;
};

export default function QuestionContent({ questionText, onMarkDone }: Props) {
  return (
    <>
      <h2 className="text-xl font-bold">Question</h2>
      <p className="mt-2">{questionText}</p>
      <button
        onClick={onMarkDone}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Mark as Done
      </button>
    </>
  );
}
