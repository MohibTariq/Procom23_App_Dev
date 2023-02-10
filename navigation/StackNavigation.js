import React, { useEffect, useState } from 'react';
import { AuthStack, AppStack } from './stacks';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

export default function StackNavigator() {
    const user = useSelector((store) => store.user.user)

    return <NavigationContainer>
            {
                user ? <AppStack /> : <AuthStack />
            }
        </NavigationContainer>
}