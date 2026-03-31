import KpiCard from './KpiCard.jsx'
import { useStudents } from '../context/StudentsContext.jsx'

export default function KpiGrid() {
  const { students } = useStudents()
  const totalStudents = students.length
  const averageScore = totalStudents
    ? Math.round(students.reduce((sum, student) => sum + student.average, 0) / totalStudents)
    : 0
  const weakStudents = students.filter((student) => student.status === 'At Risk').length

  const kpis = [
    { label: 'Total Students', value: String(totalStudents), trend: '+6 this month' },
    { label: 'Average Score', value: `${averageScore}%`, trend: '+2.4% vs last term' },
    { label: 'Weak Students', value: String(weakStudents), trend: 'Needs review', tone: 'alert' }
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </div>
  )
}
