import SchoolInformationCard from "@/components/information/school-information-card";
import { schoschoolInfomationMockDataolData } from "@/lib/school-information-mock-data";

export default function InformationPage() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {schoschoolInfomationMockDataolData.map((school, idx) => (
        <SchoolInformationCard key={idx} {...school} />
      ))}
    </div>
  );
}
