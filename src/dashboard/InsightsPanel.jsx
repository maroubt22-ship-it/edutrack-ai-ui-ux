import { AlertTriangle } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'

export default function InsightsPanel() {
  return (
    <Card className="flex flex-col gap-4 border-alert/40 bg-gradient-to-r from-alert/15 via-white/5 to-transparent">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-alert/20 p-3 text-alert">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-slate-300">AI Insights Panel</p>
            <h3 className="text-lg font-semibold text-white">3 students need attention this week</h3>
          </div>
        </div>
        <Button className="bg-white/10 text-white hover:bg-white/20">Review</Button>
      </div>
      <p className="text-sm text-slate-400">
        Predicted dips in math performance and attendance have been detected. Schedule a quick
        intervention to keep progress on track.
      </p>
    </Card>
  )
}
