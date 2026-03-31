export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 ${className}`}
    >
      {children}
    </div>
  )
}
