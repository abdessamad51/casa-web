import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { HeroSection } from "./_sections/hero";
import { ServicesSection } from "./_sections/services";
import { WhyUsSection } from "./_sections/why-us";
import { ProcessSection } from "./_sections/process";
import { PortfolioPreview } from "./_sections/portfolio-preview";
import { TestimonialsSection } from "./_sections/testimonials";
import { CtaSection } from "./_sections/cta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://casa-web.ma";

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}/${locale}`,
      type: "website",
      images: [`${siteUrl}/${locale}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
