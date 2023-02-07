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
import { useNavigation } from "@react-navigation/native";

function Competition({ route }) {
  const { name } = route.params;

  const navigation = useNavigation();

  const data = require("../assets/ElgiblityCreteria.json");
  console.log(data);
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
          <Text style={styles.btntext}>{name}</Text>
        </LinearGradient>
        <View style={styles.container}>
          <Text style={styles.text_heading}>Introduction</Text>
          <Text style={styles.text_display1}>{data.intro}</Text>
          <Text style={styles.text_heading}>Eligibility Criteria</Text>
          <Text style={styles.text_display1}>{data.eligibility}</Text>

          <Text style={styles.text_heading}>Documents Required (if any)</Text>
          <Text style={[styles.text_display1, { marginBottom: 40 }]}>
            {data.documents}
          </Text>
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => navigation.navigate("Register")}
          >
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
