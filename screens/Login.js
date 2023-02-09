import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import ButtonGradient from "./ButtonGradient";
import Input from "./Input";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { login } from "../apis";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}) {

    async function submit() {
      if (email === "") {
        alert("Enter Email")
        return;
      }
      if (password === "") {
        alert("Enter Password")
        return;
      }
      console.log("Email:", email);
      console.log("Password:", password);
      try{
        AsyncStorage.removeItem("user");
        AsyncStorage.removeItem("current");
        let response = await login({email, password});
        AsyncStorage.setItem("current", JSON.stringify(response))
        if(response.isAmbassador){
          AsyncStorage.setItem("user", JSON.stringify(response))
        }
        navigation.navigate('Main')
      }catch(err){
        alert(err.message);
      }
      setEmail("");
      setPassword("");
    }
  
    const registerUser = () => {
      navigation.navigate("SetProfile")
    }
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../images/Background-Img.png")}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={styles.container}>
          <Text style={styles.heading}>Log in</Text>
          <Text style={styles.text_display}>Enter email or phone number.</Text>
          <Input
            value={email}
            setvar={setEmail}
            placeholder={"Email/Contact"}
            secure={false}
          />
          <Input
            value={password}
            setvar={setPassword}
            placeholder={"Password"}
            secure={true}
          />
          <TouchableOpacity
            onPress={submit}
            style={{ width: "100%" }}
          >
            <ButtonGradient
              text={"Login"}
            />
          </TouchableOpacity>
          <Text style={styles.text_display1}>Don't have any account?</Text>
          <TouchableOpacity
            onPress={registerUser}
            style={{ width: "100%" }}
          >
            <ButtonGradient text={"Sign Up"} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
