import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro: React.ReactNode;
}) {
  return (
    <section className="relative bg-gradient-to-br from-[#f0f7ff] to-[#e0f2fe] overflow-hidden pt-16 lg:pt-20 pb-16 lg:pb-20">
      <div className="absolute top-[-15%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-200/20 blur-3xl" />
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        {eyebrow && (
          <div className="section-label !flex mb-4">{eyebrow}</div>
        )}
        <h1 className="mb-6 max-w-3xl text-left">{title}</h1>
        <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-3xl">
          {intro}
        </p>
      </div>
    </section>
  );
}
