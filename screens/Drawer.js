import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MenuDrawer from "react-native-side-drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DrawerMenu() {
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
          }}
          color="white"
          size={30}
        />
        <Image
          // source={require("./assets/icon.png")}
          style={styles.image}
        />
        <Text style={styles.name}>Rohaan</Text>
        <View
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>Profile</Text>
        </View>
        <View
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>Registered Competitions</Text>
        </View>
        <View
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>About Us</Text>
        </View>
        <View
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>Sponsers</Text>
        </View>
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
        <View
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles.text}>The Developers</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MenuDrawer
        open={state.open}
        position={"right"}
        drawerContent={drawerContent()}
        drawerPercentage={45}
        animationTime={350}
        overlay={true}
        opacity={0.4}
      >
        <TouchableOpacity onPress={toggleOpen} style={styles.body}>
          <Text>Open</Text>
        </TouchableOpacity>
      </MenuDrawer>
    </View>
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
