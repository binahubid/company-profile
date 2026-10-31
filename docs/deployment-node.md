# Deployment website BinaHub

Website ini aplikasi Next.js Node, bukan static export. Hostinger Git integration
menjadi satu jalur deployment produksi. GitHub Actions hanya memeriksa kualitas;
tidak menggunakan kredensial FTP, mengunggah out/, atau menghapus public_html.

## Konfigurasi yang perlu diverifikasi operator

- Repo company-profile, branch main, dengan akses GitHub Hostinger yang aktif.
- Node22, instalasi dari package-lock.json, build npm run build.
- Tipe aplikasi Next.js, direktori hasil .next; start npm run start bila diminta.
- Environment produksi di dashboard Hostinger, bukan file yang dimasukkan Git.

Workflow quality memeriksa public lint, TypeScript, kontrak handoff program dan
build Node. Skrip check:static-assets adalah utilitas lama untuk out/ saja, bukan
quality gate deployment Node. Build/push lokal belum membuktikan deployment live.

Jika tahap clone gagal, operator perlu memeriksa integrasi GitHub dan mencoba
deployment ulang. Mengubah output menjadi export atau menjalankan FTP bukan
perbaikan untuk kegagalan clone. Workflow ini tidak dapat memperbaiki izin akun.

## Validasi setelah deployment

Pastikan commit dan versi sesuai, uji beranda/rekomendasi pada desktop/mobile,
handoff ke app, aset, serta header keamanan. Tidak perlu mengirim inquiry atau
email nyata untuk memeriksa website. Jika deployment bermasalah, gunakan rollback
deployment sebelumnya melalui Hostinger; jangan menghapus direktori server.
