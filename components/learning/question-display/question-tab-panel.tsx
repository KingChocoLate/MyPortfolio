// Renders content for each tab (Note, Chatbot, Hint, Report)

type Props = {
  activeTab: "note" | "chatbot" | "hint" | "report";
  hint?: string;
};

export default function QuestionTabPanel({ activeTab, hint }: Props) {
  if (activeTab === "note") {
    return (
      <textarea
        placeholder="Write your note here..."
        className="w-full border p-2 rounded resize-none mt-4"
        rows={4}
      />
    );
  }

  if (activeTab === "chatbot") {
    return <p className="text-sm text-gray-500 mt-4">Chatbot coming soon...</p>;
  }

  if (activeTab === "hint") {
    return (
      <p className="text-sm text-gray-700 italic mt-4">
        Hint: {hint || "No hint available."}
      </p>
    );
  }

  if (activeTab === "report") {
    return (
      <div className="mt-4">
        <textarea
          placeholder="Describe the issue with this question..."
          className="w-full border p-2 rounded resize-none"
          rows={3}
        />
        <button className="mt-2 bg-red-600 text-white px-4 py-1 rounded">
          Submit Report
        </button>
      </div>
    );
  }

  return null;
}
