const {Sequelize} = require('sequelize')
const {PASSWOR_DB,DATABASE,USERNAME_DB,LOCALHOST_DB}= require('../config')
const User = require('./models/User')
//conectamos a la base de datos 
const sequelize = new Sequelize(DATABASE, USERNAME_DB, PASSWOR_DB, {
    host: LOCALHOST_DB,
    dialect: 'mysql',
    logging:false 
});

//conectamos y creamos el modelo 
User(sequelize)

//saco el modelo 
const {user} = sequelize.models


module.exports = {sequelize,...sequelize.models}