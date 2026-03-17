import userService from "../services/userService.js";

// Função para cadastrar o usuário
const createUser = async(req,res) => {
    try{
        // coletando os dados
        const {name,email,password} = req.body
        // enviando para cadastrar
        await userService.Create(name,email,password)
        // retornando uma resposta
        res.status(201).json({message: 'Usuário cadastrado com sucesso'})
        // COD.201 - created
    }catch(error){
        res.status(500).json({error: 'Não foi possível cadastrar o usuário. Erro interno do servidor'})
    }
}

export default {createUser}