const express = require('express')
const router =  express.Router()
const {user}= require('../database/db')
const {v4:uuidv4}= require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const verificartoke =require('../muddlewares/auth')
const{SEED} =require('../config')

router.get('/',verificartoke,(req,res)=>{
    user.findAll()
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})

router.post('/',async(req,res)=>{
    const {email,phoneNumber,password,displayName,photoURL} = req.body
    const existencia= await user.findAll({
        where:{email:email}
    })
    if(existencia.length>0){
        res.status(400).json({msg:'Ya exixte el usuario'})
    }else{
        try {
            await user.create({
                id:uuidv4(),
                email:email,
                phoneNumber:phoneNumber,
                password:bcrypt.hashSync(password,10),
                displayName:displayName,
                photoURL:photoURL
            })
            res.json({msg:'agregado'})
        } catch (error) {
            res.status(500).json({'error':error})
        }

    }
})
router.post('/status',(req,res)=>{
    const {token} = req.body
    jwt.verify(token,SEED,(err,decoder)=>{
        if(err){
            return res.json({status:false})
        }
        if(decoder){
            return res.json({status:true})
        }
        
        console.log(decoder)
    })
    
})

module.exports= router