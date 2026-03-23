import { getCurrentlyReading } from "@/lib/goodreads";
import Image from "next/image";
import Link from "next/link";

export async function CurrentlyReading() {
  const books = await getCurrentlyReading();

  if (!books || books.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 pt-6 border-t border-border">
      <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4">
        Currently Reading
      </p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {books.map((book) => (
          <Link
            key={book.link}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 p-3 -mx-3 rounded-lg hover:bg-text-secondary/5 transition-colors"
          >
            {book.imageUrl && (
              <div className="relative shrink-0 w-12 h-16 overflow-hidden rounded border border-border shadow-sm">
                <Image
                  src={book.imageUrl}
                  alt={`Cover of ${book.title}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-col justify-center">
              <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors line-clamp-2">
                {book.title}
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                {book.author}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
