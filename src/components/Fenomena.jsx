import { useState, useEffect } from 'react'
import { IMG_MORNING, IMG_MIDDAY, IMG_SUNSET, IMG_SULFUR } from '../images.js'
import { Scroll } from "./Scroll";

const colors = [
  { time: 'Pagi', name: 'Toska Kebiruan', hex: '#6FC6C1', bgClass: 'bg-[#6FC6C1]', img: IMG_MORNING, desc: 'Cahaya rendah dan uap belerang tipis membuat permukaan tampak toska lembut.' },
  { time: 'Siang', name: 'Hijau Zamrud', hex: '#2E8B7D', bgClass: 'bg-[#2E8B7D]', img: IMG_MIDDAY, desc: 'Matahari tegak — mineral belerang & mikroorganisme memantul menjadi hijau pekat.' },
  { time: 'Sore', name: 'Kuning Keemasan', hex: '#F8D184', bgClass: 'bg-[#F8D184]', img: IMG_SUNSET, desc: 'Cahaya senja hangat memantul di permukaan, menghadirkan warna kuning keemasan.' },
]

export default function Fenomena() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="fenomena" className="relative overflow-hidden bg-graphite py-24 text-porcelain sm:py-32 transition-colors duration-1000">
      <div className="absolute inset-0 bg-[#121212] opacity-80 z-0" />

      <div
        className={`absolute inset-0 ${colors[activeIndex].bgClass} opacity-15 mix-blend-screen transition-all duration-1000 ease-in-out z-0 blur-[80px]`}
      />

      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-jasmine">Fenomena</span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl md:text-6xl">
            Air yang berubah warna sepanjang <span className="text-aqua italic">perjalanan matahari</span>.
          </h2>
        </div>

        <Scroll direction="left" delay={0.2} id="fenomena">
          <div className="mt-14 grid gap-6 sm:grid-cols-3 w-full">
            {colors.map((c, i) => {
              const isActive = i === activeIndex
              return (
                <figure
                  key={c.name}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-700 ${isActive ? 'border-white/40 -translate-y-1 bg-white/[0.05] shadow-lg' : 'border-white/10'
                    }`}
                >
                  <div className="relative aspect-video w-full overflow-hidden shrink-0">
                    <img src={c.img} alt={`Danau Linow saat ${c.time.toLowerCase()}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/10 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-porcelain backdrop-blur-md z-10">
                      <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: c.hex }} />
                      {c.time}
                    </div>
                  </div>

                  <figcaption className="flex flex-1 flex-col p-5">
                    <div className="font-display text-xl font-semibold tracking-wide">{c.name}</div>
                    <p className="mt-2 text-xs leading-relaxed text-porcelain/60">{c.desc}</p>
                  </figcaption>
                </figure>
              )
            })}
          </div>
        </Scroll>

        <Scroll direction="right" delay={0.5} id="fenomena">
          <div className="group mt-16 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[1.1fr_1fr] md:gap-10 md:p-8 transition-colors hover:bg-white/[0.06]">
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.25em] text-jasmine/80">Mengapa berubah?</span>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Sulfur, mineral vulkanik, dan sudut matahari.</h3>
              <p className="mt-3 text-porcelain/75 leading-relaxed">
                Air Linow kaya sulfur dari aktivitas geotermal kompleks Mahawu–Lokon. Ketika sudut matahari bergeser, panjang gelombang yang dipantulkan berubah — <span className="text-aqua">toska</span> saat pagi, <span className="text-teal">hijau zamrud</span> saat cahaya tegak, dan <span className="text-jasmine">keemasan</span> ketika senja terserap partikel belerang.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px] uppercase tracking-widest">
                <span className="rounded-full border border-white/15 px-3 py-1 text-porcelain/80">Sulfur</span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-porcelain/80">Refraksi cahaya</span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-porcelain/80">Mikroorganisme termofilik</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src={IMG_SULFUR}
                alt="Endapan belerang di tepi Danau Linow"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </Scroll>
      </div>
    </section>
  )
}
