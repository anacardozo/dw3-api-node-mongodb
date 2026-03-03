import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    title: String,
    platform: String,
    year: Number,
    price: Number
})

const Game = mongoose.model('Game', gameSchema) // nome da coleção que eu quero criar no meu banco ('Game')

export default Game;