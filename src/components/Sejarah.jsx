import { IMG_HISTORY } from '../images.js'

function Fact({ k, v }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4">
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
      <dd className="mt-1 font-medium text-graphite">{v}</dd>
    </div>
  )
}

export default function Sejarah() {
  return (
    <section id="sejarah" className="relative bg-porcelain py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-teal">Sejarah</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-graphite sm:text-5xl">
            Jejak vulkanik <em className="not-italic text-teal">Gunung Mahawu</em>.
          </h2>
          <div className="mt-6 space-y-4 text-graphite/80 leading-relaxed">
            <p>Danau Linow terletak di Kelurahan Lahendong, Tomohon Selatan — sebuah danau kawah yang terbentuk dari aktivitas vulkanik di kompleks Gunung Mahawu dan Lokon. Kawasan ini dikenal kaya panas bumi, mata air belerang, serta fumarol yang masih aktif hingga kini.</p>
            <p>Nama <em>&ldquo;Linow&rdquo;</em> berasal dari kata Minahasa <em>&ldquo;Lilinowan&rdquo;</em> yang berarti <em>tempat berkumpulnya air</em>. Aroma khas belerang, uap tipis di permukaan, dan tebing hijau di sekelilingnya menjadi saksi asal-usul vulkaniknya.</p>
            <p>Sejak masa kolonial, kawasan zwavelbronnen (sumber belerang) di sekitar Meer van Linow telah didokumentasikan — kini menjadi bagian dari lanskap geotermal Lahendong yang juga menopang PLTP Lahendong milik Indonesia.</p>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <Fact k="Lokasi" v="Kel. Lahendong, Tomohon Selatan" />
            <Fact k="Jenis" v="Danau kawah vulkanik" />
            <Fact k="Sumber panas" v="Kompleks Mahawu–Lokon" />
            <Fact k="Kandungan" v="Belerang & mineral panas bumi" />
          </dl>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img src={IMG_HISTORY} alt="Foto arsip Tropenmuseum: sumber belerang di sekitar Meer van Linow" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-xl bg-teal p-5 text-porcelain shadow-xl sm:block">
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">Arsip · KITLV / Tropenmuseum</div>
            <div className="mt-2 font-display text-lg leading-snug">Meer van Linow, awal abad ke-20</div>
            <div className="mt-2 text-xs opacity-85">Dokumentasi sumber belerang di sekitar danau — bukti bahwa aktivitas geotermal Linow telah lama menjadi bagian identitas Minahasa.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
