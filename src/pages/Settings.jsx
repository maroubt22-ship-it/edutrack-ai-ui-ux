import { useState } from 'react'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import Input from '../ui/Input.jsx'
import Toggle from '../ui/Toggle.jsx'

export default function Settings() {
  const [toggles, setToggles] = useState({
    aiAlerts: true,
    weeklyReports: true,
    emailNotifications: false
  })

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Settings</p>
        <h2 className="text-2xl font-semibold font-display text-white">Account Preferences</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Profile Information</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Full name</label>
              <Input defaultValue="Maya Carter" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Role</label>
              <Input defaultValue="Lead Educator" />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</label>
              <Input defaultValue="teacher@edutrack.ai" />
            </div>
          </div>
          <Button className="w-full">Save Profile</Button>
        </Card>

        <Card className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Change Password</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Current</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">New</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Confirm</label>
              <Input type="password" placeholder="••••••••" />
            </div>
          </div>
          <Button className="w-full bg-white/10 hover:bg-white/20">Update Password</Button>
        </Card>
      </div>

      <Card className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Notification Preferences</h3>
        <div className="grid gap-3 md:grid-cols-2">
          <Toggle
            label="AI alerts"
            checked={toggles.aiAlerts}
            onChange={(value) => setToggles((prev) => ({ ...prev, aiAlerts: value }))}
          />
          <Toggle
            label="Weekly reports"
            checked={toggles.weeklyReports}
            onChange={(value) => setToggles((prev) => ({ ...prev, weeklyReports: value }))}
          />
          <Toggle
            label="Email notifications"
            checked={toggles.emailNotifications}
            onChange={(value) => setToggles((prev) => ({ ...prev, emailNotifications: value }))}
          />
        </div>
      </Card>
    </div>
  )
}
