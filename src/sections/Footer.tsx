import {
  Instagram,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo e slogan */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Ascender Smart</h2>
          <p className="text-gray-400">
            Tecnologia e conforto em cada detalhe da sua casa.
          </p>
        </div>

        {/* Menu rápido */}
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/#" className="hover:text-white transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/#especialidades"
                className="hover:text-white transition-colors"
              >
                Especialidades
              </Link>
            </li>
            <li>
              <Link
                href="/#depoimentos"
                className="hover:text-white transition-colors"
              >
                Depoimentos
              </Link>
            </li>
            {/* <li><a href="#precos" className="hover:text-white transition-colors">Planos</a></li> */}
            <li>
              <Link
                href="/#contato"
                className="hover:text-white transition-colors"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-green-500" />
              <a
                href="tel:+5511947596174"
                className="hover:text-white transition-colors"
              >
                +55 11 94759-6174
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500" />
              <a
                href="mailto:contato@ascendersmart.com.br"
                className="hover:text-white transition-colors"
              >
                contato@ascendersmart.com.br
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais + CTA */}
        <div className="space-y-4">
          <h3 className="font-semibold mb-2">Redes sociais</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/ascender.smart"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Acesse nosso Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            {/* <a href="#" className="hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
            </a> */}
          </div>
          <Button
            asChild
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            <a
              href="https://wa.me/5511947596174"
              target="_blank"
              rel="noreferrer"
            >
              Fale no WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom legal section */}
      <div className="bg-gray-800 py-4 px-4 text-center text-sm text-gray-400">
        © 2025 Ascender Smart. Todos os direitos reservados. |
        <a href="/politica-de-privacidade" className="hover:text-white ml-2">
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
}

export { Footer };
