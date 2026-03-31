export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'
  const styles = {
    primary: 'bg-primary text-white hover:bg-primary/80 active:scale-[0.98]'
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
