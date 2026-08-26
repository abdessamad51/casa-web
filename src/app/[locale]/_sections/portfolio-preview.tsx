import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/section";
import { ProjectCard } from "@/components/cards";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { ArrowRight } from "lucide-react";

const PROJECT_KEYS = ["project1", "project2", "project3", "project4"] as const;
const PROJECT_SLUGS = ["fashion-ma-ecommerce", "deliverydz-app", "dr-alami-dental", "prestig-immo-landing"] as const;

export function PortfolioPreview() {
  const t = useTranslations("portfolio");

  return (
    <Section id="portfolio" className="bg-slate-50">
      <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <SectionHeader
            title={t("title")}
            subtitle={t("subtitle")}
            centered={false}
          />
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 shrink-0 mb-4"
          >
            {t("viewAll")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROJECT_KEYS.map((key, i) => (
          <StaggerItem key={key}>
            <ProjectCard
              title={t(`projects.${key}.title`)}
              client={t(`projects.${key}.client`)}
              category={t(`projects.${key}.category`)}
              description={t(`projects.${key}.description`)}
              result={t(`projects.${key}.result`)}
              slug={PROJECT_SLUGS[i]}
              ctaLabel={t("readCaseStudy")}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
