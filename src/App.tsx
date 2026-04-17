import './App.css'
import { Header } from './components/Header'
import { StatsBar } from './components/StatsBar'
import { CardGrid } from './components/CardGrid'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <StatsBar />
        <CardGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
