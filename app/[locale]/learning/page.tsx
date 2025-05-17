import SchoolDisplayCard from "@/components/learning/school-display-card";
import UserWelcomeCard from "@/components/learning/use-welcome-card";
import Link from "next/link";
import { schools } from "@/lib/mockData";

export default function LearningPage() {
  return (
    <div>
      <UserWelcomeCard
        username="makara"
        role="admin"
        image="/"
      ></UserWelcomeCard>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {schools.map((school) => (
          <Link key={school.id} href={`/learning/${school.id}`}>
            <SchoolDisplayCard
              schoolImage={school.schoolImage}
              schoolName={school.schoolName}
              subjectCount={school.subjects.length.toString()}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
