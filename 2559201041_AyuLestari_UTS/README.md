# AyyLaundry - UTS Pemrograman Web Dasar

- **Nama / NIM:** Ayu Lestari / 2559201041
- **Tema:** A. Profil UMKM
- **Objek:** AyyLaundry (usaha laundry)

## Daftar Fitur

- 4 halaman saling terhubung: Beranda, Tentang, Katalog, Kontak (navigasi sama di setiap halaman)
- Elemen semantik: header, nav, main, section, article, footer
- Tabel data: daftar harga (katalog.html) dan jam operasional (kontak.html)
- Katalog 6 layanan dalam bentuk kartu (gambar, nama, deskripsi, harga)
- Formulir kontak dengan label terhubung dan validasi HTML5 (required, email, tel + pattern, minlength/maxlength)
- Peta Google Maps (embed)
- Palet warna pink pastel dan biru pastel (variabel CSS di `:root`)
- CSS eksternal tunggal: flexbox (navigasi), grid (katalog), 5+ variabel CSS, hover, transition, dan @keyframes
- Responsif dengan media query HP (max 600px) dan desktop (min 992px)
- Bonus JavaScript: menu hamburger dengan classList.toggle (menu tetap tampil tanpa JavaScript)

## Sumber Gambar

Semua gambar (logo, ilustrasi layanan, avatar tim) adalah ilustrasi SVG buatan sendiri di folder `img/`. Font: Poppins dari Google Fonts.

## Kendala dan Cara Mengatasinya

- **Menu tidak muat di HP:** navigasi dibuat vertikal di bawah logo dengan media query, lalu ditambah hamburger sebagai bonus.
- **Kartu katalog terlalu sempit di HP:** grid diubah menjadi 1 kolom pada lebar 600px ke bawah.
- **Gambar beda ukuran:** memakai `aspect-ratio` dan `object-fit` agar kartu seragam.

## Catatan

Bukti validasi W3C untuk keempat halaman disimpan di folder `bukti/`.
