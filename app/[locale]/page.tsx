import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div>
      <h1 className="flex justify-center items-center">
        Welcome to&nbsp;<b>SelfLearning</b>
      </h1>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{t("greeting")}</h1>
      </div>
    </div>
  );
}
