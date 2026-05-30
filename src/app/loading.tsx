export default function Loading() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center bg-[#F5F7FA]">
      <div className="flex flex-col items-center gap-5">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-[#0B2C6B]/15 border-t-[#D9A441]" />
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B2C6B]/45">
          Memuat
        </p>
      </div>
    </div>
  );
}
