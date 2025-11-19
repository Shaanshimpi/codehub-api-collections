import { getPayload } from 'payload'

import configPromise from './payload.config'

const FIRST_NAMES = [
  'Ava',
  'Liam',
  'Noah',
  'Emma',
  'Olivia',
  'Mia',
  'Lucas',
  'Mason',
  'Ethan',
  'Isabella',
  'Amelia',
  'Sophia',
  'Harper',
  'Elijah',
  'James',
  'Benjamin',
  'Henry',
  'Evelyn',
  'Charlotte',
  'Aiden',
]

const LAST_NAMES = [
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
  'Hernandez',
  'Lopez',
  'Gonzalez',
  'Wilson',
  'Anderson',
  'Thomas',
  'Taylor',
  'Moore',
  'Jackson',
  'Martin',
  'Lee',
]

const GRADES = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']
const STATUS_OPTIONS = ['active', 'inactive', 'graduated'] as const

const pickRandom = <T,>(items: T[]): T => items[Math.floor(Math.random() * items.length)]

const createStudentData = (index: number) => {
  const first = pickRandom(FIRST_NAMES)
  const last = pickRandom(LAST_NAMES)
  const fullName = `${first} ${last}`
  const normalized = fullName.toLowerCase().replace(/[^a-z]/g, '')

  return {
    fullName,
    email: `${normalized}${index}@codehub.school`,
    age: Math.floor(Math.random() * 11) + 10, // 10 - 20
    grade: pickRandom(GRADES),
    status: pickRandom(STATUS_OPTIONS),
  }
}

const seed = async () => {
  const payloadConfig = await configPromise
  const payload = await getPayload({ config: payloadConfig })
  const total = 50
  console.log('Starting CodeHub students seed...')
  payload.logger.info(`🌱 Seeding ${total} students...`)

  for (let i = 0; i < total; i++) {
    const data = createStudentData(i + 1)
    await payload.create({
      collection: 'students',
      data,
    })
  }

  payload.logger.info('✅ Students seed complete.')
  console.log('Finished CodeHub students seed.')
  await payload.destroy()
}

try {
  await seed()
  process.exit(0)
} catch (error) {
  console.error('Student seed failed:', error)
  process.exit(1)
}

