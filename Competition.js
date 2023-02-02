import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import ButtonGradient from "./ButtonGradient";
import Header from "./Header";

function Competition(props) {
  const data = require("./assets/Photography.json");
  console.log(data);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
    <Header />
      <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#3E189B", "#E100C1"]}
          style={styles.gradient1}
        >
          <Text style={styles.btntext}>{props.name}</Text>
        </LinearGradient>
      <View style={styles.container}>
        <Text style={styles.text_heading}>Introduction</Text>
        <Text style={styles.text_display1}>{data.intro}</Text>
        <Text style={styles.text_heading}>Eligibility Criteria</Text>
        <Text style={styles.text_display1}>{data.eligibility}</Text>

        <Text style={styles.text_heading}>Documents Required (if any)</Text>
        <Text style={styles.text_display1}>{data.documents}</Text>
        <ButtonGradient text={"Register Now"}/>
      </View>
    </ScrollView>
  );
}
export default Competition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loginBtn: {
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
    //   backgroundColor:"#f39"
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    width: "100%",
    height: "100%",
    textAlign: "center",
    marginTop: 20,
  },
  gradient: {
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  
  text_display1: {
    fontSize: 16,
    margin: 5,
    color: "#fff",
    width: "80%",
  },
  text_heading: {
    fontSize: 25,
    margin: 15,
    fontWeight: "bold",
    color: "#fff",
    width: "90%",
  },
  headerContainer: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    
  },
  btntext: {
    color: "#fff",
    fontSize: 20,
    fontWeight:"bold",
    width: "100%",
    height: "100%",
    textAlign: "center",
    marginTop: 20,
    flex:1,
    // alignSelf:"center",
    alignItems:"center"
  },
  gradient1: {
    width: "80%",
    // borderRadius: 10,
    // borderBottomEndRadius:25,
    // borderTopStartRadius:25,
    borderTopEndRadius:15,
    borderBottomStartRadius:15,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
