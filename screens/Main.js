import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Explore from "./Explore";
import Cart from "./Cart";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Main({navigation}) {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomeScreen") {
              iconName = focused ? "home" : "home-outline";
              return <MaterialCommunityIcons name={iconName} size={25} color={color} />;
            } else if (route.name === "Cart") {
              iconName = focused ? "ios-cart" : "ios-cart-outline";
              return <Ionicons name={iconName} size={25} color={color} />;
            } else if (route.name === "Explore") {
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
              return <Ionicons name={iconName} size={40} color={color} />;
            }
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#4C169F",
          tabBarInactiveTintColor: "#4C169F",
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
  );
}