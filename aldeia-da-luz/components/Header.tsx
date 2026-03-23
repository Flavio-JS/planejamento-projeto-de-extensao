"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaLeaf } from "react-icons/fa";
import type { HeaderContent } from "@/types/global";

interface HeaderProps {
  content: HeaderContent;
}

export default function Header({ content }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = scrolled
    ? "bg-secondary/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {content.logoImage ? (
              <Image
                src={content.logoImage}
                alt={content.logoAlt ?? content.logo ?? "Logo Aldeia da Luz"}
                width={44}
                height={44}
                className="rounded-full object-contain"
              />
            ) : (
              <FaLeaf className="text-white text-2xl" />
            )}
            {content.logo && (
              <span className="text-white font-bold text-lg leading-tight hidden sm:block">
                {content.logo}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {content.menuItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href={content.ctaButton.link}
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:brightness-110 transition-all duration-300 whitespace-nowrap"
          >
            {content.ctaButton.text}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white text-2xl p-1"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-secondary/98 backdrop-blur-md border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {content.menuItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href={content.ctaButton.link}
              className="mt-2 flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {content.ctaButton.text}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
