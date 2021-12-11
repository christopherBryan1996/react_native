const express = require('express')
const router =  express.Router()
const {user}= require('../database/db')
const {v4:uuidv4}= require('uuid')
const bcrypt = require('bcrypt')
const verificartoke =require('../muddlewares/auth')

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
        res.json({msg:'Ya exixte el usuario'})
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


module.exports= router