import { FileText } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'

const reportTrend = [
  { week: 'W1', score: 70 },
  { week: 'W2', score: 74 },
  { week: 'W3', score: 78 },
  { week: 'W4', score: 84 },
  { week: 'W5', score: 90 }
]

export default function PdfPreview() {
  return (
    <Card className="bg-white text-slate-900 shadow-xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">EduTrack IA</p>
              <h2 className="text-2xl font-semibold">Student Report Preview</h2>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <p>Name: Ava Thompson</p>
            <p>Level: Grade 9</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Average Score</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">92%</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Strengths</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge tone="success">Algebra</Badge>
              <Badge tone="success">Reading</Badge>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Weaknesses</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge tone="alert">Writing</Badge>
              <Badge tone="alert">Geometry</Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-sky-50 p-4">
          <p className="text-sm font-semibold">Competency Analysis</p>
          <div className="mt-4 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={reportTrend}>
                <XAxis dataKey="week" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" domain={[60, 100]} />
                <Tooltip
                  contentStyle={{
                    background: '#ffffff',
                    borderRadius: 12,
                    border: '1px solid rgba(148, 163, 184, 0.3)'
                  }}
                />
                <Area type="monotone" dataKey="score" stroke="#3B82F6" fill="#DBEAFE" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-sm font-semibold">AI Insights</p>
            <p className="mt-2 text-sm text-slate-600">
              Student shows strong progress in algebra and responds well to adaptive practice.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-sm font-semibold">Personalized Recommendations</p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
              <li>Schedule weekly writing labs with structured outlines.</li>
              <li>Use geometry manipulatives to reinforce spatial reasoning.</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}
