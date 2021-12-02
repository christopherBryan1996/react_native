const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(morgan('dev'))
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.send('hola')
})

app.listen(3000,()=>{
    console.log('I am listen in port http://localhost:3000')
})