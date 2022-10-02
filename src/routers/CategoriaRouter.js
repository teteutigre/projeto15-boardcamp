import express from "express";
import {
  listarCategoria,
  criarCategoria,
} from "../Controllers/CategoriaControllers.js";

const CategoriaRouter = express.Router();

CategoriaRouter.get("/categories", listarCategoria);
CategoriaRouter.post("/categories", criarCategoria);

export default CategoriaRouter;
