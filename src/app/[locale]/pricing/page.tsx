import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { PricingCard } from "@/components/cards";
import { CtaSection } from "../_sections/cta";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pricing" });
  return { title: t("title"), description: t("description") };
}

const PLAN_KEYS = ["starter", "business", "custom"] as const;

export default function PricingPage() {
  const t = useTranslations("pricing");

  return (
    <>
      <div className="pt-24 pb-16 border-b border-slate-200 bg-[#f8f7f4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4">
              Investissement
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-5 tracking-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
      </div>

      <Section>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {PLAN_KEYS.map((key) => (
            <StaggerItem key={key}>
              <PricingCard
                name={t(`plans.${key}.name`)}
                price={t(`plans.${key}.price`)}
                period={t(`plans.${key}.period`)}
                description={t(`plans.${key}.description`)}
                features={t.raw(`plans.${key}.features`)}
                notIncluded={t.raw(`plans.${key}.notIncluded`)}
                isPopular={key === "business"}
                popularLabel={t("popular")}
                ctaLabel={key === "custom" ? t("ctaCustom") : t("cta")}
                includedLabel={t("included")}
                notIncludedLabel={t("notIncluded")}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.4}>
          <div className="mt-16 bg-slate-50 border-t border-b sm:border sm:rounded-2xl border-slate-200 p-8 sm:p-12">
            <h2 className="font-display font-semibold text-xl text-slate-900 mb-8 text-center">
              {t("commonTitle")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm text-slate-600">
              {t.raw("commonFeatures").map((item: string) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-brand-600 font-bold">+</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      <CtaSection />
    </>
  );
}
