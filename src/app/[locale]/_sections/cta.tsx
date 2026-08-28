import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/animations";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function CtaSection() {
  const t = useTranslations("cta");
  const tWa = useTranslations("whatsapp");
  const waUrl = getWhatsAppUrl(tWa("prefilledMessage"));

  return (
    <Section className="bg-brand-600 text-white py-20 lg:py-28">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-brand-100 text-lg mb-10">{t("subtitle")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all"
            >
              {t("button1")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              <MessageCircle className="w-4 h-4" />
              {t("whatsapp")}
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
