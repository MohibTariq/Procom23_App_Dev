import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MenuDrawer from "react-native-side-drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function drawerContent() {}

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
