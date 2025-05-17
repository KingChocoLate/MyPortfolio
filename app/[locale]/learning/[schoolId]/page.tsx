import SubjectDisplayCard from "@/components/learning/subject-display-card";
import { schools } from "@/lib/mockData";
import Link from "next/link";

export default function SchoolSubjectsPage({
  params,
}: {
  params: { schoolId: string };
}) {
  const school = schools.find((s) => s.id === params.schoolId);
  if (!school) return <div>Schoold not found</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Subjects in {school?.schoolName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {school?.subjects.map((subject) => (
          <Link key={subject.id} href={`/learning/${school.id}/${subject.id}`}>
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
