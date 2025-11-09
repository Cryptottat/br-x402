import './App.css'

function AppPage() {
  const handleInstallClick = (e) => {
    e.preventDefault()
    // 클릭 불가능하게 처리
  }

  return (
    <div className="app-page">
      <div className="app-container">
        <h1 className="app-title"><span className="brand-name">GATEX402</span></h1>
        
        <div className="install-section">
          <div className="install-card">
            <h2 className="install-title">Get <span className="brand-name">GATEX402</span></h2>
            <p className="install-description">
              <span className="brand-name">GATEX402</span> is a utility suite designed to abstract the complexity of the X402 protocol. 
              It provides simple tools for users and powerful, simple-to-integrate APIs for developers, 
              turning X402 into a seamless part of any web application.
            </p>
            
            <div className="install-buttons">
              <button 
                onClick={handleInstallClick}
                className="install-button"
                disabled
              >
                <span className="install-icon material-symbols-outlined">extension</span>
                <span className="install-text">
                  <span className="install-label">Chrome Extension</span>
                  <span className="install-subtitle">Browser extension for end-users</span>
                </span>
              </button>
              
              <button 
                onClick={handleInstallClick}
                className="install-button"
                disabled
              >
                <span className="install-icon material-symbols-outlined">android</span>
                <span className="install-text">
                  <span className="install-label">Android</span>
                  <span className="install-subtitle">Android mobile app</span>
                </span>
              </button>
              
              <button 
                onClick={handleInstallClick}
                className="install-button"
                disabled
              >
                <span className="install-icon material-symbols-outlined">phone_iphone</span>
                <span className="install-text">
                  <span className="install-label">iOS</span>
                  <span className="install-subtitle">iOS mobile app</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppPage

