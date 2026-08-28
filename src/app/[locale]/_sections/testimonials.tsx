import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Star } from "lucide-react";

const TESTIMONIAL_KEYS = ["t1", "t2", "t3"] as const;

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <Section id="testimonials">
      <FadeIn>
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIAL_KEYS.map((key) => (
          <StaggerItem key={key}>
            <div className="bg-white p-8 border border-slate-200 flex flex-col h-full">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-brand-600 fill-brand-600"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-[15px] leading-relaxed mb-8 flex-1">
                &ldquo;{t(`items.${key}.text`)}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center font-display font-bold text-white text-sm">
                  {t(`items.${key}.name`)[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-900">
                    {t(`items.${key}.name`)}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">
                    {t(`items.${key}.role`)}
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
