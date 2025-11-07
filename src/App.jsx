import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'
import Header from './components/Header'
import Loading from './components/Loading'
import Home from './pages/Home'
import AppPage from './pages/App'
import Docs from './pages/Docs'
import '@solana/wallet-adapter-react-ui/styles.css'
import './wallet-adapter-custom.css'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const network = WalletAdapterNetwork.Devnet
  const endpoint = clusterApiUrl(network)
  const wallets = [new PhantomWalletAdapter()]

  useEffect(() => {
    // 로딩 시뮬레이션
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Router>
            <div className="app-wrapper">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<AppPage />} />
                <Route path="/docs" element={<Docs />} />
              </Routes>
            </div>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
