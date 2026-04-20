export default function AnnouncementBar() {
  return (
    <div className="bg-slate-950 text-white text-[11px] lg:text-[13px] py-3 px-4 flex items-center justify-center gap-4 border-b border-white/5 relative z-50">
      <a
        href="/#products"
        className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase hover:bg-blue-500 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
      >
        Shop Now
      </a>
    </div>
  );
}
