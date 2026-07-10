import {
  IMG_HERO,
  IMG_CAFE,
  IMG_RESORT,
  IMG_CAMP,
  IMG_PANADA,
  IMG_CUCUR,
  IMG_SUNSET,
} from "../images.js";
import { Scroll } from "./Scroll";

export default function Pengalaman() {
  const items = [
    { title: "Tiket Masuk", caption: "Rp 35.000/orang — retribusi berputar di kawasan.", img: IMG_HERO },
    { title: "Cafe Tepi Danau", caption: "Nongkrong sambil menikmati keindahan Danau.", img: IMG_CAFE },
    { title: "Linow Resort", caption: "Menginap di tepi kaldera vulkanik.", img: IMG_RESORT },
    { title: "Area Camping", caption: "Bangun pagi disambut kabut belerang.", img: IMG_CAMP },
    { title: "Panada Cakalang", caption: "Kue khas Minahasa di meja UMKM.", img: IMG_PANADA },
    { title: "Cucur Gula Merah", caption: "Kue tradisional Manis lembut, resep turun-temurun.", img: IMG_CUCUR },
    { title: "Sunset Linow", caption: "Langit jingga memantul di permukaan sulfur.", img: IMG_SUNSET },
  ];

  // Duplikasi untuk loop marquee tanpa jeda.
  const loop = [...items, ...items];

  return (
    <Scroll direction="left">
      <section id="pengalaman" className="bg-[#F5EFE0] py-24 sm:py-28 overflow-hidden">
        <style>{`
        @keyframes linow-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .linow-track {
          animation: linow-marquee 42s linear infinite;
          will-change: transform;
        }
        .linow-track:hover,
        .linow-track:focus-within {
          animation-play-state: paused;
        }
      `}</style>

        <div className="container-x">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-teal">Pengalaman</span>
              <h2 className="mt-3 font-display text-4xl font-semibold text-graphite sm:text-5xl md:text-6xl">
                Bingkai perjalanan di tepi kaldera.
              </h2>
            </div>
            <p className="max-w-md text-graphite/70">
              Setiap frame menggerakkan ekonomi lokal — dari loket, kafe, resort,
              camping, hingga meja UMKM kue khas Minahasa.
            </p>
          </div>
        </div>

        <div
          className="mt-14 relative"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
          }}
        >
          <div className="linow-track flex w-max gap-5 pl-5">
            {loop.map((it, i) => (
              <figure
                key={i}
                className="group w-[220px] shrink-0 sm:w-[260px]"
              >
                <div className="relative h-[360px] sm:h-[400px] overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-porcelain">
                    <div className="font-display text-lg leading-tight">{it.title}</div>
                  </div>
                </div>
                <figcaption className="mt-3 px-1 text-sm text-graphite/70 leading-snug">
                  {it.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Scroll>
  );
}
