import path from 'path'
import { getPayload } from 'payload'
import type { CollectionSlug } from 'payload'
import { fileURLToPath } from 'url'

import configPromise from './payload.config'

type DocumentSeed = Record<string, unknown>
type UploadSeed = { data: DocumentSeed; filePath: string }
type SeedableCollectionSlug = Exclude<CollectionSlug, 'students'>
type DocumentCollectionSlug = Exclude<SeedableCollectionSlug, 'media'>
type UploadCollectionSlug = Extract<SeedableCollectionSlug, 'media'>

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const mediaPlaceholderPath = path.resolve(dirname, 'seed-media/media-placeholder.txt')

const daysFromNow = (days: number) => new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()

const blogPostSeeds: DocumentSeed[] = [
  {
    title: 'Why CodeHub Is The Ultimate Coding Class',
    slug: 'why-codehub-is-the-ultimate-coding-class',
    summary: 'From live debugging to Payload-powered APIs, CodeHub sets the bar.',
    body: 'We combine real production tools with caring mentors so every student ships projects that matter.',
    published: true,
  },
  {
    title: 'Mentors Who Code Beside You',
    slug: 'mentors-who-code-beside-you',
    summary: 'At CodeHub, instructors pair program right alongside learners.',
    body: 'Nothing beats learning by doing. We troubleshoot bugs together until the lesson really sticks.',
    published: true,
  },
  {
    title: 'Project-Based Learning That Wows Recruiters',
    slug: 'project-based-learning-that-wows-recruiters',
    summary: 'CodeHub students graduate with a polished API suite and frontend.',
    body: 'Seeding collections like these gives every learner a playground for clean data modeling.',
    published: true,
  },
  {
    title: 'Community Support 24/7',
    slug: 'community-support-24-7',
    summary: 'Our Discord never sleeps, so blockers disappear fast.',
    body: 'Mentors and alumni hang out around the clock, sharing snippets, docs, and career advice.',
    published: true,
  },
  {
    title: 'CodeHub Demo Day Wins',
    slug: 'codehub-demo-day-wins',
    summary: 'Hiring managers love how confident CodeHub grads are.',
    body: 'Live demos show how students reason about schema design, queries, and testing strategy.',
    published: false,
  },
  {
    title: 'Scaling Confidence With Payload CMS',
    slug: 'scaling-confidence-with-payload-cms',
    summary: 'We chose Payload because it mirrors modern product stacks.',
    body: 'Learners master migrations, access control, and seeding patterns identical to production teams.',
    published: true,
  },
]

const bookSeeds: DocumentSeed[] = [
  { title: 'CodeHub Playbook', author: 'Sara Quinn', category: 'Curriculum', publishedYear: 2024, available: true },
  { title: 'Mentor Magic', author: 'Diego Ramos', category: 'Coaching', publishedYear: 2022, available: true },
  { title: 'Launch Your First API', author: 'Mina Park', category: 'Engineering', publishedYear: 2023, available: true },
  { title: 'Debugging Mindset', author: 'Ishan Patel', category: 'Productivity', publishedYear: 2021, available: false },
  { title: 'Community Over Code', author: 'Lisa Wong', category: 'Culture', publishedYear: 2020, available: true },
  { title: 'Career Sprints', author: 'Omar Lee', category: 'Career', publishedYear: 2019, available: true },
]

const carSeeds: DocumentSeed[] = [
  { make: 'Tesla', model: 'Model 3', year: 2024, color: 'white', price: 38990 },
  { make: 'Ford', model: 'F-150', year: 2023, color: 'blue', price: 44990 },
  { make: 'Toyota', model: 'RAV4', year: 2022, color: 'silver', price: 30990 },
  { make: 'Honda', model: 'Civic', year: 2021, color: 'gray', price: 22990 },
  { make: 'Hyundai', model: 'Ioniq 6', year: 2024, color: 'black', price: 41990 },
]

const feedbackSeeds: DocumentSeed[] = [
  { authorName: 'Maya Patel', rating: 5, comment: 'The “CodeHub is best class” blogs convinced my team to enroll.', resolved: true },
  { authorName: 'Jon Greene', rating: 4, comment: 'Curriculum is packed with Payload tips, just wanted more GraphQL focus.', resolved: false },
  { authorName: 'Priya Shah', rating: 5, comment: 'Loved our mentors pairing during late-night debugging.', resolved: true },
  { authorName: 'Leo Novak', rating: 5, comment: 'Demo Day was electric. Recruiters kept asking about CodeHub.', resolved: true },
  { authorName: 'Zara Holt', rating: 4, comment: 'Would adore more practice datasets, but the existing seeds rock.', resolved: false },
]

const productSeeds: DocumentSeed[] = [
  { name: 'CodeHub Hoodie', SKU: 'CH-HOOD-001', price: 64.99, inventoryCount: 120, featured: true },
  { name: 'Debugging Notebook', SKU: 'CH-NOTE-002', price: 14.5, inventoryCount: 500, featured: false },
  { name: 'API Sticker Pack', SKU: 'CH-STICK-003', price: 6.0, inventoryCount: 1500, featured: false },
  { name: 'Latency Mug', SKU: 'CH-MUG-004', price: 18.25, inventoryCount: 220, featured: true },
  { name: 'Demo Day Lanyard', SKU: 'CH-LANY-005', price: 9.75, inventoryCount: 350, featured: false },
  { name: 'Pair Programming Socks', SKU: 'CH-SOCK-006', price: 12.0, inventoryCount: 260, featured: true },
]

