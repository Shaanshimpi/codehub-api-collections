import Link from 'next/link'
import React from 'react'

import { collectionDocs } from './collectionDocs'
import './styles.css'

export default async function HomePage() {
  const docsList = Object.values(collectionDocs)

  return (
    <div className="docs-home">
      <header className="hero">
        <div className="brand-mark">
          <span className="brand-icon">CH</span>
          <div>
            <p className="brand-title">CodeHub</p>
            <p className="brand-subtitle">API Playground</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">CodeHub Demo APIs</p>
          <h1>Practice CRUD with ready-made collections</h1>
          <p>
            Pick a collection, read the endpoints, then try them out with your favorite HTTP client. These pages
            summarize the REST routes that this backend exposes automatically.
          </p>
        </div>
        <div className="hero-actions">
          <a className="admin" href="/admin" rel="noopener noreferrer" target="_blank">
            Open Admin
          </a>
        </div>
      </header>

      <section className="card-grid">
        {docsList.map((collection) => (
          <article key={collection.slug} className="collection-card">
            <p className="card-label">Collection</p>
            <h2>{collection.title}</h2>
            <p>{collection.description}</p>
            <ul>
              {collection.fields.slice(0, 3).map((field) => (
                <li key={field.name}>
                  <strong>{field.name}</strong> · {field.type}
                </li>
              ))}
              {collection.fields.length > 3 && <li>+{collection.fields.length - 3} more fields</li>}
            </ul>
            <Link href={`/docs/${collection.slug}`} className="link">
              View REST Docs →
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}
