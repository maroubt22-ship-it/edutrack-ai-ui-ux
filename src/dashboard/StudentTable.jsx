import { useNavigate } from 'react-router-dom'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import { statusTone } from '../data/students.js'
import { useStudents } from '../context/StudentsContext.jsx'

export default function StudentTable() {
  const navigate = useNavigate()
  const { students } = useStudents()

  return (
    <Card className="p-0 overflow-hidden">
      <div className="px-6 pt-6">
        <h3 className="text-lg font-semibold text-white">Student list</h3>
        <p className="text-sm text-slate-400">Tap a student to open their profile</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Level</th>
              <th className="px-6 py-4 font-medium">Average</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                onClick={() => navigate(`/students/${student.id}`)}
                className="cursor-pointer border-t border-white/10 transition hover:bg-white/5"
              >
                <td className="px-6 py-4 font-medium text-white">{student.name}</td>
                <td className="px-6 py-4 text-slate-300">{student.level}</td>
                <td className="px-6 py-4 text-slate-300">{student.average}%</td>
                <td className="px-6 py-4">
                  <Badge tone={statusTone[student.status] || 'neutral'}>{student.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
