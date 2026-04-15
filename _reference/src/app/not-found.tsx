import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <p className="section-label mb-3">404</p>
      <h1 className="mb-4">Page not found</h1>
      <p className="text-[#545C5F] mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-pill">
        Return Home
      </Link>
    </div>
  );
}
