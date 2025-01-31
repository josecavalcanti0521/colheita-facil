# Colheita-Fácil

Este projeto é uma API para gerenciar dados de colheitas de frutas em uma fazenda, permitindo a criação, consulta, atualização e exclusão de registros.

## Tecnologias Utilizadas
   - JavaScript
   - Node.js
   - Express
   - SQLite
   - Sequelize
   - dotenv
   - nodemon

## Funcionalidades
   - Adicionar uma nova colheita
   - Listar todas as colheitas
   - Buscar uma colheita pelo ID
   - Buscar colheitas pela data de criação
   - Atualizar uma colheita pelo ID
   - Deletar uma colheita pelo ID

## Pré-requisitos

Para interagir com a API, utilize um cliente para requisições HTTP, como Postman ou Insomnia, para testar os endpoints.

## Como utilizar

1. **Clonar o repositório:**  
   ```sh
   git clone https://github.com/josecavalcanti0521/colheita-facil.git
2. **Acessar a pasta do projeto:**  
   ```sh
   cd colheita-facil
1. **Instalar as dependências:**  
   ```sh
   npm install
1. **Iniciar o projeto:**  
   ```sh
   npm run dev


### Endpoints

- **Adicionar nova colheita:**
  - **Método:** `POST`
  - **Endpoint:** `/api/`
  - **Descrição:** Adiciona uma nova colheita ao banco de dados.

- **Listar todas as colheitas:**
  - **Método:** `GET`
  - **Endpoint:** `/api/`
  - **Descrição:** Retorna uma lista de todas as colheitas cadastradas.

- **Buscar colheita por ID:**
  - **Método:** `GET`
  - **Endpoint:** `/api/:id`
  - **Descrição:** Retorna os detalhes de uma colheita específica pelo seu ID.

- **Buscar colheita por data:**
  - **Método:** `GET`
  - **Endpoint:** `/api/:year/:month/:day`
  - **Descrição:** Retorna as colheitas realizadas em uma data específica (ano, mês, dia).

- **Deletar colheita por ID:**
  - **Método:** `DELETE`
  - **Endpoint:** `/api/:id`
  - **Descrição:** Remove uma colheita do banco de dados com base no seu ID.

- **Atualizar colheita por ID:**
  - **Método:** `PUT`
  - **Endpoint:** `/api/:id`
  - **Descrição:** Atualiza as informações de uma colheita específica pelo seu ID.
