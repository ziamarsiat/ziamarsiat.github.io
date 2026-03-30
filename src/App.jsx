import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <nav>
          <span className="logo">Zia</span>
        </nav>
      </header>

      <main className="hero">
        <h1>Zia</h1>
        <p className="subtitle">Artiste</p>
        <p className="tagline">
          Bienvenue dans mon univers créatif.
        </p>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Zia. Tous droits réservés.</p>
      </footer>
    </div>
  )
}

export default App
