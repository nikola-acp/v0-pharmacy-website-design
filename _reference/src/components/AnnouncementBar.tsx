export default function AnnouncementBar() {
  return (
    <div className="bg-black text-white text-[13px] py-2.5 px-4 flex items-center justify-center gap-3">
      <span className="font-medium tracking-wide">
        Free Shipping on All Orders Over $200
      </span>
      <a
        href="#products"
        className="inline-block px-3 py-1 rounded-full bg-white text-black text-[11px] font-extrabold tracking-wider uppercase hover:bg-[#00BA74] hover:text-white transition-colors"
      >
        Shop Now
      </a>
    </div>
  );
}
