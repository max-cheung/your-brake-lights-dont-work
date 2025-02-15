import ReportForm from "@/app/ui/report-form";
import SearchForm from "./ui/search-form";
// font-[family-name:var(--font-geist-mono)]
export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="font-[family-name:var(--font-geist-mono)] mb-2">
        Your Brake Lights Don't Work.
      </h1>
      <ReportForm />
      <SearchForm />
    </main>
  );
}
