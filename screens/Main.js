import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Explore from "./Explore";
import Cart from "./Cart";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons";
import MenuDrawer from "react-native-side-drawer";
import * as RootNavigation from "../RootNavigation";
const Tab = createBottomTabNavigator();

export default function Main() {
  const [state, setstate] = useState({ open: false });
  function toggleOpen() {
    setstate({ open: !state.open });
  }
  function drawerContent() {
    return (
      <View style={styles.animatedBox}>
        <Icon
          name={"close"}
          onPress={toggleOpen}
          style={{
            backgroundColor: "#EB455F",
            width: "17%",
            borderRadius: 15,
            margin: 10,
            marginTop: 40,
          }}
          color="white"
          size={30}
        />
        <Image
          // source={require("./assets/icon.png")}
          style={styles.image}
        />
        <Text style={styles.name}>Rohaan</Text>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("Profile"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("RegisteredCompetitions"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>Registered Competitions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("About"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("Sponsers"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>Sponsers</Text>
        </TouchableOpacity>
        <View
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>Log Out</Text>
        </View>
        <View
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>Brand Ambassador Login</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("Developer"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>Developer</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <MenuDrawer
      open={state.open}
      position={"right"}
      drawerContent={drawerContent()}
      drawerPercentage={45}
      animationTime={350}
      overlay={true}
      opacity={0.4}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "ios-cart" : "ios-cart-outline";
            } else if (route.name === "Explore") {
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: "#370140",
          tabBarInactiveTintColor: "#370140",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            headerRight: () => (
              <Icon
                onPress={toggleOpen}
                title="Info"
                name="menu"
                color="white"
                size={35}
              />
            ),
            topBar: {
              backButton: {},
            },
            title: "Explore",
            headerStyle: {
              backgroundColor: "#370140",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerRight: () => (
              <Icon
                onPress={toggleOpen}
                title="Info"
                name="menu"
                color="white"
                size={35}
              />
            ),
            title: "Cart",
            headerStyle: {
              backgroundColor: "#370140",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    </MenuDrawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 30,
    zIndex: 0,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#110218",

    // padding: 10,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#F04812'
  },
  image: {
    marginTop: 20,
    alignSelf: "center",
    height: 100,
    width: 100,
    marginBottom: 5,
    borderRadius: 50,
  },
  text: {
    // flex:1,
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "normal",
    margin: 15,
  },
  name: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15,
  },
});
