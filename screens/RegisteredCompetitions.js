import React from "react";
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

const onPress = () => {
  console.log("Button Pressed");
};
function Item({ item, patient }) {
  return (
    <View style={styles.card}>
      <View style={{ width: "100%" }}>
        <Text style={styles.text}>Photography</Text>
        <Text style={styles.smallText}>General Competitions</Text>
        <View style={styles.textBar}>
          <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
            Team Name:{" "}
          </Text>
          <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
            XYZ
          </Text>
        </View>
        <View style={styles.textBar}>
          <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
            Team Leader:{" "}
          </Text>
          <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
            XYZ
          </Text>
        </View>
        <View style={styles.textBar}>
          <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
            Team Members:{" "}
          </Text>
          <Text style={[styles.text, { color: "black", fontSize: 16 }]}>
            XYZ
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const RegisteredCompetitions = () => {
  const navigation = useNavigation();
  let Competitions = [1, 2];
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
            data={Competitions}
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
