import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden bg-[#F5F7FA] px-6 py-28 text-center">
      <div className="pointer-events-none absolute inset-x-[18%] top-0 h-40 bg-[#0B2C6B]/[0.04] blur-3xl" />
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.4em] text-[#D9A441]">
        Error 404
      </p>
      <h1 className="mb-5 text-4xl font-light tracking-tight text-[#0B2C6B] md:text-6xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mb-10 max-w-md text-base leading-relaxed text-[#0B2C6B]/55">
        Halaman yang Anda cari mungkin telah dipindahkan, berganti nama, atau
        belum tersedia. Mari kembali ke jalur transformasi Anda.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#0B2C6B] px-7 text-[11px] font-bold uppercase tracking-[0.14em] text-[#D9A441] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9A441] hover:text-[#0B2C6B]"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/ecosystem"
          className="inline-flex h-12 items-center justify-center rounded-full border border-[#0B2C6B]/15 px-7 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0B2C6B]/70 transition-all duration-300 hover:border-[#0B2C6B]/30 hover:text-[#0B2C6B]"
        >
          Lihat Layanan
        </Link>
      </div>
    </section>
  );
}
