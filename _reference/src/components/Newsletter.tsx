export default function Newsletter() {
  return (
    <section className="bg-[#1F1F1F] text-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="bg-gradient-to-r from-black to-[#0a2a1e] rounded-[36px] px-8 lg:px-16 py-14 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="!text-white !text-[32px] lg:!text-[38px] !font-extrabold leading-tight mb-3">
              Stay updated on{" "}
              <span className="text-[#00BA74]">new products & deals</span>
            </h2>
            <p className="text-white/65 text-[15px] font-normal">
              Get pricing updates, product news, and pharmacy-only promotions.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[480px]">
            <input
              type="email"
              placeholder="your@pharmacy.com"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#00BA74]"
            />
            <button type="submit" className="btn-pill-green whitespace-nowrap">
              Subscribe
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
