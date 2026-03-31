export const studentsSeed = [
  {
    id: 1,
    name: 'Ava Thompson',
    level: 'Grade 9',
    average: 92,
    status: 'On Track',
    parentContact: 'm.thompson@email.com',
    attendance: 96,
    strengths: ['Algebra', 'Reading', 'Science'],
    weaknesses: ['Writing', 'Geometry'],
    observations: 'Shows consistent effort and asks thoughtful questions during lessons.',
    aiPrediction: 'AI predicts improvement in math if weekly practice increases.',
    competencies: [
      {
        name: 'Algebra',
        score: 92,
        status: 'strength',
        detail: 'Excels in multi-step equations and pattern recognition.'
      },
      {
        name: 'Reading',
        score: 88,
        status: 'strength',
        detail: 'Strong comprehension and annotation habits.'
      },
      {
        name: 'Geometry',
        score: 71,
        status: 'weakness',
        detail: 'Needs more exposure to spatial reasoning and proofs.'
      },
      {
        name: 'Writing',
        score: 68,
        status: 'weakness',
        detail: 'Sentence structure and essay flow require practice.'
      }
    ],
    progress: [
      { week: 'W1', score: 74 },
      { week: 'W2', score: 76 },
      { week: 'W3', score: 82 },
      { week: 'W4', score: 85 },
      { week: 'W5', score: 90 }
    ]
  },
  {
    id: 2,
    name: 'Liam Chen',
    level: 'Grade 8',
    average: 78,
    status: 'Watch',
    parentContact: 'l.chen@email.com',
    attendance: 92,
    strengths: ['Biology', 'Visual Arts'],
    weaknesses: ['Algebra', 'Writing'],
    observations: 'Benefits from visual aids and collaborative learning groups.',
    aiPrediction: 'AI suggests short daily practice to stabilize math fundamentals.',
    competencies: [
      {
        name: 'Algebra',
        score: 72,
        status: 'weakness',
        detail: 'Needs reinforcement with fractions and equation solving.'
      },
      {
        name: 'Biology',
        score: 84,
        status: 'strength',
        detail: 'High recall of scientific terminology and lab participation.'
      },
      {
        name: 'Writing',
        score: 70,
        status: 'weakness',
        detail: 'Sentence flow needs structured outlines.'
      },
      {
        name: 'Art',
        score: 89,
        status: 'strength',
        detail: 'Creative visual storytelling and color theory.'
      }
    ],
    progress: [
      { week: 'W1', score: 68 },
      { week: 'W2', score: 72 },
      { week: 'W3', score: 74 },
      { week: 'W4', score: 77 },
      { week: 'W5', score: 78 }
    ]
  },
  {
    id: 3,
    name: 'Sofia Patel',
    level: 'Grade 10',
    average: 86,
    status: 'On Track',
    parentContact: 's.patel@email.com',
    attendance: 97,
    strengths: ['Physics', 'Reading'],
    weaknesses: ['Geometry'],
    observations: 'Quickly picks up advanced concepts and supports peers.',
    aiPrediction: 'AI forecasts steady improvement with advanced problem sets.',
    competencies: [
      {
        name: 'Physics',
        score: 90,
        status: 'strength',
        detail: 'Strong analytical reasoning and lab execution.'
      },
      {
        name: 'Reading',
        score: 87,
        status: 'strength',
        detail: 'Consistent comprehension and summarization.'
      },
      {
        name: 'Geometry',
        score: 73,
        status: 'weakness',
        detail: 'Needs additional practice with proofs.'
      }
    ],
    progress: [
      { week: 'W1', score: 80 },
      { week: 'W2', score: 82 },
      { week: 'W3', score: 84 },
      { week: 'W4', score: 86 },
      { week: 'W5', score: 87 }
    ]
  },
  {
    id: 4,
    name: 'Noah Reyes',
    level: 'Grade 9',
    average: 69,
    status: 'At Risk',
    parentContact: 'n.reyes@email.com',
    attendance: 88,
    strengths: ['History'],
    weaknesses: ['Math', 'Writing', 'Science'],
    observations: 'Needs consistent check-ins and smaller milestone goals.',
    aiPrediction: 'AI recommends targeted tutoring twice weekly to regain momentum.',
    competencies: [
      {
        name: 'Math',
        score: 64,
        status: 'weakness',
        detail: 'Foundational concepts require reinforcement.'
      },
      {
        name: 'Writing',
        score: 66,
        status: 'weakness',
        detail: 'Needs guided practice for structure.'
      },
      {
        name: 'History',
        score: 78,
        status: 'strength',
        detail: 'Engaged with narrative learning.'
      }
    ],
    progress: [
      { week: 'W1', score: 62 },
      { week: 'W2', score: 65 },
      { week: 'W3', score: 67 },
      { week: 'W4', score: 69 },
      { week: 'W5', score: 70 }
    ]
  }
]

export const statusTone = {
  'On Track': 'success',
  Watch: 'neutral',
  'At Risk': 'alert'
}
