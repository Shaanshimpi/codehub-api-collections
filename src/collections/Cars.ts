import type { CollectionConfig } from 'payload'

export const Cars: CollectionConfig = {
  slug: 'cars',
  admin: {
    useAsTitle: 'model',
    description: 'Vehicle inventory for CRUD practice with enum and number validation',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'make',
      type: 'text',
      label: 'Make',
      required: true,
    },
    {
      name: 'model',
      type: 'text',
      label: 'Model',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      label: 'Year',
      required: true,
      min: 1900,
      max: new Date().getFullYear() + 1,
    },
    {
      name: 'color',
      type: 'select',
      label: 'Color',
      required: true,
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Black', value: 'black' },
        { label: 'White', value: 'white' },
        { label: 'Silver', value: 'silver' },
        { label: 'Gray', value: 'gray' },
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
      ],
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price',
      required: true,
      min: 0,
    },
  ],
}

