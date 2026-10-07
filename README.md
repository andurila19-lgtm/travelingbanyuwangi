# 🚙 SEWA JEEP BANYUWANGI .ID
> **Platform Wisata Offroad & Sewa Jeep 4x4 Terpercaya di Banyuwangi**  
> Jelajahi Kawah Ijen, Taman Nasional Baluran (Afrika van Java), Hutan De Djawatan, dan Kawah Wurung bersama armada tangguh dan driver lokal berpengalaman.

---

## 🌟 Fitur Unggulan

- **Multi-Page App Router (Next.js 16)**:
  - `/` (Beranda & Hero Booking)
  - `/tentang-kami` (Cerita & Keunggulan Layanan)
  - `/paket-wisata` (Katalog Rute & Paket Wisata Lengkap)
  - `/destinasi` (Eksplorasi Spot Wisata Favorit)
  - `/armada` (Showroom Jeep 4x4 Prima & Terawat)
  - `/testimoni` (Ulasan & Rating Wisatawan)
  - `/blog` (Tips Wisata & Cerita Petualangan)
  - `/kontak` (Informasi Kantor & Formulir Konsultasi Langsung)
- **Desain Responsif & Mobile-First**:
  - **Slide-Over Drawer Kanan**: Navigasi mobile modern bergaya native app dengan backdrop blur dan thumb-friendly ergonomics.
  - **Minimalist Subpage Headers**: Header ringkas pada tampilan ponsel tanpa elemen berlebih yang memakan layar.
- **WhatsApp Direct Booking Integration**:
  - Modal booking interaktif dengan pemilihan rute, tanggal sewa, jumlah orang, dan penjemputan.
  - Floating WhatsApp action button dengan pesan otomatis terstruktur.
- **SEO, AEO & GEO Optimized**:
  - Metadata OpenGraph, Twitter Cards, semantic schema, dan performa cepat.

---

## 📁 Struktur Direktori

```text
traveling-banyuwangi/
├── next-app/                  # Aplikasi Utama Next.js 16 (App Router + Tailwind CSS)
│   ├── src/
│   │   ├── app/               # Rute halaman multi-page
│   │   ├── components/        # Komponen UI (Navbar, Footer, Modal, PageHeader, dll.)
│   │   └── context/           # Context API (Booking modal state)
│   ├── public/                # Asset gambar & ikon Next.js
│   └── package.json
├── assets/                    # Asset gambar asli
├── css/ & js/                 # File aset landing page prototype awal
├── index.html                 # Landing page prototype statis awal
└── README.md
```

---

## 🚀 Menjalankan Project

### Prasyarat
- Node.js 18+ atau 20+
- npm atau pnpm

### Instalasi & Dev Server (Next.js)

```bash
# Masuk ke direktori Next.js
cd next-app

# Install dependencies (jika belum)
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) (atau port yang ditentukan) di browser Anda.

---

## 📄 Lisensi
Hak Cipta © 2026 SEWA JEEP BANYUWANGI .ID. All Rights Reserved.
