import { StyleSheet, Text, View, ScrollView,Image,ImageBackground} from "react-native";
import { useState } from "react";
import ButtonGradient from "./ButtonGradient";
import Input from "./Input";
import Card from "./Card";
import { LinearGradient } from "expo-linear-gradient";
function BrandHomeScreen() {
  function display() {
    if (email === "") {
      alert("Enter Email");
      return;
    }
    if (password === "") {
      alert("Enter Password");
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
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../images/Background-Img.png")}
    >
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Brand Ambassador</Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#3E189B", "#E100C1"]}
          style={styles.gradient1}
        >
          <View
        style={styles.mainContainer} >
        <Image
          source={ require("../assets/user.jpg") }
          style={styles.imageContainer}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>
           Name Here
          </Text>
          <Text style={styles.title}>
           Brand Ambassador
          </Text>
        </View>
      </View>
        </LinearGradient>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#3E189B", "#E100C1"]}
          style={styles.gradient}
        >
          <View style={styles.mainContainer1}>
          <View style={styles.textContainer}>
            <Text style={styles.name1}>Teams Registered</Text>
            <Text style={styles.title1}>7 teams registered</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name1}>Total Payment Recieved</Text>
            <Text style={styles.title1}>Rs. 15000 </Text>
          </View>
        </View>
        </LinearGradient>
        
        <ButtonGradient text={"Register Team"} />
      </View>
    </ScrollView>
    </ImageBackground>
  );
}
export default BrandHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 30,
    fontStyle: "normal",
    fontWeight: "600",
  },
  gradient: {
    width: "80%",
    borderRadius: 10,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  gradient1: {
    width: "80%",
    borderRadius: 10,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
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
  mainContainer1: {
    // backgroundColor: "#E100C1",
    width: "80%",
    height: 250,
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    marginBottom: 15,
  },
  imageContainer: {
    width: "45%",
    height: 150,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 25,
  },
  name1: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  title1: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
  },
  mainContainer:{
    // backgroundColor: "#fff",
    //   width: "80%",
      height: 150,
      display: "flex",
      flexDirection: "row",
      borderRadius: 10,
    //   marginBottom: 15,
},
imageContainer:{
    width: "45%",
     height: 150, 
    borderRadius: 10
},
textContainer:{
    flex: 1, 
    justifyContent: "center",
     marginLeft: 25 
},
name:{
    color: "#fff", fontSize: 20, fontWeight: "bold" 
},
title:{
 color: "#fff", fontSize: 15, fontWeight: "300" 
}

});
