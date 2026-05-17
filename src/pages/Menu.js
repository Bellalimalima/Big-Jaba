import React from "react";
import feijoada from "../assets/feijoada.png";
import jaba from "../assets/jaba.png";
import baiao from "../assets/baiao-dois.png";

function Menu() {
  const items = [
    {
      name: "Baião de Dois",
      description: "Carro chefe da casa, nossa especialidade. Um arroz e feijão tropeiro que juntos formam essa delícia!",
      price: "R$ 25",
      image: baiao,
    },
    {
      name: "Jabá cozida",
      description: "Feito com jabá da melhor qualidade e servida como acompanhamento.",
      price: "R$ 12",
      image: jaba,
    },
    {
      name: "Feijoada",
      description: "Maravilhosa feijoada caseira que serve duas pessoas.",
      price: "R$ 30",
      image: feijoada,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-10">
      <h2 className="text-4xl font-extrabold text-jabáOrange mb-4">Nossos Pratos</h2>
      <p className="text-gray-700 mb-10 max-w-3xl">
        Cada prato do Big Jabá é preparado com ingredientes frescos e muito carinho. 
        Descubra sabores únicos que refletem nossa paixão pela boa comida.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div key={index} className="group">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-bold text-jabáOrange mt-4">{item.name}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <p className="text-jabáGreen font-semibold mt-2">{item.price}</p>
            <div className="border-b-2 border-jabáOrange mt-4"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;

