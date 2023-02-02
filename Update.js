import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Button,
    ScrollView
  } from "react-native";
  import { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import Icon from "react-native-vector-icons/MaterialIcons";
import ButtonGradient from "./ButtonGradient";
import Input from "./Input";
import Header from "./Header";
  function Update() {
    const [name, setname] = useState("");
    const [contact, setcontact] = useState("");
    const [password, setPassword] = useState("");
    const [email, setemail] = useState("");
    const [image,setImage]=useState();
    function display() {
      console.log("Name:", name);
      console.log("Password:", password);
      console.log("Confirm Password:", email);
      console.log("Contact:", contact);
      setname("");
      setcontact("");
      setPassword("");
      setemail("");
    }
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <Header />
      <View style={styles.container}>
        <Text style={styles.heading}>Update Profile</Text>
        <Image source={require("./assets/icon.png")} style={styles.image} />
        {/* //disable this section if camera icon isn't needed */}
        <View
          style={{ width: 33, height: 30, top: -40, left: 33, borderRadius: 50 }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#3E189B", "#E100C1"]}
            style={{ width: 33, height: 30, borderRadius: 50 }}
          >
            <Icon
              name="camera-alt"
              size={25}
              color="white"
              style={{ textAlign: "center", marginTop: 3, marginLeft: 2 }}
            />
          </LinearGradient>
        </View>
        {/* //till here  */}
        <Input value={email} setvar={setemail} placeholder={"Email"} secure={false}/>
        <Input value={name} setvar={setname} placeholder={"Full name"} secure={false}/>
        <Input value={password} setvar={setPassword} placeholder={"Change Password"} secure={true}/>
        <Input value={contact} setvar={setcontact} placeholder={"Contact Number"} secure={false}/>
        <ButtonGradient text={"Done"} onclick={display}/>
      </View>
      </ScrollView>
    );
  }
  export default Update;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"

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
      marginLeft: 20,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
  
    loginBtn: {
      width: "70%",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 20,
      //   backgroundColor:"#f39"
    },
    loginText: {
      color: "#fff",
      fontSize: 16,
      width: "100%",
      height: "100%",
      textAlign: "center",
      marginTop: 20,
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
    heading: {
      fontSize: 30,
      color: "#fff",
      marginBottom: 20,
    },
    image: {
      height: 100,
      width: 100,
      marginBottom: 10,
      borderRadius: 50,
    },
  });
  