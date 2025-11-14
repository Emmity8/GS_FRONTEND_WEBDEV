
---

# 🚀 **CarrerHub**

![Status](https://img.shields.io/badge/status-%20desenvolvido-green)
![Tecnologias](https://img.shields.io/badge/tecnologias-React%20%7C%20Tailwind%20CSS%20%7C%20IA%20Simulada-blue)

---

## 💡 **Sobre o Projeto**

O **CarrerHub** é uma plataforma web colaborativa inspirada no **LinkedIn**, desenvolvida para a **Global Solution FIAP 2025**.
O objetivo é **conectar profissionais**, **mapear habilidades**, **identificar lacunas de competências** e **sugerir trilhas de aprendizado personalizadas** com base em **Inteligência Artificial simulada**.

A aplicação é **Single Page Application (SPA)** e foi construída com **React + Vite + TailwindCSS**, priorizando design moderno, responsividade e acessibilidade.

---

## 🎯 **Objetivo Geral**

Promover o **futuro do trabalho** por meio de uma plataforma que:

* Incentiva a **colaboração entre talentos**;
* Detecta **lacunas de habilidades** automaticamente;
* Sugere **trilhas de aprendizado personalizadas**;
* Conecta profissionais de **diferentes regiões e áreas**.

---

## 🧠 **Principais Funcionalidades**

### 🔹 1. Mapeamento Inteligente de Habilidades (IA)

* A aplicação analisa as **skills e o cargo** de cada profissional.
* Detecta **lacunas técnicas** e recomenda **trilhas de aprendizado personalizadas**.
* Baseada no arquivo `Requalifica.js`, a IA sugere cursos e áreas de aprimoramento.

### 🔹 2. Feed Colaborativo

* Um espaço para troca de **experiências, ideias e aprendizados**.
* Os usuários podem postar, curtir e comentar sobre suas vivências profissionais.

### 🔹 3. Conexões Profissionais

* Cada perfil possui o botão **“Conectar”**.
* Ao clicar, o profissional é adicionado à aba **“Conexões”** automaticamente.
* O sistema mantém suas conexões em memória local.

### 🔹 4. Filtro Avançado por Região e Nome

* Campo de busca por **nome** e **cidade/região** dos profissionais.
* Listagem dinâmica e responsiva com dados do arquivo `profissionais.json`.

### 🔹 5. Dark Mode 🌙

* Alternância entre **tema claro e escuro** em tempo real, com persistência visual.
* Implementado via componente `ToggleDarkMode` com ícones do Heroicons.

---

## 🧩 **Estrutura do Projeto**

```
src/
├── assets/
│   └── images/                # Avatares ou fotos dos profissionais
├── components/
│   ├── Navbar.jsx             # Menu principal com abas e toggle de tema
│   ├── ToggleDarkMode.jsx     # Alternância entre modo claro/escuro
│   ├── CardProfissional.jsx   # Card visual estilo LinkedIn
│   ├── ModalPerfil.jsx        # Modal com detalhes e trilhas de aprendizado
│   ├── FeedColaborativo.jsx   # Mural de postagens e interações
│   ├── PostCard.jsx           # Estrutura dos posts no feed
│   ├── Conexoes.jsx           # Exibição das conexões adicionadas
│   └── Filtros.jsx            # Filtros e busca de profissionais
├── data/
│   ├── profissionais.json     # Base com 60 perfis fictícios
├── utils/
│   └── Requalifica.js         # Função de IA simulada (sugestão de trilhas)
├── App.jsx                    # SPA principal controlando as abas
└── main.jsx                   # Ponto de entrada do React
```

---

## 🧰 **Tecnologias Utilizadas**

| Tecnologia           | Função                                     |
| -------------------- | ------------------------------------------ |
| **React + Vite**     | Criação da SPA e reatividade               |
| **Tailwind CSS**     | Estilização moderna e responsiva           |
| **JavaScript (ES6)** | Lógica de filtragem e IA simulada          |
| **JSON**             | Base de dados de profissionais e postagens |

---

## ⚙️ **Como Executar o Projeto**

### 1️⃣ Clonar o repositório:

```bash
git clone https://github.com/SEU-USUARIO/GS_FRONTEND_WEBDEV.git
```

### 2️⃣ Acessar a pasta:

```bash
cd GS_FRONTEND_WEBDEV
```

### 3️⃣ Instalar as dependências NPM:

```bash
npm install
```

### 4️⃣ Instalar as dependências do Tailwind:

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 5️⃣ Executar o projeto:

```bash
npm run dev
```

### 6️⃣ Acessar no navegador:

👉 [http://localhost:5173](http://localhost:5173)

---

## 🤖 **IA de Requalificação – Funcionamento**

A lógica da IA está no arquivo [`Requalifica.js`](./src/utils/Requalifica.js):

```js
const trilhas = gerarTrilhasAprendizado(profissional);
```

Ela compara as habilidades do profissional com as **competências exigidas pela área** e retorna:

* Lacunas de habilidades detectadas
* Sugestões de cursos e trilhas de aprendizado
* Recomendação personalizada com base na profissão

---

## 🎨 **Design e Experiência**

* Interface **inspirada no LinkedIn**
* Cards com **glassmorphism**, sombras suaves e animações `hover`
* Totalmente **responsivo** (desktop, tablet, mobile)
* Tema escuro/claro com transição suave
* Layout baseado em **TailwindCSS**

---

## 🧑‍💻 **Autores**

- **Julio Cesar Augusto Vieira**
- **João Batista Lima Neto**
- Estudantes de Engenharia de Software – FIAP 💼

---

## 💬 **Agradecimentos**

Projeto desenvolvido para a disciplina **Global Solution – FIAP 2025**,
com orientação do professor **Wellington Cidade Silva**,
abordando o tema:

> “Requalificação Dinâmica de Profissionais com IA”.

---
