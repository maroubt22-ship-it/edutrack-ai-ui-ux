import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Input from '../ui/Input.jsx'
import Select from '../ui/Select.jsx'
import Button from '../ui/Button.jsx'

const defaultForm = {
  name: '',
  level: 'Grade 9',
  average: 75,
  status: 'On Track'
}

export default function StudentFormModal({ isOpen, mode, initialData, onClose, onSave }) {
  const [formState, setFormState] = useState(defaultForm)

  useEffect(() => {
    if (initialData) {
      setFormState(initialData)
    } else {
      setFormState(defaultForm)
    }
  }, [initialData])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSave({
      ...formState,
      average: Number(formState.average)
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/70 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-950 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                {mode === 'edit' ? 'Edit student' : 'Add student'}
              </h3>
              <button onClick={onClose} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Name</label>
                <Input name="name" value={formState.name} onChange={handleChange} />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Level</label>
                <Select name="level" value={formState.level} onChange={handleChange}>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                </Select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Average</label>
                <Input
                  name="average"
                  type="number"
                  min="0"
                  max="100"
                  value={formState.average}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Status</label>
                <Select name="status" value={formState.status} onChange={handleChange}>
                  <option>On Track</option>
                  <option>Watch</option>
                  <option>At Risk</option>
                </Select>
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" className="bg-white/10 hover:bg-white/20" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
