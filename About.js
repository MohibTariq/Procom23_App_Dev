import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Card from "./Card";
import Header from "./Header";
function About(props) {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <Header />
      <View style={styles.container}>
        <Text style={styles.text_heading}>About Us</Text>
        <Text style={styles.text_display1}>
          Qui amet aliqua pariatur ea labore Lorem id duis esse ipsum sit eu
          nostrud culpa. Ut laboris aliqua incididunt sint Lorem deserunt
          cupidatat sint aliquip qui minim sint laboris. Ad non dolore officia
          nostrud eu aute velit non in nostrud deserunt irure ex.
        </Text>
        <Text style={styles.text_heading}>Our Team</Text>
        <Card name={"Rohaan Khan"} title={"President"} image={require("./assets/user.jpg")}/>
        <Card name={"Zoha Mobin"} title={"Vice President"} image={require("./assets/user.jpg")}/>
      </View>
    </ScrollView>
  );
}
export default About;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
    //   backgroundColor:"#f39"
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    width: "100%",
    height: "100%",
    textAlign: "center",
    marginTop: 20,
  },
  gradient: {
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  text_display1: {
    fontSize: 16,
    margin: 5,
    color: "#fff",
    width: "80%",
  },
  text_heading: {
    fontSize: 25,
    margin: 15,
    fontWeight: "bold",
    color: "#fff",
    width: "90%",
    textAlign: "center",
  },
  headerContainer: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  btntext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    textAlign: "center",
    marginTop: 20,
    flex: 1,
    // alignSelf:"center",
    alignItems: "center",
  },
  gradient1: {
    width: "80%",
    // borderRadius: 10,
    // borderBottomEndRadius:25,
    // borderTopStartRadius:25,
    borderTopEndRadius: 15,
    borderBottomStartRadius: 15,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
});
