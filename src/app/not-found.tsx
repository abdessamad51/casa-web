import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-brand-50/30 text-center px-4">
      <div className="mb-8">
        <div className="text-8xl font-display font-bold text-brand-200 mb-2">404</div>
        <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full mx-auto" />
      </div>
      <h1 className="font-display font-bold text-3xl text-slate-900 mb-3">
        Page introuvable
      </h1>
      <p className="text-slate-600 mb-8 max-w-sm">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/fr"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
