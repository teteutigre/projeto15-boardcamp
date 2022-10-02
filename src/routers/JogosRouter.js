import express from "express";
import { Jogos, NovoJogo } from "../Controllers/JogosControllers.js";

const JogosRouter = express.Router();

JogosRouter.get("/games", Jogos);
JogosRouter.post("/games", NovoJogo);

export default JogosRouter;
