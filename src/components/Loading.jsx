import { useState, useEffect } from 'react'
import './Loading.css'

function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-title">
          <span className="loading-char">G</span>
          <span className="loading-char">A</span>
          <span className="loading-char">T</span>
          <span className="loading-char">E</span>
          <span className="loading-char">X</span>
          <span className="loading-char">4</span>
          <span className="loading-char">0</span>
          <span className="loading-char">2</span>
        </div>
        <div className="loading-bar-wrapper">
          <div className="loading-bar">
            <div 
              className="loading-progress" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="loading-percentage">{Math.round(Math.min(progress, 100))}%</div>
          <div className="loading-message" key={progress < 50 ? 'message1' : 'message2'}>
            {progress < 50 
              ? "The bridge where X402 finally flows." 
              : "Complex protocols should be invisible."}
          </div>
        </div>
      </div>
      <div className="loading-grid"></div>
    </div>
  )
}

export default Loading
