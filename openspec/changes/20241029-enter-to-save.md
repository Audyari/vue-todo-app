# [FEATURE] Tambahkan Dukungan Enter untuk Menyimpan Perubahan Todo

## Ringkasan
Menambahkan fungsionalitas untuk menyimpan perubahan todo dengan menekan tombol Enter di komponen TodoItem.

## Konteks
Saat ini, pengguna harus mengklik tombol "Simpan" untuk menyimpan perubahan pada todo. Menambahkan dukungan untuk tombol Enter akan meningkatkan pengalaman pengguna dengan memberikan cara yang lebih cepat dan alami untuk menyimpan perubahan.

## Perubahan yang Diperlukan

### Komponen `TodoItem.vue`
1. Tambahkan event handler untuk tombol Enter di komponen Input
2. Panggil fungsi `saveEdit` ketika tombol Enter ditekan
3. Pastikan validasi input tetap berfungsi dengan baik

### Perilaku yang Diharapkan
1. Ketika pengguna menekan tombol Enter saat berada di input field:
   - Jika input tidak kosong, simpan perubahan
   - Jika input kosong, tampilkan pesan error
2. Fokus tetap berada di input field setelah menyimpan
3. Tidak ada perubahan pada fungsionalitas yang sudah ada

## Dampak
- Meningkatkan UX dengan memungkinkan penyimpanan menggunakan keyboard
- Tidak ada dampak pada fungsionalitas yang sudah ada
- Tidak memerlukan perubahan pada komponen lain

## Penerimaan
- [ ] Menyimpan perubahan dengan menekan tombol Enter berfungsi dengan benar
- [ ] Pesan error tetap muncul jika input kosong
- [ ] Fokus tetap di input field setelah menyimpan
- [ ] Tidak ada regresi pada fungsionalitas yang sudah ada

## Catatan Tambahan
- Pastikan event handler tidak mengganggu perilaku default dari tombol Enter
- Pertimbangkan untuk menambahkan aksesibilitas (misalnya, ARIA attributes) jika diperlukan
