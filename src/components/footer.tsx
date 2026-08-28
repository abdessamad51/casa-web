import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "pricing", href: "/pricing" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

const SERVICE_LINKS = [
  { key: "web", href: "/services#web" },
  { key: "mobile", href: "/services#mobile" },
  { key: "landing", href: "/services#landing" },
  { key: "seo", href: "/services#seo" },
  { key: "maintenance", href: "/services#maintenance" },
  { key: "vps", href: "/services#vps" },
] as const;

export function Footer() {
  const t = useTranslations();
  const year = 2026;

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 flex items-center justify-center text-white font-bold text-xs">
                CW
              </div>
              <span className="font-display font-bold text-xl text-white">
                Casa<span className="text-brand-400">Web</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {t("footer.description")}
            </p>
            <p className="text-xs text-slate-500">{t("footer.madeWith")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              {t("footer.links.title")}
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              {t("footer.services.title")}
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {t(`services.items.${link.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              {t("footer.contact.title")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@casa-web.ma"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {t("contact.info.email")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <a
                  href="tel:+212600000000"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {t("contact.info.phone")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  {t("contact.info.location")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  {t("contact.info.hours")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            {t("footer.copyright", { year })}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              {t("footer.legal.privacy")}
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/terms"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              {t("footer.legal.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
