import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useState } from "react";

import Main from "./Main";
import Header from "./Header";
import ButtonGradient from "./ButtonGradient";
import Input from "./Input";
import { Alert } from "react-native";

function Register({navigation, route}) {
  const {comp} = route.params;

  const addToCart = () =>
    Alert.alert("Added to Cart", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  function submit() {
    if (field === "") {
      alert("Enter Lead's Email");
      return;
    }
    if (teamName === "") {
      alert("Enter Team Name");
      return;
    }
    if (no === "" || no > comp.maxparticipants) {
      alert("Invalid number of participants");
      return;
    }

    // api call
    

    setfield("");
    setteamname("");
    setno("");
  }
  function check(num) {
    if (num > "3" || (num < "1" && num !== "")) {
      console.log(num, typeof num);
      alert("Invalid Number entered Max limit is 3");
      setno("");
    } else {
      setno(num);
      if (num === "1") {
        setobj({
          second: false,
          first: true,
          third: false,
        });
      } else if (num === "2") {
        setobj({
          third: false,
          first: true,
          second: true,
        });
      } else {
        setobj({
          first: true,
          second: true,
          third: true,
        });
      }
    }
  }
  const [field, setfield] = useState("");
  const [teamName, setteamname] = useState("");
  const [no, setno] = useState("");

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../images/Background-Img.png")}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={styles.container}>
          <Text style={styles.text_display}>Enter Details Below:</Text>
          <Input
            value={field}
            setvar={setfield}
            placeholder="Lead's Email"
            secure={false}
          />
          <Input
            value={teamName}
            setvar={setteamname}
            placeholder="Team Name"
            secure={false}
          />
           <Input
              style={styles.TextInput}
              keyboardType="numeric"
              placeholder="Number of Participants"
              setvar={setno}
              value={no}
            />
    
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => {
              submit();
            }}
          >
            <ButtonGradient text={"Add to Cart"} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
export default Register;

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

  text_display: {
    fontSize: 16,
    margin: 5,
    color: "#fff",
    marginBottom: 20,
    width: "70%",
  },
  headerContainer: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headertext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
