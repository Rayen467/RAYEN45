# BukuBaik — Halaman Kampanye Donasi Buku

Halaman statis satu-halaman untuk kampanye donasi buku bacaan anak dan dukungan dana
bagi **PAUD Anggrek, Desa Sukatani**. Situs ini dibuat sebagai halaman donor-facing yang
langsung menjelaskan pilihan donasi, kontak Gmail koordinator BukuBaik, rekening BCA,
alur pengiriman buku, dan catatan keamanan singkat.

## Informasi yang tampil di situs

- Penerima konteks: **PAUD Anggrek, Desa Sukatani**
- Koordinasi donasi: **BukuBaik** melalui `bukubaik@gmail.com`
- Rekening dukungan dana: **BCA 743-583-0684**
- Nomor rekening untuk tombol salin: `7435830684`
- Atas nama: **ARMANDA EKA WAHYU PRAYOGA**
- Donasi buku fisik: alamat/titik serah dikoordinasikan melalui Gmail, tidak ditampilkan
  secara publik.

## Prinsip halaman

- Tidak ada login, kata sandi, akun donatur, atau formulir yang berpura-pura menyimpan data.
- Semua CTA email membuka draft ke `bukubaik@gmail.com`; membuka draft bukan bukti
  donasi sudah diterima.
- Metode pembayaran lain tidak ditampilkan karena tidak ada data tambahan yang diberikan.
- Gambar `assets/bukubaik-hero.png` dipakai sebagai ilustrasi kampanye, bukan dokumentasi
  penyaluran yang sudah terjadi.
- Dokumentasi nyata, bukti penyaluran, total donasi, atau testimoni tidak dipalsukan.

## File

```text
index.html    struktur halaman dan seluruh copy donor-facing
styles.css    token visual, layout responsif, komponen, breakpoint 640px / 900px
script.js     tahun footer, tombol salin, tombol bagikan, scrollspy
assets/       aset ilustrasi lokal
vercel.json   konfigurasi hosting statis
```

## Preview lokal

Project ini static murni dan tidak memerlukan build command.

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Catatan publikasi

Perubahan ini baru disiapkan secara lokal. Jangan push/deploy sebelum pemilik situs memang
mengonfirmasi bahwa data kontak dan rekening siap ditampilkan publik.
