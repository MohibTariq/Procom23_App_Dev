import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
function Signup() {
  function display() {
    if(email==="" ){
        alert("Enter Email")
        return;
    }
    if(password===""){
        alert("Enter Password")
        return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log in</Text>
      <Text style={styles.text_display}>Enter email or phone number.</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email/Contact"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#3E189B", "#E100C1"]}
        style={styles.gradient}
      >
        <Text style={styles.loginText}  onPress={display}>Log In</Text>
      </LinearGradient>
      <Text style={styles.text_display1}>Don't have any account?</Text>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#3E189B", "#E100C1"]}
        style={styles.gradient}
      >
        <Text style={styles.loginText} onPress={display}>
          Sign Up
        </Text>
      </LinearGradient>
    </View>
  );
}
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    fontSize: 14,
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
  loginText: {
    color: "#fff",
    fontSize: 16,
    width: "100%",
    height: "100%",
    textAlign: "center",
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 70,
    fontStyle: "normal",
    fontWeight: "600",
  },
  text_display: {
    fontSize: 16,
    margin: 5,
    color: "#fff",
    marginBottom: 20,
  },
  text_display1: {
    fontSize: 16,
    margin: 5,
    color: "#fff",
  },
});
