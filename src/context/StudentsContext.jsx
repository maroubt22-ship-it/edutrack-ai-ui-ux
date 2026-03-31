import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { studentsSeed } from '../data/students.js'

const StudentsContext = createContext(null)
const STORAGE_KEY = 'edutrack-students'

const normalizeStudent = (payload) => {
  const average = Number(payload.average ?? 0)
  const baselineScore = Number.isFinite(average) ? average : 75

  return {
    id: payload.id,
    name: payload.name,
    level: payload.level || 'Grade 9',
    average: baselineScore,
    status: payload.status || 'On Track',
    parentContact: payload.parentContact || 'new.parent@email.com',
    attendance: payload.attendance ?? 90,
    strengths: payload.strengths?.length ? payload.strengths : ['Engagement'],
    weaknesses: payload.weaknesses?.length ? payload.weaknesses : ['Focus'],
    observations: payload.observations || 'New student record created.',
    aiPrediction:
      payload.aiPrediction || 'AI predicts improvement with more guided practice and check-ins.',
    competencies: payload.competencies?.length
      ? payload.competencies
      : [
          {
            name: 'Assessment',
            score: baselineScore,
            status: baselineScore < 75 ? 'weakness' : 'strength',
            detail: 'Baseline assessment created from initial inputs.'
          }
        ],
    progress: payload.progress?.length
      ? payload.progress
      : [
          { week: 'W1', score: baselineScore - 6 },
          { week: 'W2', score: baselineScore - 2 },
          { week: 'W3', score: baselineScore }
        ]
  }
}

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        return Array.isArray(parsed) ? parsed : studentsSeed
      } catch {
        return studentsSeed
      }
    }
    return studentsSeed
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students))
  }, [students])

  const addStudent = (payload) => {
    setStudents((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((student) => student.id)) + 1 : 1
      const nextStudent = normalizeStudent({ ...payload, id: nextId })
      return [...prev, nextStudent]
    })
  }

  const updateStudent = (payload) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id !== payload.id) {
          return student
        }
        const merged = {
          ...student,
          ...payload,
          strengths: payload.strengths ?? student.strengths,
          weaknesses: payload.weaknesses ?? student.weaknesses,
          competencies: payload.competencies ?? student.competencies,
          progress: payload.progress ?? student.progress
        }
        return normalizeStudent(merged)
      })
    )
  }

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id))
  }

  const getStudentById = (id) =>
    students.find((student) => String(student.id) === String(id))

  const value = useMemo(
    () => ({ students, addStudent, updateStudent, deleteStudent, getStudentById }),
    [students]
  )

  return <StudentsContext.Provider value={value}>{children}</StudentsContext.Provider>
}

export function useStudents() {
  const context = useContext(StudentsContext)
  if (!context) {
    throw new Error('useStudents must be used within StudentsProvider')
  }
  return context
}
