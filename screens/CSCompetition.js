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
import { DarkTheme, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const onPress = () => {
  console.log("Button Pressed");
};

const CSCompetitions = () => {
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
            <Text style={[styles.text, { width: "90%" }]}>Hackathon</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Hackathon",
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
            <Text style={[styles.text, { width: "90%" }]}>Database Design</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Database Design",
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
            <Text style={[styles.text, { width: "90%" }]}>
              Capture the flag
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Capture the flag",
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
            <Text style={[styles.text, { width: "90%" }]}>
              Game Development
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Game Development",
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
            <Text style={[styles.text, { width: "90%" }]}>Data Science</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Data Science ",
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
            <Text style={[styles.text, { width: "90%" }]}>Speed Debugging</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Speed Debugging",
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
            <Text style={[styles.text, { width: "90%" }]}>
              Speed Programming
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Speed Programming",
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
            <Text style={[styles.text, { width: "90%" }]}>
              Code In the Dark
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Code In the Dark",
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
            <Text style={[styles.text, { width: "90%" }]}>Blockchain</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Blockchain",
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
            <Text style={[styles.text, { width: "90%" }]}>UI/UX Design</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "UI/UX Design",
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
            <Text style={[styles.text, { width: "90%" }]}>App Development</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "App Development",
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
            <Text style={[styles.text, { width: "90%" }]}>Web Development</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Web Development",
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
            <Text style={[styles.text, { width: "90%" }]}>PseudoWars</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "PseudoWars",
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

export default CSCompetitions;
