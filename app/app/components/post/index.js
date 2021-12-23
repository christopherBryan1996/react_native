import React ,{useState,useEffect} from "react";
import {StyleSheet,View,Text,FlatList,Image, Modal,TouchableOpacity} from 'react-native'
import axios from "axios";
import imageX from '../../icons/boton-x.png'

function Post(){
    const [arr, setarr] = useState([])
    const [dta, setdta] = useState([])
    const [counter, setcounter] = useState(0)
    const [refreshing, setrefreshing] = useState(true)
    const [modal, setmodal] = useState(false)
    const [detail, setdetail] = useState([])
    const getData=()=>{
        const end =counter+5
        const slice=dta.slice(counter,end)
        setarr([...arr,...slice])
        setcounter(end)
    }
    useEffect(() => {
        cargaData()
        const end =counter+5
        //console.log('entre') 
        const slice=dta.slice(counter,end)
        setarr(slice)
        setcounter(end)
    }, [])
    async function cargaData(){
        try {
            const arrda=await axios.get('https://rickandmortyapi.com/api/character')
            //console.log('soy',arrda)
            setdta(arrda.data.results)
        } catch (error) {
            console.log(error)
        }
    }
    //console.log('soy data',dta)
    return(
        <View style={styles.conteiner}>
            <FlatList
                data={dta}
                renderItem={({item,index})=>{
                    //{console.log(item.image)}
                    return (
                        <View>
                        <Text style={styles.text}>{item.name}</Text>
                        <Image style={styles.img} source={{uri:item.image}}/>
                        <TouchableOpacity
                            onPress={()=>{
                                setmodal(true)
                                setdetail(item)
                            }}
                            
                        >
                            <Text style={styles.text}>
                                details
                            </Text>
                        </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                visible={modal}
                                transparent
                            >
                                <View style={{
                                        flex:1,
                                        backgroundColor:'rgba(1,1,1,0.5)',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}>
                                    <View
                                        style={{height:'80%',width:'90%', backgroundColor:'white'}}
                                    >
                                        <View
                                            style={{
                                                height:45,
                                                width:'100%',
                                                flexDirection:'row',
                                                alignItems:'center',
                                                justifyContent:'flex-end',
                                                paddingHorizontal:10
                                            }}
                                        >
                                            <TouchableOpacity
                                                onPress={()=>setmodal(false)}
                                            >
                                                <Image 
                                                    source={imageX}
                                                    style={{height:25,width:25}}    
                                                />
                                            </TouchableOpacity>
                                        </View >
                                            <View
                                                style={{alignItems:'center', justifyContent:'center'}}
                                            >
                                                <Text style={styles.text2}>Name:{detail.name}</Text>
                                                <Image style={styles.img} source={{uri:detail.image}}/>
                                                <Text style={styles.text2}>Species:{detail.species}</Text>
                                                <Text style={styles.text2}>Gender :{detail.gender}</Text>
                                                <Text style={styles.text2}>Status :{detail.status}</Text>
                                                <Text style={styles.text2}>Type :{detail.type}</Text>
                                            </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    )
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
    },
    text2:{
        color: 'black',
        fontSize:16,
        fontWeight:'bold',
        marginVertical:10,  
    }
})

export default Post