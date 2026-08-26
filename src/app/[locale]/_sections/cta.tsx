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
    <Section className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            {t("title")}
          </h2>
          <p className="text-brand-100 text-lg mb-8">{t("subtitle")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-all shadow-lg"
            >
              {t("button1")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5c] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              {t("whatsapp")}
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
