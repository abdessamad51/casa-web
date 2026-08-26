import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/animations";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

const portfolioDir = path.join(process.cwd(), "content/portfolio");

function getProject(slug: string) {
  const filePath = path.join(portfolioDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export async function generateStaticParams() {
  if (!fs.existsSync(portfolioDir)) return [];
  return fs.readdirSync(portfolioDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(".mdx", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title as string,
    description: `Étude de cas : ${project.frontmatter.client} — ${project.frontmatter.result}`,
  };
}

export default async function PortfolioCaseStudy({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { frontmatter, content } = project;

  return (
    <>
      <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 to-brand-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au portfolio
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1 text-xs bg-brand-100 text-brand-700 px-2 py-1 rounded-full">
                <Tag className="w-3 h-3" />{frontmatter.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                ✓ {frontmatter.result}
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-slate-900 mb-4">
              {frontmatter.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><User className="w-4 h-4" />{frontmatter.client}</span>
              {frontmatter.date && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(frontmatter.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
                </span>
              )}
            </div>
            {frontmatter.tech && (
              <div className="flex flex-wrap gap-2 mt-4">
                {(frontmatter.tech as string[]).map((t: string) => (
                  <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
            )}
          </FadeIn>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <article className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-a:text-brand-600 prose-code:text-brand-700 prose-code:bg-brand-50">
              <MDXRemote source={content} />
            </article>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Voir tous les projets
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-all"
              >
                Démarrer un projet similaire
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
