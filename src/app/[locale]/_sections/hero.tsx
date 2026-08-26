"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/animations";

const STATS = [
  { value: "50+", key: "projects" },
  { value: "40+", key: "clients" },
  { value: "5+", key: "experience" },
  { value: "98%", key: "satisfaction" },
] as const;

export function HeroSection() {
  const t = useTranslations("hero");
  const tCta = useTranslations("cta");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/30 to-accent-50/20" />
        <div className="absolute top-1/4 -start-32 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -end-32 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        {/* Badge */}
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
            {t("badge")}
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight mb-4">
            {t("title")}
            <br />
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("subtitle")}
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200/50 hover:shadow-xl hover:-translate-y-0.5"
            >
              {t("cta1")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:border-brand-300 hover:text-brand-600 transition-all"
            >
              {t("cta2")}
            </Link>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {STATS.map(({ value, key }) => (
              <div key={key} className="text-center">
                <div className="font-display font-bold text-3xl text-brand-600 mb-1">{value}</div>
                <div className="text-xs text-slate-500">{t(`stats.${key}`)}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
