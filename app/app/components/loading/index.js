import React from "react";
import {StyleSheet, ActivityIndicator,View} from 'react-native'

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'white'
    }
})

function Loading({loadig, children}){
    
    if(loadig){console.log('dentro')
        return (
            <View>
                <ActivityIndicator size='large' color='white'/>
            </View>
        )
    }
    return children
}

export default Loading