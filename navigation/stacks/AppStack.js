import React from 'react';
import DrawerNavigation from '../DrawerNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="App" component={DrawerNavigation} />
        </Stack.Navigator>
    );
}

export default AppStack;