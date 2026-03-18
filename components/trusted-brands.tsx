export function TrustedBrands() {
  const brands = [
    { name: "IDA", color: "from-blue-600 to-blue-700" },
    { name: "Guardian", color: "from-blue-500 to-blue-600" },
    { name: "Pharmasave", color: "from-indigo-600 to-indigo-700" },
    { name: "& More", color: "from-sky-500 to-sky-600" },
  ]

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
            Trusted by pharmacies across Ontario
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`flex items-center justify-center h-24 rounded-2xl bg-gradient-to-br ${brand.color} shadow-lg hover:shadow-xl transition-all duration-200`}
            >
              <span className="text-lg font-extrabold text-white tracking-tight text-center px-2">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
