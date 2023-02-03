import React from "react";
import Explore from "./screens/Explore";
import Main from "./screens/Main";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

import SignUp from "./screens/SignUp";
import Verification from "./screens/Verification";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GeneralCompetitions from "./screens/GeneralCompetitions";
import Photography from "./screens/Photography";
import RegisteredCompetitions from "./screens/RegisteredCompetitions";
import About from "./screens/About";

const Stack = createNativeStackNavigator();

const App = () => {
  async function loadResourcesAsync() {
    await Promise.all([
      Asset.loadAsync([require("./images/Background-Img.png")]),
      Font.loadAsync({}),
    ]);
  }
  return (
    <ImageBackground
      source={require("./images/Background-Img.png")}
      resizeMode="cover"
      style={styles.image}
    >
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
          <Stack.Screen
            name="RegisteredCompetitions"
            component={RegisteredCompetitions}
            options={{
              title: "Registered Competitions",
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
    </ImageBackground>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    height: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
