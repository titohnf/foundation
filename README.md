# Tera Foundation — Website Company Profile

Website company profile Yayasan Tera Foundation, dibangun dengan React (Vite) + Tailwind CSS, dan di-hosting di Netlify.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Menambah / Mengedit Profil Anak

Semua data anak disimpan di `src/data/anak.json`, tidak perlu coding untuk mengeditnya.

Format setiap objek anak:

```json
{
  "id": 6,
  "nama": "Nama Samaran",
  "usia": 10,
  "kelas": "Kelas 4 SD",
  "situasi": "Deskripsi singkat 2-3 kalimat tentang situasi anak.",
  "kebutuhan": ["biaya_sekolah", "buku_alat_tulis"],
  "status": "belum_ada_donatur",
  "tanggal_masuk": "2026-07-01",
  "avatar_seed": "Kata-Unik-Untuk-Avatar"
}
```

Ketentuan:
- `status` hanya boleh berisi salah satu dari: `belum_ada_donatur`, `sedang_dibantu`, `sudah_terbantu`.
- `kebutuhan` adalah **array key kategori**, bukan teks bebas. Key yang boleh dipakai hanya yang terdaftar di `src/data/kategoriKebutuhan.js` (misalnya `biaya_sekolah`, `seragam_perlengkapan`, `buku_alat_tulis`, `biaya_ujian`, `transportasi`, `pendaftaran_kuliah`). Kategori ini mewakili kebutuhan anak **di luar** bimbingan belajar, karena semua anak yang tampil di halaman ini sudah mendapat bimbel gratis dari program Tera. Satu anak boleh punya lebih dari satu kategori kebutuhan. Jika kategori yang dibutuhkan belum ada di daftar, tambahkan dulu key baru di `kategoriKebutuhan.js` sebelum dipakai di `anak.json`.
- `avatar_seed` adalah teks unik yang menentukan bentuk avatar ilustrasi (dari dicebear.com, style lorelei). Gunakan nilai yang berbeda untuk setiap anak.
- Jangan gunakan foto asli anak — hanya nama samaran dan avatar ilustrasi.
- Untuk menambah anak baru, cukup tambahkan objek baru ke dalam array dengan `id` yang belum dipakai.
- Untuk menghapus profil anak, hapus objek yang bersangkutan dari array.

Setelah mengedit file ini, deploy ulang ke Netlify agar perubahan tampil (lihat bagian di bawah).

## Deploy Ulang ke Netlify

Jika situs sudah terhubung dengan repository Git:
1. Commit dan push perubahan ke branch yang terhubung dengan Netlify.
2. Netlify akan otomatis membangun ulang (`npm run build`) dan mempublikasikan situs baru.

Jika ingin deploy manual tanpa Git:
1. Jalankan `npm run build` untuk menghasilkan folder `dist/`.
2. Upload folder `dist/` melalui Netlify (drag & drop) di dashboard Netlify, atau gunakan Netlify CLI: `netlify deploy --prod`.

File `netlify.toml` sudah berisi konfigurasi redirect agar React Router tidak menghasilkan 404 saat halaman di-refresh.
