import { useEffect, useState } from 'react'
import KpiGrid from '../dashboard/KpiGrid.jsx'
import InsightsPanel from '../dashboard/InsightsPanel.jsx'
import PerformanceCharts from '../charts/PerformanceCharts.jsx'
import StudentTable from '../dashboard/StudentTable.jsx'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <KpiGrid />
      <InsightsPanel />
      <PerformanceCharts loading={loading} />
      <StudentTable />
    </div>
  )
}
