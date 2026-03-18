import Image from "next/image"

export function TrustedBrands() {
  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Trusted by pharmacies across Ontario
          </p>
          <div className="hidden sm:block h-px flex-1 bg-slate-100" />
          <div className="flex items-center gap-3">
            {/* Guardian & IDA logos */}
            <div className="flex items-center justify-center h-10 w-32 rounded-lg border border-slate-200 bg-white px-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wyGhDREFp3kkn0CvNDkefHGQy9o0wu.png"
                alt="Guardian and IDA logos"
                width={120}
                height={32}
                className="object-contain h-7 w-auto"
              />
            </div>
            {/* Pharmasave logo */}
            <div className="flex items-center justify-center h-10 w-32 rounded-lg border border-slate-200 bg-white px-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wP8QIW68h72fftaeJBD9mOWBvXmQKQ.png"
                alt="Pharmasave logo"
                width={120}
                height={32}
                className="object-contain h-7 w-auto"
              />
            </div>
            {/* & More button in blue */}
            <div className="flex items-center justify-center h-10 w-32 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-2">
              <span className="text-sm font-bold text-white tracking-wide">& More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
