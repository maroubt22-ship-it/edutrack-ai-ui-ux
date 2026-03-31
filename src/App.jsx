import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/layout/Layout.jsx'
import ProtectedRoute from './components/auth/ProtectedRoute.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Students from './pages/Students.jsx'
import StudentProfile from './pages/StudentProfile.jsx'
import Reports from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'
import Login from './pages/Login.jsx'
import { useAuth } from './context/AuthContext.jsx'

const pageVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 }
}

export default function App() {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/students"
            element={
              <ProtectedRoute>
                <Layout>
                  <Students />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/students/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <StudentProfile />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Layout>
                  <Reports />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Layout>
                  <Settings />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}
