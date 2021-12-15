import React ,{useState,useEffect} from "react";
import {StyleSheet,View,Text,FlatList,Image} from 'react-native'
import axios from "axios";

function Post(){
    const [arr, setarr] = useState([])
    const [dta, setdta] = useState([])
    const [counter, setcounter] = useState(0)
    const [refreshing, setrefreshing] = useState(true)
    const getData=()=>{
        const end =counter+5
        const slice=dta.slice(counter,end)
        setarr([...arr,...slice])
        setcounter(end)
    }
    useEffect(() => {
        cargaData()
        const end =counter+5
        const slice=dta.slice(counter,end)
        setarr(slice)
        setcounter(end)
    }, [])
    async function cargaData(){
        const arrda=await axios.get('https://rickandmortyapi.com/api/character')
        setdta(arrda.data.results)
    }
    return(
        <View style={styles.conteiner}>
            <FlatList
                data={arr}
                renderItem={({item,index})=>{
                    {console.log(item.image)}
                    return (<View>
                    <Text style={styles.text}>{item.name}</Text>
                    <Image style={styles.img} source={{uri:item.image}}/>
                    </View>)
                }}
                showsVerticalScrollIndicator={false}//para quitar la linea
                ListEmptyComponent={()=>{
                    return (
                        <View>
                            <Text style={styles.text}>
                                Empty
                            </Text>
                        </View>
                    )
                }}
                onEndReached={getData}
                refreshing={refreshing}
                
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
    img:{
        width:170,
        height:170
    },
    text:{
        color: '#fff',
        fontSize:16,
        fontWeight:'bold',
        marginVertical:10,  
    }
})

export default Post