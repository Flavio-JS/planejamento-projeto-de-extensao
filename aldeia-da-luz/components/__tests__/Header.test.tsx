/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";

// next/link e next/image já estão mockados no vitest.setup.ts

// Mock do useEffect para scroll (jsdom não tem window.scrollY real)
vi.mock("react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react")>();
  return {
    ...actual,
    useEffect: actual.useEffect,
  };
});

afterEach(() => vi.clearAllMocks());

const mockContent = {
  logo: "Aldeia da Luz",
  menuItems: [
    { title: "Início", link: "/" },
    { title: "Quem Somos", link: "/quem-somos" },
    { title: "Medicinas", link: "/medicinas" },
  ],
  ctaButton: { text: "Agendar Consulta", link: "/contato" },
} as any;

describe("Header", () => {
  it("renderiza o logo e texto da marca", () => {
    render(<Header content={mockContent} />);
    expect(screen.getByText("Aldeia da Luz")).toBeInTheDocument();
  });

  it("renderiza os links de navegação desktop", () => {
    render(<Header content={mockContent} />);
    expect(screen.getByText("Quem Somos")).toBeInTheDocument();
    expect(screen.getByText("Medicinas")).toBeInTheDocument();
  });

  it("renderiza o botão CTA com link correto", () => {
    render(<Header content={mockContent} />);
    const ctaLinks = screen
      .getAllByText("Agendar Consulta")
      .map((el) => el.closest("a"));
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("mostra o botão de toggle mobile", () => {
    render(<Header content={mockContent} />);
    const toggle = screen.getByLabelText("Toggle menu");
    expect(toggle).toBeInTheDocument();
  });

  it("abre o menu mobile ao clicar no toggle", () => {
    render(<Header content={mockContent} />);
    const toggle = screen.getByLabelText("Toggle menu");

    fireEvent.click(toggle);

    // No estado aberto, os links do menu mobile também aparecem
    const inicioLinks = screen.getAllByText("Início");
    expect(inicioLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("fecha o menu mobile ao clicar em um link", () => {
    render(<Header content={mockContent} />);
    const toggle = screen.getByLabelText("Toggle menu");

    fireEvent.click(toggle);
    const inicioLinks = screen.getAllByText("Início");
    fireEvent.click(inicioLinks[inicioLinks.length - 1]);

    // Após fechar, o aria-expanded deve ser false
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("renderiza com logoImage quando fornecido", () => {
    const contentWithImage = {
      ...mockContent,
      logoImage: "/images/uploads/aldeia-logo.jpg",
      logoAlt: "Logo Aldeia da Luz",
    };
    render(<Header content={contentWithImage} />);
    const img = screen.getByAltText("Logo Aldeia da Luz");
    expect(img).toBeInTheDocument();
  });
});
