// Importando o model
import Game from "../models/Games.js"

class gameService{
    // todos os métodos ficam dentro da classe
    // método (serviço) para buscar todos os registros no banco
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

    // método para cadastrar um Game
    async Create(title, platform, year, price){
        // recebe as informações como parâmetros
        try{
            // usa a palavra new para criar uma instacia da classe game que ja existe
            const newGame = new Game({
                // DESESTRUTURAÇÃO, de colocar só titulo que ele tem que pegar o parametro e cadastrar ele, forma simplificada de (title : title)
                title,
                platform,
                year,
                price
            })
            // gravando no banco
            await newGame.save() // .save() -> método do mongoose para cadastrar no banco
            // await fica sempre antes da operação que será realizada no banco
        } catch (error){
            console.log(error)
        }
    }

    // MÉTODO PARA EXCLUIR UM JOGO
    async Delete(id){
        try{
            // excluindo o jogo pela ID
            await Game.findByIdAndDelete(id)
            console.log(`Game com a id: ${id} foi deletado.`)

        }catch(error){
            console.log(error)
        }
    }

    // método de alteração
    async Update(id, title, platform, year, price){
        try{
            await Game.findByIdAndUpdate(id, {
                title,
                platform,
                year,
                price
            })
            console.log(`O jogo com a ${id} foi alterado`)
        } catch(error){
            console.log(error)
        }
    }

}

// quando voce quer exportar uma classe voce utiliza new
// exportando classe
export default new gameService()