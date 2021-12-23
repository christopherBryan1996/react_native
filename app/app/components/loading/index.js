import React from "react";
import {StyleSheet, ActivityIndicator,View} from 'react-native'

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})

function Loading({loadig, children}){
    
    if(loadig){//console.log('dentro')
        return (
            <View style={styles.conteiner}>
                <ActivityIndicator size='large' color='red'/>
            </View>
        )
    }
    return children
}

export default Loading