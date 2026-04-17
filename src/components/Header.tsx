import './Header.css'

export function Header() {
  return (
    <header className="header">
      <span className="logo">Responsive App</span>
      <nav className="nav">
        <a href="#" className="nav-link active">Dashboard</a>
        <a href="#" className="nav-link">Projects</a>
        <a href="#" className="nav-link">Settings</a>
      </nav>
      <div className="avatar">T</div>
    </header>
  )
}
