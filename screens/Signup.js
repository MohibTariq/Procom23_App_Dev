import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";
import { useState } from "react";
import ButtonGradient from "../ButtonGradient";
import Input from "../Input";
import { login, signup } from '../apis';
import ROUTES from "../routes";

function Signup({navigation}) {
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
      let response = await login({email, password});
      navigation.navigate('Competition')
    }catch(err){
      alert(err.message);
    }
    setEmail("");
    setPassword("");
  }

  const registerUser = () => {
    navigation.navigate("Profile")
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>

      <View style={styles.container}>
        <Text style={styles.heading}>Log in</Text>
        <Text style={styles.text_display}>Enter email or phone number.</Text>
        <Input value={email} setvar={setEmail} placeholder={"Email/Contact"} secure={false} />
        <Input value={password} setvar={setPassword} placeholder={"Password"} secure={true} />
        <ButtonGradient text={"Login"} onclick={submit} />
        <Text style={styles.text_display1}>Don't have any account?</Text>
        <ButtonGradient text={"Sign Up"} onclick={registerUser} />
      </View>
    </ScrollView>
  );
}
export default Signup;

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
