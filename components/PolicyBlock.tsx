import Link from "next/link";

export function PolicyBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="bg-slate-50 border border-slate-100 rounded-[28px] p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
          {icon}
        </div>
        <h2 className="!text-xl lg:!text-2xl !mb-0 !text-slate-900 font-black">
          {title}
        </h2>
      </div>
      <div className="text-slate-600 text-[15px] lg:text-base leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-3 [&_p]:my-3 [&_strong]:text-slate-900">
        {children}
      </div>
    </article>
  );
}

export function ContactCTA({
  title = "Questions about your order?",
  subtitle = "We respond within one business day.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="mt-6 rounded-[32px] bg-gradient-to-br from-[#3B6FE6] to-blue-700 text-white p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <div>
        <h3 className="!text-white text-xl lg:text-2xl font-black mb-1">
          {title}
        </h3>
        <p className="text-white/85">{subtitle}</p>
      </div>
      <Link
        href="/#contact"
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-blue-700 font-black text-[13px] uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg"
      >
        Contact Us
      </Link>
    </div>
  );
}
