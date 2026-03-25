import { FormSection } from '@/components/FormSection';

export default function RequestAnalysisPage() {
  return (
    <div className="container-shell py-10">
      <h1 className="text-3xl font-semibold text-slate-900">Request Analysis</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Tailored fit analysis and full opportunity memos are available for pilot users or by request. Share your context below to begin a manual review workflow.
      </p>
      <div className="mt-8 max-w-4xl">
        <FormSection />
      </div>
    </div>
  );
}
