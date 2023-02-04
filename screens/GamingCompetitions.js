import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const onPress = () => {
  console.log("Button Pressed");
};

const GamingCompetitions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/Background-Img.png")}
        style={styles.image}
      >
        <ScrollView
          style={{
            padding: 20,
            marginTop: 50,
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Text style={[styles.text, { width: "90%" }]}>PUBG Mobile</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "PUBG Mobile",
                })
              }
            >
              <Ionicons
                style={{ alignSelf: "center" }}
                size={30}
                color="white"
                name="eye"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>DOTA 2</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "DOTA 2",
                })
              }
            >
              <Ionicons
                style={{ alignSelf: "center" }}
                size={30}
                color="white"
                name="eye"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>Valorant</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Valorant",
                })
              }
            >
              <Ionicons
                style={{ alignSelf: "center" }}
                size={30}
                color="white"
                name="eye"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>CS 1.6</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "CS 1.6",
                })
              }
            >
              <Ionicons
                style={{ alignSelf: "center" }}
                size={30}
                color="white"
                name="eye"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>FIFA 23</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "FIFA 23",
                })
              }
            >
              <Ionicons
                style={{ alignSelf: "center" }}
                size={30}
                color="white"
                name="eye"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>Tekken 7</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Tekken 7",
                })
              }
            >
              <Ionicons
                style={{ alignSelf: "center" }}
                size={30}
                color="white"
                name="eye"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>CS:GO</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "CS:GO",
                })
              }
            >
              <Ionicons
                style={{ alignSelf: "center" }}
                size={30}
                color="white"
                name="eye"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>Free Fire</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Free Fire",
                })
              }
            >
              <Ionicons
                style={{ alignSelf: "center" }}
                size={30}
                color="white"
                name="eye"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>Clash Royale</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Clash Royale",
                })
              }
            >
              <Ionicons
                style={{ alignSelf: "center" }}
                size={30}
                color="white"
                name="eye"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    fontSize: 18,
    color: "white",
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

export default GamingCompetitions;
