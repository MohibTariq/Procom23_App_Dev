import React from 'react';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import RegisteredCompetitions from '../screens/RegisteredCompetitions';
import {GeneralCompetitions, GamingCompetitions, CSCompetitions, EECompetitions, Competition, Sponsors, Main, Developer, Register } from '../screens';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation({navigation}) {
    return (
        <Drawer.Navigator
            backBehavior="history"
            screenOptions={ ({route}) => ({
                drawerActiveTintColor: "#110218",
                drawerActiveBackgroundColor: "white",
                drawerInactiveTintColor: "white",
                drawerPosition: "right",
                headerLeft: false,
                headerTitleStyle: {
                    height: route.name == "Main" ?  0 : 25,
                },
                headerTintColor: "white",
                headerStyle:{
                    backgroundColor: "#110218",
                    height: 100,
                },
                drawerStyle: {
                    backgroundColor: "#110218",
                },
                headerRight: () => <DrawerToggleButton tintColor='white' />,
                headerLeft: () => {
                    if(route.name == "Main"){
                        return <Image style={{width: 150, height: 50, margin: 20}} source={require('../assets/Logo.png')} />
                    }else{
                        return <Ionicons  name="chevron-back" size={22} style={{marginLeft: 10}} color="white" onPress={() => { navigation.goBack(); }}/>
                    }
                }
            })}
            useLegacyImplementation
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={Main} options={{ unmountOnBlur: true }} />
            <Drawer.Screen name="Registered Competitions" component={RegisteredCompetitions} options={{ unmountOnBlur: true }} />
            <Drawer.Screen name="Sponsors" component={Sponsors} options={{ unmountOnBlur: true }} />
            <Drawer.Screen name="Developers" component={Developer} options={{ unmountOnBlur: true }} />
            <Drawer.Screen name="Competition" component={Competition} options={{ unmountOnBlur: true, drawerItemStyle:{height: 0} }} />
            <Drawer.Screen name="General Competitions" component={GeneralCompetitions} options={{ unmountOnBlur: true, drawerItemStyle:{height: 0} }} />
            <Drawer.Screen name="CS Competitions" component={CSCompetitions} options={{ unmountOnBlur: true, drawerItemStyle:{height: 0} }} />
            <Drawer.Screen name="EE Competitions" component={EECompetitions} options={{ unmountOnBlur: true, drawerItemStyle:{height: 0} }} />
            <Drawer.Screen name="Gaming Competitions" component={GamingCompetitions} options={{ unmountOnBlur: true, drawerItemStyle:{height: 0} }} />
            <Drawer.Screen name="Register" component={Register} options={{ unmountOnBlur: true, drawerItemStyle:{height: 0} }} />
        </Drawer.Navigator>
);
}