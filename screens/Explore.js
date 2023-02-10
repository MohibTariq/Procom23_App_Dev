import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Explore = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/Background-Img.png")}
        style={styles.image}
      >
        <ScrollView style={{ marginTop: 20 }}>
        <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#3E189B", "#E100C1"]}
      style={styles.button}
      >
          <TouchableOpacity
            onPress={() => navigation.navigate("General Competitions")}
            style={styles.gradient}
          >
            <Text style={styles.text}>General Competitions</Text>
          </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#3E189B", "#E100C1"]}
      style={styles.button}
      >
          <TouchableOpacity
            style={styles.gradient}
            onPress={() => navigation.navigate("Gaming Competitions")}
          >
            <Text style={styles.text}>Gaming Competitions</Text>
          </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#3E189B", "#E100C1"]}
      style={styles.button}
      >
          <TouchableOpacity
            style={styles.gradient}
            onPress={() => navigation.navigate("CS Competitions")}
          >
            <Text style={styles.text}>CS Competitions</Text>
          </TouchableOpacity>
          </LinearGradient>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#3E189B", "#E100C1"]}
      style={styles.buttonRow}
      >
            <TouchableOpacity
              style={styles.buttonRowGrad}
              onPress={() => navigation.navigate("EE Competitions")}
            >
              <Text style={styles.text}>EE Competitions</Text>
            </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#3E189B", "#E100C1"]}
      style={styles.buttonRow}
      >
            <TouchableOpacity style={styles.buttonRowGrad}>
              <Text style={styles.text}>Starup Showdown</Text>
            </TouchableOpacity>
            </LinearGradient>
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
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
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
  gradient: {
    width: "80%",
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
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
  buttonRowGrad: {
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Explore;
