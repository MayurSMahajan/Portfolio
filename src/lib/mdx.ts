import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define the shape of our blog post frontmatter
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

// Path to the markdown content directory
const contentDir = path.join(process.cwd(), "content/blog");

/**
 * Retrieves a list of all blog posts (sorted by date descending)
 */
export function getAllPosts(): Omit<BlogPost, "content">[] {
  // Return empty array if directory doesn't exist yet
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);

  const posts = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const fullPath = path.join(contentDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Parse YAML frontmatter using gray-matter
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
      };
    })
    // Sort posts by date descending
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return posts;
}

/**
 * Retrieves a single post by its slug (filename without extension)
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    // Check both .mdx and .md extensions
    let fullPath = path.join(contentDir, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(contentDir, `${slug}.md`);
    }

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post: ${slug}`, error);
    return null;
  }
}
