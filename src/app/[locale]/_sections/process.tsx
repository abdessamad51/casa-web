import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/animations";

const STEPS = ["discover", "design", "build", "launch", "support"] as const;

export function ProcessSection() {
  const t = useTranslations("process");

  return (
    <Section id="process" className="bg-slate-900 text-white">
      <FadeIn>
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
        />
      </FadeIn>

      <div className="relative mt-12">
        {/* Horizontal rule connecting steps — desktop */}
        <div className="hidden md:block absolute top-[1.75rem] start-0 end-0 h-px bg-slate-700 mx-[10%]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {STEPS.map((step, index) => (
            <FadeIn key={step} delay={index * 0.08}>
              <div className="flex flex-col">
                {/* Step label — typographic, not a colored bubble */}
                <div className="relative z-10 flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">
                    0{index + 1}
                  </span>
                  <div className="flex-1 h-px bg-slate-700 md:hidden" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">
                  {t(`steps.${step}.title`)}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t(`steps.${step}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
