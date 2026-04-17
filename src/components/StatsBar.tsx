import './StatsBar.css'

interface Stat {
  label: string
  value: string
  trend: 'up' | 'down' | 'neutral'
}

const stats: Stat[] = [
  { label: 'Users', value: '12,482', trend: 'up' },
  { label: 'Revenue', value: '$48.2K', trend: 'up' },
  { label: 'Orders', value: '1,847', trend: 'down' },
  { label: 'Conversion', value: '3.24%', trend: 'neutral' },
]

export function StatsBar() {
  return (
    <section className="stats-bar">
      {stats.map((s) => (
        <div key={s.label} className="stat-card">
          <span className="stat-label">{s.label}</span>
          <span className="stat-value">{s.value}</span>
          <span className={`stat-trend trend-${s.trend}`}>
            {s.trend === 'up' ? '↑' : s.trend === 'down' ? '↓' : '→'}
          </span>
        </div>
      ))}
    </section>
  )
}
