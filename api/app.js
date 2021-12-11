const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./database/db')
const user =  require('./router/user') 
const auth= require('./router/auth')

app.use(morgan('dev'))
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/user',user)
app.use('/api/auth',auth)

app.listen(3000,()=>{
    console.log('I am listen in port http://localhost:3000')
    sequelize.authenticate()
    .then(()=>console.log('Connected in the database'))
    .catch((err)=>console.log(err))
    sequelize.sync({force:false}).then(()=>console.log('creadas las tablas'))
    .catch(error=> console.log(error))
})