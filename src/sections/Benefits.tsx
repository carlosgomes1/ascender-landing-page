import {
  Home,
  Zap,
  Shield,
  Settings,
  Volume,
  Globe,
  Star,
  Cpu,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Benefits() {
  const benefits = [
    {
      title: "Conforto e praticidade",
      desc: "Controle luzes, som, ar-condicionado e persianas com voz ou app, sem precisar se levantar.",
      icon: <Home className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Economia de energia",
      desc: "Iluminação e climatização inteligentes reduzem desperdício e diminuem sua conta de energia.",
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Segurança total",
      desc: "Sensores, câmeras e automações programadas dão tranquilidade mesmo fora de casa.",
      icon: <Shield className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Automação personalizada",
      desc: "Soluções sob medida para seu estilo de vida e rotina.",
      icon: <Settings className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Integração com assistentes de voz",
      desc: "Funciona com Alexa, Google Home e Siri, facilitando comandos rápidos.",
      icon: <Volume className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Controle remoto 24h",
      desc: "Gerencie sua casa de qualquer lugar, pelo celular.",
      icon: <Globe className="w-10 h-10 text-cyan-400" />,
    },
    {
      title: "Valorização do imóvel",
      desc: "Uma casa automatizada é mais atraente e moderna no mercado imobiliário.",
      icon: <Star className="w-10 h-10 text-pink-400" />,
    },
    {
      title: "Tecnologia de última geração",
      desc: "Equipamentos moderna e confiável, com garantia e suporte especializado.",
      icon: <Cpu className="w-10 h-10 text-indigo-400" />,
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
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center pb-3"
        >
          <span className="bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
            Benefícios
          </span>{" "}
          da sua casa inteligente
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-400"
        >
          Descubra como a automação residencial da Ascender Smart transforma
          conforto, segurança e economia no seu dia a dia.
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
              }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="max-w-40 font-bold text-lg mb-2 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
                  {b.title}
                </h3>
                {b.icon}
              </div>

              <p className="text-gray-500">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
