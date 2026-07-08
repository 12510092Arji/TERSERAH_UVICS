function Info({ label, value }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  )
}

export default function Kunjungi() {
  return (
    <section id="kunjungi" className="relative overflow-hidden bg-teal py-24 text-porcelain sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-jasmine">Rencanakan kunjungan</span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl md:text-6xl">Sepetak surga vulkanik, sepuluh kilometer dari pusat kota.</h2>
          <p className="mt-5 max-w-xl text-porcelain/85">Waktu terbaik mengunjungi Linow adalah pagi hingga sore hari — saat perubahan warna paling dramatis terlihat. Hormati warga, dukung UMKM lokal, dan bawa kembali sampah Anda.</p>
        </div>
        <div className="rounded-2xl bg-porcelain p-6 text-graphite sm:p-8 shadow-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <Info label="Tiket masuk" value="Rp 35.000 / orang" />
            <Info label="Jam operasional" value="08.00 – 18.00 WITA" />
            <Info label="Akses" value="±10 km dari pusat Tomohon" />
            <Info label="Musim terbaik" value="Mei – Oktober" />
          </div>
          <a href="https://maps.google.com/?q=Danau+Linow+Tomohon" target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-graphite px-6 py-3 text-sm font-medium text-porcelain hover:bg-graphite/90">Buka di Google Maps</a>
        </div>
      </div>
    </section>
  )
}
