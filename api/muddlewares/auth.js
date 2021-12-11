const jwt = require('jsonwebtoken')
const{SEED}=require('../config')

let verificartoke =(req,res,next)=>{
    let token = req.get('Authorizacion')
    jwt.verify(token,SEED,(err,decoded)=>{
        if(err){
            return res.status(401).json(err)
        }
        next()
    })
}
module.exports = verificartoke