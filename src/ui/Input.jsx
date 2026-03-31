export default function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-primary/60 focus:bg-white/10 ${className}`}
      {...props}
    />
  )
}
