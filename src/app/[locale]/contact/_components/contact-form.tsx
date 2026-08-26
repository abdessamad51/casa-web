"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, Loader2, MessageCircle } from "lucide-react";

const createSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    name: z.string().min(1, t("validation.nameRequired")),
    email: z.string().min(1, t("validation.emailRequired")).email(t("validation.emailInvalid")),
    phone: z.string().min(1, t("validation.phoneRequired")),
    service: z.string().min(1, t("validation.serviceRequired")),
    budget: z.string().optional(),
    message: z.string().min(20, t("validation.messageMinLength")),
    honeypot: z.string().max(0), // spam protection
  });

type FormData = z.infer<ReturnType<typeof createSchema>>;

const SERVICE_KEYS = ["web", "mobile", "landing", "seo", "maintenance", "vps", "other"] as const;
const BUDGET_KEYS = ["small", "medium", "large", "enterprise", "undefined"] as const;

export function ContactForm() {
  const t = useTranslations("contact");
  const schema = createSchema(t);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { honeypot: "" },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (error?: { message?: string }) =>
    cn(
      "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white",
      error
        ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
        : "border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
    );

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
          {t("success.title")}
        </h3>
        <p className="text-slate-600 mb-6">{t("success.message")}</p>
        <button
          onClick={() => setStatus("idle")}
          className="px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Honeypot - hidden spam field */}
      <input {...register("honeypot")} type="text" className="hidden" aria-hidden="true" tabIndex={-1} />

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {t("form.name")} *
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder={t("form.namePlaceholder")}
            className={inputClass(errors.name)}
            autoComplete="name"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {t("form.email")} *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder={t("form.emailPlaceholder")}
            className={inputClass(errors.email)}
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {t("form.phone")} *
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder={t("form.phonePlaceholder")}
          className={inputClass(errors.phone)}
          autoComplete="tel"
        />
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Service + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {t("form.service")} *
          </label>
          <select {...register("service")} className={inputClass(errors.service)}>
            <option value="">{t("form.servicePlaceholder")}</option>
            {SERVICE_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(`form.services.${key}`)}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {t("form.budget")}
          </label>
          <select {...register("budget")} className={inputClass()}>
            <option value="">{t("form.budgetPlaceholder")}</option>
            {BUDGET_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(`form.budgets.${key}`)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {t("form.message")} *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder={t("form.messagePlaceholder")}
          className={inputClass(errors.message)}
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
          <XCircle className="w-4 h-4 shrink-0" />
          {t("error.message")}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {t("form.sending")}
          </>
        ) : (
          t("form.submit")
        )}
      </button>
    </form>
  );
}
