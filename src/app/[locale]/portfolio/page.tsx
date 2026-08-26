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
      <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 to-brand-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <FadeIn>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t("subtitle")}</p>
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
