# NodeProject1 - Servidor Node.js com Fastify, NeonDB e PostgreSQL

Este projeto é um servidor Node.js utilizando Fastify, NeonDB e PostgreSQL para realizar operações CRUD em uma base de vídeos.

## 📌 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [NeonDB](https://neon.tech/)
- [PostgreSQL](https://www.postgresql.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [pg](https://node-postgres.com/)
- [crypto (randomUUID)](https://nodejs.org/api/crypto.html)

---

## 🚀 Como Executar o Projeto

### 1️⃣ Pré-requisitos
Antes de começar, é necessário ter instalado em sua máquina:
- Node.js (versão recomendada: 18+)
- PostgreSQL configurado e rodando
- NeonDB configurado

### 2️⃣ Clonar o Repositório
```sh
git clone https://github.com/seu-usuario/nodeproject1.git
cd nodeproject1
```

### 3️⃣ Instalar as Dependências
```sh
npm install
```

### 4️⃣ Configurar as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e adicione sua URL do banco de dados PostgreSQL (NeonDB):
```
DATABASE_URL=seu_link_do_neondb
PORT=6364
```

### 5️⃣ Executar o Projeto

Para rodar o servidor em modo desenvolvimento:
```sh
npm run dev
```

Para rodar o servidor em modo produção:
```sh
npm start
```

O servidor estará rodando em: `http://localhost:6364`

---

## 📌 Endpoints Disponíveis

### Criar um novo vídeo (POST)
```http
POST http://localhost:6364/videos
Content-Type: application/json

{
    "title": "video node",
    "description": "Este é o video 01",
    "duration": 180
}
```

### Listar todos os vídeos (GET)
```http
GET http://localhost:6364/videos?search=
```

### Atualizar um vídeo por ID (PUT)
```http
PUT http://localhost:6364/videos/:id
Content-Type: application/json

{
    "title": "EDITAR TITULO",
    "description": "EDITAR DESCRIPTION",
    "duration": 180
}
```

### Deletar um vídeo por ID (DELETE)
```http
DELETE http://localhost:6364/videos/:id
```

---

## 📂 Estrutura do Projeto
```
nodeproject1/
├── db.js                 # Configuração do banco de dados
├── server.js             # Configuração do servidor Fastify
├── database-memory.js    # Implementação da base de dados em memória
├── database-postgres.js  # Implementação da base de dados PostgreSQL
├── package.json          # Dependências e scripts
├── .env                  # Variáveis de ambiente
└── README.md             # Documentação do projeto
```

---

## 🛠️ Funcionalidades
✔️ Criar um novo vídeo com título, descrição e duração  
✔️ Listar vídeos cadastrados  
✔️ Atualizar informações de um vídeo  
✔️ Excluir um vídeo  
✔️ Utilização de banco de dados PostgreSQL (NeonDB)  

---

## 📝 Licença
Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo conforme necessário.

---

## ✨ Contato
Caso tenha dúvidas ou sugestões, sinta-se à vontade para entrar em contato!
📧 Email: luanamanuelle63@gmail.com  
📌 GitHub: CastLuana63@ 

