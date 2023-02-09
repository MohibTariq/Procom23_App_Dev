import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import GeneralCompetitions from "./GeneralCompetitions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRegisteredCompeitions } from "../apis";


const onPress = () => {
  console.log("Button Pressed");
};
function Item({ item }) {
  return (
    <View style={styles.card}>
      <View style={{ width: "100%" }}>
        <Text style={styles.text}>{item.compname}</Text>
        <Text style={styles.smallText}>{item.CompType}</Text>
        <View style={styles.textBar}>
          <Text style={[styles.text, { color: "black", fontSize: 16, fontWeight: "bold" }]}>
            Team Name:
          </Text>
          <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
          {" " + item.teamname}
          </Text>
        </View>
        <View style={styles.textBar}>
          <Text style={[styles.text, { color: "black", fontSize: 16, fontWeight: "bold" }]}>
            Team Leader Id:{" "}
          </Text>
          <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
            {item.teamlead}
          </Text>
        </View>
        <View style={styles.textBar}>
          <Text style={[styles.text, { color: "black", fontSize: 16, fontWeight: "bold" }]}>
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

const RegisteredCompetitions = ({navigation}) => {
  const [comps, setComps] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      let result = await AsyncStorage.getItem("current");
      let user = JSON.parse(result);
      let response = await getRegisteredCompeitions(user.userid);
      setComps(response);
    }
    fetchData();
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/Background-Img.png")}
        style={styles.image}
      >
        <View
          style={{
            padding: 20,
            marginTop: 10,
            width: "100%",
          }}
        >
          <FlatList
            data={comps}
            renderItem={({ item }) => <Item item={item} />}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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

  image: {
    flex: 1,
    resizeMode: "cover",
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

export default RegisteredCompetitions;
