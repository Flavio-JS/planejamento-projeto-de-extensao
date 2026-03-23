import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import React from "react";

// Limpa o DOM após cada teste
afterEach(() => {
  cleanup();
});

// Mock do Next.js Image
vi.mock("next/image", () => ({
  default: ({ src, alt, width, height, ...props }: { src: string; alt: string; width?: number; height?: number; [key: string]: unknown }) => {
    return React.createElement("img", { src, alt, width, height, ...props });
  },
}));

// Mock do Next.js Link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => {
    return React.createElement("a", { href, ...props }, children);
  },
}));

// Mock do Next.js navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));
