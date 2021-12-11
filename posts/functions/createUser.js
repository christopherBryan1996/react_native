const admin = require('firebase-admin')
module.exports = function(req,res){
    //res.status(200).send(req.body)
    //validar campos 
    const {email,phoneNumber,password,displayName} = req.body
    if(!email) return res.status(400).send({err:'No se ha enviado un email'})
    if(!phoneNumber) return res.status(400).send({err:'No se ha enviado un numero telefonico'})
    if(!password) return res.status(400).send({err:'No se ha enviado una contraseña'})
    if(!displayName) return res.status(400).send({err:'No se ha enviado un nombre de usuario'})
    //crear usuario 
    admin
  .auth()
  .createUser({
    email,
    emailVerified: false,
    phoneNumber,
    password,
    displayName,
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
  })
  .then((user) => res.status(200).send(user))
  .catch((error) => res.status(501).send({err:'algo salio mal',error}));
}