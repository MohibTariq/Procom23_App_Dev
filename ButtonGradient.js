import {
    StyleSheet,
    Text
  } from "react-native";  
import { LinearGradient } from "expo-linear-gradient";
function ButtonGradient(props) {
    return (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#3E189B", "#E100C1"]}
          style={styles.gradient}
        >
          <Text style={styles.loginText} 
          onPress={props.onclick}
          >
            {props.text}
          </Text>
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
      marginTop: 10,
      marginBottom: 20,
    },
    loginText: {
      color: "#fff",
      fontSize: 16,
      width: "100%",
      height: "100%",
      textAlign: "center",
      marginTop: 20,
    },
  });
  