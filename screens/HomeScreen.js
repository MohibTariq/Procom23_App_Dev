import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
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

const HomeScreen = () => {
  const [user, setUser] = useState();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinues] = useState();
  const [show, setShow] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem("user").then((result) => {
      setUser(JSON.parse(result));
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setShow(false);
      let date_now = Date.now();

      // date and time of procom
      let date = new Date("2023-03-09T08:00:00");
      let date_future = date.getTime();
      var delta = Math.abs(date_future - date_now) / 1000;
      var days = Math.floor(delta / 86400);
      setDays(days);
      delta -= days * 86400;

      var hours = Math.floor(delta / 3600) % 24;
      setHours(hours);
      delta -= hours * 3600;
      var minutes = Math.floor(delta / 60) % 60;
      setMinues(minutes);
      setTimeout(()=>{
        setShow(true); 
      }, 200)
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/Background-Img.png")}
        style={styles.image}
      >
        <ScrollView>
          <View style={styles.video}>
            <Carousal />
          </View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#3E189B", "#E100C1"]}
            // style={styles.gradient}
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
            <Text style={styles.text}>Procom' 23: </Text>
            <View style={styles.durationBox}>
              <Text style={styles.textSmall}>Days</Text>
              <Text style={styles.textBold}>{days}</Text>
            </View>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 18, height: show ? 25: 0}}>:</Text> 
            <View style={styles.durationBox}>
              <Text style={styles.textSmall}>Hours</Text>
              <Text style={styles.textBold}>{hours}</Text>
            </View>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 18, height: show ? 25: 0}}>:</Text> 
            <View style={styles.durationBox}>
              <Text style={styles.textSmall}>Minutes</Text>
              <Text style={styles.textBold}>{minutes}</Text>
            </View>
          </LinearGradient>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={styles.text}>What do we offer?</Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                marginTop: 20,
              }}
            >
              <View style={styles.box}>
                <ImageBackground
                  source={require("../images/gaming.jpeg")}
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
                    Competitions
                  </Text>
                </ImageBackground>
              </View>
              <View style={[styles.box, { marginLeft: "auto" }]}>
                <ImageBackground
                  source={require("../images/job.jpeg")}
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
