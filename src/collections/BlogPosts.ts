import type { CollectionConfig } from 'payload'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
    description: 'Blog posts for slug uniqueness and text search practice',
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
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g., "my-awesome-post")',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      label: 'Summary',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
      label: 'Body',
      required: true,
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Published',
      defaultValue: false,
    },
  ],
}

