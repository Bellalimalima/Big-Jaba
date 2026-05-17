import React from "react";
import background from "../assets/sertao.png"; 

function About() {
  return (
    <section
      className="relative w-screen h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Camada de fundo escurecida */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 max-w-2xl text-left px-6">
        <h2 className="text-4xl font-bold text-jabáOrange mb-6">O Início</h2>
        <p className="text-lg mb-4 leading-relaxed">
          Inspirado no sangue empreendedor herdado pelo meu pai, criei o Big Jabá com o objetivo de honrar minha raíz 
          cearense e de proporcionar a beleza e sabor da culinária nordestina para a zona leste de São Paulo. Uma comida
          caseira, com tempero único, que fará cada experiência inesquecível.
        </p>
        <p className="text-lg leading-relaxed">
          Hoje, seguimos com o mesmo entusiasmo, valorizando ingredientes frescos,
          receitas autênticas e o carinho de quem ama cozinhar. O Big Jabá é mais
          do que um restaurante — é uma homenagem ao nosso nordeste tão rico e maravilhoso.
        </p>
      </div>
    </section>
  );
}

export default About;
