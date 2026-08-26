import { useTranslations } from "next-intl";
import { Section, SectionHeader } from "@/components/section";
import { FadeIn } from "@/components/animations";
import { cn } from "@/lib/utils";

const STEPS = ["discover", "design", "build", "launch", "support"] as const;

const STEP_COLORS = [
  "from-brand-500 to-brand-600",
  "from-violet-500 to-violet-600",
  "from-blue-500 to-blue-600",
  "from-emerald-500 to-emerald-600",
  "from-accent-500 to-accent-600",
] as const;

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

      <div className="relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-8 start-0 end-0 h-0.5 bg-slate-700 mx-[10%]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {STEPS.map((step, index) => (
            <FadeIn key={step} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center">
                {/* Step number */}
                <div
                  className={cn(
                    "relative z-10 w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center mb-4 text-white font-display font-bold text-xl",
                    STEP_COLORS[index]
                  )}
                >
                  {index + 1}
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
