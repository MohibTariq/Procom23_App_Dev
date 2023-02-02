import React from "react";
import Explore from "./screens/Explore";
import Main from "./screens/Main";
import "react-native-gesture-handler";

import SignUp from "./screens/SignUp";
import Verification from "./screens/Verification";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GeneralCompetitions from "./screens/GeneralCompetitions";
import Photography from "./screens/Photography";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GeneralCompetitions"
          component={GeneralCompetitions}
          options={{
            title: "General Competitions",
            headerStyle: {
              backgroundColor: "#370140",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Photography"
          component={Photography}
          options={{
            title: "Photography",
            headerStyle: {
              backgroundColor: "#370140",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
