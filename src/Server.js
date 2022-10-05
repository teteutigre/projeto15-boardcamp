import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import CategoriaRouter from "./routers/CategoriaRouter.js";
import JogosRouter from "./routers/JogosRouter.js";
import ClienteRouter from "./routers/ClienteRouter.js";
import JogosRouter from "./routers/JogosRouter.js";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(CategoriaRouter);
server.use(JogosRouter);
server.use(ClienteRouter);
server.use(JogosRouter);

server.listen(process.env.BACKEND_PORT, () => {
  console.log(`Server is listening on port ${process.env.BACKEND_PORT}.`);
});
