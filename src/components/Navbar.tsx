"use client";

/**
 * Navbar — Sticky navigation with blurred backdrop.
 * Contains name branding, section links, mobile menu toggle, and theme toggle.
 * Client component because it manages mobile menu state and scroll behavior.
 */

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                  ${scrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* ─── Name branding ─── */}
        <a href="/" className="group flex items-baseline gap-2">
          <span className="font-mono text-lg font-semibold tracking-tight text-text-primary">
            mayur
          </span>
        </a>

        {/* ─── Desktop links ─── */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-text-secondary hover:text-text-primary
                         transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="font-mono text-sm text-accent hover:text-accent-hover
                       transition-colors duration-200"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* ─── Mobile controls ─── */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg
                       border border-border bg-surface-elevated
                       hover:border-border-hover cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ─── Mobile menu ─── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${mobileOpen ? "max-h-80 border-b border-border" : "max-h-0"}`}
      >
        <div className="bg-surface/95 backdrop-blur-md px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-sm text-text-secondary hover:text-text-primary
                         transition-colors duration-200 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block font-mono text-sm text-accent hover:text-accent-hover
                       transition-colors duration-200 py-2"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </header>
  );
}
