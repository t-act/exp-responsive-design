import './CardGrid.css'

interface Card {
  title: string
  description: string
  tag: string
}

const cards: Card[] = [
  { title: 'Analytics', description: 'Track performance metrics', tag: 'Active' },
  { title: 'Reports', description: 'Generate weekly insights', tag: 'New' },
  { title: 'Integrations', description: 'Connect third-party tools', tag: '3 connected' },
]

export function CardGrid() {
  return (
    <section className="card-grid">
      {cards.map((c) => (
        <div key={c.title} className="card">
          <div className="card-header">
            <h3 className="card-title">{c.title}</h3>
            <span className="card-tag">{c.tag}</span>
          </div>
          <p className="card-desc">{c.description}</p>
          <div className="card-bar">
            <div className="card-bar-fill" style={{ width: `${40 + Math.random() * 50}%` }} />
          </div>
        </div>
      ))}
    </section>
  )
}
