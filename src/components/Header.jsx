import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/gtx_tr.png" alt="GATEX402" className="logo-image" />
          <span className="logo-text">GATEX402</span>
        </Link>
        
        <nav className="nav">
          <a 
            href="https://x.com/gate_x402" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            X
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
          <a 
            href="https://bonk.fun/token/AmWk5Tdt76vetd4z1PjynEgTxQQ6ZctA8bnLojVJbonk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            $GTX
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header

