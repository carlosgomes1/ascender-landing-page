import Image from "next/image";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/smarthome.png"
          alt="Ambiente smart home"
          className="object-cover opacity-100"
          priority
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      {/* Conteúdo */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-white max-w-4xl"
      >
        Sua casa, agora{" "}
        <span className="bg-gradient-to-r from-teal-500 to-[#7FB3D5] bg-clip-text text-transparent">
          inteligente
        </span>{" "}
        e confortável
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg md:text-2xl max-w-2xl mb-8 text-gray-300"
      >
        Controle luzes, som ambiente, ar-condicionado e muito mais com a sua voz
        ou celular. Mais praticidade e tecnologia para o seu dia a dia.
      </motion.h2>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        href="#contato"
        className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-full text-lg font-medium transition-colors shadow-lg"
      >
        🚀 Solicite agora seu orçamento
      </motion.a>
    </section>
  );
}

export { Hero };
