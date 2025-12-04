import Link from 'next/link'
import { notFound } from 'next/navigation'

import { collectionDocs } from '../../collectionDocs'
import '../../styles.css'

type DocsPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function CollectionDocsPage({ params }: DocsPageProps) {
  const { slug } = await params
  const doc = collectionDocs[slug]

  if (!doc) {
    return notFound()
  }

  return (
    <div className="docs-page">
      <div className="brand-mark">
        <span className="brand-icon">CH</span>
        <div>
          <p className="brand-title">CodeHub</p>
          <p className="brand-subtitle">API Playground</p>
        </div>
      </div>
      <Link className="back-link" href="/apis">
        ← All collections
      </Link>

      <p className="eyebrow">Collection Docs</p>
      <h1>{doc.title}</h1>
      <p className="lead">{doc.description}</p>

      <section>
        <h2>Fields</h2>
        <div className="info-grid">
          {doc.fields.map((field) => (
            <article key={field.name} className="info-card">
              <p className="muted-label">{field.type}</p>
              <h3>{field.name}</h3>
              <p>{field.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>REST Endpoints</h2>
        <div className="endpoints">
          {doc.endpoints.map((endpoint) => (
            <article key={`${endpoint.method}-${endpoint.path}`} className="endpoint-card">
              <span className={`method method-${endpoint.method.toLowerCase()}`}>{endpoint.method}</span>
              <code>{endpoint.path}</code>
              <p>{endpoint.description}</p>
            </article>
          ))}
        </div>
      </section>

      {doc.tips && (
        <section>
          <h2>Teaching Tips</h2>
          <ul className="tips">
            {doc.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

