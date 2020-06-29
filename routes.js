const express = require('express')
const UserController = require('./controller/UserController')

const routes = express.Router()


routes.get('/', function(req, res){
    res.send('Olá mundo')
})

routes.get('/user/all', UserController.all)
routes.get('/user/:name/', UserController.findById)
routes.post('/user/create/:name/', UserController.create)
routes.patch('/user/update/:id/', UserController.update)
routes.delete('/user/delete/:id/', UserController.delete)



module.exports = routes