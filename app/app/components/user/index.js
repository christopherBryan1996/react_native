import React,{useState} from "react";
import {View, StyleSheet, Text,TouchableOpacity, Image} from 'react-native'
import {launchCamera, } from 'react-native-image-picker'

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
            const valor= response.assets[0].uri
            //console.log(valor.map(va=>{const {}=va}))
            //console.log(response)
            console.log(valor)
            setimagen(valor)
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