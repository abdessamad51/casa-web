"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-red-50/20 text-center px-4">
      <div className="w-20 h-20 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-red-500" />
      </div>
      <h1 className="font-display font-bold text-3xl text-slate-900 mb-3">
        Une erreur est survenue
      </h1>
      <p className="text-slate-600 mb-8 max-w-sm">
        Quelque chose ne s&apos;est pas passé comme prévu. Veuillez réessayer ou retourner à l&apos;accueil.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={reset}
          className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
        >
          Réessayer
        </button>
        <Link
          href="/fr"
          className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all"
        >
          Accueil
        </Link>
      </div>
    </div>
  );
}
