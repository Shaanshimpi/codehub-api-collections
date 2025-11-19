import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    description: 'Product catalog for validation and numeric comparison practice',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'SKU',
      type: 'text',
      label: 'SKU',
      required: true,
      unique: true,
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price',
      required: true,
      min: 0,
    },
    {
      name: 'inventoryCount',
      type: 'number',
      label: 'Inventory Count',
      required: true,
      min: 0,
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured',
      defaultValue: false,
    },
  ],
}

