import { IMG_HISTORY } from '../images.js'
import { Scroll } from "./Scroll";

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
      <section id="sejarah" className="relative bg-[#F5EFE0] py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <Scroll direction="right" delay={0.4} id="sejarah">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-teal">Sejarah</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-graphite sm:text-5xl">
              Jejak vulkanik <em className="not-italic text-teal">Gunung Mahawu</em>
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
          </Scroll>

          <Scroll direction="left" delay={0.4} id="sejarah">
          <div className="flex justify-end w-full">
            <div className="group overflow-hidden rounded-2xl bg-teal max-w-[440px] w-full shadow-lg transition-all duration-300 hover:shadow-xl">
              
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={IMG_HISTORY} 
                  alt="Foto arsip Tropenmuseum: sumber belerang di sekitar Meer van Linow" 
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-active:scale-110" 
                />
                <div className="absolute top-4 left-4 rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-porcelain backdrop-blur-sm z-10">
                  Arsip Sejarah
                </div>
              </div>
              <div className="p-5 sm:p-6 text-porcelain">
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-75">KITLV / Tropenmuseum</div>
                <h3 className="mt-2 font-display text-lg font-medium leading-snug sm:text-xl">
                  Meer van Linow, awal abad ke-20
                </h3>
                <p className="mt-2 text-sm opacity-85 leading-relaxed">
                  Dokumentasi sumber belerang di sekitar danau — bukti bahwa aktivitas geotermal Linow telah lama menjadi bagian identitas Minahasa.
                </p>
              </div>
            </div>
          </div>
          </Scroll>
        </div>
      </section>
  )
}
