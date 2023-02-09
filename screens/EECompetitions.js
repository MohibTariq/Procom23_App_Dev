import React, {useState, useEffect} from "react";
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
import { getCompetitions } from "../apis";

const onPress = () => {
  console.log("Button Pressed");
};

const Competiton = ({comp, navigation}) => {
  return(
    <View style={{ flexDirection: "row", width: "100%",  marginBottom: 20 }}>
    <Text style={[styles.text, { width: "90%" }]}>
      {comp.compname}
    </Text>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Competition", { comp })
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
  );
}

const GamingCompetitions = ({navigation}) => {
  const [comps, getComps] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      let data = await getCompetitions("Electrical Engineeri");
      getComps(data)
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/Background-Img.png")}
        style={styles.image}
      >
        <ScrollView
          style={{
            padding: 20,
            marginTop: 20,
            width: "100%",
          }}
          >
            {
            comps.length ? 
            comps.map((comp, key)=>{
              return(
                <Competiton comp={comp} key={key} navigation={navigation} />
              );
            }):
            <Text style={{color: "white"}}>No competiions. Stay tuned!</Text>
          }
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
