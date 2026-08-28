"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, TrendingUp, Users, Clock } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 bg-[#f8f7f4]">
      {/* Subtle background lines */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 bottom-0 right-[38%] w-px bg-slate-200" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* ── LEFT: copy ── */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-6"
            >
              {t("badge")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] text-slate-900 tracking-tight leading-[1.0] mb-6"
            >
              {t("title")}
              <br />
              <span className="text-brand-600">{t("titleHighlight")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-slate-600 text-lg leading-relaxed max-w-md mb-10"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-3 mb-16"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2"
              >
                {t("cta1")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-slate-300 text-slate-700 font-semibold text-sm hover:border-brand-400 hover:text-brand-600 transition-colors focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2"
              >
                {t("cta2")}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-200 pt-8"
            >
              {([
                { value: "50+", key: "projects" },
                { value: "40+", key: "clients" },
                { value: "5 ans", key: "experience" },
              ] as const).map(({ value, key }) => (
                <div key={key}>
                  <div className="font-display font-bold text-2xl text-slate-900">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t(`stats.${key}`)}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: browser mockup + floating card ── */}
          <div className="lg:col-span-6 hidden lg:flex items-center justify-end relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[480px]"
            >
              {/* Browser frame */}
              <div className="w-full bg-white border border-slate-200 shadow-2xl shadow-slate-200/60">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-300" />
                    <div className="w-3 h-3 rounded-full bg-yellow-300" />
                    <div className="w-3 h-3 rounded-full bg-green-300" />
                  </div>
                  <div className="flex-1 mx-3 px-3 py-1 bg-white border border-slate-200 text-xs text-slate-400 font-mono">
                    fashion-ma.com
                  </div>
                </div>

                {/* Site preview — stylised, not a screenshot */}
                <div className="relative overflow-hidden" style={{ height: "260px" }}>
                  {/* Header bar of the "site" */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900 flex items-center px-6 gap-8">
                    <div className="w-16 h-2 bg-white/20 rounded" />
                    <div className="flex gap-4 ml-auto">
                      <div className="w-10 h-1.5 bg-white/10 rounded" />
                      <div className="w-10 h-1.5 bg-white/10 rounded" />
                      <div className="w-10 h-1.5 bg-white/10 rounded" />
                    </div>
                  </div>
                  {/* Hero area */}
                  <div className="absolute top-10 left-0 right-0 bottom-0 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center text-center px-8 gap-3">
                    <div className="w-40 h-3 bg-white/20 rounded" />
                    <div className="w-56 h-5 bg-white/40 rounded" />
                    <div className="w-32 h-3 bg-white/15 rounded" />
                    <div className="flex gap-3 mt-3">
                      <div className="w-20 h-7 bg-brand-500/80 rounded" />
                      <div className="w-20 h-7 border border-white/20 rounded" />
                    </div>
                  </div>
                  {/* Product grid peeking at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 flex gap-3 px-6 pb-4 pt-2 bg-white/5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex-1 bg-white/10 rounded" />
                    ))}
                  </div>
                </div>

                {/* Bottom bar with "performance" row */}
                <div className="flex items-center justify-between px-4 py-2.5 border-t border-slate-100 bg-slate-50 text-xs text-slate-500">
                  <span className="font-mono">FashionMa — E-commerce</span>
                  <span className="text-emerald-600 font-semibold">↑ 120% trafic organique</span>
                </div>
              </div>

              {/* Floating result card */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white border border-slate-200 shadow-xl p-4 w-52"
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-brand-600" />
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Résultats client</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5"><Users className="w-3 h-3" /> Leads / mois</span>
                    <span className="text-xs font-bold text-slate-900">+340</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5"><Clock className="w-3 h-3" /> Livraison</span>
                    <span className="text-xs font-bold text-emerald-600">Dans les délais</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating tech badge */}
              <motion.div
                initial={{ opacity: 0, x: -10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="absolute -top-5 -right-5 bg-slate-900 text-white px-3 py-2 text-xs font-mono shadow-lg"
              >
                Next.js · TypeScript · Tailwind
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
