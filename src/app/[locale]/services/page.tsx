import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { CtaSection } from "../_sections/cta";
import type { Metadata } from "next";
import {
  Globe,
  Smartphone,
  Megaphone,
  Search,
  Wrench,
  Server,
  ArrowRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });
  return { title: t("title"), description: t("description") };
}

// Keep the hardcoded data for now but we strip out the gradients
const SERVICES = [
  {
    key: "web",
    id: "web",
    icon: Globe,
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    included: [
      "Audit & stratégie",
      "Design UI/UX sur mesure",
      "Développement responsive",
      "Optimisation performances",
      "SEO technique de base",
      "Formation & documentation",
    ],
  },
  {
    key: "mobile",
    id: "mobile",
    icon: Smartphone,
    tech: ["React Native", "Expo", "Firebase", "REST APIs"],
    included: [
      "Design natif iOS & Android",
      "Auth & gestion utilisateurs",
      "Push notifications",
      "Intégration paiement",
      "Publication sur les stores",
      "Analytics & crash reporting",
    ],
  },
  {
    key: "landing",
    id: "landing",
    icon: Megaphone,
    tech: ["Next.js", "Tailwind", "Framer Motion", "Analytics"],
    included: [
      "Copywriting inclus",
      "Design haute conversion",
      "Formulaire lead capture",
      "Intégration CRM",
      "A/B testing setup",
      "Livraison en 72h",
    ],
  },
  {
    key: "seo",
    id: "seo",
    icon: Search,
    tech: ["Screaming Frog", "Ahrefs", "Google Search Console"],
    included: [
      "Audit technique complet",
      "Recherche de mots-clés",
      "Optimisation on-page",
      "Stratégie de contenu",
      "Suivi des positions",
      "Rapport mensuel",
    ],
  },
  {
    key: "maintenance",
    id: "maintenance",
    icon: Wrench,
    tech: ["WordPress", "Next.js", "CPanel", "Cloudflare"],
    included: [
      "Mises à jour CMS & plugins",
      "Scan sécurité hebdomadaire",
      "Sauvegardes automatiques",
      "Monitoring uptime 24/7",
      "Support email & téléphone",
      "Rapport mensuel",
    ],
  },
  {
    key: "vps",
    id: "vps",
    icon: Server,
    tech: ["Ubuntu", "Nginx", "Docker", "PM2", "Certbot", "Cloudflare"],
    included: [
      "Configuration serveur complète",
      "SSL/TLS automatique",
      "Monitoring & alertes",
      "Sauvegardes automatiques",
      "Optimisation performances",
      "Documentation incluse",
    ],
  },
] as const;

function ServiceBlock({ service, number }: { service: (typeof SERVICES)[number], number: string }) {
  const t = useTranslations("services");
  const tCta = useTranslations("cta");
  const Icon = service.icon;

  return (
    <div
      id={service.id}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 border-t border-slate-200 first:border-0"
    >
      {/* 1. Header & Icon (Col 1-4) */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-slate-400">{number}</span>
          <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
            <Icon className="w-5 h-5 text-slate-900" strokeWidth={1.5} />
          </div>
        </div>
        <div>
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-3 tracking-tight">
            {t(`items.${service.key}.title`)}
          </h2>
          <div className="inline-block border border-slate-200 bg-white text-xs font-semibold uppercase tracking-widest text-slate-700 px-3 py-1">
            {t(`items.${service.key}.price`)}
          </div>
        </div>
      </div>

      {/* 2. Description & Tech Stack (Col 5-8) */}
      <div className="lg:col-span-4 flex flex-col justify-between">
        <p className="text-slate-600 leading-relaxed text-[15px] mb-8">
          {t(`items.${service.key}.description`)}
        </p>
        <div>
          <p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {service.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono bg-slate-50 text-slate-600 px-2.5 py-1 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Included & CTA (Col 9-12) */}
      <div className="lg:col-span-4 flex flex-col justify-between bg-slate-50 border border-slate-200 p-6">
        <div>
          <p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Au programme</p>
          <ul className="space-y-3 mb-8">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-brand-600 font-bold mt-[-1px]">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <Link
          href="/contact"
          className="inline-flex items-center justify-between w-full border-t border-slate-200 pt-4 text-sm font-semibold text-slate-900 hover:text-brand-600 transition-colors group-hover:text-brand-600"
        >
          {tCta("title")} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <>
      {/* Clean Editorial Header */}
      <div className="pt-24 pb-16 border-b border-slate-200 bg-[#f8f7f4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4">
              Notre Expertise
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

      {/* Flat Structured Grid Layout for Services */}
      <Section className="py-12 lg:py-24">
        <StaggerChildren className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {SERVICES.map((service, idx) => (
            <StaggerItem key={service.key}>
              <ServiceBlock 
                service={service} 
                number={(idx + 1).toString().padStart(2, '0')} 
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <CtaSection />
    </>
  );
}
