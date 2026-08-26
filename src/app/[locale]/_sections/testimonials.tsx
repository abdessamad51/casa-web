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
            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-accent-500 fill-accent-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 text-sm leading-relaxed mb-6">
                &ldquo;{t(`items.${key}.text`)}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center font-display font-bold text-brand-600">
                  {t(`items.${key}.name`)[0]}
                </div>
                <div>
                  <div className="font-medium text-sm text-slate-900">
                    {t(`items.${key}.name`)}
                  </div>
                  <div className="text-xs text-slate-400">
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
