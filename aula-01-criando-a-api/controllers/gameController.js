// utiliza os serviços
// importando o service
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
        res.status(500).json({errror: 'Erro interno do servidor'})
    }
}

// exportando a função
export default {getAllGames}