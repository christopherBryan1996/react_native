import React from "react";
import {TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Router from './stackaaarouter'
import Login from '../components/login'
const Stack = createStackNavigator()
const Button=()=>{
    return <TouchableOpacity 
        style ={{width:40, height:45, backgroundColor:'red'}}
        onPress={()=> console.log('Hola')}
    />
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
                <Stack.Screen name="CreateUser" component={Router.CreateUser}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack