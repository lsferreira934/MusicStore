# 🎶 Music Store

**Music Store** é um projeto desenvolvido para **fins de aprendizado** e prática de desenvolvimento web moderno. A aplicação simula uma loja de músicas, explorando tecnologias e práticas como **Next.js**, **Redux Toolkit**, **TailwindCSS** e componentes acessíveis da **Radix UI**.

---

## 📚 Propósito do Projeto

Este projeto foi criado para estudar e experimentar com:
- **Next.js** e renderização de páginas no lado do servidor (SSR) e no lado do cliente.
- Gerenciamento de estado usando **Redux Toolkit**.
- Estilização moderna com **TailwindCSS** e **Radix UI** para construir uma interface de usuário acessível e customizável.
- Configuração e uso de um servidor simulado com **json-server** para fins de desenvolvimento e testes locais.

---

## 🛠 Tecnologias Utilizadas

- **Next.js**: Framework React para renderização server-side.
- **Redux Toolkit**: Ferramenta para simplificar o gerenciamento de estado global.
- **TailwindCSS**: Framework CSS que permite uma estilização rápida e responsiva.
- **Radix UI**: Biblioteca de componentes acessíveis e customizáveis.
- **json-server**: Simula uma API REST para facilitar o desenvolvimento frontend-backend.

---

## 📦 Estrutura do Projeto

A estrutura básica do projeto é organizada da seguinte maneira:

```plaintext
music-store
├── public              # Arquivos estáticos
├── src
│   ├── components      # Componentes reutilizáveis
│   ├── features        # Funcionalidades e slices do Redux
│   ├── pages           # Páginas do Next.js
│   ├── styles          # Arquivos de estilo
│   ├── store           # Configuração da store do Redux
│   └── utils           # Funções auxiliares
├── db.json             # Dados para json-server
└── README.md
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Para rodar o projeto, é necessário ter o **Node.js** e **npm** instalados em sua máquina.

### Scripts Disponíveis

Os principais scripts para rodar e testar o projeto estão listados abaixo:

- **Iniciar o ambiente de desenvolvimento**: Inicia o servidor de desenvolvimento Next.js para testar as funcionalidades do projeto.

  ```bash
  npm run dev


## Scripts de Build e Execução

- **Compilar para produção**: Compila a aplicação para um ambiente de produção.
  ```bash
  npm run build

- **Iniciar o servidor de produção**: Roda a versão compilada em produção.
  ```bash
  npm run start


- **Executar linting**: Realiza verificação de qualidade no código usando ESLint.

  ```bash
  npm run lint

- **Executar testes unitários**: Realiza testes utilizando o Jest para garantir a qualidade dos componentes e funções.
  ```bash
  npm run test

- **Iniciar servidor JSON**: Simula uma API com json-server para facilitar o desenvolvimento.
  ```bash
  npm run server

## 🎨 Estilização e Componentes

A estilização é feita com **TailwindCSS**, utilizando uma abordagem modular e eficiente para criação de interfaces responsivas. O projeto usa **Radix UI** para fornecer componentes acessíveis e customizáveis, incluindo:

- **Avatar**: Exibição de imagens de perfil.
- **Menus e Context Menu**: Menus de navegação com opções contextuais.
- **Tabs**: Organização de conteúdo em abas.
- **Dialog**: Componentes modais para exibir informações adicionais.

---

## 🌱 Dependências

As principais dependências e suas versões estão no arquivo `package.json`. Aqui estão algumas das mais relevantes:

### Dependências de Produção

- `@reduxjs/toolkit`: 2.3.0
- `next`: 14.2.16
- `react`: ^18
- `tailwindcss`: ^3.4.1

### Dependências de Desenvolvimento

- `eslint`: ^8
- `jest`: ^29.7.0
- `json-server`: 0.17.3
- `prettier-plugin-tailwindcss`: ^0.6.8

---

## 🧪 Testes

A aplicação utiliza o **Jest** e **Testing Library** para garantir o funcionamento dos componentes e funções. Testes são escritos para componentes principais e funcionalidades críticas.


- **Para executar os testes**:
  ```bash
  npm run test

