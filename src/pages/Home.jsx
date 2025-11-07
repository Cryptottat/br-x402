import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="home">
      <div 
        className="gradient-orb"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`,
        }}
      />
      
      <div className="content-wrapper">
        <div className={`hero-section ${isVisible ? 'visible' : ''}`}>
          <div className="hero-content">
            <div className="slogan-section">
              <h2 className="main-slogan">Value transfer should be effortless.</h2>
              <p className="sub-slogan">X402 payments should be as easy as drag and drop.</p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-value">$2.4B+</div>
            <div className="stat-label">Total Value Locked</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">150K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">&lt;0.01s</div>
            <div className="stat-label">Avg Transaction Time</div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line"></div>
      </div>
    </div>
  )
}

export default Home
