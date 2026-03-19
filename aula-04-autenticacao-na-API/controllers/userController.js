import userService from "../services/userService.js";
// Importando o JWT
import jwt from "jsonwebtoken";

const JWTSecret = 'thegames-secret'

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

// Função para autenticar um usuário (Função de login)

const loginUser = async (req,res) => {
    try{
        const {email, password} = req.body
        // validações
        // 1° - Se o email existe
        if(email != undefined){
            // buscando o usuario no banco
            const user = await userService.getOne(email)
            // se o usuario foi encontrado
            if (user != undefined){
                // verificando se a senha esta correta
                if(user.password == password){
                    // criar o token
                    jwt.sign({id: user._id, email: user.email}, JWTSecret,{
                        expiresIn: '48h'}, (error, token) => {
                            // falha
                            if(error){
                                res.status(400).json({error: 'Não foi possível gerar o token.'})
                                // sucessso
                            }else{
                                res.status(200).json({message:'Login realizado com sucesso', token:token})
                            }
                        })
                }else{
                    res.status(500).json({error: 'Senha incorreta'})
                }
            }else{
                    res.status(500).json({error: 'Usuario não encontrado'})
                }
        }else{
                    res.status(500).json({error: 'Email invalido'})
                }

    }catch(error){
        res.status(500).json({error: 'Não foi possível realizar o login.Erro interno do servidor'})
    }
}

export default {createUser, loginUser}