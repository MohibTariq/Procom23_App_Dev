import Explore from "./screens/Explore";
import Main from "./screens/Main";
import "react-native-gesture-handler";
import React, { useState } from "react";
import MenuDrawer from "react-native-side-drawer";

import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "./screens/SignUp";
import Verification from "./screens/Verification";
import GeneralCompetitions from "./screens/GeneralCompetitions";
import Photography from "./screens/Photography";
import RegisteredCompetitions from "./screens/RegisteredCompetitions";
import About from "./screens/About";
import Competition from "./screens/Competition";
import Developer from "./screens/Developer";
import Payment from "./screens/Payment";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Update from "./screens/Update";
import Sponsors from "./screens/Sponsors";
import SetProfile from "./screens/SetProfile";

import { navigationRef } from "./RootNavigation";
import * as RootNavigation from "./RootNavigation";

import GamingCompetitions from "./screens/GamingCompetitions";
import CSCompetitions from "./screens/CSCompetition";
import EECompetitions from "./screens/EECompetitions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const App = () => {
  const [state, setstate] = useState({ open: false });
  let [user, setUser] = useState("");
  const [name, setName] = useState("");

  let x = "s";
  function toggleOpen() {
    setstate({ open: !state.open });
  }

  function drawerContent() {
    // async function data() {
    //   const value = await AsyncStorage.getItem("current");
    //   if (value !== null) {
    //     // We have data!!
    //     console.log("ffffffffff", value);
    //     setUser(JSON.parse(value));
    //     console.log("EEEEEEEEEEEEEEEEE", user.email);
    //     setName(value.fullname);
    //     return value;
    //   }
    // }

    // const data = async () => {
    //   try {
    //     let x = await AsyncStorage.getItem("current");
    //     let rand = await JSON.parse(x);
    //     if (rand !== null) {
    //       // We have data!!
    //       console.log(rand);
    //       setUser(rand);
    //     }
    //   } catch (error) {
    //     // Error retrieving data
    //   }
    // };
    // data();
    // console.log(user);

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
        <Text style={styles.name}>{user.fullname}</Text>
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
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("Login"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
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
    <NavigationContainer ref={navigationRef}>
      <MenuDrawer
        open={state.open}
        position={"right"}
        drawerContent={drawerContent()}
        drawerPercentage={45}
        animationTime={350}
        overlay={true}
        opacity={0.9}
      >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SetProfile"
            component={SetProfile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{
              headerShown: false,
            }}
          />
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
              headerRight: () => (
                <Icon
                  onPress={toggleOpen}
                  title="Info"
                  name="menu"
                  color="white"
                  size={35}
                />
              ),
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
            name="GamingCompetitions"
            component={GamingCompetitions}
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
              title: "Gaming Competitions",
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
            name="CSCompetitions"
            component={CSCompetitions}
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
              title: "CS Competitions",
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
            name="EECompetitions"
            component={EECompetitions}
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
              title: "EE Competitions",
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
          <Stack.Screen
            name="About"
            component={About}
            options={{
              title: "About Us",
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
            name="Competition"
            component={Competition}
            options={{
              headerRight: () => (
                <Icon
                  onPress={() => alert("This is a button!")}
                  title="Info"
                  name="menu"
                  color="white"
                  size={35}
                />
              ),
              title: "Competition",
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
            name="Developer"
            component={Developer}
            options={{
              title: "Deverlopers",
              headerStyle: {
                backgroundColor: "#370140",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          {/* <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            title: "Payment",
            headerStyle: {
              backgroundColor: "#370140",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        /> */}
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: "Profile",
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
            name="Register"
            component={Register}
            options={{
              title: "Register",
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
            name="Update"
            component={Update}
            options={{
              title: "Edit Profile",
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
            name="Sponsers"
            component={Sponsors}
            options={{
              title: "Sponsers",
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
      </MenuDrawer>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <MenuDrawer
    //     open={state.open}
    //     position={"right"}
    //     drawerContent={drawerContent()}
    //     drawerPercentage={45}
    //     animationTime={350}
    //     overlay={true}
    //     opacity={0.4}
    //   >
    //     <TouchableOpacity onPress={toggleOpen} style={styles.body}>
    //       <Text>Open</Text>
    //     </TouchableOpacity>
    //   </MenuDrawer>
    // </View>
  );
};
export default App;

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
    padding: 0,

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
