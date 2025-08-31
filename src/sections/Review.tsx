import { Quote, Star, User } from "lucide-react";
import { motion, Variants } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

function Review() {
  const clientReviews = [
    {
      name: "Mariana Silva",
      location: "Tatuapé - São Paulo, SP",
      review:
        "A automação da minha casa mudou totalmente meu dia a dia! É incrível controlar tudo pelo celular, sem precisar se preocupar com nada.",
    },
    {
      name: "Carlos Almeida",
      location: "São Bernardo do Campo, SP",
      review:
        "O sistema de iluminação e som ficou perfeito. Minha sala agora é super confortável e moderna.",
    },
    {
      name: "Fernanda Costa",
      location: "São Caetano do Sul, SP",
      review:
        "Adorei a integração com a Alexa! Posso controlar luzes, TV e ar-condicionado com comandos de voz.",
    },
    {
      name: "Thiago Santos",
      location: "Diadema, SP",
      review:
        "Os sensores de segurança me dão muita tranquilidade, mesmo quando estou fora de casa.",
    },
    {
      name: "Juliana Pereira",
      location: "Santo André, SP",
      review:
        "As persianas automatizadas são um sonho! A casa fica moderna e super prática.",
    },
    {
      name: "Rafael Oliveira",
      location: "Tatuapé - São Paulo, SP",
      review:
        "A equipe foi super profissional e a instalação foi rápida. Agora minha casa é inteligente de verdade!",
    },
    {
      name: "Letícia Rodrigues",
      location: "Santo André, SP",
      review:
        "É incrível ver como a automação residencial aumenta o conforto e ainda ajuda a economizar energia.",
    },
    {
      name: "Bruno Martins",
      location: "Mooca - São Paulo, SP",
      review:
        "Recomendo a todos! A casa ficou muito mais funcional e bonita, adorei cada detalhe da automação.",
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
    <section id="depoimentos" className="min-h-screen py-16 px-6 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center pb-3"
      >
        O que{" "}
        <span className="bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
          nossos clientes
        </span>{" "}
        dizem?
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-400"
      >
        Quem já vive a experiência Ascender Smart sabe: conforto, praticidade e
        tecnologia de ponta transformam o dia a dia.
      </motion.h3>
      <motion.div variants={container} initial="hidden" animate="show">
        <Carousel>
          <CarouselContent className="p-10">
            {clientReviews.map((client, index) => (
              <CarouselItem
                className="flex-none basis-full lg:basis-1/2 p-2"
                key={index}
              >
                <motion.div variants={item} className="h-full flex flex-col">
                  <Card className="min-h-90 p-6 shadow-lg rounded-2xl">
                    <div className="flex items-center justify-between">
                      <Quote className="text-gray-300" />
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="text-yellow-300" />
                        ))}
                      </div>
                    </div>
                    <p className="flex-1 italic text-xl">“{client.review}”</p>
                    <div className="flex items-center gap-3 mt-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>
                          <User />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col justfy-center">
                        <strong className="text-xl font-semibold">
                          {client.name}
                        </strong>
                        <span className="text-md italic text-gray-600">
                          {client.location}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <h2 className="text-3xl font-semibold text-center mt-20">
          Junte-se a dezenas de clientes satisfeitos e transforme sua casa hoje!
        </h2>
        <a
          href="#contato"
          className="px-6 py-3 bg-teal-500 text-white hover:bg-[#7FB3D5] rounded-full text-lg font-medium transition-colors shadow-lg"
        >
          🚀 Orçamento fácil e sem compromisso
        </a>
      </motion.div>
    </section>
  );
}

export { Review };
