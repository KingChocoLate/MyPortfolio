import SchoolDisplayCard from "@/components/learning/school-display-card";
import UserWelcomeCard from "@/components/learning/use-welcome-card";
import Link from "next/link";
import { schools } from "@/lib/school-mock-data";

export default function LearningPage() {
  return (
    <div>
      <UserWelcomeCard
        username="Odom"
        role="admin"
        image="https://res.cloudinary.com/dzv70sjv1/image/upload/v1748784809/meowProfile_v2bfna.png"
      ></UserWelcomeCard>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
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
