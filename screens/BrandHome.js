import { StyleSheet, Text, View, ScrollView,Image,ImageBackground,StatusBar} from "react-native";
import { useState } from "react";
import ButtonGradient from "./ButtonGradient";
import Input from "./Input";
import Card from "./Card";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MenuDrawer from "react-native-side-drawer";
import * as RootNavigation from "../RootNavigation";

import Header from "./Header";


function BrandHomeScreen() {
    const [state, setstate] = useState({ open: false });
  function toggleOpen() {
    setstate({ open: !state.open });
  }
  function drawerContent() {
    return (
      <View style={styles1.animatedBox}>
        <Icon
          name={"close"}
          onPress={toggleOpen}
          style={{
            backgroundColor: "#EB455F",
            width: "17%",
            borderRadius: 15,
            margin: 10,
            marginTop: 40,
          }}
          color="white"
          size={30}
        />
        <Image
          // source={require("./assets/icon.png")}
          style={styles1.image}
        />
        <Text style={styles1.name}>Rohaan</Text>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("Profile"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles1.text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("RegisteredCompetitions"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles1.text}>Registered Competitions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("About"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles1.text}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("Sponsers"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles1.text}>Sponsers</Text>
        </TouchableOpacity>
        <View
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles1.text}>Log Out</Text>
        </View>
        {/* <View
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles1.text}>Brand Ambassador Login</Text>
        </View> */}
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate("Developer"), toggleOpen();
          }}
          elevation={0.5}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth * 1,
            borderTopColor: "#CC00B0",
          }}
        >
          <Text style={styles1.text}>Developer</Text>
        </TouchableOpacity>
      </View>
    );
  }
    const navigation = useNavigation();

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
    <MenuDrawer
      open={state.open}
      position={"right"}
      drawerContent={drawerContent()}
      drawerPercentage={45}
      animationTime={350}
      overlay={true}
      opacity={0.4}
    >
        
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../images/Background-Img.png")}
    >
        <View style={styles.headerContainer}>
      <TouchableOpacity >
        <Icon name="menu" color="white" size={35} onPress={()=> toggleOpen()}/>
      </TouchableOpacity>
    </View>
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
        
        <TouchableOpacity
            onPress={() => {
               navigation.navigate("Register")
            }}
            style={{ width: "100%" }}
          >
                    <ButtonGradient text={"Register Team"} />


          </TouchableOpacity>
      </View>
    </ScrollView>
    </ImageBackground>
    </MenuDrawer>
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
},
headertext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  headerContainer: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent:"flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop:  StatusBar.currentHeight

  },
});
const styles1=StyleSheet.create(
    {
        container: {
            flex: 1,
            // backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            // marginTop: 30,
            zIndex: 0,
          },
          animatedBox: {
            flex: 1,
            backgroundColor: "#110218",
        
            // padding: 10,
          },
          body: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: '#F04812'
          },
          image: {
            marginTop: 20,
            alignSelf: "center",
            height: 100,
            width: 100,
            marginBottom: 5,
            borderRadius: 50,
          },
          text: {
            // flex:1,
            textAlign: "center",
            fontSize: 20,
            color: "#fff",
            fontWeight: "normal",
            margin: 15,
          },
          name: {
            textAlign: "center",
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold",
            marginBottom: 15,
          },
    }
)
