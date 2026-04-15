import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="relative bg-[#3336c3] rounded-[48px] px-8 lg:px-20 py-16 lg:py-24 overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-500/20 blur-[100px] rounded-full translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[30%] h-full bg-indigo-500/20 blur-[80px] rounded-full -translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/20 text-blue-300 text-[12px] font-black uppercase tracking-widest mb-6">
                Join the Network
              </div>
              <h2 className="!text-white text-3xl lg:text-5xl font-black leading-tight mb-6">
                Stay updated on <span className="text-blue-400">new products & exclusive deals</span>
              </h2>
              <p className="text-blue-100/70 text-lg lg:text-xl font-medium max-w-lg mx-auto lg:mx-0">
                Get volume pricing updates and pharmacy-only promotions delivered directly to your inbox.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[320px] lg:min-w-[480px]">
              <form className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 rounded-[32px] border border-white/10 backdrop-blur-sm">
                <input
                  type="email"
                  placeholder="your@pharmacy.com"
                  className="flex-1 bg-transparent px-6 py-4 text-base text-white placeholder:text-white/40 focus:outline-none"
                  required
                />
                <button type="submit" className="btn-brand !px-8 !py-4 group shadow-xl">
                  Subscribe
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
              <p className="text-blue-100/40 text-[11px] mt-4 text-center lg:text-left font-medium px-6">
                No spam. Only essential updates for your pharmacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
