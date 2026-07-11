# Linow Lake — Ekowisata Danau Linow, Tomohon

Landing page ekowisata untuk **BYTESFEST 2026 — SDGs Creative Web Competition**
(subtema *Eco Journey: Sustainable Tourism Experience*).

## Stack
- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion (animasi *scroll-reveal*)
- Pure JSX (tanpa TypeScript)

## Menjalankan
```bash
npm install
npm run dev
```
Buka http://localhost:5173

## Build produksi
```bash
npm run build
npm run preview
```

## Struktur
```
src/
├── components/
│   ├── Nav.jsx        # navbar fixed, transparan → solid saat scroll
│   ├── Hero.jsx        # panorama + tagline + statistik singkat
│   ├── Sejarah.jsx     # asal-usul vulkanik + kartu arsip Tropenmuseum
│   ├── Fenomena.jsx    # fenomena tiga warna air (auto-rotate) + penjelasan ilmiah
│   ├── Pengalaman.jsx  # marquee horizontal kafe, resto, camping, UMKM, spot foto
│   ├── Dampak.jsx      # grid dampak sosial-ekonomi-lingkungan (bento grid)
│   ├── Footer.jsx      # kontak WhatsApp, Instagram, Maps + kredit foto
│   └── Scroll.jsx      # helper animasi reveal-on-scroll (Framer Motion)
├── App.jsx             # menyusun urutan section
├── main.jsx
├── images.js           # semua sumber gambar terpusat (asset lokal + Wikimedia)
└── index.css
```

## Palet Warna
- Jungle Teal `#2E8B7D` (Primary)
- Pearl Aqua `#6FC6C1` (Secondary)
- Jasmine `#F8D184` (Tertiary)
- Porcelain `#FAFAF7` (Teks di atas latar gelap)
- Graphite `#2B2B2B` (Teks utama)
- Latar krem `#F5EFE0` (background section Sejarah & Pengalaman)
- Hijau tua `#1A3A34` (background section Dampak & navbar saat scroll)

## Sumber Gambar (Asli)
Sebagian foto kini menggunakan aset lokal (folder `src/assets`, format `.webp`)
untuk foto Danau Linow, fasilitas (kafe, resto, campground), UMKM, satwa, dan
energi bersih — digunakan dengan izin pengelola akun **@danau.linow** dan
**@danaulinowresort**.

Foto pendukung lain diambil dari **Wikimedia Commons** (lisensi CC BY-SA):
- `Lake Linow 2020.jpg` (Hero)
- `Belerang Linow.jpg` (Fenomena — endapan belerang)
- Arsip KITLV / Tropenmuseum — sumber belerang Meer van Linow (Sejarah)

## Konten
1. **Nav** — navigasi tautan ke tiap section, berubah gaya saat halaman di-scroll
2. **Hero** — pintu masuk visual, tagline "danau tiga warna", statistik tiket & jarak
3. **Sejarah** — asal-usul vulkanik Gunung Mahawu, arti nama "Linow", arsip Tropenmuseum
4. **Fenomena** — tiga warna air (pagi/siang/sore) beranimasi otomatis + penjelasan ilmiah (sulfur, refraksi cahaya, mikroorganisme termofilik)
5. **Pengalaman** — marquee bergulir: coffee shop, restaurant, campground, UMKM lokal, spot foto
6. **Dampak** — dampak sosial-ekonomi-lingkungan: SDM lokal, UMKM, satwa (burung belibis), geo-warisan, kerajinan tangan, iklim, energi bersih (PLTP Lahendong)
7. **Footer** — kontak WhatsApp & Instagram, tautan Google Maps, kredit foto

## Kriteria Penilaian (BYTESFEST 2026)
- **Kesesuaian Tema (25%)** — ekowisata & pemberdayaan lokal
- **Visual Design (30%)** — komposisi warna, tata letak editorial, tipografi Fraunces + Plus Jakarta Sans
- **Inovasi & Fungsional (30%)** — narasi tiga-warna beranimasi, arsip historis, bento grid dampak, marquee pengalaman
- **Responsive Design (15%)** — grid responsif dari mobile → desktop
