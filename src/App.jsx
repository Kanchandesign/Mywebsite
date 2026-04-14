import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Gallery from './components/Gallery'

function App() {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className="App">
      <Sidebar setShowAbout={setShowAbout} showAbout={showAbout} />
      <Gallery showAbout={showAbout} setShowAbout={setShowAbout} />
    </div>
  )
}

export default App
