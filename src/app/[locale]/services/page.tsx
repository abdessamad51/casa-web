import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/section";
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
  Check,
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

const SERVICES = [
  {
    key: "web",
    id: "web",
    icon: Globe,
    color: "from-brand-500 to-brand-600",
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
    color: "from-violet-500 to-violet-600",
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
    color: "from-pink-500 to-pink-600",
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
    color: "from-emerald-500 to-emerald-600",
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
    color: "from-orange-500 to-orange-600",
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
    color: "from-slate-600 to-slate-700",
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

function ServiceBlock({ service }: { service: (typeof SERVICES)[number] }) {
  const t = useTranslations("services");
  const Icon = service.icon;
  const index = SERVICES.indexOf(service);
  const isEven = index % 2 === 0;

  return (
    <div
      id={service.id}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center py-12 border-b border-slate-100 last:border-0`}
    >
      {/* Visual */}
      <div className="w-full lg:w-5/12">
        <div
          className={`aspect-square rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center max-w-xs mx-auto`}
        >
          <Icon className="w-24 h-24 text-white/80" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-7/12">
        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          {t(`items.${service.key}.price`)}
        </div>
        <h2 className="font-display font-bold text-3xl text-slate-900 mb-3">
          {t(`items.${service.key}.title`)}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          {t(`items.${service.key}.description`)}
        </p>

        {/* Included list */}
        <ul className="space-y-2 mb-6">
          {service.included.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-all"
        >
          Demandez un devis <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const t = useTranslations("services");

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
        <StaggerChildren>
          {SERVICES.map((service) => (
            <StaggerItem key={service.key}>
              <ServiceBlock service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <CtaSection />
    </>
  );
}
