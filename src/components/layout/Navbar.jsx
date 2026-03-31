import { Bell, LogOut, Search } from 'lucide-react'
import Input from '../../ui/Input.jsx'
import { useAuth } from '../../context/AuthContext.jsx'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Teacher Dashboard</p>
        <h1 className="text-2xl md:text-3xl font-semibold font-display text-white">
          Welcome back, Ms. Carter
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Search students, classes..."
            className="pl-10"
          />
        </div>
        <button className="relative rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-alert" />
        </button>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
          <div className="h-9 w-9 rounded-full bg-primary/30 flex items-center justify-center text-sm font-semibold text-white">
            MC
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-white">{user?.name || 'Maya Carter'}</p>
            <p className="text-xs text-slate-400">{user?.role || 'Lead Educator'}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
