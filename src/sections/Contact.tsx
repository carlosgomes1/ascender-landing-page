"use client";

import { Mail, Phone, MapPin, User2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contato"
      className="py-20 relative bg-gradient-to-br from-purple-50 to-purple-100"
    >
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl font-bold text-center pb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Solicite seu{" "}
            <span className="bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
              orçamento
            </span>
          </motion.h2>
          <motion.h3
            className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Preencha o formulário ou fale diretamente com nosso time no
            WhatsApp!
          </motion.h3>
        </div>

        <motion.form
          className="bg-white p-8 rounded-2xl shadow max-w-2xl mx-auto grid grid-cols-1 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <User2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Nome completo"
              className="border border-gray-300 rounded-lg p-3 pl-12 w-full focus:ring-1 focus:ring-teal-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="E-mail"
              className="border border-gray-300 rounded-lg p-3 pl-12 w-full focus:ring-1 focus:ring-teal-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              placeholder="Telefone"
              className="border border-gray-300 rounded-lg p-3 pl-12 w-full focus:ring-1 focus:ring-teal-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cidade / Bairro"
              className="border border-gray-300 rounded-lg p-3 pl-12 w-full focus:ring-1 focus:ring-teal-500 outline-none"
              required
            />
          </div>

          <select className="border border-gray-300 rounded-lg p-3 focus:ring-1 focus:ring-teal-500 outline-none w-full">
            <option>Selecione o serviço desejado</option>
            <option>Automação de iluminação</option>
            <option>Automação de som ambiente</option>
            <option>Persianas automatizadas</option>
            <option>Rede mesh</option>
          </select>

          <div>
            <textarea
              placeholder="Mensagem / Observações"
              rows={4}
              className="border border-gray-300 rounded-lg p-4 w-full focus:ring-1 focus:ring-teal-500 outline-none"
            />
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.button
              type="submit"
              className="cursor-pointer flex-1 bg-white hover:bg-gray-100 text-teal-900 font-bold px-3 py-3 rounded-2xl shadow-lg border border-gray-200 transition"
              whileHover={{ scale: 1.03 }}
            >
              🚀 Solicitar orçamento
            </motion.button>

            <motion.a
              href="https://wa.me/5511947596174"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-3 rounded-2xl shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              💬 Ou fale conosco no WhatsApp
            </motion.a>
          </div>

          {/* Feedback após envio */}
          {submitted && (
            <motion.div
              className="mt-4 text-green-600 font-semibold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Formulário enviado com sucesso!
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export { Contact };
