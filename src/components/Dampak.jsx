import {
  IMG_COMMUNITY,
  IMG_CRAFT,
  IMG_BIRD,
  IMG_SULFUR,
  IMG_BOAT,
  IMG_SUNSET,
  IMG_GEOTHERMAL,
} from "../images.js";

export default function Dampak() {
  const tiles = [
    {
      img: IMG_COMMUNITY,
      tag: "SDM",
      text: "80+ warga Lahendong bekerja langsung sebagai penjaga, pemandu, pedagang, dan pengelola kawasan Danau Linow.",
    },
    {
      img: IMG_CRAFT,
      tag: "UMKM",
      text: "Kue cucur, panada, dan berbagai hidangan khas Minahasa dijual di cafe Danau Linow.",
    },
    {
      img: IMG_BIRD,
      tag: "Satwa",
      text: "Danau Linow menjadi habitat burung belibis yang menjadi satwa endemik.",
    },
    {
      img: IMG_SULFUR,
      tag: "Geo-Warisan",
      text: "Fenomena belerang dan geotermal dijaga sebagai laboratorium alam terbuka.",
    },
    {
      img: IMG_BOAT,
      tag: "Wisata Sadar",
      text: "Aktivitas di tepi air danau linow dibatasi agar keseimbangan kimia danau tetap terjaga.",
    },
    {
      img: IMG_SUNSET,
      tag: "Iklim",
      text: "Jalur pejalan kaki mengurangi emisi kendaraan bermotor di kawasan tepi danau.",
    },
    {
      img: IMG_GEOTHERMAL,
      tag: "Energi Bersih",
      text: "Panas bumi Lahendong menyuplai listrik ramah lingkungan ke jaringan Sulawesi Utara.",
    },
  ];

  return (
    <section id="dampak" className="relative bg-[#8FBFA8] py-24 sm:py-28 overflow-hidden text-porcelain">
      <style>{`
        @keyframes linow-rise {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes linow-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes linow-glow {
          0%, 100% { opacity: 0.25; }
          50%      { opacity: 0.55; }
        }
        @keyframes linow-shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .linow-rise {
          animation: linow-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .linow-float {
          animation: linow-float 5s ease-in-out infinite;
        }
        .linow-float-delay-1 { animation-delay: 0.6s; }
        .linow-float-delay-2 { animation-delay: 1.2s; }
        .linow-float-delay-3 { animation-delay: 2s; }
        .linow-card-glow {
          animation: linow-glow 4s ease-in-out infinite;
        }
        .linow-card-shimmer {
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255,255,255,0.08) 45%,
            rgba(255,255,255,0.16) 50%,
            rgba(255,255,255,0.08) 55%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: linow-shimmer 3.5s linear infinite;
        }
      `}</style>

      {/* glow background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[70%] -translate-x-1/2 rounded-full bg-teal/15 blur-[120px]" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-jasmine">Dampak</span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl md:text-6xl">
            Jejak baik yang tumbuh di tepi Linow.
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => {
            const wide = i === 0 || i === 3;
            return (
              <figure
                key={i}
                className={`
                  linow-rise group relative overflow-hidden rounded-2xl border border-white/10 bg-graphite shadow-lg
                  ${wide ? "sm:col-span-2" : ""}
                `}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* floating image */}
                <div
                  className={`absolute inset-0 transition duration-700 group-hover:scale-110 ${i % 2 === 0 ? "linow-float" : "linow-float linow-float-delay-1"
                    }`}
                >
                  <img
                    src={t.img}
                    alt={t.tag}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

                {/* shimmer hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 linow-card-shimmer" />

                {/* glow ring */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-jasmine/40 transition duration-500" />

                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-jasmine" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-jasmine">
                      {t.tag}
                    </span>
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-porcelain/90">
                    {t.text}
                  </p>
                </figcaption>

                {/* corner index */}
                <div className="absolute right-4 top-4 font-display text-3xl text-white/10 group-hover:text-jasmine/30 transition duration-500">
                  0{i + 1}
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
