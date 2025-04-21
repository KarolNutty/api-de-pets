Claro! Aqui está o `README.md` da sua API de Pets, já com todas as informações detalhadas e incluindo a menção ao repositório de testes automatizados. Você pode copiar e colar diretamente no arquivo `README.md` do seu repositório.

# API de Pets

Este repositório contém a **API de Pets** construída com **Node.js**, utilizando o framework **Express** e o banco de dados **SQLite**. A API permite realizar operações CRUD (Create, Read, Update, Delete) com dados de pets.

A API foi criada para ser um exemplo de backend simples, mas funcional, para gerenciamento de informações de pets, como nome, espécie e idade.

### Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript para back-end.
- **Express**: Framework web para Node.js, utilizado para criar as rotas da API.
- **SQLite**: Banco de dados relacional, utilizado para armazenar os dados dos pets.
- **Sequelize**: ORM (Object Relational Mapping) para facilitar a interação com o banco de dados.
  
### Funcionalidades da API

A **API de Pets** oferece as seguintes rotas:

- **GET** `/api/pets`: Retorna todos os pets cadastrados.
- **POST** `/api/pets`: Cria um novo pet.
- **PUT** `/api/pets/{id}`: Atualiza os dados de um pet existente.
- **DELETE** `/api/pets/{id}`: Deleta um pet.

Para testar a API, você pode utilizar o [repositório de testes automatizados](https://github.com/KarolNutty/playwright-gherkin-pets) que foi desenvolvido utilizando **Playwright** e **Gherkin**.

### Como Rodar a API

Siga os passos abaixo para rodar a API localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/KarolNutty/api-de-pets.git
   cd api-de-pets
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor**:
   Com tudo instalado, inicie a API com o seguinte comando:
   ```bash
   npm start
   ```

4. **Acesse a API**:
   A API estará disponível em `http://localhost:3000`. Você pode testar manualmente as rotas utilizando o **Postman** ou qualquer outra ferramenta para requisições HTTP.

### Exemplo de Requisição com Postman

#### Criar um Novo Pet (POST)
- **URL**: `http://localhost:3000/api/pets`
- **Método**: POST
- **Body** (JSON):
  ```json
  {
    "nome": "Rex",
    "especie": "Cachorro",
    "idade": 3
  }
  ```

#### Listar Pets (GET)
- **URL**: `http://localhost:3000/api/pets`
- **Método**: GET

#### Atualizar um Pet (PUT)
- **URL**: `http://localhost:3000/api/pets/{id}`
- **Método**: PUT
- **Body** (JSON):
  ```json
  {
    "nome": "Max",
    "especie": "Cachorro",
    "idade": 4
  }
  ```

#### Deletar um Pet (DELETE)
- **URL**: `http://localhost:3000/api/pets/{id}`
- **Método**: DELETE

### Como Testar a API com Testes Automatizados

Caso queira automatizar os testes da API, você pode usar o repositório de testes [Playwright e Gherkin para Pets](https://github.com/KarolNutty/playwright-gherkin-pets), que inclui testes de integração automatizados com **Cucumber** e **Playwright**.

Para rodar os testes, siga os passos abaixo:

1. **Clone o repositório de testes**:
   ```bash
   git clone https://github.com/KarolNutty/playwright-gherkin-pets.git
   cd playwright-gherkin-pets
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute os testes**:
   Com a API de Pets rodando, execute os testes com:
   ```bash
   npm test
   ```

   Isso irá garantir que todas as funcionalidades da API estejam funcionando corretamente.

### Conclusão

A **API de Pets** é uma API simples para gerenciar informações sobre pets, construída para fins de aprendizado e testes. Ao combinar com o repositório de testes automatizados, você pode garantir que a API esteja funcionando como esperado ao longo do tempo.

Se você tiver alguma dúvida ou sugestão, fique à vontade para abrir uma **issue** ou **pull request**. 😊


