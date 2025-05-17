// Handles tab UI and switching

type Tab = "note" | "chatbot" | "hint" | "report";

type Props = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

export default function QuestionTabs({ activeTab, onTabChange }: Props) {
  const tabs: Tab[] = ["note", "chatbot", "hint", "report"];

  return (
    <div className="border-b border-gray-200 mt-6">
      <nav className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`py-2 px-4 capitalize border-b-2 ${
              activeTab === tab
                ? "border-blue-600 text-blue-600 font-semibold"
                : "border-transparent text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}
