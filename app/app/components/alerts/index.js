import {Alert} from 'react-native'
export const nameValidet=()=>{
    Alert.alert(
        'Name',
        'The name must be greater than 3 characters and less than 15',
        [
            {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
            },
        ]
      )
}
export const emailValidet=()=>{
    Alert.alert(
        'Email',
        'Place your email correctly',
        [
            {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
            },
        ]
      )
}
export const passwordValidet=()=>{
    Alert.alert(
        'Password',
        'enter a password of at least 6 characters',
        [
            {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
            },
        ]
      )
}
export const phoneValidet=()=>{
    Alert.alert(
        'Phone',
        'enter a correct cell number',
        [
            {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
            },
        ]
      )
}
export const existeEmail=()=>{
    Alert.alert(
        null,
        'this email exists',
        [
            {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
            },
        ]
      )
}
export const loginError=()=>{
    Alert.alert(
        'Email or password was not correct',
        null,
        [
            {
                text:'Cancel',
                
                style:'cancel'
            }
        ]
    )
}