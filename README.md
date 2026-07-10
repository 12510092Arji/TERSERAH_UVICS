# Linow Lake — Ekowisata Danau Linow, Tomohon

Landing page ekowisata untuk **BYTESFEST 2026 — SDGs Creative Web Competition**
(subtema *Eco Journey: Sustainable Tourism Experience*).

## Stack
- React 18 + Vite 5
- Tailwind CSS 3
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
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── Sejarah.jsx
│   ├── Fenomena.jsx
│   ├── Pengalaman.jsx
│   ├── Edukasi.jsx
│   ├── Kunjungi.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
├── images.js       # semua URL gambar terpusat
└── index.css
```

## Palet Warna
- Jungle Teal `#2E8B7D` (Primary)
- Pearl Aqua `#6FC6C1` (Secondary)
- Jasmine `#F8D184` (Tertiary)
- Porcelain `#FAFAF7` (Background)
- Graphite `#2B2B2B` (Text)

## Sumber Gambar (Asli)
Semua foto Danau Linow diambil dari **Wikimedia Commons** (lisensi CC BY-SA):
- `Lake Linow 2020.jpg`
- `Danu Linow.jpg`
- `Belerang Linow.jpg`
- `Beautiful sunset in Linow Lake, Tondano.jpg`
- Arsip KITLV / Tropenmuseum — sumber belerang Meer van Linow

Kuliner (Wikimedia Commons):
- `Panada.JPG`, `Kue Cucur Gula Merah (Tutulu).jpg`

Ilustrasi fasilitas (kafe, resort, camping) dari **Unsplash** (lisensi bebas).

## Konten
1. **Hero** — pintu masuk visual + tiket Rp 35.000
2. **Sejarah** — asal-usul vulkanik + arsip Tropenmuseum
3. **Fenomena** — tiga warna air (pagi/siang/sore) + penjelasan ilmiah
4. **Pengalaman** — tiket, kafe, resort, camping, pemandu, kuliner Minahasa
5. **Edukasi** — panduan wisata bertanggung jawab
6. **Kunjungi** — info praktis + Google Maps
7. **Footer** — kontak WhatsApp & Instagram

## Kriteria Penilaian (BYTESFEST 2026)
- **Kesesuaian Tema (25%)** — ekowisata & pemberdayaan lokal
- **Visual Design (30%)** — komposisi warna, tata letak editorial, tipografi Fraunces + Plus Jakarta Sans
- **Inovasi & Fungsional (30%)** — narasi tiga-warna, arsip historis, kartu pengalaman
- **Responsive Design (15%)** — grid responsif dari mobile → desktop
