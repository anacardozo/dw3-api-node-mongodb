import express from 'express';
import gameController from '../controllers/gameController.js';
import { model } from 'mongoose';
// importando o express para conseguir utilizar o route
const gameRoutes = express.Router()

// Na camada de routes é armazenado os ENDPOINTS (URLs da API)

// Endpoint para listar todos os games
gameRoutes.get("/games", gameController.getAllGames)

// endpoint para cadastrar um game
gameRoutes.post("/games", gameController.createGame)

// endpoint para excluir um game
gameRoutes.delete("/games/:id", gameController.deleteGame)

gameRoutes.put("/games/:id", gameController.updateGame)

gameRoutes.get("/games/:id", gameController.getOneGame)

export default gameRoutes;

// gravar hierarquia das camadas

// o service é usado no controller
// o controller é usado no routes

// model
// service manipula o banco de dados
// controller trata a requisicao
// routes