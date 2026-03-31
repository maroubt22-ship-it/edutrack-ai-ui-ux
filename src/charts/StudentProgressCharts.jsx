import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'
import Card from '../ui/Card.jsx'

export default function StudentProgressCharts({ competencies, progress }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="space-y-4">
        <div>
          <p className="text-sm text-slate-400">Radar chart for competencies</p>
          <h3 className="text-lg font-semibold text-white">Skill distribution</h3>
        </div>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={competencies}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="name" tick={{ fill: '#CBD5F5', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[60, 100]} tick={{ fill: '#94A3B8' }} />
              <Radar dataKey="score" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="space-y-4">
        <div>
          <p className="text-sm text-slate-400">Line chart for progress</p>
          <h3 className="text-lg font-semibold text-white">Performance trend</h3>
        </div>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progress}>
              <XAxis dataKey="week" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" domain={[60, 100]} />
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
                stroke="#10B981"
                strokeWidth={3}
                dot={{ r: 4, fill: '#10B981' }}
                isAnimationActive
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
