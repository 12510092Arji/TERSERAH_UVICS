import { IMG_LOGO } from '../images'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-porcelain/85">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[80%] -translate-x-1/2 rounded-full bg-teal/20 blur-3xl" />
      <div className="relative container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={IMG_LOGO} alt="Logo Danau Linow" className="h-11 w-11 rounded-full object-cover" />
              <div>
                <div className="font-display text-xl">Linow Lake</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-porcelain/50">Ekowisata Tomohon</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-porcelain/60 leading-relaxed">
              Perjalanan ekowisata ke Danau Linow — dirancang sebagai karya untuk
              <span className="text-jasmine"> BYTESFEST 2026</span>, SDGs Creative Web Competition, subtema
              <em className="text-porcelain/80"> Eco Journey: Sustainable Tourism Experience</em>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs hover:bg-white/10 transition">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.4 0 .02 5.38.02 12c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63A11.94 11.94 0 0 0 12.02 24c6.62 0 12-5.38 12-12 0-3.2-1.24-6.22-3.5-8.52ZM12.02 21.8a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.68.97.98-3.59-.23-.37a9.79 9.79 0 1 1 18.18-5.24 9.8 9.8 0 0 1-9.9 9.8Zm5.36-7.34c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07a8 8 0 0 1-2.35-1.45 8.87 8.87 0 0 1-1.63-2.02c-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5-.17-.01-.37-.01-.56-.01a1.08 1.08 0 0 0-.78.37c-.27.29-1.03 1.01-1.03 2.46s1.05 2.86 1.2 3.06c.15.2 2.06 3.15 5 4.42.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.11.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.26.17-1.39-.07-.13-.27-.2-.56-.34Z" /></svg>
                WhatsApp
              </a>
              <a href="https://instagram.com/linowlake.tomohon" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs hover:bg-white/10 transition">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.8.31-1.48.72-2.15 1.4A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.48 1.4 2.15a5.9 5.9 0 0 0 2.15 1.4c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.31 1.48-.72 2.15-1.4a5.9 5.9 0 0 0 1.4-2.15c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.4-2.15A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" /></svg>
                @linowlake.tomohon
              </a>
              <a href="https://maps.google.com/?q=Danau+Linow+Tomohon" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs hover:bg-white/10 transition">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
                Lahendong, Tomohon
              </a>
            </div>
          </div>
          <div className="text-sm">
            <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-porcelain/50">Jelajah</div>
            <ul className="space-y-3">
              <li><a href="#sejarah" className="hover:text-jasmine">Sejarah Danau Linow</a></li>
              <li><a href="#fenomena" className="hover:text-jasmine">Fenomena Tiga Warna</a></li>
              <li><a href="#pengalaman" className="hover:text-jasmine">Pengalaman Wisata</a></li>
              <li><a href="#edukasi" className="hover:text-jasmine">Dampak</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-porcelain/50">Kredit</div>
            <p className="text-porcelain/60 leading-relaxed">Foto Danau Linow: <span className="text-porcelain/80">Wikimedia Commons</span> — Lake Linow 2020, Danu Linow, Belerang Linow, Beautiful Sunset in Linow Lake, KITLV / Tropenmuseum. Kuliner: Panada & Kue Cucur (Wikimedia Commons). Ilustrasi fasilitas: Unsplash.</p>
            <p className="mt-4 text-porcelain/60">Semua konten dikurasi untuk keperluan edukatif kompetisi.</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-porcelain/50 md:flex-row md:items-center">
          <div>© 2026 Linow Lake — karya untuk BYTESFEST 2026 · SDGs Creative Web Competition.</div>
          <div className="flex gap-4"><span>Dibuat dengan hormat untuk masyarakat Lahendong, Tomohon.</span></div>
        </div>
      </div>
    </footer>
  )
}
