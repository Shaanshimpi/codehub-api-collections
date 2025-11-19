export type CollectionDoc = {
  slug: string
  title: string
  description: string
  fields: {
    name: string
    type: string
    notes?: string
  }[]
  endpoints: {
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
    path: string
    description: string
  }[]
  tips?: string[]
}

export const collectionDocs: Record<string, CollectionDoc> = {
  students: {
    slug: 'students',
    title: 'Students Collection',
    description: 'Manage learner records for CRUD practice lessons.',
    fields: [
      { name: 'fullName', type: 'text', notes: 'Required; displayed in admin lists.' },
      { name: 'email', type: 'email', notes: 'Required + unique to prevent duplicates.' },
      { name: 'age', type: 'number', notes: 'Required; must be 5 or older.' },
      { name: 'grade', type: 'text', notes: 'Required; free-form field for class/level.' },
      {
        name: 'status',
        type: 'select',
        notes: 'One of active, inactive, graduated. Defaults to active.',
      },
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/students',
        description: 'List students. Supports query params like limit, page, where.',
      },
      {
        method: 'GET',
        path: '/api/students/:id',
        description: 'Fetch one student by document ID.',
      },
      {
        method: 'POST',
        path: '/api/students',
        description: 'Create a student. Send JSON body with required fields.',
      },
      {
        method: 'PATCH',
        path: '/api/students/:id',
        description: 'Update part of a student document.',
      },
      {
        method: 'DELETE',
        path: '/api/students/:id',
        description: 'Delete a student document permanently.',
      },
    ],
    tips: [
      'Use ?where[status][equals]=active to filter by status.',
      'Combine limit & page to paginate results for classroom demos.',
      'Remember to send Content-Type: application/json for POST/PATCH.',
    ],
  },
}

