import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const onPress = () => {
  console.log("Button Pressed");
};

const Explore = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../images/Background-Img.png")}
      style={styles.image}
    >
      <View style={styles.button}>
        <Text style={styles.text}>General Competitions</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>Gaming Competitions</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>CS Competitions</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={styles.buttonRow}>
          <Text style={styles.text}>EE Competitions</Text>
        </View>
        <View style={styles.buttonRow}>
          <Text style={styles.text}>BBA Competitions</Text>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  button: {
    width: "80%",
    backgroundColor: "#370140",
    height: 100,
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

export default Explore;
