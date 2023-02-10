import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView,
    Button,
    FlatList,
    Image,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import Icon from "react-native-vector-icons/MaterialIcons";
  import ButtonGradient from "./ButtonGradient";
  import Input from "./Input";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { getRegisteredCompeitions } from "../apis";
  
  function Item({ item }) {
    return (
      <View style={styles.card}>
        <View style={{ width: "100%" }}>
          <Text style={styles.text}>{item.compname}</Text>
          <Text style={styles.smallText}>{item.CompType}</Text>
          <View style={styles.textBar}>
            <Text
              style={[
                styles.text,
                { color: "black", fontSize: 16, fontWeight: "bold" },
              ]}
            >
              Team Name:
            </Text>
            <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
              {" " + item.teamname}
            </Text>
          </View>
          <View style={styles.textBar}>
            <Text
              style={[
                styles.text,
                { color: "black", fontSize: 16, fontWeight: "bold" },
              ]}
            >
              Team Leader Id:{" "}
            </Text>
            <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
              {item.teamlead}
            </Text>
          </View>
          <View style={styles.textBar}>
            <Text
              style={[
                styles.text,
                { color: "black", fontSize: 16, fontWeight: "bold" },
              ]}
            >
              Team Members:{" "}
            </Text>
            <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
              {item.numofmembers}
            </Text>
          </View>
        </View>
        <View></View>
      </View>
    );
  }
  
  function ProfileFooter() {
    const [comps, setComps] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        let result = await AsyncStorage.getItem("current");
        let user = JSON.parse(result);
        let response = await getRegisteredCompeitions(user.userid);
        setComps(response);
      }
      fetchData();
    }, []);
  
    const [name, setname] = useState("");
    const [contact, setcontact] = useState("");
    const [password, setPassword] = useState("");
    const [conf_password, setConfPassword] = useState("");
    const [image, setImage] = useState();
    function display() {
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
      setname("");
      setcontact("");
      setPassword("");
      setConfPassword("");
    }
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../images/Background-Img.png")}
      >
        <View contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
          <View
            style={{
              padding: 20,
              marginTop: 10,
              width: "100%",
            }}
          >
            <Text style={styles.text}>Registered Competitions</Text>
            <FlatList
              data={comps}
              renderItem={({ item }) => <Item item={item} />}
              //     ListHeaderComponent={
              //     //   <View style={styles.container}>
              //     //     <Text style={styles.heading}>Your Profile</Text>
              //     //     <Image
              //     //       source={require("../images/Background-Img.png")}
              //     //       style={styles.image}
              //     //     />
  
              //     //     {/* //disable this section if camera icon isn't needed */}
              //     //     <View
              //     //       style={{
              //     //         width: 33,
              //     //         height: 30,
              //     //         top: -40,
              //     //         left: 33,
              //     //         borderRadius: 50,
              //     //       }}
              //     //     >
              //     //       <LinearGradient
              //     //         start={{ x: 0, y: 0 }}
              //     //         end={{ x: 1, y: 0 }}
              //     //         colors={["#3E189B", "#E100C1"]}
              //     //         style={{ width: 33, height: 30, borderRadius: 50 }}
              //     //       >
              //     //         <Icon
              //     //           name="camera-alt"
              //     //           size={25}
              //     //           color="white"
              //     //           style={{
              //     //             textAlign: "center",
              //     //             marginTop: 3,
              //     //             marginLeft: 2,
              //     //           }}
              //     //         />
              //     //       </LinearGradient>
              //     //     </View>
              //     //     {/* //till here  */}
              //     //     {/* <Button title="Select Image" onPress={pickImage} /> */}
              //     //     <Text
              //     //       style={[
              //     //         styles.text,
              //     //         { color: "white", fontSize: 16, fontWeight: "bold" },
              //     //       ]}
              //     //     >
              //     //       Name:{" "}
              //     //     </Text>
              //     //     <Text style={[styles.text, { color: "white", fontSize: 16 }]}>
              //     //       {"item.numofmember"}
              //     //     </Text>
  
              //     //     <Input
              //     //       value={contact}
              //     //       setvar={setcontact}
              //     //       placeholder={"Contact Number"}
              //     //       secure={false}
              //     //     />
  
              //     //     <Text style={styles.text}>Registered Competitions</Text>
              //     //   </View>
              //     // }
              //     //
              // }
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
  export default ProfileFooter;
  
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
    text: {
      fontSize: 28,
      color: "white",
      textAlign: "center",
    },
    smallText: {
      fontSize: 16,
      color: "white",
      textAlign: "center",
    },
    image: {
      height: 100,
      width: 100,
      marginBottom: 10,
      borderRadius: 50,
    },
    button: {
      width: "80%",
      backgroundColor: "#370140",
      height: 100,
      alignSelf: "center",
      borderRadius: 10,
      marginTop: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      width: "90%",
      backgroundColor: "#370140",
      alignSelf: "center",
      padding: 25,
      borderRadius: 10,
      marginTop: 30,
    },
    textBar: {
      backgroundColor: "white",
      width: "90%",
      marginTop: 15,
      padding: 8,
      flexDirection: "row",
      alignSelf: "center",
      borderRadius: 10,
    },
    buttonRow: {
      width: "35%",
      backgroundColor: "#370140",
      height: 100,
      alignSelf: "center",
      borderRadius: 10,
      marginTop: 30,
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
      padding: 5,
    },
  });