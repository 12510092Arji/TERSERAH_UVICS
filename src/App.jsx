import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Sejarah from './components/Sejarah.jsx'
import Fenomena from './components/Fenomena.jsx'
import Pengalaman from './components/Pengalaman.jsx'
import Dampak from './components/Dampak.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <main className="bg-[#F5EFE0] text-graphite">
      <Nav />
      <Hero />
      <Sejarah />
      <Fenomena />
      <Pengalaman />
      <Dampak />
      <Footer />
    </main>
  )
}
