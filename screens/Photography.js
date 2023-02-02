import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const onPress = () => {
  console.log("Button Pressed");
};

const Photography = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/Background-Img.png")}
        style={styles.image}
      >
        <View
          style={{
            padding: 20,
            marginTop: 50,
            width: "100%",
          }}
        >
          <Text style={styles.heading}>Introduction</Text>
          <Text style={styles.text}>--Enter text here --</Text>
        </View>
        <View
          style={{
            padding: 20,
            marginTop: 50,
            width: "100%",
          }}
        >
          <Text style={styles.heading}>Eligiblity Creteria</Text>
          <Text style={styles.text}>--Enter text here --</Text>
        </View>
        <View
          style={{
            padding: 20,
            marginTop: 50,
            width: "100%",
          }}
        >
          <Text style={styles.heading}>Documents Required (if any)</Text>
          <Text style={styles.text}>--Enter text here --</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.heading}>Register Now</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  heading: {
    fontSize: 26,
    color: "white",
  },
  button: {
    width: "80%",
    backgroundColor: "#370140",
    height: 60,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    width: "35%",
    backgroundColor: "#370140",
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    padding: 5,
  },
});

export default Photography;
