import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, FileText, Settings } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Students', path: '/students', icon: Users },
  { label: 'Reports', path: '/reports', icon: FileText },
  { label: 'Settings', path: '/settings', icon: Settings }
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:w-64 flex-col gap-8 px-6 py-8 bg-slate-950/80 border-r border-white/10">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-semibold">
            IA
          </div>
          <div>
            <p className="text-lg font-semibold text-white">EduTrack IA</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Teacher Suite</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white/10 text-white shadow-card'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
        <p className="font-medium text-white">AI Summary</p>
        <p className="mt-2 leading-relaxed">
          Automated insights refresh every 6 hours to spotlight emerging learning gaps.
        </p>
      </div>
    </aside>
  )
}
