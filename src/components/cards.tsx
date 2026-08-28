import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  href = "/services",
  ctaLabel = "En savoir plus",
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group bg-white p-8 border border-slate-200 hover:border-brand-600 transition-colors duration-300 flex flex-col h-full",
        className
      )}
    >
      <Icon className="w-6 h-6 text-brand-600 mb-6" strokeWidth={1.5} />
      <h3 className="font-display font-semibold text-lg text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{description}</p>

      <div className="mt-auto">
        {price && (
          <div className="text-xs font-mono text-slate-500 mb-4 pb-4 border-b border-slate-100">
            {price}
          </div>
        )}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  client: string;
  category: string;
  description: string;
  result: string;
  image?: string;
  slug?: string;
  ctaLabel?: string;
}

export function ProjectCard({
  title,
  client,
  category,
  description,
  result,
  image,
  slug,
  ctaLabel = "Voir le projet",
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col h-full border border-slate-200 bg-white">
      {/* Visual Block - No gradient placeholders */}
      <div className="aspect-video relative overflow-hidden bg-slate-900 border-b border-slate-200">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
             <div className="font-display text-xl font-bold text-slate-400 opacity-30">{client}</div>
          </div>
        )}
        <div className="absolute top-4 start-4">
          <span className="inline-block bg-white text-xs font-bold tracking-wider uppercase text-slate-900 px-3 py-1.5">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-xl text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 mb-6 flex-1 line-clamp-2">{description}</p>

        {/* Result Stat - Front and center */}
        <div className="bg-brand-50 border border-brand-100 px-4 py-3 mb-6">
          <span className="block text-xs font-semibold text-brand-700 uppercase tracking-wider mb-1">Résultat</span>
          <span className="text-sm text-brand-900 font-medium">{result}</span>
        </div>

        {slug && (
          <Link
            href={`/portfolio/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-brand-600 transition-colors mt-auto"
          >
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  isPopular?: boolean;
  popularLabel?: string;
  ctaLabel: string;
  ctaHref?: string;
  includedLabel: string;
  notIncludedLabel: string;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  notIncluded = [],
  isPopular,
  popularLabel = "Recommandé",
  ctaLabel,
  ctaHref = "/contact",
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative p-8 flex flex-col h-full transition-all duration-300",
        isPopular
          ? "bg-slate-900 text-white border-2 border-brand-500 shadow-xl"
          : "bg-white text-slate-900 border border-slate-200"
      )}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-brand-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 shadow-sm">
            {popularLabel}
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className={cn("font-display font-bold text-2xl mb-2", isPopular ? "text-white" : "text-slate-900")}>
          {name}
        </h3>
        <p className={cn("text-sm mb-6", isPopular ? "text-slate-400" : "text-slate-500")}>
          {description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className={cn("font-display font-bold text-4xl", isPopular ? "text-white" : "text-slate-900")}>
            {price}
          </span>
          {period && (
            <span className={cn("text-sm", isPopular ? "text-slate-400" : "text-slate-500")}>
              MAD/{period}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <svg className={cn("w-5 h-5 shrink-0", isPopular ? "text-brand-400" : "text-brand-600")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className={isPopular ? "text-slate-300" : "text-slate-700"}>{feature}</span>
          </li>
        ))}
        {notIncluded.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm opacity-50">
            <svg className="w-5 h-5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className={isPopular ? "text-slate-400" : "text-slate-500"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={cn(
          "block text-center px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors",
          isPopular
            ? "bg-brand-500 text-white hover:bg-brand-600"
            : "bg-slate-100 text-slate-900 hover:bg-slate-200"
        )}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
