import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { CtaSection } from "../_sections/cta";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return { title: t("title"), description: t("description") };
}

const TEAM_KEYS = ["m1", "m2", "m3", "m4"] as const;
const VALUE_KEYS = ["excellence", "transparency", "innovation", "results"] as const;
const VALUE_ICONS = ["⭐", "🤝", "💡", "📈"];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 to-brand-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeIn>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-100 to-accent-100 flex items-center justify-center max-w-md mx-auto lg:mx-0">
              <span className="text-8xl">🇲🇦</span>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div>
              <div className="inline-block bg-brand-50 text-brand-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Notre histoire
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">{t("story")}</p>

              <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <h3 className="font-display font-semibold text-slate-900 mb-2">
                  {t("mission.title")}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t("mission.text")}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-slate-50">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl text-slate-900 text-center mb-10">
            {t("values.title")}
          </h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {VALUE_KEYS.map((key, i) => (
            <StaggerItem key={key}>
              <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="text-4xl mb-3">{VALUE_ICONS[i]}</div>
                <h3 className="font-display font-semibold text-slate-900">
                  {t(`values.items.${key}`)}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Team */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-slate-900 mb-3">
              {t("team.title")}
            </h2>
            <p className="text-slate-600">{t("team.subtitle")}</p>
          </div>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_KEYS.map((key) => (
            <StaggerItem key={key}>
              <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-display font-bold text-2xl mx-auto mb-4">
                  {t(`team.members.${key}.name`)[0]}
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-1">
                  {t(`team.members.${key}.name`)}
                </h3>
                <p className="text-xs text-brand-600 font-medium mb-2">
                  {t(`team.members.${key}.role`)}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t(`team.members.${key}.bio`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <CtaSection />
    </>
  );
}
