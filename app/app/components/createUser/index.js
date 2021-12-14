import React ,{useState}from "react";
import {View,StyleSheet,Text,TextInput, TouchableOpacity} from 'react-native'
import axios from 'axios'

function CreateUser (props){
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [displayName, setdisplayName] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const user={email:email,
        phoneNumber:phoneNumber,
        password:password,
        displayName:displayName}
    async function onpresssave(){
        //cada ves que hagamos una peticion hay que poner 10.0.2.2 en ves de local host 
        const users= await axios.post('http://10.0.2.2:3000/api/user',user)
        console.log(users.data)
        setemail('')
        setpassword('')
        setdisplayName('')
        setphoneNumber('')
    }
    console.log(props.route.params.id)
    return (
        <View style={styles.conteiner}>
            <Text style={styles.title}>Name:</Text>
            <TextInput 
            style={styles.text}
            value={displayName}
            onChangeText={val=>setdisplayName(val)}
            />
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
            <Text style={styles.title}>Phone:</Text>
            <TextInput 
            style={styles.text}
            value={phoneNumber}
            onChangeText={val=>setphoneNumber(val)}
            />
            <TouchableOpacity style={styles.btn} onPress={onpresssave} >
                <Text style={styles.title}>Save</Text>
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

export default  CreateUser