import React from "react";
import background from "../assets/contato.png"; 

function Contact() {
  return (
    <section
      className="relative w-screen h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Camada escurecida para destacar o conteúdo */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-8">
        {/* Texto à esquerda */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-5xl font-bold mb-6">Entre em contato</h2>
          <p className="text-lg mb-4">📞 (11) 5555-1900</p>
          <p className="text-lg mb-6">✉️ contato@bigjaba.com.br</p>
          <button className="bg-jabáOrange text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-jabáYellow hover:text-black transition">
            Trabalhe conosco
          </button>
        </div>

        {/* Formulário à direita */}
        <form className="md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full p-3 rounded bg-transparent border-b border-jabáYellow text-white placeholder-gray-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 rounded bg-transparent border-b border-jabáYellow text-white placeholder-gray-300 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Assunto"
            className="w-full p-3 rounded bg-transparent border-b border-jabáYellow text-white placeholder-gray-300 focus:outline-none"
          />
          <textarea
            placeholder="Mensagem"
            className="w-full p-3 rounded bg-transparent border-b border-jabáYellow text-white placeholder-gray-300 h-32 focus:outline-none"
          ></textarea>
          <button className="bg-jabáGreen text-white px-6 py-3 rounded-lg shadow hover:bg-jabáYellow hover:text-black transition">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
