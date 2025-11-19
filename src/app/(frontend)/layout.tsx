import React from 'react'
import './styles.css'

export const metadata = {
  description: 'CodeHub API Playground for simple CRUD demos.',
  title: 'CodeHub API Playground',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
