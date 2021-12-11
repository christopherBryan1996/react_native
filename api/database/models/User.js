const {DataTypes}=require('sequelize')

module.exports = (sequelize)=>{
    return sequelize.define('user',{
        id:{
            type: DataTypes.STRING,
            unique:true,
            primaryKey:true,
            allowNull:false,
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            validate:{
                isEmail:{
                    args: true,
                    msg: 'it must be a valid email',
                }
            }
        },
        emailVerified:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        phoneNumber:{
            type:DataTypes.BIGINT(10),
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
        displayName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'The field cannot be null'
                },
                isAlpha:{//solo letras
                    args:true,
                    msg: 'The name can only contain letters'
                }, 
                len:{ //tamaño 
                    args: [3,255],
                    msg: 'The name must contain more than 3 characters'
                }
            }
        },
        photoURL:{
            type: DataTypes.STRING,
            defaultValue:'https://i.makeagif.com/media/11-05-2015/7-wFhQ.gif'
        },
        disabled:{
            type: DataTypes.BOOLEAN,
            defaultValue:false,
        },
    })
}