"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a short delay
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 start-4 end-4 md:start-auto md:end-4 md:max-w-sm z-40 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center shrink-0">
          <Cookie className="w-4 h-4 text-brand-600" />
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">{t("message")}</p>
      </div>
      <div className="flex items-center gap-2 justify-end">
        <Link
          href="/privacy"
          className="text-xs text-slate-500 hover:text-brand-600 transition-colors underline"
        >
          {t("learnMore")}
        </Link>
        <button
          onClick={decline}
          className="px-3 py-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition-colors"
        >
          {t("decline")}
        </button>
        <button
          onClick={accept}
          className="px-3 py-1.5 rounded-lg text-sm bg-brand-600 text-white hover:bg-brand-700 transition-colors font-medium"
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
}
