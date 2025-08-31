import { Card } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

function Prices() {
  const prices = [
    {
      amount: "R$ 1.499",
      title: "Pacote Essencial",
      description: "Automação básica para sua casa",
      features: [
        "Controle de luzes",
        "Automação de dispositivos básicos",
        "App para celular",
      ],
    },
    {
      amount: "R$ 2.999",
      title: "Pacote Avançado",
      description: "Mais conforto e tecnologia",
      features: [
        "Tudo do Essencial +",
        "Integração com Alexa",
        "Som ambiente",
        "Cenas personalizadas",
      ],
    },
    {
      amount: "R$ 4.499",
      title: "Pacote Premium",
      description: "Automação completa e luxo",
      features: [
        "Tudo do Avançado +",
        "Automação completa da casa",
        "Segurança integrada",
        "Suporte VIP 24/7",
      ],
    },
  ];

  return (
    <section id="pacotes" className="min-h-screen py-16 px-6 bg-gray-50">
      <h3 className="text-5xl font-bold text-center pb-3">
        <span className="bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
          Planos flexíveis
        </span>{" "}
        para todos os estilos de vida
      </h3>
      <h2 className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-400">
        Escolha o pacote que mais combina com sua casa e expanda a automação
        quando quiser
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {prices.map((plan, index) => (
          <Card key={index} className={`p-6 text-center shadow-lg rounded-2xl ${index === 1 ? '' : 'mt-10'}`}>
            <div>
              {index === 1 && <span className="italic text-gray-400">(Mais escolhido)</span>}
              <h2 className="text-3xl font-bold">{plan.title}</h2>
              <span className="text-gray-500">{plan.description}</span>
              <div className="mt-6 flex justify-center items-end">
                <span className="font-sm text-gray-500 mr-2">a partir de </span>
                <strong className="text-3xl">{plan.amount}</strong>
              </div>
              <ul className="list-none mt-10 px-4 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mt-4 flex items-center gap-2">
                    <CircleCheck className="text-emerald-500" /><span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <h3 className="text-xl">Ainda tem dúvidas? Fale conosco →</h3>
        <button>WhatsApp</button>
      </div>
    </section>
  );
}

export { Prices };
