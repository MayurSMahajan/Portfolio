import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import Link from "next/link";

// Required for static export with dynamic routes in Next.js App Router
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} — Mayur Mahajan`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Define custom MDX components styled with Tailwind typography matching the coder aesthetic
  const customComponents = {
    h1: (props: any) => (
      <h1 className="font-mono text-3xl font-bold mt-12 mb-6 text-text-primary" {...props} />
    ),
    h2: (props: any) => (
      <h2 className="font-mono text-2xl font-bold mt-10 mb-4 text-text-primary" {...props} />
    ),
    h3: (props: any) => (
      <h3 className="font-mono text-xl font-semibold mt-8 mb-4 text-text-primary" {...props} />
    ),
    p: (props: any) => (
      <p className="text-text-secondary leading-relaxed mb-6" {...props} />
    ),
    ul: (props: any) => (
      <ul className="list-disc list-inside text-text-secondary space-y-2 mb-6 ml-4" {...props} />
    ),
    ol: (props: any) => (
      <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-6 ml-4" {...props} />
    ),
    li: (props: any) => <li className="leading-relaxed text-text-secondary" {...props} />,
    a: (props: any) => (
      <a
        className="text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent transition-colors"
        {...props}
      />
    ),
    strong: (props: any) => (
      <strong className="font-semibold text-text-primary" {...props} />
    ),
    blockquote: (props: any) => (
      <blockquote
        className="border-l-4 border-accent pl-4 italic text-text-muted my-6"
        {...props}
      />
    ),
    code: (props: any) => {
      // Inline code vs code block
      const isInline = !props.className;
      if (isInline) {
        return (
          <code
            className="font-mono text-sm px-1.5 py-0.5 rounded bg-surface-alt text-accent"
            {...props}
          />
        );
      }
      return <code className="font-mono text-sm leading-relaxed block overflow-x-auto" {...props} />;
    },
    pre: (props: any) => (
      <pre
        className="bg-code-bg border border-border rounded-xl p-4 my-6 overflow-x-auto"
        {...props}
      />
    ),
  };

  return (
    <article className="py-32 px-6 min-h-[90vh]">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center font-mono text-sm text-text-muted hover:text-accent mb-12 transition-colors"
        >
          ← Back to Blog
        </Link>
        <header className="mb-14">
          <p className="font-mono text-sm text-accent mb-4">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="font-mono text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* MDX Content rendered with custom components */}
        <div className="markdown-content">
          <MDXRemote source={post.content} components={customComponents} />
        </div>
      </div>
    </article>
  );
}
