import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Competition, Developer, Profile, Register, Signup, Update} from '../screens';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Signup"
            >
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Competition" component={Competition} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}