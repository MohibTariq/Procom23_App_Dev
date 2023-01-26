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

const SignUp = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../images/Background-Img.png")}
      style={styles.image}
    >
      <Text style={styles.text}>Sign Up</Text>
      <Text style={[styles.text, { fontSize: 20, marginTop: 20 }]}>
        Enter Email or Phone Number
      </Text>
      <Text style={[styles.text, { fontSize: 16, marginTop: 20 }]}>
        4 digit Verification number will be sent to you!
      </Text>

      <TextInput style={styles.input} placeholder=" Email/Contact" />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ color: "white" }}>Send Code</Text>
      </TouchableOpacity>
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
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    marginTop: 40,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#370140",
    padding: 10,
    marginTop: 40,
    width: "40%",
    borderRadius: 50,
    alignSelf: "center",
    height: 45,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
});

export default SignUp;
