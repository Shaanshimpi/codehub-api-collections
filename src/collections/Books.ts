import type { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  admin: {
    useAsTitle: 'title',
    description: 'Library catalog for pagination and sorting practice',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      label: 'Category',
      required: true,
    },
    {
      name: 'publishedYear',
      type: 'number',
      label: 'Published Year',
      required: true,
      min: 1000,
      max: new Date().getFullYear(),
    },
    {
      name: 'available',
      type: 'checkbox',
      label: 'Available',
      defaultValue: true,
    },
  ],
}

