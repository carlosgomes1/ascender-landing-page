"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isPrivacyPage = pathname === "/politica-de-privacidade";

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const navLinks = [
    { id: "beneficios", label: "Benefícios" },
    { id: "especialidades", label: "Especialidades" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/">
          <h1 className="text-xl bg-gradient-to-r from-teal-600 to-teal-900 bg-clip-text text-transparent">
            Ascender.smart
          </h1>
        </Link>

        {/* MENU DESKTOP */}
        {isPrivacyPage ? (
          <nav className="hidden md:flex">
            <Link href="/" className="text-md text-gray-600 hover:text-black">
              ← Voltar para a Página Inicial
            </Link>
          </nav>
        ) : (
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors ${
                  activeSection === link.id
                    ? "text-emerald-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* MENU MOBILE */}
        {isPrivacyPage ? (
          <nav className="md:hidden">
            <Link href="/" className="text-md text-gray-600 hover:text-black">
              ← Voltar para a Home
            </Link>
          </nav>
        ) : (
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </div>

      {/* DROPDOWN MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors ${
                activeSection === link.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export { Header };
