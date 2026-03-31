import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)
const STORAGE_KEY = 'edutrack-auth'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  })

  const login = (email) => {
    const nextUser = { email, name: 'Maya Carter', role: 'Lead Educator' }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
    setUser(nextUser)
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  const value = useMemo(
    () => ({ user, login, logout, isAuthenticated: Boolean(user) }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
