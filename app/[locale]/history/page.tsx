"use client";

import dynamic from "next/dynamic";

const HistoryTable = dynamic(
  () => import("../../../components/history/history-table"),
  {
    ssr: false,
  }
);
export default function HistoryPage() {
  return (
    <div>
      <HistoryTable />
    </div>
  );
}
