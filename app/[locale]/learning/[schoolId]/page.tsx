import SubjectDisplayCard from "@/components/learning/subject-display-card";
import { schools } from "@/lib/school-mock-data";
import Link from "next/link";

type Props = {
  params: {
    locale: string;
    schoolId: string;
  };
};

export default async function SchoolSubjectsPage({ params }: Props) {
  const { locale, schoolId } = await params;

  const school = schools.find((s) => s.id === schoolId);

  if (!school) return <div>School not found</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Subjects in {school.schoolName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {school.subjects.map((subject) => (
          <Link
            key={subject.id}
            href={`/${locale}/learning/${school.id}/${subject.id}`}
          >
            <SubjectDisplayCard
              subjectImage={subject.subjectImage}
              subjectName={subject.subjectName}
              totalQuestions={subject.questions.length}
              completedQuestions={
                subject.questions.filter((q) => q.isCompleted).length
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
