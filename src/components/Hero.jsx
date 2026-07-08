import { IMG_HERO } from '../images.js'
import { Scroll } from "./Scroll";

function Stat({ n, label }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-jasmine sm:text-3xl">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-porcelain/70">{label}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <Scroll direction="left">
      <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
        <img src={IMG_HERO} alt="Panorama Danau Linow di Tomohon, Sulawesi Utara" className="absolute inset-0 h-full w-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/70 via-graphite/30 to-graphite/95" />
        <div className="relative z-10 container-x flex min-h-[100svh] flex-col justify-end pb-16 pt-32 text-porcelain">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-porcelain/30 bg-porcelain/10 px-3 py-1 text-xs uppercase tracking-[0.2em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-jasmine animate-pulse" />
            Ekowisata · Tomohon, Sulawesi Utara
          </span>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">
            Danau tiga warna<br />
            <span className="italic text-aqua">the inside Tomohon.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-porcelain/85 sm:text-lg">
            Lahir dari aktivitas vulkanik Gunung Mahawu — permukaan Linow dapat berganti warna sepanjang hari,
            dijaga masyarakat setempat sebagai warisan alam Kota Tomohon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#sejarah" className="rounded-full bg-jasmine px-6 py-3 text-sm font-semibold text-graphite hover:bg-jasmine/90 transition">Mulai Perjalanan</a>
            <a href="#pengalaman" className="rounded-full border border-porcelain/40 px-6 py-3 text-sm font-medium text-porcelain hover:bg-porcelain/10 transition">Lihat Pengalaman</a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-porcelain/20 pt-6 text-porcelain/90">
            <Stat n="Rp 35 rb" label="Tiket masuk" />
            <Stat n="3 warna" label="Fenomena air" />
            <Stat n="±10 km" label="Dari pusat Tomohon" />
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-porcelain/70 text-xs uppercase tracking-[0.3em] animate-bounce">Scroll</div>
      </section>
    </Scroll>
  )
}
