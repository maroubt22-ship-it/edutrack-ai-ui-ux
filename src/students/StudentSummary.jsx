import Card from '../ui/Card.jsx'

export default function StudentSummary({ student }) {
  return (
    <Card className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-slate-400">Student Information</p>
        <h2 className="text-2xl font-semibold text-white">{student.name}</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Level</p>
          <p className="text-base font-medium text-white">{student.level}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Parent Contact</p>
          <p className="text-base font-medium text-white">{student.parentContact}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Average Score</p>
          <p className="text-base font-medium text-white">{student.average}%</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Attendance</p>
          <p className="text-base font-medium text-white">{student.attendance}%</p>
        </div>
      </div>
    </Card>
  )
}
