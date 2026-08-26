"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Section, SectionHeader } from "@/components/section";
import { ProjectCard } from "@/components/cards";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { cn } from "@/lib/utils";

const FILTER_KEYS = ["all", "web", "mobile", "landing", "ecommerce"] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

const PROJECTS = [
  { key: "project1", slug: "fashion-ma-ecommerce", category: "ecommerce" },
  { key: "project2", slug: "deliverydz-app", category: "mobile" },
  { key: "project3", slug: "dr-alami-dental", category: "web" },
  { key: "project4", slug: "prestig-immo-landing", category: "landing" },
] as const;

export function PortfolioClient() {
  const t = useTranslations("portfolio");
  const [active, setActive] = useState<FilterKey>("all");

  const filtered = PROJECTS.filter(
    (p) => active === "all" || p.category === active
  );

  return (
    <>
      {/* Filter buttons */}
      <FadeIn>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTER_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                active === key
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {t(`filter.${key}`)}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grid */}
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <StaggerItem key={p.key}>
            <ProjectCard
              title={t(`projects.${p.key}.title`)}
              client={t(`projects.${p.key}.client`)}
              category={t(`projects.${p.key}.category`)}
              description={t(`projects.${p.key}.description`)}
              result={t(`projects.${p.key}.result`)}
              slug={p.slug}
              ctaLabel={t("readCaseStudy")}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          Aucun projet dans cette catégorie pour le moment.
        </div>
      )}
    </>
  );
}
