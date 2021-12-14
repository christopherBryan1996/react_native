import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native'
import axios from "axios";

function Login(props){
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const login ={
        password,
        email
    }
   async function onpresslogin(){
       try {
           //const respuesta=await (await axios.post('http://10.0.2.2:3000/api/auth',login)).data
           //console.log(respuesta.jwtoken)
           props.navigation.navigate('CreateUser', {id:'1'})
           setemail('')
           setpassword('')
       } catch (error) {
            console.log('no')
       }
        
    }
    
    return (
        <View style={styles.conteiner}>
            <View style={styles.subconteier}>
                <Image 
                    style={styles.img}
                    //source={{uri:'https://i.pinimg.com/originals/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg'}}
                    source={{ uri: "https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png" }}
                />
            </View>
            <View style={styles.subconteier}>
                <Text style={styles.title}>Email:</Text>
                <TextInput 
                style={styles.text}
                value={email}
                onChangeText={val=>setemail(val)}
                />
                <Text style={styles.title}>Password:</Text>
                <TextInput 
                secureTextEntry//para esconder el password
                style={styles.text}
                value={password}
                onChangeText={val=>setpassword(val)}
                />
                <TouchableOpacity style={styles.btn} 
                onPress={onpresslogin} 
                >
                    <Text style={styles.title}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    conteiner :{
        flex: 1,
        backgroundColor:'#34495e',
        paddingVertical:20,
        paddingHorizontal:30,
    },
    subconteier:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    title:{
        color: '#fff',
        fontSize:16,
        fontWeight:'bold',
        marginVertical:10,
    },
    text:{
        borderWidth: 1,
        borderColor:'#fff',
        height:45,
        width:'100%',
        paddingHorizontal:10,
        color: 'white'
    },
    btn:{
        borderWidth: 1,
        borderColor:'#fff',
        height:45,
        width:'100%',
        marginTop:50,
        justifyContent:"center",
        alignItems:"center"
    },
    img:{
        width: 140, 
        height: 140,
        tintColor:'white',
    }
})

module.exports= Login