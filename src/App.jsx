import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Gallery from './components/Gallery'

function App() {
  const [showAbout, setShowAbout] = useState(false)
  const [isProjectDetailOpen, setIsProjectDetailOpen] = useState(false)

  return (
    <div className="App">
      {!isProjectDetailOpen && <Sidebar setShowAbout={setShowAbout} showAbout={showAbout} />}
      <Gallery
        showAbout={showAbout}
        setShowAbout={setShowAbout}
        setIsProjectDetailOpen={setIsProjectDetailOpen}
      />
    </div>
  )
}

export default App
