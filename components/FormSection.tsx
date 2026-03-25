export function FormSection() {
  return (
    <form
      action="mailto:pilot@federalopportunityintel.example"
      method="post"
      encType="text/plain"
      className="space-y-4 rounded-lg border border-slate-200 bg-white p-6"
    >
      <p className="text-sm text-slate-600">Demo-ready intake form. Submit action currently routes to a mailto placeholder for manual follow-up.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <input required name="name" placeholder="Name" className="rounded-md border border-slate-300 px-3 py-2" />
        <input required name="organization" placeholder="Organization" className="rounded-md border border-slate-300 px-3 py-2" />
        <input required name="organizationType" placeholder="Organization Type" className="rounded-md border border-slate-300 px-3 py-2" />
        <input required name="geography" placeholder="Geography" className="rounded-md border border-slate-300 px-3 py-2" />
        <input required name="sector" placeholder="Sector / Focus" className="rounded-md border border-slate-300 px-3 py-2" />
        <input name="website" placeholder="Website" className="rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <textarea
        required
        name="fundingSeeking"
        placeholder="What funding are you seeking?"
        rows={4}
        className="w-full rounded-md border border-slate-300 px-3 py-2"
      />
      <textarea name="notes" placeholder="Notes" rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2" />
      <button type="submit" className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">
        Submit Pilot Request
      </button>
    </form>
  );
}
