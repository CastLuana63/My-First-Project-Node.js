import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import http from "http";

dotenv.config();

// Configuração do banco de dados
export const sql = neon(process.env.DATABASE_URL);

// Configuração do servidor HTTP
const requestHandler = async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`PostgreSQL Version: ${version}`);
};

// Inicia o servidor
http.createServer(requestHandler).listen(6465, () => {
  console.log("Server running at http://localhost:3000");
});
