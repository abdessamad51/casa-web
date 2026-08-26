import { ReactNode } from "react";
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
        "group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300",
        className
      )}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
        <Icon className="w-6 h-6 text-brand-600" />
      </div>

      {/* Content */}
      <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{description}</p>

      {/* Price */}
      {price && (
        <div className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded-full inline-block mb-4">
          {price}
        </div>
      )}

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 group-hover:gap-2 transition-all"
      >
        {ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Hover gradient accent */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-500 to-accent-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
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
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300">
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-brand-100 to-accent-100 relative overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-display font-bold text-brand-200">
              {client[0]}
            </span>
          </div>
        )}
        <div className="absolute top-3 start-3">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-xs font-medium text-brand-700 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-slate-400 mb-1">{client}</p>
        <h3 className="font-display font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 mb-3 line-clamp-2">{description}</p>

        {/* Result badge */}
        <div className="flex items-center gap-2 justify-between">
          <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full font-medium">
            ✓ {result}
          </span>
          {slug && (
            <Link
              href={`/portfolio/${slug}`}
              className="text-xs font-medium text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
            >
              {ctaLabel} <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
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
  ctaLabel,
  ctaHref = "/contact",
  includedLabel,
  notIncludedLabel,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 flex flex-col border transition-all duration-300",
        isPopular
          ? "bg-brand-600 text-white border-brand-500 shadow-2xl shadow-brand-200/50 scale-105"
          : "bg-white text-slate-900 border-slate-200 hover:border-brand-300 hover:shadow-lg"
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 start-1/2 -translate-x-1/2">
          <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            ⭐ Most popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={cn(
            "font-display font-bold text-xl mb-1",
            isPopular ? "text-white" : "text-slate-900"
          )}
        >
          {name}
        </h3>
        <div className="flex items-end gap-1 mb-2">
          <span
            className={cn(
              "font-display font-bold text-3xl",
              isPopular ? "text-white" : "text-slate-900"
            )}
          >
            {price}
          </span>
          {period && (
            <span
              className={cn(
                "text-sm mb-1",
                isPopular ? "text-brand-200" : "text-slate-400"
              )}
            >
              MAD/{period}
            </span>
          )}
        </div>
        <p
          className={cn(
            "text-sm",
            isPopular ? "text-brand-100" : "text-slate-500"
          )}
        >
          {description}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className={cn("mt-0.5", isPopular ? "text-accent-300" : "text-emerald-500")}>
              ✓
            </span>
            <span className={isPopular ? "text-brand-100" : "text-slate-600"}>{feature}</span>
          </li>
        ))}
        {notIncluded.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm opacity-40">
            <span className="mt-0.5">✗</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={cn(
          "block text-center px-4 py-3 rounded-xl text-sm font-semibold transition-all",
          isPopular
            ? "bg-white text-brand-700 hover:bg-brand-50"
            : "bg-brand-600 text-white hover:bg-brand-700"
        )}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
