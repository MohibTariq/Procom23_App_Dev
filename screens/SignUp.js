import { useState } from "react";
import { InputAccessoryView } from "react-native";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ButtonGradient from "./ButtonGradient";
import Input from "./Input";
import { useNavigation } from "@react-navigation/native";

const onPress = () => {
  console.log("Button Pressed");
};

function SignUp() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  function display() {
    if (email === "" || email === "1") {
      alert("Enter Email");
      return;
    } else {
      navigation.navigate("Verification");
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/Background-Img.png")}
        style={styles.image}
      >
        <Text style={styles.text}>Sign Up</Text>
        <Text style={[styles.text, { fontSize: 20, marginTop: 20 }]}>
          Enter Email or Phone Number
        </Text>
        <Text
          style={[
            styles.text,
            { fontSize: 16, marginTop: 20, marginBottom: 30 },
          ]}
        >
          4 digit Verification number will be sent to you!
        </Text>
        {email === "" && (
          <Text
            style={[
              styles.text,
              { color: "red", fontSize: 12, marginBottom: 5 },
            ]}
          >
            Enter Email!
          </Text>
        )}
        <Input
          value={email}
          setvar={setEmail}
          placeholder={"Email/Contact"}
          secure={false}
        />

        {/* <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ color: "white" }}>Send Code</Text>
      </TouchableOpacity> */}
        <TouchableOpacity style={{ width: "100%" }} onPress={display}>
          <ButtonGradient text={"SignUp"} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

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
    marginBottom: 40,
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
