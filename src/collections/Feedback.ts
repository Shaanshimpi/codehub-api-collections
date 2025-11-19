import type { CollectionConfig } from 'payload'

export const Feedback: CollectionConfig = {
  slug: 'feedback',
  admin: {
    useAsTitle: 'authorName',
    description: 'Feedback system for error handling and validation practice',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'authorName',
      type: 'text',
      label: 'Author Name',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Rating',
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: 'comment',
      type: 'textarea',
      label: 'Comment',
      required: true,
    },
    {
      name: 'resolved',
      type: 'checkbox',
      label: 'Resolved',
      defaultValue: false,
    },
  ],
}

