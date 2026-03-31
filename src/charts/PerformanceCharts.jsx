import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area
} from 'recharts'
import Card from '../ui/Card.jsx'
import Skeleton from '../ui/Skeleton.jsx'

const performanceData = [
  { week: 'W1', score: 72 },
  { week: 'W2', score: 78 },
  { week: 'W3', score: 75 },
  { week: 'W4', score: 82 },
  { week: 'W5', score: 86 },
  { week: 'W6', score: 84 }
]

const progressData = [
  { month: 'Jan', growth: 62 },
  { month: 'Feb', growth: 66 },
  { month: 'Mar', growth: 70 },
  { month: 'Apr', growth: 74 },
  { month: 'May', growth: 79 },
  { month: 'Jun', growth: 83 }
]

export default function PerformanceCharts({ loading }) {
  if (loading) {
    return (
      <div className="grid gap-4 lg:grid-cols-2">
        <Skeleton className="h-72" />
        <Skeleton className="h-72" />
      </div>
    )
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="space-y-4">
        <div>
          <p className="text-sm text-slate-400">Student performance graph</p>
          <h3 className="text-lg font-semibold text-white">Weekly average performance</h3>
        </div>
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <XAxis dataKey="week" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" domain={[60, 90]} />
              <Tooltip
                contentStyle={{
                  background: '#0f172a',
                  borderRadius: 12,
                  border: '1px solid rgba(148, 163, 184, 0.2)'
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 4, fill: '#3B82F6' }}
                isAnimationActive
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="space-y-4">
        <div>
          <p className="text-sm text-slate-400">Progress over time</p>
          <h3 className="text-lg font-semibold text-white">Learning momentum</h3>
        </div>
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={progressData}>
              <XAxis dataKey="month" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" domain={[50, 90]} />
              <Tooltip
                contentStyle={{
                  background: '#0f172a',
                  borderRadius: 12,
                  border: '1px solid rgba(148, 163, 184, 0.2)'
                }}
              />
              <Area
                type="monotone"
                dataKey="growth"
                stroke="#10B981"
                fill="rgba(16, 185, 129, 0.2)"
                strokeWidth={3}
                isAnimationActive
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
