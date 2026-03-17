export function TrustedBrands() {
  const brands = ["IDA", "Guardian", "Pharmasave"]

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Trusted by pharmacies across Ontario
          </p>
          <div className="flex items-center gap-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <span className="text-sm font-extrabold tracking-tight text-slate-700">{brand}</span>
              </div>
            ))}
            <div className="flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-200">
              <span className="text-sm font-extrabold tracking-tight text-white">& More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
