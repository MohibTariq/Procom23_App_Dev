import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const onPress = () => {
  console.log("Button Pressed");
};

const Cart = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../images/Background-Img.png")}
      style={styles.image}
    >
      <ScrollView style={{ flex: 1, padding: 30 }}>
        <Text style={styles.text}>You are almost done!</Text>
        <View style={styles.cartItem}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View
            style={{ marginLeft: 20, width: "50%", justifyContent: "center" }}
          >
            <Text style={styles.text}>Photography</Text>
            <Text style={styles.textSmall}>General Competitions</Text>
            <Text style={styles.textSmall}>Rs. 900</Text>
          </View>
          <TouchableOpacity
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons size={30} color="white" name="remove-circle" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 50 }}>
          <Text style={styles.text}>Total Amount: RS. 900</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>Proceed</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  </View>
);

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
    fontSize: 20,
    color: "white",
  },
  textSmall: {
    fontSize: 14,
    color: "white",
  },
  button: {
    width: "80%",
    backgroundColor: "#370140",
    height: 50,
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
  cartItem: {
    height: 100,
    marginTop: 20,
    flexDirection: "row",
  },
  tinyLogo: {
    width: "30%",
    height: "98%",
  },
});

export default Cart;
