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
  cars: {
    slug: 'cars',
    title: 'Cars Collection',
    description: 'Vehicle inventory with enum fields (color) and number range validation (year, price).',
    fields: [
      { name: 'make', type: 'text', notes: 'Required; manufacturer name (e.g., "Toyota", "Ford").' },
      { name: 'model', type: 'text', notes: 'Required; vehicle model name.' },
      { name: 'year', type: 'number', notes: 'Required; must be between 1900 and current year + 1.' },
      {
        name: 'color',
        type: 'select',
        notes: 'Required enum: red, blue, black, white, silver, gray, green, yellow.',
      },
      { name: 'price', type: 'number', notes: 'Required; must be 0 or greater.' },
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/cars',
        description: 'List cars. Filter by color: ?where[color][equals]=red',
      },
      {
        method: 'GET',
        path: '/api/cars/:id',
        description: 'Fetch one car by document ID.',
      },
      {
        method: 'POST',
        path: '/api/cars',
        description: 'Create a car. Include make, model, year, color, price.',
      },
      {
        method: 'PATCH',
        path: '/api/cars/:id',
        description: 'Update car fields. Partial updates supported.',
      },
      {
        method: 'DELETE',
        path: '/api/cars/:id',
        description: 'Delete a car document.',
      },
    ],
    tips: [
      'Filter by color enum: ?where[color][equals]=blue',
      'Filter by price range: ?where[price][greater_than]=20000&where[price][less_than]=50000',
      'Filter by year: ?where[year][greater_than_equal]=2020',
    ],
  },
  books: {
    slug: 'books',
    title: 'Books Collection',
    description: 'Library catalog demonstrating pagination, sorting, and boolean filtering.',
    fields: [
      { name: 'title', type: 'text', notes: 'Required; book title.' },
      { name: 'author', type: 'text', notes: 'Required; author name.' },
      { name: 'category', type: 'text', notes: 'Required; genre or category.' },
      { name: 'publishedYear', type: 'number', notes: 'Required; between 1000 and current year.' },
      { name: 'available', type: 'checkbox', notes: 'Boolean; defaults to true.' },
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/books',
        description: 'List books. Use ?limit=10&page=2 for pagination, ?sort=title for sorting.',
      },
      {
        method: 'GET',
        path: '/api/books/:id',
        description: 'Fetch one book by document ID.',
      },
      {
        method: 'POST',
        path: '/api/books',
        description: 'Create a book. Include title, author, category, publishedYear, available.',
      },
      {
        method: 'PATCH',
        path: '/api/books/:id',
        description: 'Update book fields.',
      },
      {
        method: 'DELETE',
        path: '/api/books/:id',
        description: 'Delete a book document.',
      },
    ],
    tips: [
      'Paginate: ?limit=20&page=1',
      'Sort: ?sort=publishedYear (ascending) or ?sort=-publishedYear (descending)',
      'Filter available books: ?where[available][equals]=true',
      'Combine filters: ?where[available][equals]=true&sort=-publishedYear&limit=10',
    ],
  },
  orders: {
    slug: 'orders',
    title: 'Orders Collection',
    description: 'Order management with status enum (pending/shipped/delivered) and date filtering.',
    fields: [
      { name: 'orderNumber', type: 'text', notes: 'Required + unique; order identifier.' },
      { name: 'customerName', type: 'text', notes: 'Required; customer name.' },
      { name: 'totalAmount', type: 'number', notes: 'Required; must be 0 or greater.' },
      {
        name: 'status',
        type: 'select',
        notes: 'Required enum: pending, shipped, delivered. Defaults to pending.',
      },
      { name: 'createdAt', type: 'date', notes: 'Order creation timestamp (auto-set).' },
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/orders',
        description: 'List orders. Filter by status or date range.',
      },
      {
        method: 'GET',
        path: '/api/orders/:id',
        description: 'Fetch one order by document ID.',
      },
      {
        method: 'POST',
        path: '/api/orders',
        description: 'Create an order. Include orderNumber, customerName, totalAmount, status.',
      },
      {
        method: 'PATCH',
        path: '/api/orders/:id',
        description: 'Update order fields (e.g., change status from pending to shipped).',
      },
      {
        method: 'DELETE',
        path: '/api/orders/:id',
        description: 'Delete an order document.',
      },
    ],
    tips: [
      'Filter by status: ?where[status][equals]=shipped',
      'Filter by date: ?where[createdAt][greater_than]=2024-01-01',
      'Sort by date: ?sort=-createdAt (newest first)',
      'Combine: ?where[status][equals]=pending&sort=-createdAt',
    ],
  },
  tasks: {
    slug: 'tasks',
    title: 'Tasks Collection',
    description: 'Task management demonstrating PATCH partial updates and boolean toggles.',
    fields: [
      { name: 'title', type: 'text', notes: 'Required; task title.' },
      { name: 'description', type: 'textarea', notes: 'Optional; detailed task description.' },
      {
        name: 'priority',
        type: 'select',
        notes: 'Required enum: low, medium, high. Defaults to medium.',
      },
      { name: 'dueDate', type: 'date', notes: 'Optional; task due date.' },
      { name: 'completed', type: 'checkbox', notes: 'Boolean; defaults to false.' },
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/tasks',
        description: 'List tasks. Filter by completed status or priority.',
      },
      {
        method: 'GET',
        path: '/api/tasks/:id',
        description: 'Fetch one task by document ID.',
      },
      {
        method: 'POST',
        path: '/api/tasks',
        description: 'Create a task. Include title, description, priority, dueDate, completed.',
      },
      {
        method: 'PATCH',
        path: '/api/tasks/:id',
        description: 'Partial update. Send only fields to change (e.g., {"completed": true}).',
      },
      {
        method: 'DELETE',
        path: '/api/tasks/:id',
        description: 'Delete a task document.',
      },
    ],
    tips: [
      'Toggle completed: PATCH with {"completed": true}',
      'Update only priority: PATCH with {"priority": "high"}',
      'Filter incomplete: ?where[completed][equals]=false',
      'PATCH allows partial updates—only send fields you want to change.',
    ],
  },
  products: {
    slug: 'products',
    title: 'Products Collection',
    description: 'Product catalog for validation practice and numeric comparisons.',
    fields: [
      { name: 'name', type: 'text', notes: 'Required; product name.' },
      { name: 'SKU', type: 'text', notes: 'Required + unique; stock keeping unit identifier.' },
      { name: 'price', type: 'number', notes: 'Required; must be 0 or greater.' },
      { name: 'inventoryCount', type: 'number', notes: 'Required; must be 0 or greater.' },
      { name: 'featured', type: 'checkbox', notes: 'Boolean; defaults to false.' },
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/products',
        description: 'List products. Filter by price range or inventory count.',
      },
      {
        method: 'GET',
        path: '/api/products/:id',
        description: 'Fetch one product by document ID.',
      },
      {
        method: 'POST',
        path: '/api/products',
        description: 'Create a product. Include name, SKU, price, inventoryCount, featured.',
      },
      {
        method: 'PATCH',
        path: '/api/products/:id',
        description: 'Update product fields.',
      },
      {
        method: 'DELETE',
        path: '/api/products/:id',
        description: 'Delete a product document.',
      },
    ],
    tips: [
      'Filter by price: ?where[price][less_than]=100',
      'Filter low stock: ?where[inventoryCount][less_than]=10',
      'Filter featured: ?where[featured][equals]=true',
      'Combine: ?where[price][greater_than]=50&where[inventoryCount][greater_than]=0',
    ],
  },
  feedback: {
    slug: 'feedback',
    title: 'Feedback Collection',
    description: 'Feedback system for error handling and validation practice (rating 1-5).',
    fields: [
      { name: 'authorName', type: 'text', notes: 'Required; feedback author name.' },
      {
        name: 'rating',
        type: 'number',
        notes: 'Required; must be between 1 and 5. Try invalid values to see error responses.',
      },
      { name: 'comment', type: 'textarea', notes: 'Required; feedback comment text.' },
      { name: 'resolved', type: 'checkbox', notes: 'Boolean; defaults to false.' },
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/feedback',
        description: 'List feedback. Filter by rating or resolved status.',
      },
      {
        method: 'GET',
        path: '/api/feedback/:id',
        description: 'Fetch one feedback entry by document ID.',
      },
      {
        method: 'POST',
        path: '/api/feedback',
        description: 'Create feedback. Rating must be 1-5. Try 0 or 6 to see validation errors.',
      },
      {
        method: 'PATCH',
        path: '/api/feedback/:id',
        description: 'Update feedback fields (e.g., mark as resolved).',
      },
      {
        method: 'DELETE',
        path: '/api/feedback/:id',
        description: 'Delete a feedback document.',
      },
    ],
    tips: [
      'Try invalid rating (0, 6, or negative) to see 400 validation error response.',
      'Filter by rating: ?where[rating][equals]=5',
      'Filter unresolved: ?where[resolved][equals]=false',
      'Check error response format when validation fails—great for teaching error handling.',
    ],
  },
  'blog-posts': {
    slug: 'blog-posts',
    title: 'Blog Posts Collection',
    description: 'Blog posts demonstrating slug uniqueness and text search capabilities.',
    fields: [
      { name: 'title', type: 'text', notes: 'Required; post title.' },
      {
        name: 'slug',
        type: 'text',
        notes: 'Required + unique; URL-friendly identifier (e.g., "my-awesome-post").',
      },
      { name: 'summary', type: 'textarea', notes: 'Required; post summary/excerpt.' },
      { name: 'body', type: 'textarea', notes: 'Required; full post content.' },
      { name: 'published', type: 'checkbox', notes: 'Boolean; defaults to false.' },
    ],
    endpoints: [
      {
        method: 'GET',
        path: '/api/blog-posts',
        description: 'List posts. Use ?where[title][contains]=keyword for text search.',
      },
      {
        method: 'GET',
        path: '/api/blog-posts/:id',
        description: 'Fetch one post by document ID.',
      },
      {
        method: 'POST',
        path: '/api/blog-posts',
        description: 'Create a post. Slug must be unique. Try duplicate slugs to see error.',
      },
      {
        method: 'PATCH',
        path: '/api/blog-posts/:id',
        description: 'Update post fields.',
      },
      {
        method: 'DELETE',
        path: '/api/blog-posts/:id',
        description: 'Delete a blog post document.',
      },
    ],
    tips: [
      'Search by title: ?where[title][contains]=tutorial',
      'Filter published: ?where[published][equals]=true',
      'Try creating duplicate slugs to see uniqueness validation error.',
      'Search in body: ?where[body][contains]=keyword',
    ],
  },
}

