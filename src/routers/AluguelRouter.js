import express from "express";
import {
  ListaAluguel,
  AddAluguel,
  RetornarAluguel,
  DeletarAluguel,
} from "../Controllers/AluguelControllers.js";

const AluguelRouter = express.Router();

AluguelRouter.get("/rentals", ListaAluguel);
AluguelRouter.post("/rentals", AddAluguel);
AluguelRouter.post("/rentals/:id/return", RetornarAluguel);
AluguelRouter.delete("/rentals/:id", DeletarAluguel);

export default AluguelRouter;
