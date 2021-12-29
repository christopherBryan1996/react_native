import React,{useState} from "react";
import {View, StyleSheet, Text,TouchableOpacity, Image} from 'react-native'
import {launchCamera, } from 'react-native-image-picker'
import Cryptor from 'crypto-js'
import axios from "axios";


function User(){
    
    const [imagen, setimagen] = useState('https://i.makeagif.com/media/11-05-2015/7-wFhQ.gif')
    function imageinput(){
        const options={
            storageOptions:{
                path:'images',
                medioType:'photo'
            },
            includeBase64:true
        }
        launchCamera(options, response=>{
            const {uri,type,fileName}= response.assets[0]
            //console.log(valor.map(va=>{const {}=va}))
            //console.log(response)
            //console.log(uri,type,fileName)
            const photo={uri,type,name:fileName}
            const ts= Math.round((new Date()).getTime()/1000)
            const apiKey ='8616319322258510'
            const apiSecret='Q48kDZolqWrddPKNNZxxiHchtUMl'
            const hash=`timestamp=${ts}${apiSecret}`
            const signature= Cryptor.SHA1(hash).toString();
            const url='https://api.cloudinary.com/v1_1/durx2k5cc4/image/upload'

            const formData = new FormData()
            formData.append('file',photo)
            formData.append('timestamp',ts)
            formData.append('api_key',apiKey)
            formData.append('signature',signature)
            
            console.log(formData)

            axios.post(url,formData)
            //.then(res=>res.json())
            .then(res=>console.log(res))
            .catch(err=>console.log(err))

            setimagen(uri)
        })
        //nos ayuda a usar la camara 
        //ImagePicker.launchCamera();
        //nos ayuda a buscar e galeria 
        //ImagePicker.launchImageLibrary();
    }
    return(
        <View style={styles.conteiner}>
            <TouchableOpacity
                onPress={imageinput}
            >
                <Text style={styles.text}>Show</Text>
            </TouchableOpacity>
            <Image
                source={{uri:imagen}}
                style={{height:150, width:150,borderRadius:100}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#34495e',
        paddingVertical:20,
        paddingHorizontal:30,
        alignItems:'center'
    },
    text:{
        color: '#fff',
        fontSize:16,
        fontWeight:'bold',
        marginVertical:10,  
    },
    text2:{
        color: 'black',
        fontSize:16,
        fontWeight:'bold',
        marginVertical:10,  
    }
})

export default User