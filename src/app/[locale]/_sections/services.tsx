import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/section";
import { ServiceCard } from "@/components/cards";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  Globe,
  Smartphone,
  Megaphone,
  Search,
  Wrench,
  Server,
} from "lucide-react";

const SERVICE_ICONS = {
  web: Globe,
  mobile: Smartphone,
  landing: Megaphone,
  seo: Search,
  maintenance: Wrench,
  vps: Server,
} as const;

const SERVICE_KEYS = ["web", "mobile", "landing", "seo", "maintenance", "vps"] as const;

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <Section id="services" className="bg-slate-50">
      <FadeIn>
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
        />
      </FadeIn>
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_KEYS.map((key) => (
          <StaggerItem key={key}>
            <ServiceCard
              icon={SERVICE_ICONS[key]}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
              price={t(`items.${key}.price`)}
              href={`/services#${key}`}
              ctaLabel={t("cta")}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
