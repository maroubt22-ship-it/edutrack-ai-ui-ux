import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'

export default function StudentTable({ students, statusTone, onEdit, onDelete, onOpen }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-slate-400">
          <tr>
            <th className="px-6 py-4 font-medium">Name</th>
            <th className="px-6 py-4 font-medium">Level</th>
            <th className="px-6 py-4 font-medium">Average</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-t border-white/10 transition hover:bg-white/5"
            >
              <td
                className="px-6 py-4 font-medium text-white cursor-pointer"
                onClick={() => onOpen(student.id)}
              >
                {student.name}
              </td>
              <td className="px-6 py-4 text-slate-300">{student.level}</td>
              <td className="px-6 py-4 text-slate-300">{student.average}%</td>
              <td className="px-6 py-4">
                <Badge tone={statusTone[student.status] || 'neutral'}>{student.status}</Badge>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    className="bg-white/10 hover:bg-white/20"
                    onClick={() => onEdit(student)}
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    className="bg-alert/20 text-alert hover:bg-alert/30"
                    onClick={() => onDelete(student.id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
