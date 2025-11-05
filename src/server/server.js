import express from "express";
import mensagemRouter from "../routes/mensagemRouter.js";


const app = express()

app.use(express.json());
app.use("mensagens", mensagemRouter)

export default app;
