import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f7f4] text-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-slate-200/50" />
        <div className="absolute top-0 bottom-0 right-[20%] w-px bg-slate-200/50" />
      </div>

      <div className="relative z-10">
        <div className="text-[150px] leading-none font-display font-bold text-slate-900 tracking-tighter mb-4">
          404
        </div>
        <div className="w-12 h-1 bg-brand-600 mb-8 mx-auto" />
        
        <h1 className="font-display font-bold text-2xl text-slate-900 mb-4 tracking-tight">
          On dirait que cette page s'est perdue.
        </h1>
        <p className="text-slate-600 mb-10 max-w-sm mx-auto leading-relaxed">
          Le lien que vous avez suivi est peut-être rompu, ou la page a été supprimée. (Ou notre développeur a fait une erreur — ça arrive).
        </p>
        
        <Link
          href="/fr"
          className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-slate-900 focus-visible:outline-offset-2"
        >
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
}
