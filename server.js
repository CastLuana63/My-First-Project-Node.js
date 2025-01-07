import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";
// import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

// const database = new DatabaseMemory();
const database = new DatabasePostgres();
// CRUD NODE: GET, POST, PUT, DELETE, PATCH

server.post("/videos", async (request, reply) => {
  const { title, description, duration } = request.body; // Corrigido: body está dentro de request

  await database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send(); // Status 201 para indicar criação bem-sucedida
});

server.get("/videos", async (request) => {
  const search = request.query.search;
  const videos = await database.list(search);
  return videos; // Retorna os vídeos no formato JSON
});

server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;

  database.delete(videoId);

  return reply.status(204).send();
});

server.listen({
  host: "0.0.0.0",
  port: process.env.PORT ?? 6364,
});
