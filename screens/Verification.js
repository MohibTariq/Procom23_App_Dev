import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const onPress = () => {
  console.log("Button Pressed");
};

function Verification() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <ImageBackground
          source={require("../images/Background-Img.png")}
          style={styles.image}
        >
          <Text style={styles.text}>Verification</Text>

          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              alignSelf: "center",
            }}
          >
            <Text style={[styles.text, { fontSize: 16, marginTop: 20 }]}>
              Code sent to
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 16, marginTop: 20, color: "grey" },
              ]}
            >
              {" "}
              mirsaad11@hotmail.com
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TextInput
              style={styles.input}
              placeholder=""
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder=""
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder=""
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder=""
              maxLength={1}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "white" }}>Verify</Text>
          </TouchableOpacity>

          <Text style={[styles.text, { fontSize: 16, marginTop: 20 }]}>
            Didn't receive a code?
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "white", marginTop: 10 }]}
            onPress={onPress}
          >
            <Text style={{ color: "#370140" }}>Resend Code</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

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
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    width: "12%",
    alignSelf: "center",
    marginTop: 40,
    height: 50,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 10,
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#370140",
    padding: 10,
    marginTop: 30,
    width: "40%",
    borderRadius: 50,
    alignSelf: "center",
    height: 45,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
});

export default Verification;
