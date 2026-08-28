import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Section } from "@/components/section";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { CtaSection } from "../_sections/cta";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.blog" });
  return { title: t("title"), description: t("description") };
}

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(blogDir, f), "utf-8");
      const { data } = matter(raw);
      return { ...data, slug: f.replace(".mdx", "") } as {
        title: string;
        slug: string;
        date: string;
        author: string;
        category: string;
        description: string;
        readingTime: string;
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const CATEGORY_COLORS: Record<string, string> = {
  seo: "bg-emerald-100 text-emerald-700",
  dev: "bg-blue-100 text-blue-700",
  marketing: "bg-pink-100 text-pink-700",
  design: "bg-violet-100 text-violet-700",
};

export default function BlogPage() {
  const t = useTranslations("blog");
  const posts = getBlogPosts();

  return (
    <>
      <div className="pt-24 pb-16 border-b border-slate-200 bg-[#f8f7f4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4">
              Ressources
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
        {posts.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            Articles à venir prochainement...
          </div>
        ) : (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <article className="bg-white rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-lg transition-all overflow-hidden group">
                  {/* Category banner */}
                  <div className="h-2 bg-gradient-to-r from-brand-500 to-accent-500" />

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${CATEGORY_COLORS[post.category] || "bg-slate-100 text-slate-600"}`}>
                        {t(`categories.${post.category as "seo" | "dev" | "marketing" | "design"}`)}
                      </span>
                      {post.readingTime && (
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />{post.readingTime}
                        </span>
                      )}
                    </div>

                    <h2 className="font-display font-semibold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                        <span>·</span>
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700"
                      >
                        {t("readMore")} <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}
      </Section>

      <CtaSection />
    </>
  );
}
