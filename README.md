# Portofolio — Fadi Rahma Azizah

Website portofolio statis (HTML/CSS/JS murni — tanpa build tool) dengan tema
**3D Glassmorphism Ungu-Putih**. Siap di-deploy langsung ke Vercel / Netlify /
GitHub Pages karena tidak butuh proses `build`.

## Struktur Folder

```
portfolio-fadi-rahma/
├── index.html            # Struktur seluruh halaman (satu halaman / one-page)
├── css/
│   └── style.css         # Tema glassmorphism, bento grid, tilt card, flip card, dll
├── js/
│   ├── data.js           # Seluruh konten bilingual ID/EN (profil, skill, proyek, sertifikat)
│   ├── cursor.js         # Custom glowing cursor follower
│   ├── orbit.js          # Visualisasi 3D orbit node (hero) + magnetic effect
│   ├── bento.js          # Bento grid keahlian (hover expand + progress bar neon)
│   ├── projects.js       # Kartu proyek dengan efek tilt 3D + indikator live berkedip
│   ├── certificates.js   # Galeri sertifikat dengan flip 3D
│   ├── lang.js           # Logika switch bahasa ID <-> EN + animasi flip tombol
│   └── main.js           # Inisialisasi & render semua komponen dinamis
└── README.md
```

## Fitur yang Sudah Diimplementasikan

1. **Tema 3D Glassmorphism ungu-putih** — dipakai konsisten lewat class `.glass`
   di `css/style.css` (blur, border tipis, bayangan dalam & luar).
2. **Bilingual switch** — tombol kapsul di navbar (`#lang-switch`) melakukan
   flip 3D (`css/style.css` → `.lang-switch`) dan langsung mengganti semua
   teks lewat atribut `data-i18n` (`js/lang.js`), tanpa reload halaman.
3. **Hero 3D Orbit Node** — `js/orbit.js` menggambar jaringan node di `<canvas>`
   yang berputar perlahan dan memiliki efek magnetic terhadap kursor.
4. **Bento Grid keahlian dengan hover-expand** — `js/bento.js` merender 3
   kategori (Networking & OS, Web Dev & Tools, Bahasa) yang meluas mulus saat
   di-hover, dengan progress bar neon berbasis data persentase kemahiran.
5. **Statistik kemahiran** — progress bar 3D neon animasinya ada di dalam
   detail bento (`.s-fill`), dengan data level per skill di `js/data.js`
   (silakan sesuaikan angka persentasenya, karena dokumen sumber tidak
   mencantumkan angka pasti — nilai saat ini adalah estimasi ilustratif).
6. **Project showcase dengan live status** — `js/projects.js` menambahkan
   efek tilt 3D mengikuti posisi kursor pada tiap kartu, plus lampu hijau
   berkedip (`.live-dot`) di samping tiap nama proyek.
7. **Sertifikat dengan 3D card flip** — `js/certificates.js` merender galeri
   yang bisa digeser secara horizontal (`overflow-x: auto` + scroll-snap),
   dan setiap kartu flip 3D saat diklik/hover untuk menampilkan deskripsi.
8. **Custom glowing cursor** — `js/cursor.js` menyembunyikan kursor asli
   (`cursor: none` pada body) dan menggantinya dengan lingkaran glow ungu
   yang mengejar posisi mouse dan melebar saat di atas elemen interaktif.

## Cara Menjalankan Secara Lokal

Karena murni statis, cukup buka `index.html` langsung di browser, **atau**
jalankan server lokal sederhana (disarankan agar path relatif berjalan mulus):

```bash
npx serve .
# atau
python3 -m http.server 8080
```

## Cara Deploy ke Vercel

1. Push folder ini ke repository GitHub.
2. Import repo di [vercel.com/new](https://vercel.com/new).
3. Framework preset: pilih **Other** (tidak butuh build command).
4. Root directory: folder ini (`portfolio-fadi-rahma`).
5. Deploy — selesai.

## Catatan Data yang Perlu Dicek Ulang

- Nomor WhatsApp pada dokumen sumber tertulis `+62 889-838S5-8921` (ada
  karakter aneh "S"), sehingga di `js/data.js` (variabel `PROFILE`) saya
  menuliskannya sebagai `+62 889-8385-8921` — **mohon verifikasi & perbaiki**
  bila salah tebak, termasuk link `wa.me` di variabel `whatsappLink`.
- Persentase kemahiran skill (`level`) di `js/data.js` adalah estimasi
  ilustratif untuk keperluan visualisasi grafik, karena dokumen sumber
  tidak menyertakan angka pasti — silakan sesuaikan sesuai penilaian Anda.
- Semua link proyek & sertifikat diambil apa adanya dari dokumen yang
  dilampirkan.

## Kustomisasi Cepat

- **Ganti warna tema:** edit variabel CSS di `:root` pada `css/style.css`
  (`--purple-500`, `--neon`, dst).
- **Tambah/ubah proyek atau sertifikat:** edit array `projects.list` /
  `certificates.list` di `js/data.js` — tampilan akan otomatis menyesuaikan.
- **Tambah kategori skill baru:** tambahkan objek baru di
  `skills.categories` pada `js/data.js` (untuk kedua bahasa `id` dan `en`).
