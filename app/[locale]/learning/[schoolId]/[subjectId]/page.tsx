import QuestionDisplay from "@/components/learning/question-display";
import { schools } from "@/lib/mockData";

type Props = {
  params: {
    schoolId: string;
    subjectId: string;
  };
};

export default async function SubjectQuestionPage({ params }: Props) {
  const { schoolId, subjectId } = await params;
  const school = schools.find((s) => s.id === schoolId);
  const subject = school?.subjects.find((s) => s.id === subjectId);
  if (!subject) return <div>Subject not found</div>;

  return (
    <div>
      <QuestionDisplay questions={subject.questions} />
    </div>
  );
}
