import React from 'react';
import { Login, SetProfile } from '../../screens';
import AppStack from './AppStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Login"
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SetProfile" component={SetProfile} />
        </Stack.Navigator>
    );
}

export default AuthStack;