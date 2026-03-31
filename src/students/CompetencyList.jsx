import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Card from '../ui/Card.jsx'

export default function CompetencyList({ competencies, prediction }) {
  const [active, setActive] = useState(competencies[0])

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="space-y-4">
        <div>
          <p className="text-sm text-slate-400">Analysis Blocks</p>
          <h3 className="text-lg font-semibold text-white">Competency insights</h3>
        </div>
        <div className="space-y-3">
          {competencies.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item)}
              className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
                item.status === 'weakness'
                  ? 'border-alert/40 bg-alert/10 text-alert hover:bg-alert/20'
                  : 'border-success/40 bg-success/10 text-success hover:bg-success/20'
              }`}
            >
              <span>{item.name}</span>
              <span className="text-xs font-semibold">{item.score}%</span>
            </button>
          ))}
        </div>
      </Card>

      <Card className="space-y-4">
        <div>
          <p className="text-sm text-slate-400">Teacher Observations</p>
          <h3 className="text-lg font-semibold text-white">Skill detail</h3>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-white">{active.name}:</span> {active.detail}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">AI Prediction</p>
          <p className="mt-2 text-sm text-slate-200">{prediction}</p>
        </div>
      </Card>
    </div>
  )
}
