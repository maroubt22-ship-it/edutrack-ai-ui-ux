import Card from '../ui/Card.jsx'

export default function KpiCard({ label, value, trend, tone = 'neutral' }) {
  const toneStyles = {
    neutral: 'text-slate-200',
    alert: 'text-alert'
  }

  return (
    <Card className="flex flex-col gap-4">
      <p className="text-sm text-slate-400">{label}</p>
      <div className="flex items-end justify-between">
        <p className={`text-3xl font-semibold ${toneStyles[tone]}`}>{value}</p>
        <span className="text-xs text-slate-500">{trend}</span>
      </div>
    </Card>
  )
}
