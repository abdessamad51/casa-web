import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/animations";
import { ContactForm } from "./_components/contact-form";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return { title: t("title"), description: t("description") };
}

export default function ContactPage() {
  const t = useTranslations("contact");
  const tWa = useTranslations("whatsapp");
  const waUrl = getWhatsAppUrl(tWa("prefilledMessage"));

  return (
    <>
      <div className="pt-24 pb-16 border-b border-slate-200 bg-[#f8f7f4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4">
              Discutons-en
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-5 tracking-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <FadeIn direction="left" className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <ContactForm />
            </div>
          </FadeIn>

          {/* Info sidebar */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h2 className="font-display font-semibold text-slate-900 mb-4">
                  {t("info.title")}
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                    <a href={`mailto:${t("info.email")}`} className="text-slate-600 hover:text-brand-600 transition-colors text-sm">
                      {t("info.email")}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                    <a href="tel:+212600000000" className="text-slate-600 hover:text-brand-600 transition-colors text-sm">
                      {t("info.phone")}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm">{t("info.location")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm">{t("info.hours")}</span>
                  </li>
                </ul>
              </div>

              {/* WhatsApp */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5c] transition-all shadow-lg shadow-green-200/50"
              >
                <MessageCircle className="w-5 h-5" />
                {t("whatsapp")}
              </a>

              {/* Response time guarantee */}
              <div className="bg-brand-50 rounded-2xl border border-brand-100 p-6 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <p className="font-display font-semibold text-brand-700 mb-1">Réponse rapide</p>
                <p className="text-sm text-brand-600">Nous répondons à toutes les demandes dans les 24 heures ouvrables.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
