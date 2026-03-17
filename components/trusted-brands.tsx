export function TrustedBrands() {
  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 shrink-0">
            Trusted by pharmacies across Ontario
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">

            {/* IDA */}
            <div className="flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <svg viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto" aria-label="IDA">
                <rect x="0" y="2" width="6" height="24" rx="1" fill="#003087"/>
                <path d="M12 2h10c6.627 0 12 5.373 12 12s-5.373 12-12 12H12V2z" fill="#003087"/>
                <path d="M17 8h4c3.314 0 6 2.686 6 6s-2.686 6-6 6h-4V8z" fill="#ffffff"/>
                <path d="M38 2l8 24h-5l-1.5-4.5h-7L31 26h-5L34 2h4zm-2 5.5L33.5 17h5L36 7.5z" fill="#003087"/>
              </svg>
            </div>

            {/* Guardian */}
            <div className="flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <svg viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto" aria-label="Guardian">
                <circle cx="14" cy="14" r="12" fill="#00539F"/>
                <path d="M14 6a8 8 0 100 16A8 8 0 0014 6zm0 3a5 5 0 110 10 5 5 0 010-10z" fill="white"/>
                <path d="M14 11v6h4v-3h-2v-3h-2z" fill="#00539F"/>
                <text x="30" y="19" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="13" fill="#00539F" letterSpacing="0.5">GUARDIAN</text>
              </svg>
            </div>

            {/* Pharmasave */}
            <div className="flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <svg viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto" aria-label="Pharmasave">
                <rect x="0" y="8" width="20" height="12" rx="2" fill="#E31837"/>
                <text x="2" y="18" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="9" fill="white" letterSpacing="0.3">Rx</text>
                <text x="25" y="19" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="13" fill="#1a1a2e" letterSpacing="0.3">PHARMASAVE</text>
              </svg>
            </div>

            {/* Independent / & More */}
            <div className="flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transition-all">
              <span className="text-[13px] font-extrabold tracking-tight text-white">&amp; More</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