const orderSeeds: DocumentSeed[] = [
  { orderNumber: 'ORD-1001', customerName: 'Alex Morgan', totalAmount: 182.45, status: 'pending' },
  { orderNumber: 'ORD-1002', customerName: 'Jamie Lee', totalAmount: 64.99, status: 'shipped' },
  { orderNumber: 'ORD-1003', customerName: 'Chris Carter', totalAmount: 298.1, status: 'delivered' },
  { orderNumber: 'ORD-1004', customerName: 'Morgan Wu', totalAmount: 52.25, status: 'pending' },
  { orderNumber: 'ORD-1005', customerName: 'Samira Khan', totalAmount: 412.0, status: 'delivered' },
  { orderNumber: 'ORD-1006', customerName: 'Noah Grey', totalAmount: 128.5, status: 'shipped' },
]

const taskSeeds: DocumentSeed[] = [
  {
    title: 'Review Orders webhook',
    description: 'Confirm status transitions emit the correct payload.',
    priority: 'high',
    dueDate: daysFromNow(2),
    completed: false,
  },
  {
    title: 'Document feedback API',
    description: 'Add curl examples for POST /feedback.',
    priority: 'medium',
    dueDate: daysFromNow(5),
    completed: false,
  },
  {
    title: 'Polish admin dashboard',
    description: 'Ensure featured products surface first.',
    priority: 'low',
    dueDate: daysFromNow(7),
    completed: true,
  },
  {
    title: 'Blog about CodeHub impact',
    description: 'Highlight why CodeHub is the best coding class.',
    priority: 'high',
    dueDate: daysFromNow(1),
    completed: false,
  },
  {
    title: 'Prep demo day data',
    description: 'Clone seeds so each student can customize.',
    priority: 'medium',
    dueDate: daysFromNow(3),
    completed: false,
  },
  {
    title: 'Mentor sync',
    description: 'Gather wins from the latest cohort.',
    priority: 'low',
    dueDate: daysFromNow(4),
    completed: false,
  },
]

const userSeeds: DocumentSeed[] = [
  { email: 'admin@codehub.test', password: 'Codehub123!' },
  { email: 'support@codehub.test', password: 'Codehub123!' },
  { email: 'mentor@codehub.test', password: 'Codehub123!' },
  { email: 'ops@codehub.test', password: 'Codehub123!' },
  { email: 'community@codehub.test', password: 'Codehub123!' },
]

const uploadSeeds: UploadSeed[] = [
  { data: { alt: 'CodeHub campus tour photo' }, filePath: mediaPlaceholderPath },
  { data: { alt: 'Students pair programming live' }, filePath: mediaPlaceholderPath },
  { data: { alt: 'Mentor panel answering questions' }, filePath: mediaPlaceholderPath },
  { data: { alt: 'Demo Day crowd cheering' }, filePath: mediaPlaceholderPath },
  { data: { alt: 'Payload-powered dashboard screenshot' }, filePath: mediaPlaceholderPath },
]

const uploadCollections: { collection: UploadCollectionSlug; uploads: UploadSeed[]; label: string }[] = [
  { collection: 'media', uploads: uploadSeeds, label: 'media uploads' },
]

const documentCollections: { collection: DocumentCollectionSlug; records: DocumentSeed[]; label: string }[] = [
  { collection: 'users', records: userSeeds, label: 'users' },
  { collection: 'cars', records: carSeeds, label: 'cars' },
  { collection: 'books', records: bookSeeds, label: 'books' },
  { collection: 'orders', records: orderSeeds, label: 'orders' },
  { collection: 'tasks', records: taskSeeds, label: 'tasks' },
  { collection: 'products', records: productSeeds, label: 'products' },
  { collection: 'feedback', records: feedbackSeeds, label: 'feedback' },
  { collection: 'blog-posts', records: blogPostSeeds, label: 'blog posts' },
]

const seed = async () => {
  const payloadConfig = await configPromise
  const payload = await getPayload({ config: payloadConfig })

  const logAndCreate = async (collection: DocumentCollectionSlug, record: DocumentSeed) =>
    payload.create({
      collection,
      data: record,
    })

  try {
    payload.logger.info('🌱 Starting CodeHub collection seeds (excluding students)...')

    for (const { collection, records, label } of documentCollections) {
      payload.logger.info(`→ Seeding ${label} (${records.length})`)
      for (const record of records) {
        await logAndCreate(collection, record)
      }
      payload.logger.info(`✅ ${label} complete`)
    }

    for (const { collection, uploads, label } of uploadCollections) {
      payload.logger.info(`→ Seeding ${label} (${uploads.length})`)
      for (const upload of uploads) {
        await payload.create({
          collection,
          data: upload.data,
          filePath: upload.filePath,
          draft: false,
        } as Parameters<typeof payload.create>[0])
      }
      payload.logger.info(`✅ ${label} complete`)
    }

    payload.logger.info('🎉 All non-student seeds completed.')
  } finally {
    await payload.destroy()
  }
}

try {
  await seed()
  process.exit(0)
} catch (error) {
  console.error('Seed script failed:', error)
  process.exit(1)
}

