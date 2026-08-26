import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/animations";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";

const blogDir = path.join(process.cwd(), "content/blog");

function getPost(slug: string) {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export async function generateStaticParams() {
  if (!fs.existsSync(blogDir)) return [];
  return fs.readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(".mdx", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://casa-web.ma";
  return {
    title: post.frontmatter.title as string,
    description: post.frontmatter.description as string,
    openGraph: {
      title: post.frontmatter.title as string,
      description: post.frontmatter.description as string,
      type: "article",
      publishedTime: post.frontmatter.date as string,
      authors: [post.frontmatter.author as string],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <>
      <div className="pt-24 pb-12 bg-gradient-to-br from-slate-50 to-brand-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              {frontmatter.title as string}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {frontmatter.author as string}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(frontmatter.date as string).toLocaleDateString("fr-FR", {
                  year: "numeric", month: "long", day: "numeric",
                })}
              </span>
              {frontmatter.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {frontmatter.readingTime as string}
                </span>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <article className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-a:text-brand-600 prose-code:text-brand-700 prose-code:bg-brand-50 prose-blockquote:border-brand-400">
              <MDXRemote source={content} />
            </article>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Tous les articles
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-all"
              >
                Discutons de votre projet
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
