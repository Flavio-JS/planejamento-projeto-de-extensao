/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

afterEach(() => vi.clearAllMocks());

const mockContent = {
  logo: "Aldeia da Luz",
  description: "Casa de Umbanda em Goiânia, GO.",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://instagram.com/aldeiadaluz",
      icon: "FaInstagram",
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/@aldeiadaluz",
      icon: "FaYoutube",
    },
  ],
  quickLinks: [
    { title: "Início", link: "/" },
    { title: "Quem Somos", link: "/quem-somos" },
    { title: "Contato", link: "/contato" },
  ],
  contact: {
    address: "Goiânia, Goiás",
    phone: "(62) 9 9999-9999",
    email: "contato@aldeiadaluz.com.br",
    instagram: "@aldeiadaluz",
  },
  copyright: "Terreiro Sagrado Aldeia da Luz. Todos os direitos reservados.",
} as any;

describe("Footer", () => {
  it("renderiza o nome da marca", () => {
    render(<Footer content={mockContent} />);
    expect(screen.getByText("Aldeia da Luz")).toBeInTheDocument();
  });

  it("renderiza a descrição", () => {
    render(<Footer content={mockContent} />);
    expect(
      screen.getByText("Casa de Umbanda em Goiânia, GO.")
    ).toBeInTheDocument();
  });

  it("renderiza links de redes sociais com target _blank", () => {
    render(<Footer content={mockContent} />);
    const socialLinks = screen
      .getAllByRole("link")
      .filter(
        (a) =>
          a.getAttribute("href")?.includes("instagram") ||
          a.getAttribute("href")?.includes("youtube")
      );
    expect(socialLinks.length).toBeGreaterThanOrEqual(2);
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renderiza links rápidos corretamente", () => {
    render(<Footer content={mockContent} />);
    const quemSomosLink = screen.getByText("Quem Somos").closest("a");
    expect(quemSomosLink).toHaveAttribute("href", "/quem-somos");
  });

  it("renderiza informações de contato", () => {
    render(<Footer content={mockContent} />);
    expect(screen.getByText("Goiânia, Goiás")).toBeInTheDocument();
    expect(screen.getByText("(62) 9 9999-9999")).toBeInTheDocument();
    expect(screen.getByText("@aldeiadaluz")).toBeInTheDocument();
  });

  it("renderiza link de email correto", () => {
    render(<Footer content={mockContent} />);
    const emailLink = screen
      .getByText("contato@aldeiadaluz.com.br")
      .closest("a");
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:contato@aldeiadaluz.com.br"
    );
  });

  it("renderiza o copyright", () => {
    render(<Footer content={mockContent} />);
    expect(
      screen.getByText(/Terreiro Sagrado Aldeia da Luz/i)
    ).toBeInTheDocument();
  });

  it("renderiza logoImage quando fornecido", () => {
    const contentWithImage = {
      ...mockContent,
      logoImage: "/images/uploads/aldeia-logo.jpg",
      logoAlt: "Logo Aldeia da Luz",
    };
    render(<Footer content={contentWithImage} />);
    const img = screen.getByAltText("Logo Aldeia da Luz");
    expect(img).toBeInTheDocument();
  });
});
