import { StyleSheet, Text, ActivityIndicator, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
function ButtonGradient(props) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#3E189B", "#E100C1"]}
      style={styles.gradient}
    >
      <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
      {
        props.loading ? <ActivityIndicator size="small" color="#ffffff" style={{marginRight: 10}} /> : <></>
      }
      <Text style={styles.loginText} onPress={props.onclick}>
        {props.text}
      </Text>
      </View>
    </LinearGradient>
  );
}
export default ButtonGradient;

const styles = StyleSheet.create({
  gradient: {
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
  },
});
