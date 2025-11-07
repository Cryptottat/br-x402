import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/brx_tr.png" alt="BRX402" className="logo-image" />
          <span className="logo-text">BRX402</span>
        </Link>
        
        <nav className="nav">
          <a 
            href="https://x.com/brx402" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            X
          </a>
          <a 
            href="https://pump.fun/coin/AGfkVzj4wCZdanLrVDNZJCSQPeRC1jurGbnZkaVypump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            PUMP
          </a>
          <Link 
            to="/docs" 
            className={`nav-link ${location.pathname === '/docs' ? 'active' : ''}`}
          >
            Docs
          </Link>
          <Link 
            to="/app" 
            className={`nav-link ${location.pathname === '/app' ? 'active' : ''}`}
          >
            App
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

