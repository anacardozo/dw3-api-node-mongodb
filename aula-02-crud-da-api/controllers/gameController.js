// utiliza os serviços
// importando o service
// O controller trata a requisição
import gameService from "../services/gameService.js";

// função para tratar a requisição de Listar os jogos

const getAllGames = async (req,res) => {
    try{
        // ta chamando o game service e usando a função getAll para puxar todos os dados do banco
        const games = await gameService.getAll()
        res.status(200).json({games: games})
        // cod.200 OK -> requisição feita com sucesso
    } catch (error) {
        console.log(error)
        res.status(500).json({errror: 'Erro interno do servidor. Não foi possível listar os jogos.'})
    }
}

// função para tratar a requisição de cadastrar um jogo

const createGame = async (req,res) => {
    try{
        // DESESTRUTURAÇÃO
        // CONST TITLE
        const {title, platform, year, price} = req.body // coletando os dados do corpo da requisição
        await gameService.Create(title, platform, year, price)
        res.status(201).json({message: 'O jogo foi cadastrado com sucesso'})
    } catch(error){
        console.log(error)
        res.status(500).json({error: 'Erro interno no servidor. Não foi possível cadastrar o jogo.'})
    }
}

// exportando a função
export default {getAllGames, createGame}