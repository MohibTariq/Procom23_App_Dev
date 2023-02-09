import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Button, ImageBackground
  } from "react-native";
  import { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import Icon from "react-native-vector-icons/MaterialIcons";
  import ButtonGradient from "./ButtonGradient";
  import Input from "./Input";
  import { signup } from "../apis";
  
  function Profile({navigation}) {
    const [name, setname] = useState("");
    const [contact, setcontact] = useState("");
    const [password, setPassword] = useState("");
    const [conf_password, setConfPassword] = useState("");
    const [email, setEmail] = useState("");
    const [university, setUniversity] = useState("");
    const [image, setImage] = useState();
    async function submit() {
      if (name === "") {
        alert("Enter Name ");
        return;
      }
      if (password === "") {
        alert("Enter Password");
        return;
      }
      if (conf_password === "") {
        alert("Confirm your password");
        return;
      }
      if (contact === "") {
        alert("Enter Contact");
        return;
      }
      console.log("Name:", name);
      console.log("Password:", password);
      console.log("Confirm Password:", conf_password);
      console.log("Contact:", contact);
  
      try {
        await signup({ fullname: name, password, contact, university, email, isAmbassador: false });
        alert("Registered successfully! Please check your email to verify your account.")
        navigation.navigate('Login');
      } catch (err) {
        alert(err.message);
      }
      setname("");
      setcontact("");
      setPassword("");
      setConfPassword("");
      setUniversity("");
      setEmail("");
    }
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <ImageBackground source={require("../images/Background-Img.png")} resizeMode="cover" style={styles.image_bg}>
        <View style={styles.container}>
          <Text style={styles.heading}>Set up your Profile</Text>
          <Image source={require("../assets/icon.png")} style={styles.image} />
  
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
          {/* <Button title="Select Image" onPress={pickImage} /> */}
          <Input value={name} setvar={setname} placeholder={"Full name"} secure={false} />
          <Input value={email} setvar={setEmail} placeholder={"Email"} secure={false} />
          <Input value={university} setvar={setUniversity} placeholder={"University"} secure={false} />
          <Input value={password} setvar={setPassword} placeholder={"Password"} secure={true} />
          <Input value={conf_password} setvar={setConfPassword} placeholder={"Re-enter Password"} secure={true} />
          <Input value={contact} setvar={setcontact} placeholder={"Contact Number"} secure={false} />
          <ButtonGradient text={"Done"} onclick={submit} />
        </View>
        </ImageBackground>
      </ScrollView>
    );
  }
  export default Profile;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
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
    image_bg: {
      flex: 1,
      justifyContent: "center",
    },
  });
  