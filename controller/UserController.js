const con = require("../database/connection");

module.exports = {

    async all(req, res){
        await con('user')
        .then(users =>{
            return res.status(200).json({ users }) 
        })
        .catch(erro => {
            return res.status(500).json({message:'não foi possivel executar a operação!'})
        })
    },

    async findById(req, res){
        const id = req.params.name
        await con('user').where({id})
       .first()
       .then(user =>{
           if(user){
                return res.status(200).json({ user }) 
           }else{
                return res.status(404).json({message:'registro não encontrado!'})
           }
       })
       .catch(erro =>{
           return res.status(500).json({message:'não foi possivel executar a operação!'})
       })
    },

    async create(req, res) {
        name = req.params.name
        await con('user').insert({name})
        .then(user =>{
            return res.status(200).json({ user })
        }).catch(erro =>{
            return res.status(500).json({message:'não foi possivel executar a operação!'})
        })
        
    },

    async update(req,res){
        const id = req.params.id
        const changes = req.body
        await con('user').where({id})
        .update(changes)
       .then(user =>{
           if(user){
                return res.status(200).json({message:'usuário atualizado com sucesso!'}) 
           }else{
                return res.status(404).json({message:'registro não encontrado!'})
           }
       })
       .catch(erro =>{
           return res.status(500).json({message:'não foi possivel executar a operação!'})
       })
    },

    async delete(req, res) {
        id = req.params.id
        await con('user').where({id})
        .del()
        .then(count => {
            if(count > 0){
                return res.status(200).json({message:'usuário deletado com sucesso!'})
            }else{
                return res.status(404).json({message:'registro não encontrado!'})
            }
        })
        .catch(function(error) {
            return res.satatus(500).json({message:'não foi possivel executar a operação!'})  
        })
    }
}