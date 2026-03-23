import Link from "next/link";
import Image from "next/image";
import {
  FaLeaf,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import type { FooterContent } from "@/types/global";

interface FooterProps {
  content: FooterContent;
}

const iconMap: Record<string, React.ElementType> = {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
};

export default function Footer({ content }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Sobre */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {content.logoImage ? (
                <Image
                  src={content.logoImage}
                  alt={content.logoAlt ?? content.logo ?? "Logo Aldeia da Luz"}
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                />
              ) : (
                <FaLeaf className="text-2xl text-primary" />
              )}
              {content.logo && (
                <span className="font-bold text-lg">{content.logo}</span>
              )}
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              {content.description}
            </p>
            <div className="flex gap-3">
              {content.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon] ?? FaLeaf;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <IconComponent className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">
              Páginas
            </h3>
            <ul className="space-y-2">
              {content.quickLinks.map((link) => (
                <li key={link.link}>
                  <Link
                    href={link.link}
                    className="text-white/75 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Práticas */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">
              Práticas
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li>Umbanda</li>
              <li>Medicinas da Floresta</li>
              <li>Música Ancestral</li>
              <li>Projetos Culturais</li>
              <li>Consultas Espirituais</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-primary" />
                <span>{content.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="shrink-0 text-primary" />
                <span>{content.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="shrink-0 text-primary" />
                <a
                  href={`mailto:${content.contact.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {content.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="shrink-0 text-primary" />
                <span>{content.contact.instagram}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>
            &copy; {currentYear} {content.copyright}
          </span>
          <span>Feito com fé e ancestralidade em Goiânia, GO</span>
        </div>
      </div>
    </footer>
  );
}
