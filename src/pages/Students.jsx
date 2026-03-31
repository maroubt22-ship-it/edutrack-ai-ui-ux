import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import Input from '../ui/Input.jsx'
import StudentTable from '../students/StudentTable.jsx'
import StudentFormModal from '../students/StudentFormModal.jsx'
import { statusTone } from '../data/students.js'
import { useStudents } from '../context/StudentsContext.jsx'

export default function Students() {
  const navigate = useNavigate()
  const { students, addStudent, updateStudent, deleteStudent } = useStudents()
  const [query, setQuery] = useState('')
  const [modalState, setModalState] = useState({ isOpen: false, mode: 'add', data: null })

  const filteredStudents = useMemo(() => {
    const normalized = query.toLowerCase()
    return students.filter((student) => student.name.toLowerCase().includes(normalized))
  }, [students, query])

  const handleDelete = (id) => {
    deleteStudent(id)
  }

  const handleEdit = (student) => {
    setModalState({ isOpen: true, mode: 'edit', data: student })
  }

  const handleAdd = () => {
    setModalState({ isOpen: true, mode: 'add', data: null })
  }

  const handleSave = (payload) => {
    if (modalState.mode === 'edit') {
      updateStudent(payload)
    } else {
      addStudent(payload)
    }
    setModalState({ isOpen: false, mode: 'add', data: null })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Students</p>
          <h2 className="text-2xl font-semibold font-display text-white">Student Management</h2>
        </div>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Student
        </Button>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Active students</h3>
            <p className="text-sm text-slate-400">Add, edit, or review profiles with AI insights.</p>
          </div>
          <div className="w-full md:max-w-xs">
            <Input
              placeholder="Search students"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
        <StudentTable
          students={filteredStudents}
          statusTone={statusTone}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onOpen={(id) => navigate(`/students/${id}`)}
        />
      </Card>

      <StudentFormModal
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        initialData={modalState.data}
        onClose={() => setModalState({ isOpen: false, mode: 'add', data: null })}
        onSave={handleSave}
      />
    </div>
  )
}
