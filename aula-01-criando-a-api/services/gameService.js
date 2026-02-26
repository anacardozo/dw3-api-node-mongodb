// Importando o model
import Game from "../models/Games.js"

class gameService{
    // método (sereviço) para buscar todos os registros no banco
    // funções assincronas são não bloqueantes
    async getAll(){
        // try trata o sucesso e catch o erro 
        try{
            // .find() -> método do mongoose paa buscar registros no banco
            const games = await Game.find()
            return games
        } catch(error) {
            console.log(error)
        }
    }
}

// quando voce quer exportar uma classe voce utiliza new
// exportando classe
export default new gameService()