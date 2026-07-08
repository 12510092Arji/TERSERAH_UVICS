import { IMG_MORNING, IMG_MIDDAY, IMG_SUNSET, IMG_SULFUR } from '../images.js'

const colors = [
  { time: 'Pagi', name: 'Toska Kebiruan', hex: '#6FC6C1', img: IMG_MORNING, desc: 'Cahaya rendah dan uap belerang tipis membuat permukaan tampak toska lembut.' },
  { time: 'Siang', name: 'Hijau Zamrud', hex: '#2E8B7D', img: IMG_MIDDAY, desc: 'Matahari tegak — mineral belerang & mikroorganisme memantul menjadi hijau pekat.' },
  { time: 'Sore', name: 'Kuning Keemasan', hex: '#F8D184', img: IMG_SUNSET, desc: 'Cahaya senja hangat memantul di permukaan, menghadirkan warna kuning keemasan.' },
]

export default function Fenomena() {
  return (
    <section id="fenomena" className="relative overflow-hidden bg-graphite py-24 text-porcelain sm:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-jasmine">Fenomena</span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl md:text-6xl">
            Air yang berubah warna sepanjang <span className="text-aqua italic">perjalanan matahari</span>.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {colors.map((c, i) => (
            <figure key={c.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition hover:-translate-y-1 hover:border-white/25">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={`Danau Linow saat ${c.time.toLowerCase()}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.hex }} />
                  0{i + 1} · {c.time}
                </div>
              </div>
              <figcaption className="p-6">
                <div className="font-display text-2xl font-semibold">{c.name}</div>
                <p className="mt-2 text-sm text-porcelain/70">{c.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[1.1fr_1fr] md:gap-10 md:p-8">
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
            <img src={IMG_SULFUR} alt="Endapan belerang di tepi Danau Linow" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
