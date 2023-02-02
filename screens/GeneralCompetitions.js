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
        <View
          style={{
            padding: 20,
            marginTop: 50,
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Text style={[styles.text, { width: "90%" }]}>Photography</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Photography")}
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
            <Text style={[styles.text, { width: "90%" }]}>iQuest</Text>
            <Ionicons
              style={{ alignSelf: "center" }}
              size={30}
              color="white"
              name="eye"
            />
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>
              Creative Writing (English)
            </Text>
            <Ionicons
              style={{ alignSelf: "center" }}
              size={30}
              color="white"
              name="eye"
            />
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>Math Olympiad</Text>
            <Ionicons
              style={{ alignSelf: "center" }}
              size={30}
              color="white"
              name="eye"
            />
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>
              General Knowledge Quiz
            </Text>
            <Ionicons
              style={{ alignSelf: "center" }}
              size={30}
              color="white"
              name="eye"
            />
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>Chess</Text>
            <Ionicons
              style={{ alignSelf: "center" }}
              size={30}
              color="white"
              name="eye"
            />
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>Sketching</Text>
            <Ionicons
              style={{ alignSelf: "center" }}
              size={30}
              color="white"
              name="eye"
            />
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>
              Parlimentary Debate
            </Text>
            <Ionicons
              style={{ alignSelf: "center" }}
              size={30}
              color="white"
              name="eye"
            />
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>Painting</Text>
            <Ionicons
              style={{ alignSelf: "center" }}
              size={30}
              color="white"
              name="eye"
            />
          </View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
            <Text style={[styles.text, { width: "90%" }]}>Spelling Bee</Text>
            <Ionicons
              style={{ alignSelf: "center" }}
              size={30}
              color="white"
              name="eye"
            />
          </View>
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
