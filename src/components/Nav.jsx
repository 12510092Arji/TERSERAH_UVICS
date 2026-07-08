import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    on(); window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-porcelain/85 backdrop-blur border-b border-border' : 'bg-transparent'}`}>
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-teal text-porcelain font-display text-sm">L</span>
          <span className={`font-display text-lg font-semibold tracking-tight ${scrolled ? 'text-graphite' : 'text-porcelain'}`}>Linow Lake</span>
        </a>
        <div className={`hidden gap-8 md:flex text-sm ${scrolled ? 'text-graphite/80' : 'text-porcelain/90'}`}>
          <a href="#sejarah" className="hover:text-jasmine transition">Sejarah</a>
          <a href="#fenomena" className="hover:text-jasmine transition">Fenomena</a>
          <a href="#pengalaman" className="hover:text-jasmine transition">Pengalaman</a>
          <a href="#dampak" className="hover:text-jasmine transition">Dampak</a>
          <a href="#kunjungi" className="hover:text-jasmine transition">Kunjungi</a>
        </div>
        <a href="#kunjungi" className="hidden md:inline-flex items-center rounded-full bg-jasmine px-4 py-2 text-sm font-medium text-graphite hover:bg-jasmine/90 transition">
          Rencanakan Kunjungan
        </a>
      </nav>
    </header>
  )
}
