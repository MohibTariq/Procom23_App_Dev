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

const GeneralCompetitions = () => {
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
            <Text style={[styles.text, { width: "90%" }]}>
              Futsal Tournament
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Futsal Tournament",
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
              Painting and Sketching
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Painting and Sketching",
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
              Reels Competition
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Reels Competition",
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
              Taboo Competition
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Taboo Competition",
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
              Chess Competition
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Chess Competition",
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
            <Text style={[styles.text, { width: "90%" }]}>Photography</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Photography",
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
            <Text style={[styles.text, { width: "90%" }]}>Eat All You Can</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Eat All You Can",
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
            <Text style={[styles.text, { width: "90%" }]}>Human Ludo</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Human Ludo",
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
            <Text style={[styles.text, { width: "90%" }]}>IQuest</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "IQuest",
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
            <Text style={[styles.text, { width: "90%" }]}>Math Olympiad</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Math Olympiad",
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
              Intraparlimentary Debate
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Competition", {
                  name: "Intraparlimentary Debate ",
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

export default GeneralCompetitions;
