import React from "react";
import {TouchableOpacity,Text,Image} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Router from './stackaaarouter'
import Login from '../components/login'
import back from '../icons/caret-izquierda.png'
const Stack = createStackNavigator()
const getbutton=({navigation})=>{
    return <TouchableOpacity 
        style ={{flexDirection:'row'}}
        onPress={()=> navigation.goBack()}
    >
        <Image source={back} style={{width:20,height:20,tintColor:'white',marginLeft:15}}/>
        <Text style={{color:'white'}}>Back</Text>
    </TouchableOpacity>
}
function MyStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login" 
                    component={Login}
                    options={{
                        //header: recibe una function para personalizar el header,
                        title:'Screen', //para el titulo 
                        headerShown: false, //quita o pone el header
                        //headerRight: Button,
                        //headerLeft: Button,
                        //headerTitleAlign:'center'
                    }}
                    />
                <Stack.Screen 
                    name='Post'
                    component={Router.Post}
                    options={(props)=>({
                        headerShown:false,
                        headerTitleAlign:'center',
                        headerStyle:{
                            backgroundColor:'#6685a4'
                        },
                        headerTintColor:'white',
                        headerTitleStyle:{
                            fontWeight: 'bold'
                        },
                        headerLeft: ()=>getbutton(props)
                    })}
                    />
                <Stack.Screen 
                    name="CreateUser" 
                    component={Router.CreateUser}
                    options={(props)=>({
                        title:'Create User',
                        headerTitleAlign:'center',
                        headerStyle:{
                            backgroundColor:'#6685a4'
                        },
                        headerTintColor:'white',
                        headerTitleStyle:{
                            fontWeight: 'bold'
                        },
                        headerLeft: ()=>getbutton(props)
                    })}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack