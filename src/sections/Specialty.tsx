import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CircleCheck, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

function Speacialty() {
  const specialties = [
    {
      title: "Persianas Automatizadas 🪟",
      subtitle: " (com fabricação própria)",
      description:
        "Controle a entrada de luz natural com um simples comando de voz ou app. Mais conforto, privacidade e sofisticação — além do diferencial de fabricação própria.",
      features: [
        "Controle de persianas por voz ou app com ajuste remoto",
        "Programação de horários para abrir/fechar automaticamente",
        "Cenas que combinam iluminação e persianas",
        "Integrar ao clima/temperatura (fechar quando o sol está forte)",
      ],
      benefits: [
        "Conforto e praticidade no controle da iluminação natural",
        "Privacidade com um simples comando",
        "Ambientes sofisticados e modernos",
        "Valorização do imóvel com tecnologia exclusiva e design moderno",
      ],
    },
    {
      title: "Automação de Iluminação 💡",
      description:
        "Controle suas luzes por voz, celular ou em cenários inteligentes. Além de praticidade, ajuda a criar ambientes aconchegantes e modernos.",
      features: [
        "Acender/apagar luzes sem precisar de interruptor (via app ou Alexa)",
        "Cenas personalizadas (jantar, cinema, relaxar...)",
        "Programar horários automáticos",
        "Integração com sensores de presença",
      ],
      benefits: [
        "Mais conforto e praticidade no dia a dia",
        "Ambientes personalizados para cada momento",
        "Economia de energia com controle inteligente",
        "Valorização do imóvel com tecnologia moderna",
      ],
    },
    {
      title: "Automação de Infra-Vermelho 🎛️ (ar-condicionado, TV, etc.)",
      description:
        "Tenha o controle da sua TV, ar-condicionado e outros aparelhos IR pelo celular ou Alexa. Você nunca mais vai procurar pelo controle remoto.",
      features: [
        "Controle de TV, ar-condicionado e outros aparelhos via app ou voz",
        "Cenas que combinam iluminação e aparelhos (ex: modo cinema)",
        "Programação de horários automáticos",
        "Controle remoto universal no celular",
      ],
      benefits: [
        "Praticidade de controlar tudo pelo celular ou voz",
        "Integração total com assistentes virtuais.",
        "Menos dispositivos espalhados (um comando para todos)",
        "Mais conforto e modernidade na sua casa",
      ],
    },
    {
      title: "Rede Mesh 📶",
      description:
        "Garanta Wi-Fi forte e estável em todos os cantos da sua casa. Acabe com áreas sem sinal de Wi-Fi ou conexões lentas. Perfeito para suportar todos os dispositivos inteligentes.",
      features: [
        "Cobertura Wi-Fi uniforme em todos os ambientes de sua casa",
        "Conexão estável mesmo com muitos dispositivos conectados",
        "Sem quedas de conexão em chamadas, reuniões ou jogos online",
        "Tecnologia avançada para alta velocidade e baixa latência",
      ],
      benefits: [
        "Internet rápida e confiável em todos os cômodos",
        "Suporte ideal para dispositivos de automação residencial",
        "Melhor experiência em streaming, jogos e videochamadas",
        "Produtividade sem interrupções em home office",
      ],
    },
  ];

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="especialidades" className="min-h-screen py-16 px-6 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center pb-3"
      >
        Nossas{" "}
        <span className="bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
          Especialidades
        </span>
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-400"
      >
        Mais do que automação, a Ascender.smart entrega conforto e tecnologia em
        cada detalhe da sua casa.
      </motion.h3>
      <motion.div variants={container} initial="hidden" animate="show">
        <Carousel>
          <CarouselContent className="p-10">
            {specialties.map((specialty, index) => (
              <CarouselItem
                className="flex-none basis-full lg:basis-1/2 p-2"
                key={index}
              >
                <motion.div variants={item} className="h-full flex flex-col">
                  <Card className="h-full p-6 shadow-lg rounded-2xl text-center">
                    <div className="flex flex-col gap-1 items-center">
                      <h4 className="text-2xl font-semibold">
                        {specialty.title}
                      </h4>
                      <span className="text-sm text-gray-700 mt-[-8px]">
                        {specialty.subtitle}
                      </span>
                      {specialty.description && (
                        <h5 className="text-lg text-gray-500 max-w-2xl">
                          {specialty.description}
                        </h5>
                      )}
                    </div>
                    <div className="mt-8">
                      <h5 className="text-xl">Principais funcionalidades</h5>
                      <ul>
                        {specialty.features?.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 mt-2"
                          >
                            <Sparkles className="text-amber-200 min-w-6 min-h-6" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h5 className="text-xl">Benefícios</h5>
                      <ul>
                        {specialty.benefits?.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 mt-3"
                          >
                            <CircleCheck className="text-emerald-500 min-w-6 min-h-6" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
}

export { Speacialty };
