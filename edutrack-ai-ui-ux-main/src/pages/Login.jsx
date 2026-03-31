import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import Input from '../ui/Input.jsx'
import Button from '../ui/Button.jsx'
import Card from '../ui/Card.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()
  const [formState, setFormState] = useState({ email: '', password: '' })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleChange = (event) => {
    setFormState((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formState.email || 'teacher@edutrack.ai')
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <Card className="bg-slate-950/80">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-primary/20 p-3 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">EduTrack IA</p>
                <h1 className="text-2xl font-semibold font-display text-white">Sign in</h1>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="teacher@edutrack.ai"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Password</label>
                <Input
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>
              <Button className="w-full">Login</Button>
            </form>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              Demo access enabled. Any credentials will log you in.
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
