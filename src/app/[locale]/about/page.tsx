import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { CtaSection } from "../_sections/cta";
import { CheckSquare, Eye, Lightbulb, Package } from "lucide-react";
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
const VALUE_ICONS = [CheckSquare, Eye, Lightbulb, Package];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Page header — no full-bleed gradient */}
      <div className="pt-24 pb-16 border-b border-slate-200 bg-[#f8f7f4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4">
              Agence web &amp; mobile — Casablanca
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-5 tracking-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Story + mission box side-by-side */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn direction="left">
            <p className="text-slate-600 leading-relaxed text-lg">{t("story")}</p>
          </FadeIn>
          <FadeIn direction="right">
            <div className="bg-slate-50 border border-slate-200 p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-3">
                {t("mission.title")}
              </p>
              <p className="text-slate-700 leading-relaxed">{t("mission.text")}</p>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-3xl font-display font-bold text-slate-900">6</dt>
                  <dd className="text-sm text-slate-500 mt-1">projets max en simultané</dd>
                </div>
                <div>
                  <dt className="text-3xl font-display font-bold text-slate-900">24h</dt>
                  <dd className="text-sm text-slate-500 mt-1">délai de réponse garanti</dd>
                </div>
                <div>
                  <dt className="text-3xl font-display font-bold text-slate-900">2019</dt>
                  <dd className="text-sm text-slate-500 mt-1">année de création</dd>
                </div>
                <div>
                  <dt className="text-3xl font-display font-bold text-slate-900">50+</dt>
                  <dd className="text-sm text-slate-500 mt-1">projets livrés</dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Values — ruled grid, no emoji */}
      <Section className="bg-slate-50">
        <FadeIn>
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-10 tracking-tight">
            {t("values.title")}
          </h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 border border-slate-200">
          {VALUE_KEYS.map((key, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <StaggerItem key={key}>
                <div className="p-8 border-r border-b border-slate-200 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0">
                  <Icon className="w-5 h-5 text-brand-600 mb-4" strokeWidth={1.5} />
                  <h3 className="font-display font-semibold text-slate-900 text-sm">
                    {t(`values.items.${key}`)}
                  </h3>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Team — flat cards, monogram on slate-900, no gradient avatars */}
      <Section>
        <FadeIn>
          <div className="mb-12">
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-2 tracking-tight">
              {t("team.title")}
            </h2>
            <p className="text-slate-500 text-sm">{t("team.subtitle")}</p>
          </div>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
          {TEAM_KEYS.map((key) => (
            <StaggerItem key={key}>
              <div className="bg-white p-6 h-full">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white font-display font-bold text-lg mb-4">
                  {t(`team.members.${key}.name`)[0]}
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-0.5 text-sm">
                  {t(`team.members.${key}.name`)}
                </h3>
                <p className="text-xs text-brand-600 font-medium mb-3">
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
