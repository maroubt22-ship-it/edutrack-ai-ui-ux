export default function Badge({ children, tone = 'neutral' }) {
  const tones = {
    neutral: 'bg-white/10 text-slate-200',
    success: 'bg-success/20 text-success',
    alert: 'bg-alert/20 text-alert'
  }

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  )
}
