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
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-900 mb-1">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
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
