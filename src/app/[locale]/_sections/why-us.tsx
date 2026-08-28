import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  Zap,
  Star,
  HeadphonesIcon,
  MapPin,
  TrendingUp,
  Shield,
} from "lucide-react";

const WHY_US_ICONS = {
  fast: Zap,
  quality: Star,
  support: HeadphonesIcon,
  local: MapPin,
  seo: TrendingUp,
  transparent: Shield,
} as const;

const WHY_US_KEYS = ["fast", "quality", "support", "local", "seo", "transparent"] as const;

export function WhyUsSection() {
  const t = useTranslations("whyUs");

  return (
    <Section id="why-us">
      <FadeIn>
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      </FadeIn>
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_US_KEYS.map((key) => {
          const Icon = WHY_US_ICONS[key];
          return (
            <StaggerItem key={key}>
              <div className="flex flex-col gap-4 p-6 border-l border-slate-200">
                <div className="w-10 h-10 bg-brand-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 mb-2">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </Section>
  );
}
