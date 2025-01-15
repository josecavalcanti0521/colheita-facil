# Colheita-Fácil

Este projeto consiste em uma API para criar, ler, alterar e deletar dados de colheitas de frutas de uma fazenda.

## Tecnologias Utilizadas

1. **JavaScript**:
   - Linguagem de programação principal usada para desenvolver toda a lógica da API.

2. **Node.js**:
   - Ambiente de execução JavaScript que permite executar código JavaScript no lado do servidor.

3. **Express**:
   - Framework para Node.js que facilita a criação de aplicativos web e APIs, fornecendo uma série de funcionalidades robustas para gerenciar rotas, middleware e solicitações HTTP.

4. **SQLite**:
   - Banco de dados leve utilizado para armazenar os dados das colheitas. Escolhido por sua simplicidade e facilidade de uso, ideal para projetos de menor escala.

5. **Sequelize**:
   - ORM (Object-Relational Mapping) para Node.js, que facilita a interação com bancos de dados SQL. Permite definir modelos e realizar operações de CRUD (Create, Read, Update, Delete) de forma mais intuitiva.

6. **dotenv**:
   - Biblioteca que carrega variáveis de ambiente a partir de um arquivo `.env` para dentro de `process.env`. Isso ajuda a manter configurações sensíveis, como senhas de banco de dados e chaves de API, fora do código-fonte.

7. **nodemon**:
   - Ferramenta que monitoriza mudanças nos arquivos da aplicação e reinicia automaticamente o servidor Node.js quando uma alteração é detectada. Facilita o desenvolvimento, eliminando a necessidade de reiniciar manualmente o servidor após cada mudança.

## Como Usar

Para usar a API, é necessário um programa para teste de endpoints, como o Postman ou Insomnia.

### Rotas

- `POST /api/add`: Adiciona uma nova colheita.
- `GET /api/gets`: Retorna todas as colheitas.
- `DELETE /api/del/:id`: Deleta uma colheita pelo ID.
- `PUT /api/upd/:id`: Atualiza uma colheita pelo ID.
