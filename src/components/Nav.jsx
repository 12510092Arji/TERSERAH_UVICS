import { useEffect, useState } from 'react'
import { IMG_LOGO } from '../images'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    on(); window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-[#1A3A34]/35 backdrop-blur border-b border-graphite/35' : 'bg-transparent'}`}>
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={IMG_LOGO} alt="Logo Danau Linow" className="h-9 w-9 rounded-full object-cover" />
          <span className={`font-display text-lg font-semibold tracking-tight ${scrolled ? 'text-porcelain' : 'text-graphite'}`}>Linow Lake</span>
        </a>
        <div className={`hidden gap-8 md:flex text-sm ${scrolled ? 'text-porcelain/80' : 'text-graphite/90'}`}>
          <a href="#sejarah" className="hover:text-jasmine transition">Sejarah</a>
          <a href="#fenomena" className="hover:text-jasmine transition">Fenomena</a>
          <a href="#pengalaman" className="hover:text-jasmine transition">Pengalaman</a>
          <a href="#dampak" className="hover:text-jasmine transition">Dampak</a>
        </div>
      </nav>
    </header>
  )
}
