import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    TouchableOpacity
  } from "react-native";
  import { useState } from "react";
  import ButtonGradient from "./ButtonGradient";
  import Input from "./Input";
  import { useNavigation } from "@react-navigation/native";

  function BrandLogin() {
    const navigation = useNavigation();

    function display() {
      if(email==="" ){
          alert("Enter Email")
          return false;
      }
      if(password===""){
          alert("Enter Password")
          return false;
      }
      console.log("Email:", email);
      console.log("Password:", password);
      setEmail("");
      setPassword("");
      return true;
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <ImageBackground
      style={{ flex: 1 }}
      source={require("../images/Background-Img.png")}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
  
      <View style={styles.container}>
        <Text style={styles.heading}>Brand Ambassador</Text>
        <Text style={styles.heading1}>Login</Text>

        <Text style={styles.text_display}>Enter email or phone number.</Text>
        <Input value={email} setvar={setEmail} placeholder={"Email/Contact"} secure={false}/>
        <Input value={password} setvar={setPassword} placeholder={"Password"} secure={true}/>
        <TouchableOpacity
            onPress={() => {
                if(display())
               navigation.navigate("BrandHome")
            }}
            style={{ width: "100%" }}
          >
        <ButtonGradient text={"Login"} />
        </TouchableOpacity>
      </View>
      </ScrollView>
      </ImageBackground>
    );
  }
  export default BrandLogin;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      fontSize: 30,
      color: "#fff",
    //   marginBottom: 70,
      fontStyle: "normal",
      fontWeight: "600",
    },
    heading1: {
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
  