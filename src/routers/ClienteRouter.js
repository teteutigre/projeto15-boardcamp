import express from "express";
import {
  listarTodos,
  listarUnica,
  addCliente,
  atualizarCliente,
} from "../Controllers/ClienteControllers.js";
import ClienteValidation from "../middlewares/ClienteValidation.js";

const ClienteRouter = express.Router();

ClienteRouter.get("/customers", listarTodos);
ClienteRouter.get("/customers/:id", listarUnica);
ClienteRouter.post("/customers", ClienteValidation, addCliente);
ClienteRouter.put("/customers/:id", ClienteValidation, atualizarCliente);

export default ClienteRouter;
