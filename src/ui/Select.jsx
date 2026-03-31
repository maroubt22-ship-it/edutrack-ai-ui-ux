export default function Select({ className = '', children, ...props }) {
  return (
    <select
      className={`w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-primary/60 focus:bg-white/10 ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}
