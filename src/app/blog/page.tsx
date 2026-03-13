import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog — Mayur Mahajan",
  description: "Writings on software development, open source, and technology.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="py-32 px-6 min-h-[90vh]">
      <div className="mx-auto max-w-3xl">
        <p className="section-comment mb-2">writing</p>
        <h1 className="font-mono text-3xl font-bold text-text-primary sm:text-4xl mb-6">
          Blog
        </h1>
        <p className="text-text-secondary mb-16 text-lg">
          Thoughts, technical tutorials, and updates on what I&apos;m currently building.
        </p>

        <div className="space-y-12">
          {posts.length === 0 ? (
            <p className="text-text-muted">No posts found.</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <p className="font-mono text-sm text-text-muted mb-2">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="font-mono text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-mono text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Read post <span className="ml-2">→</span>
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
