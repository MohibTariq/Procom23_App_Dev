import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import Card from "./Card";
import Header from "./Header";
function Developer(props) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../images/Background-Img.png")}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={styles.container}>
          <Text style={styles.text_heading}>The Developers Team</Text>
          <Text style={styles.text_display1}>
            The development team behind our application is a group of talented
            and experienced professionals who are passionate about delivering
            innovative solutions to meet the needs of our users. With a diverse
            range of skills and expertise, including software engineering, user
            experience design, and project management, our team is dedicated to
            creating a high-quality and user-friendly application.
          </Text>
          <Text style={styles.text_heading}>Our Development Team</Text>
          <Card
            name={"Mustafa Malik"}
            title={"Developer"}
            image={require("../images/Mustafa.jpg")}
          />
          <Card
            name={"Mohib Tariq"}
            title={"Developer"}
            image={require("../images/Mohib.jpg")}
          />
          <Card
            name={"Midhat Karim"}
            title={"Developer"}
            image={require("../images/Midhat.jpg")}
          />
          <Card
            name={"Ahmed Naeem"}
            title={"Developer"}
            //   image={require("./assets/user.jpg")}
          />
          <Card
            name={"Saad Ali"}
            title={"Developer"}
            image={require("../images/Saad.jpeg")}
          />
          <Card
            name={"Sammam Sohail"}
            title={"Developer"}
            image={require("../images/Sammam.png")}
          />
          <Card
            name={"Amin Farjad"}
            title={"Developer"}
            image={require("../images/user.png")}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
export default Developer;
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