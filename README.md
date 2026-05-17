# 🍲 Big Jabá - Site de Restaurante

Este é o site oficial do **Big Jabá**, desenvolvido em **React** com **React Router** e estilizado com **Tailwind CSS**.  
O projeto foi criado para apresentar o cardápio, informações sobre o restaurante e facilitar o contato com os clientes.

---

## 🚀 Tecnologias utilizadas
- [React](https://reactjs.org/)  
- [React Router](https://reactrouter.com/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Vercel](https://vercel.com/) (deploy)  
- [GitHub](https://github.com/) (versionamento)

---

## 📂 Estrutura principal
- `App.js` → Define rotas e layout (Header, Main, Footer).  
- `pages/` → Contém páginas: `Home`, `Menu`, `About`, `Contact`.  
- `index.css` → Estilos globais.  

---

## 🎨 Layout
- **Header** fixo sobre o vídeo, com links que mudam de branco para amarelo no hover.  
- **Main** com espaçamento (`pt-24`) para não ser encoberto pelo header.  
- **Footer** alinhado horizontalmente com o restante do conteúdo.  
- **Container centralizado** com `max-w-6xl mx-auto px-6` para manter consistência visual.  
- **Background** em tom bege claro (`#FAF3E0`) para harmonizar com as cores do cardápio.

---

## ⚙️ Como rodar localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/Big-Jaba.git
   npm start
