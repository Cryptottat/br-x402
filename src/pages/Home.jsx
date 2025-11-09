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
          </div>
        </div>
      </div>

      <div className="slogan-section">
        <img src="/gtx_tr.png" alt="GATEX402" className="slogan-logo" />
        <h2 className="main-slogan">Value transfer should be effortless.</h2>
        <p className="sub-slogan">X402 payments should be as easy as drag and drop.</p>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line"></div>
      </div>

      {/* Geometric lines */}
      <div className="geometric-lines">
        <div className="vertical-line vertical-line-1"></div>
        <div className="vertical-line vertical-line-2"></div>
        <div className="vertical-line vertical-line-3"></div>
        <div className="horizontal-line horizontal-line-1"></div>
        <div className="horizontal-line horizontal-line-2"></div>
        <div className="horizontal-line horizontal-line-3"></div>
      </div>
    </div>
  )
}

export default Home
