import mongoose from "mongoose";

const gameChema = new mongoose.Schema({
    title: String,
    platform: String,
    year: Number,
    price: Number
})

const Game = mongoose.model('Game', gameChema) // nome da coleção que eu quero criar no meu banco ('Game')

export default Game;