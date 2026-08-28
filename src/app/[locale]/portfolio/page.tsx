import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/animations";
import { PortfolioClient } from "./_components/portfolio-client";
import { CtaSection } from "../_sections/cta";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.portfolio" });
  return { title: t("title"), description: t("description") };
}

export default function PortfolioPage() {
  const t = useTranslations("portfolio");

  return (
    <>
      <div className="pt-24 pb-16 border-b border-slate-200 bg-[#f8f7f4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4">
              Nos Réalisations
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
        <PortfolioClient />
      </Section>

      <CtaSection />
    </>
  );
}
