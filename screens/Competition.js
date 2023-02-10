import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import ButtonGradient from "./ButtonGradient";
import Header from "./Header";
import Photography from "./Photography";

function Competition({ route, navigation }) {
  const { comp } = route.params;

  // to be removed
  const data = require("../assets/ElgiblityCreteria.json");

  const register = () => {
    navigation.navigate("Register", {
      comp: comp,
    });
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../images/Background-Img.png")}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#3E189B", "#E100C1"]}
          style={styles.gradient1}
        >
          <Text style={styles.btntext}>{comp.compname}</Text>
        </LinearGradient>
        <View style={styles.container}>
          <Text style={styles.text_heading}>Description</Text>
          <Text style={styles.text_display1}>{comp.Description}</Text>
          <Text style={styles.text_heading}>Fee</Text>
          <Text style={styles.text_display1}>{"Rs. " + comp.LateBird}</Text>
          <Text style={styles.text_heading}>Participants Limit</Text>
          <Text style={styles.text_display1}>
            <Text>Min: <Text>{comp.minparticipants}</Text></Text>
          </Text>
          <Text style={styles.text_display1}>
            <Text>Max: <Text>{comp.maxparticipants}</Text></Text>
          </Text>
          

          <Text style={styles.text_heading}>Documents Required (if any)</Text>
          <Text style={[styles.text_display1, { marginBottom: 40 }]}>
            {data.documents}
          </Text>
          <TouchableOpacity style={{ width: "100%" }} onPress={register}>
            <ButtonGradient text={"Register Now"} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
export default Competition;

const styles = StyleSheet.create({
  container: {
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
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    textAlign: "center",
    marginTop: 20,
    flex: 1,
    // alignSelf:"center",
    alignItems: "center",
  },
  gradient1: {
    width: "80%",
    // borderRadius: 10,
    // borderBottomEndRadius:25,
    // borderTopStartRadius:25,
    borderTopEndRadius: 15,
    borderBottomStartRadius: 15,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});