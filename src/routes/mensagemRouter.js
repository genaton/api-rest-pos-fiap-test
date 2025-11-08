import express from "express";
// import mensagemController  from "../controllers/mensagemController.js"
import { mensagemController }  from "../controllers/index.js"


const mensagemRouter = express.Router();

mensagemRouter.get("/:id", mensagemController.buscar.bind(mensagemController));

mensagemRouter.post("/", mensagemController.registrar.bind(mensagemController));

mensagemRouter.put("/:id", mensagemController.atualizar.bind(mensagemController));

mensagemRouter.delete("/:id", mensagemController.eliminar.bind(mensagemController));


export default mensagemRouter;


