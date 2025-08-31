import { Footer } from "@/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-16 prose prose-lg">
        <div className="py-6 border-b">
          <h1 className="text-2xl">Política de Privacidade – Ascender Smart</h1>
          <p>
            <strong>Última atualização:</strong> Setembro de 2025
          </p>
        </div>

        <div className="py-6 border-b">
          <h2 className="text-xl">1. Introdução</h2>
          <p>
            A <strong>Ascender Smart</strong> valoriza sua privacidade e está
            comprometida em proteger os dados pessoais coletados de clientes e
            visitantes do nosso site. Esta Política de Privacidade explica quais
            dados coletamos, como usamos, armazenamos e protegemos essas
            informações.
          </p>
        </div>

        <div className="py-6 border-b">
          <h2 className="text-xl">2. Dados que coletamos</h2>
          <ul className="list-disc list-inside ml-2">
            <li>Nome completo</li>
            <li>E-mail</li>
            <li>Telefone/WhatsApp</li>
            <li>Endereço (quando necessário para prestação de serviços)</li>
            <li>
              Informações sobre o uso do site, como cookies e dados de navegação
            </li>
          </ul>
        </div>

        <div className="py-6 border-b">
          <h2 className="text-xl">3. Finalidade da coleta</h2>
          <p>Os dados coletados são utilizados para:</p>
          <ul className="list-disc list-inside ml-2">
            <li>
              Entrar em contato sobre orçamentos e serviços de automação
              residencial
            </li>
            <li>
              Enviar informações sobre promoções ou novidades (somente com
              consentimento)
            </li>
            <li>Melhorar a experiência do usuário em nosso site</li>
            <li>Cumprir obrigações legais e fiscais</li>
          </ul>
        </div>

        <div className="py-6 border-b">
          <h2 className="text-xl">4. Como armazenamos e protegemos os dados</h2>
          <ul className="list-disc list-inside ml-2">
            <li>
              Os dados são armazenados em servidores seguros com acesso restrito
            </li>
            <li>
              Utilizamos medidas de segurança técnicas e administrativas contra
              acessos não autorizados
            </li>
          </ul>
        </div>

        <div className="py-6 border-b">
          <h2 className="text-xl">5. Compartilhamento de dados</h2>
          <p>
            Não vendemos ou compartilhamos seus dados com terceiros para fins
            comerciais sem seu consentimento. Podemos compartilhar informações
            com parceiros ou fornecedores apenas para a prestação de serviços,
            sempre com segurança e confidencialidade.
          </p>
        </div>

        <div className="py-6 border-b">
          <h2 className="text-xl">6. Direitos do usuário</h2>
          <p>Você tem direito a:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Solicitar acesso aos seus dados pessoais</li>
            <li>Corrigir ou atualizar suas informações</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Revogar o consentimento para uso de dados</li>
          </ul>
          <p>
            Para exercer qualquer direito, entre em contato conosco através do
            e-mail <strong>contato@smarthome.com.br</strong>.
          </p>
        </div>

        <div className="py-6 border-b">
          <h2 className="text-xl">7. Cookies e rastreamento</h2>
          <p>
            Nosso site utiliza cookies e ferramentas de análise para melhorar a
            navegação e medir a performance do site. Você pode desativar os
            cookies diretamente no navegador, mas isso pode afetar a experiência
            no site.
          </p>
        </div>

        <div className="py-6 border-b">
          <h2 className="text-xl">8. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade de tempos em tempos.
            Sempre que houver alterações significativas, atualizaremos a data no
            início do documento.
          </p>
        </div>

        <div className="py-6">
          <h2 className="text-xl">9. Contato</h2>
          <p>
            Se tiver dúvidas sobre esta Política de Privacidade ou sobre como
            tratamos seus dados pessoais, entre em contato:
          </p>
          <ul className="list-disc list-inside ml-2">
            <li>
              E-mail: <strong>contato@ascendersmart.com.br</strong>
            </li>
            <li>
              Telefone/WhatsApp: <strong>+55 11 94759-6174</strong>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
