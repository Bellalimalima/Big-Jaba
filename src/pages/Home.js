import React from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Conteúdo sobre o vídeo */}
      <div className="relative z-10 text-center p-8">
        <h2 className="text-5xl md:text-6xl text-white font-extrabold text-jabáYellow mb-4 drop-shadow-lg">
          Bem-vindo ao Big Jabá
        </h2>
        <p className="text-lg md:text-xl text-black max-w-2xl mx-auto mb-8">
          Um espaço vibrante e cheio de energia, trazendo o melhor em sabor e estilo.
        </p>
        <button
          onClick={() => navigate("/menu")}
          className="bg-jabáOrange text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-jabáYellow hover:text-black transition-transform transform hover:scale-105"
        >
          Explore Agora
        </button>
      </div>
    </section>

  );
}

export default Home;
