# Binahub: instalasi skill dan audit UI awal

Pembaruan: temuan 1 dan 2 telah diterapkan, kemudian pemeriksaan lanjutan dilakukan sesuai instruksi pengguna. Lihat [hasil refinement dan validasi](binahub-ui-refinement-results.md). Bagian di bawah mencatat kondisi sebelum perubahan.

Tanggal: 14 Oktober 2026, Asia/Jakarta. Commit website yang diperiksa: `4db17342b12a14837b073b0c492a634363348123`.

## Status instalasi

Terpasang secara global untuk Codex di `C:/Users/USER/.codex/skills/`. Skill tersedia melalui discovery pada giliran percakapan berikutnya.

| Sumber | Skill terpasang | Peran untuk Binahub |
| --- | --- | --- |
| [ibelick/ui-skills](https://github.com/ibelick/ui-skills) | `ui-skills-root` | Memilih konteks skill yang sesuai dengan pekerjaan. |
| Repo yang sama | `baseline-ui` | Referensi dasar spacing, hirarki, tipografi, dan affordance. |
| [improve-ui](https://github.com/ibelick/ui-skills/blob/main/skills/improve-ui/SKILL.md) | `improve-ui` | Audit terhadap sistem desain yang sudah ada dan penyusunan rencana perubahan terpilih. |
| Repo yang sama | `fixing-accessibility` | Audit nama kontrol, keyboard, fokus, dialog, dan form. |
| Repo yang sama | `fixing-motion-performance` | Menilai biaya animasi dan memperbaiki titik yang terbukti bermasalah. |
| Repo yang sama | `fixing-metadata` | Pemeriksaan metadata dan preview berbagi ketika diperlukan. |
| Repo yang sama | `create-design-md` | Mendokumentasikan sistem desain yang terbukti berlaku, bila diminta. |
| Repo yang sama | `component-canvas` | Membandingkan komponen dan varian yang sudah ada, bila diperlukan. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | `impeccable` | Referensi refinement: polish, adapt, typeset, harden, dan optimize. |

`improve-ui` sudah termasuk dalam `ui-skills`; tautan terpisahnya tidak menghasilkan instalasi ganda.

UI UX Pro Max dikeluarkan sesuai instruksi terbaru pengguna. Folder yang sempat dipasang telah dipindahkan ke `C:/Users/USER/.codex/tmp/binahub-ui-skills-20261014/removed-ui-ux-pro-max/`, di luar direktori skill aktif. Penghapusan permanen ditolak pemeriksaan otomatis dengan pesan `blocked by policy`, sehingga digunakan pengarsipan yang bisa dipulihkan.

Salinan repo yang dipelajari:

- `ibelick/ui-skills`: `9a0cb1e610e3a1a4f0f2723bf2e7680ac1b89cf5`.
- `pbakaus/impeccable`: `2f98774f86bc05563876643db37e6c37c322850f`.

Validasi: seluruh sembilan skill memiliki `SKILL.md`, nama dan deskripsi yang benar, isi yang cocok dengan sumber setelah normalisasi newline, serta seluruh file pendukung dari folder sumber. Launcher Windows Impeccable berhasil menjalankan `context --target src/app/page.tsx`. Instalasi ini menggunakan helper skill-installer; tidak menambahkan dependency aplikasi, hook proyek, atau server MCP.

## Design language

- **Audited surface:** beranda `/`, `/id`, dan `/en`, termasuk navbar dan footer yang dipasang root layout. Audit berbasis kode lokal; deployment `binahub.id` belum diperiksa secara visual.
- **Design sources:** instruksi pengguna untuk mempertahankan desain, `src/app/layout.tsx`, `src/app/globals.css`, section beranda, komponen layout, serta kontrak bilingual dalam `docs/manual-qa-checklist.md` bagian 3.
- **Documented decisions:** warna utama `--primary: #0B2C6B`, aksen `--accent: #D9A441`, dan permukaan sekunder `#F5F7FA` sudah didefinisikan. Font utama Plus Jakarta Sans dan font sekunder Inter sudah dimuat melalui `next/font`. Pengguna meminta refinement terhadap identitas yang ada.
- **Governing owners and consumers:** `src/app/[locale]/page.tsx` mengekspor beranda dari `src/app/page.tsx`. Beranda memasang `HomeHero`, `AboutCarouselSection`, `HumanCoreValuesSection`, dan `ServicesSection`. `HomeHero` memasang intro dan hero; `ServicesSection` memasang `StackingServiceCards`. Root layout memasang wrapper Navbar/Footer yang mengekspor implementasi `src/components/layout/`. Navbar memasang `LanguageSwitcher`, termasuk varian mobile.
- **Explicit exceptions:** None documented.

Informasi arsitektur lama yang menyebut dashboard/admin bukan bukti bahwa komponen tersebut ikut dirender pada permukaan ini. Audit tidak mencakup app assessment eksternal, backend, atau seluruh route publik.

## Findings

Temuan berikut memiliki bukti kontrak/presentasi, hubungan rendering, dan satu koreksi yang ditentukan oleh bukti. Sumber dibuka ulang sebelum pelaporan.

| # | Problem | Evidence | Proposed change | Scope | Confidence |
| --- | --- | --- | --- | --- | --- |
| 1 | Label pengaturan bahasa mobile tetap memakai Bahasa pada locale EN. | `src/components/layout/language-switcher.tsx:41` berisi teks literal Bahasa, meskipun komponen sudah memperoleh `activeLocale` pada baris 23. Navbar memasangnya dengan `variant="mobile"` pada `src/components/layout/navbar.tsx:412`. Copy navbar EN di `src/i18n/layout-copy.tsx:260` dan seterusnya menggunakan bahasa Inggris; checklist bilingual bagian 3 mengharapkan UI sesuai locale. | Gunakan label Bahasa untuk ID dan Language untuk EN dari locale aktif, tanpa mengubah tampilan switcher. | Copy satu komponen; temuan dibatasi pada navbar beranda yang ditelusuri. | Tinggi: perbedaan teks dapat dibuktikan dari cabang rendering. |
| 2 | Kartu layanan memakai penunjuk tangan walaupun tidak menyediakan aksi klik. | `src/components/stacking-service-cards.tsx:62` memberi `cursor-pointer` kepada container kartu. Seluruh implementasinya berisi div, gambar, tag, dan teks, tanpa link atau handler klik. `ServicesSection` memasang komponen ini tanpa wrapper aksi. Presentasi kursor mengisyaratkan aksi yang tidak dimiliki kartu. | Hapus `cursor-pointer` dari container kartu informatif. | Presentasi kursor delapan kartu layanan; layout, konten, dan animasi dipertahankan. | Tinggi untuk kontradiksi kode; besarnya dampak perlu pengamatan pengguna. |

## Improve first

Mulai dari temuan 1: label bahasa mobile. Koreksinya kecil, memiliki bukti jelas, dan mengikuti sistem bilingual yang sudah ada tanpa mengubah desain.

Belum ada rencana implementasi per temuan. Pilih temuan yang ingin dikerjakan sebelum menyusun rencana self-contained menurut `improve-ui`.

## Pemeriksaan berikutnya yang paling relevan

Bagian ini adalah sasaran pemeriksaan, bukan temuan visual terkonfirmasi atau instruksi untuk langsung mengubah desain.

| Area | Bukti awal | Pemeriksaan dan batas perbaikan |
| --- | --- | --- |
| Tipografi carousel | `about-carousel-section.tsx:308` menyebut Poppins secara inline, sementara sumber font yang ditelusuri memuat Plus Jakarta Sans, Inter, dan font pixel; pemuatan Poppins tidak ditemukan pada `src`/`public`. | Periksa computed font dan intended role terlebih dahulu. Tentukan apakah fallback memang dikehendaki sebelum menyelaraskan font. Jangan mengganti keluarga font berdasarkan tren skill. |
| Hero pada lebar menengah | Heading menggunakan `md:whitespace-nowrap`; grid desktop memiliki kolom visual 580px/670px dan padding tersendiri. | Periksa ID/EN pada 768px dan 1024px, termasuk zoom 200%. Ubah wrapping hanya jika clipping/overlap terbukti. |
| Target sentuh dan akses navigasi | Indikator carousel menggunakan `h-1.5 w-10`; tombol menu mobile utama belum mempunyai nama aksesibel pada deklarasinya; pembukaan mega dropdown desktop menggunakan mouse-enter. | Jalankan pemeriksaan `fixing-accessibility` tersendiri: hit area, keyboard, focus-visible, label, dan state. Hit area indikator dapat diperbesar tanpa memperbesar garis visualnya. Jangan mengklaim kegagalan ukuran WCAG dari kelas ukuran saja tanpa menilai spacing dan pengecualian. |
| Reduced motion dan kecepatan interaksi | CSS sudah menghentikan beberapa animasi orbit untuk reduced motion. Intro, reveal hero, carousel berkala 6800ms, dan animasi HUMAN memiliki mekanisme tersendiri. | Uji preferensi reduced motion di seluruh jalur. Pastikan konten tetap terlihat dan state tetap jelas; pertahankan animasi normal yang menjadi identitas. |
| Biaya scroll layanan | Handler scroll kartu mengukur elemen secara berulang dan memperbarui depth; `willChange: "transform"` dipasang permanen. | Ukur terlebih dahulu. Untuk delapan kartu ada sampai 28 pembacaan rect per event. Bila terbukti mahal, ukur tiap kartu satu kali per frame dan perbarui state hanya saat depth berubah sambil mempertahankan efek tumpukan. Jangan melaporkan penurunan frame rate tanpa pengukuran. |

## Cara memakai referensi tanpa mengganti identitas

Gunakan satu skill utama sesuai tugas. `improve-ui` untuk audit dan rencana, `fixing-accessibility` untuk interaksi aksesibel, `fixing-motion-performance` untuk hambatan animasi yang terukur, serta Impeccable `polish`/`harden`/`adapt` untuk refinement yang terarah.

Panduan generik bukan alasan untuk menghapus Inter, gradient, orbit, ilustrasi, atau kartu yang sudah menjadi bagian Binahub. Prinsip Impeccable bahwa refinement mempertahankan identitas dan brief pengguna menjadi acuan. Aturan baseline yang menyarankan primitive/library lain tidak berarti aplikasi harus dimigrasikan. Stack saat ini adalah Next.js 16.3.8, React 19, Tailwind 4, Framer Motion, dan Lucide.

Untuk menghindari kesan template AI, utamakan konsistensi role teks, affordance yang sesuai aksi, ruang baca, copy yang presisi, serta interaksi yang membantu tugas. Efek dekoratif tambahan tidak diperlukan untuk membuktikan bahwa refinement telah dilakukan.

## Validasi sebelum menerapkan perubahan

- Baca panduan Next.js yang relevan dalam `node_modules/next/dist/docs/` sebelum menulis kode, sesuai `AGENTS.md`.
- Bandingkan baseline dan hasil pada 390×844, 768×1024, 1024px, dan 1440×900 untuk ID/EN. Uji mouse, keyboard, dan reduced motion untuk komponen yang diubah.
- Periksa perubahan sesuai scope. Jalankan `npm run quality:public`; jalankan build bila source aplikasi berubah. Tidak ada perubahan aplikasi pada tahap instalasi/audit ini, sehingga quality check, build, detector UI, dan pengujian browser belum dijalankan.
- Source website, dependency, aset, dan konfigurasi proyek belum diubah. Satu-satunya tambahan dalam repository adalah laporan ini.
