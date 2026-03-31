import PdfPreview from '../reports/PdfPreview.jsx'
import Button from '../ui/Button.jsx'

export default function Reports() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Student Report</p>
          <h2 className="text-2xl font-semibold font-display text-white">PDF Preview UI</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-white/10 hover:bg-white/20">Generate Report</Button>
          <Button>Export PDF</Button>
        </div>
      </div>
      <PdfPreview />
    </div>
  )
}
