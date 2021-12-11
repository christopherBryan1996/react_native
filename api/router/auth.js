const express= require('express')
const router=express.Router()
const {user}=require('../database/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const{SEED,EXPIRATION}= require('../config')
const e = require('express')
router.get('/',(req,res)=>{
    user.findAll()
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})
router.post('/',(req, res)=>{
    const {email, password}= req.body
    user.findOne({where:{email:email}})
    .then(dato=>{
        if (dato){
            const passwordVali = bcrypt.compareSync(password,dato.password)
            if(!passwordVali){
                return res.status(400).json({
                    error:'Ok',
                    msj:'Usuario o contraseña icorrecta'
                })
            }else{
                const jwtoken = jwt.sign({
                    user:{id:dato.id,
                        email:dato.email,
                        phoneNumber:dato.phoneNumber,
                        displayName:dato.displayName,
                        photoURL:dato.photoURL}
                },SEED,{expiresIn:EXPIRATION})
                return res.json({
                    jwtoken
                })

            }
        }else{
            return res.status(400).json({
                error:'Ok',
                msj:'Usuario o contraseña icorrecta'
            })
        }
    })
    .catch(err=>{
        res.json({
            error:'ok',
            msj:'Error en el servicio'+ err
        })
    })
})

module.exports = router