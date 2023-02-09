import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Carousal from "./Slide";
import AsyncStorage from "@react-native-async-storage/async-storage";

const onPress = () => {
  console.log("Button Pressed");
};

const HomeScreen = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    AsyncStorage.getItem("user").then((result) => {
      setUser(JSON.parse(result));
    });
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/Background-Img.png")}
        style={styles.image}
      >
        <ScrollView>
          {/* <View style={{ flexDirection: "row", padding: 10, marginBottom: 20 }}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={[styles.text, { marginTop: 25 }]}>
              {" "}
              Welcome Back!{" "}
              {user?.isAmbassador ? <Text>(Ambassador)</Text> : <></>}
            </Text>
          </View> */}
          <View style={styles.video}>
            <Carousal />
          </View>
          <View
            style={{
              width: "100%",
              height: 80,
              borderRadius: 10,
              backgroundColor: "#370140",
              alignSelf: "center",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={styles.text}>Procom'23: </Text>
            <View style={styles.durationBox}>
              <Text style={styles.textSmall}>Day:</Text>
              <Text style={styles.textBold}>4</Text>
            </View>
            <View style={styles.durationBox}>
              <Text style={styles.textSmall}>Hours:</Text>
              <Text style={styles.textBold}>5</Text>
            </View>
            <View style={styles.durationBox}>
              <Text style={styles.textSmall}>Minutes:</Text>
              <Text style={styles.textBold}>4</Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={styles.text}>What do we offer</Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                marginTop: 20,
              }}
            >
              <View style={styles.box}>
                <ImageBackground
                  source={require("../images/23.png")}
                  resizeMode={"stretch"}
                  style={styles.image}
                >
                  <Text
                    style={[
                      styles.textBold,
                      {
                        color: "white",
                        marginTop: "auto",
                        textAlign: "center",
                      },
                    ]}
                  >
                    Gaming Competitions
                  </Text>
                </ImageBackground>
              </View>
              <View style={[styles.box, { marginLeft: "auto" }]}>
                <ImageBackground
                  source={require("../images/23.png")}
                  resizeMode={"stretch"}
                  style={styles.image}
                >
                  <Text
                    style={[
                      styles.textBold,
                      {
                        color: "white",
                        marginTop: "auto",
                        textAlign: "center",
                      },
                    ]}
                  >
                    Job Fair
                  </Text>
                </ImageBackground>
              </View>
            </View>
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
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    marginTop: 40,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#370140",
    padding: 10,
    marginTop: 40,
    width: "40%",
    borderRadius: 50,
    alignSelf: "center",
    height: 45,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  tinyLogo: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginRight: 5,
  },
  video: {
    width: "100%",
    height: 250,
    backgroundColor: "purple",
  },
  durationBox: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  textBold: {
    fontSize: 16,
    color: "white",
  },
  textSmall: {
    fontSize: 12,
    color: "white",
  },
  box: {
    width: "40%",
    height: 140,
    backgroundColor: "purple",
    borderRadius: 10,
  },
});

export default HomeScreen;
