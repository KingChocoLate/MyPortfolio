import QuestionDisplay from "@/components/learning/question-display";
import { schools } from "@/lib/mockData";

export default function SubjectQuestionPage({
  params,
}: {
  params: { schoolId: string; subjectId: string };
}) {
  const school = schools.find((s) => s.id === params.schoolId);
  const subject = school?.subjects.find((s) => s.id === params.subjectId);
  if (!subject) return <div>Subject not found</div>;

  return (
    <div>
      <QuestionDisplay questions={subject.questions} />
    </div>
  );
}
