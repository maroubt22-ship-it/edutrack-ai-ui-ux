import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText, LayoutDashboard, LogOut, Menu, Settings, Users, X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext.jsx'

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Students', path: '/students', icon: Users },
  { label: 'Reports', path: '/reports', icon: FileText },
  { label: 'Settings', path: '/settings', icon: Settings }
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <>
      <div className="fixed left-0 top-0 z-40 flex w-full items-center justify-between border-b border-white/10 bg-slate-950/90 px-5 py-4 backdrop-blur lg:hidden">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-semibold">
            IA
          </div>
          <div>
            <p className="text-sm font-semibold text-white">EduTrack IA</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Teacher Suite</p>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-200"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-950/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.aside
              className="flex h-full w-72 flex-col gap-6 bg-slate-950 p-6"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-semibold">
                    IA
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">EduTrack IA</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Teacher Suite</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => setOpen(false)}
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

              <div className="mt-auto space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-sm font-semibold text-white">{user?.name || 'Maya Carter'}</p>
                  <p className="text-xs text-slate-400">{user?.role || 'Lead Educator'}</p>
                </div>
                <button
                  onClick={() => {
                    logout()
                    setOpen(false)
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
