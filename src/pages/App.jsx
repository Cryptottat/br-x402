import './App.css'

function AppPage() {
  const handleInstallClick = (e) => {
    e.preventDefault()
    // 클릭 불가능하게 처리
  }

  return (
    <div className="app-page">
      <div className="app-container">
        <h1 className="app-title">BR X402</h1>
        
        <div className="install-section">
          <div className="install-card">
            <h2 className="install-title">Get BR X402</h2>
            <p className="install-description">
              BR X402를 설치하여 X402 결제를 시작하세요
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
                  <span className="install-subtitle">브라우저 확장 프로그램</span>
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
                  <span className="install-subtitle">안드로이드 앱</span>
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
                  <span className="install-subtitle">iOS 앱</span>
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

