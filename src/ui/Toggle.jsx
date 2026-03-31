export default function Toggle({ checked, onChange, label }) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-sm text-slate-200">{label}</span>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition ${
          checked ? 'bg-primary' : 'bg-white/20'
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            checked ? 'right-1' : 'left-1'
          }`}
        />
      </button>
    </label>
  )
}
