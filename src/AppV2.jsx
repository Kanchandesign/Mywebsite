import './AppV2.css'
import NavV2 from './components-v2/NavV2'
import HeroV2 from './components-v2/HeroV2'
import WorkV2 from './components-v2/WorkV2'
import AboutV2 from './components-v2/AboutV2'
import ContactV2 from './components-v2/ContactV2'

function AppV2() {
  return (
    <div className="v2">
      <NavV2 />
      <main className="v2-main">
        <HeroV2 />
        <WorkV2 />
        <AboutV2 />
        <ContactV2 />
      </main>
      <footer className="v2-footer">
        <span>© {new Date().getFullYear()} Kanchan Singh</span>
        <span>Designed & built as an experiment ✦</span>
      </footer>
    </div>
  )
}

export default AppV2
