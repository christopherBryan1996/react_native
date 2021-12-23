import React from "react";
import {TouchableOpacity,Text,Image} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Router from './stackaaarouter'
import Login from '../components/login'
import back from '../icons/caret-izquierda.png'
import AsyncStorage  from '@react-native-async-storage/async-storage';
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
const closebutton=(props)=>{
    return <TouchableOpacity  
        style ={{flexDirection:'row',marginRight:15, marginLeft:15}}
        onPress={()=>{ 
            AsyncStorage.clear()
            props.navigation.navigate('Login')
        }}
    >
        <Text style={{color:'white'}}>Log out</Text>
    </TouchableOpacity>
}
const userbutton=(props)=>{
    return <TouchableOpacity  
        style ={{flexDirection:'row',marginRight:15}}
        onPress={()=>{ 
            props.navigation.navigate('User')
        }}
    >
        <Text style={{color:'white'}}>User</Text>
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
                        headerShown:true,
                        headerTitleAlign:'center',
                        headerStyle:{
                            backgroundColor:'#6685a4'
                        },
                        headerTintColor:'white',
                        headerTitleStyle:{
                            fontWeight: 'bold'
                        },
                        headerLeft: ()=>closebutton(props),
                        headerRight: ()=>userbutton(props)
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
                <Stack.Screen
                    name="User"
                    component={Router.User}
                    options={(props)=>({
                        title:'User',
                        headerTitleAlign:'center',
                        headerStyle:{
                            backgroundColor:'#6685a4'
                        },
                        headerTintColor:'white',
                        headerTitleStyle:{
                            fontWeight: 'bold'
                        },
                        headerLeft: ()=>getbutton(props),
                        headerRight: ()=>closebutton(props)
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack