// utiliza os serviços
// importando o service
// O controller trata a requisição
import gameService from "../services/gameService.js";
// importando o objectID
import {ObjectId} from 'mongodb'

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

// função para deletar um jogo
const deleteGame = async (req,res) => {
    try{
        // o ID ta vindo da URL então usamos o params
        const id = req.params.id
        // validação do ID
        if(ObjectId.isValid(id)){
            await gameService.Delete(id)
            res.status(204).json({message: 'O jogo foi excluido com sucesso!'})
            // Cod. 204 (NO CONTENT)
        } else{
            res.status(400).json({error: 'Ocorreu um erro na validação da ID'})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({error: 'Erro interno no servidor. Não foi possível deletar o jogo'})
    }
}

const updateGame = async (req,res) => {
    try{

        const id = req.params.id
        if(ObjectId.isValid(id)){
            const {title, platform, year, price} = req.body
            await gameService.Update(id, title, platform, year, price)
            res.status(200).json({messsage: 'Jogo alterado com sucesso'})
        }
        else{
            res.status(400).json({error: 'Ocorreu um erro na validação da ID'})
        }
    } catch(error){
        console.log(error)
        res.status(500).json({error: 'Erro interno no servidor. Não foi possível alterar o jogo'})
    }
}

// exportando a função
export default {getAllGames, createGame, deleteGame, updateGame}