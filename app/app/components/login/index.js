import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import axios from "axios";

function Login(){
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const login ={
        password,
        email
    }
   async function onpresslogin(){
       try {
           const respuesta=await (await axios.post('http://10.0.2.2:3000/api/auth',login)).data
           console.log(respuesta.jwtoken)
       } catch (error) {
            console.log('no')
       }
        
    }
    
    return (
        <View style={styles.conteiner}>
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
    )
}
const styles = StyleSheet.create({
    conteiner :{
        flex: 1,
        backgroundColor:'#34495e',
        paddingVertical:20,
        paddingHorizontal:30,
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
        marginTop:100,
        justifyContent:"center",
        alignItems:"center"
    }
})

module.exports= Login