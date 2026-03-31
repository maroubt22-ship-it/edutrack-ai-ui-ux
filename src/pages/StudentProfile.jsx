import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import StudentSummary from '../students/StudentSummary.jsx'
import StudentProgressCharts from '../charts/StudentProgressCharts.jsx'
import CompetencyList from '../students/CompetencyList.jsx'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import { useStudents } from '../context/StudentsContext.jsx'

export default function StudentProfile() {
  const { id } = useParams()
  const { getStudentById } = useStudents()
  const student = useMemo(() => {
    return getStudentById(id)
  }, [getStudentById, id])

  if (!student) {
    return (
      <Card className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Student Not Found</p>
        <p className="text-lg font-semibold text-white">Select a student from the list.</p>
      </Card>
    )
  }
  const chartCompetencies = student.competencies?.length
    ? student.competencies
    : [{ name: 'Assessment', score: student.average || 70 }]
  const chartProgress = student.progress?.length
    ? student.progress
    : [
        { week: 'W1', score: student.average || 70 },
        { week: 'W2', score: student.average || 70 }
      ]

  return (
    <div className="flex flex-col gap-6">
      <StudentSummary student={student} />
      <StudentProgressCharts competencies={chartCompetencies} progress={chartProgress} />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-3 border-success/40 bg-success/10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Strengths</p>
          <div className="flex flex-wrap gap-2">
            {student.strengths.map((item) => (
              <Badge key={item} tone="success">
                {item}
              </Badge>
            ))}
          </div>
        </Card>
        <Card className="space-y-3 border-alert/40 bg-alert/10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Weaknesses</p>
          <div className="flex flex-wrap gap-2">
            {student.weaknesses.map((item) => (
              <Badge key={item} tone="alert">
                {item}
              </Badge>
            ))}
          </div>
        </Card>
        <Card className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Observations</p>
          <p className="text-sm text-slate-300">{student.observations}</p>
        </Card>
      </div>
      <CompetencyList competencies={chartCompetencies} prediction={student.aiPrediction} />
      <Card className="space-y-3 border-primary/40 bg-gradient-to-r from-primary/15 via-white/5 to-transparent">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">AI Prediction Block</p>
        <p className="text-lg font-semibold text-white">{student.aiPrediction}</p>
        <p className="text-sm text-slate-300">
          Suggested plan: 3 focused algebra sessions per week with quick diagnostic checks.
        </p>
      </Card>
    </div>
  )
}
