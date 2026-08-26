"use client";

import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const t = useTranslations("whatsapp");
  const url = getWhatsAppUrl(t("prefilledMessage"));

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("tooltip")}
      title={t("tooltip")}
      className="fixed bottom-6 end-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 fill-white" />
    </motion.a>
  );
}
