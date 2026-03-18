export function TrustedBrands() {
  const brands = ["IDA", "Guardian", "Pharmasave", "& More"]

  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Trusted by pharmacies across Ontario
          </p>
          <div className="hidden sm:block h-px flex-1 bg-slate-100" />
          <div className="grid grid-cols-4 gap-2 w-full sm:w-auto">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center h-9 w-28 rounded-lg border border-slate-200 bg-slate-50 px-3"
              >
                <span className="text-xs font-bold text-slate-500 tracking-wide whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
