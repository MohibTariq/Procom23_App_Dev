import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
// import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={props.onBackPress}>
        <Icon name="arrow-back-ios" color="white" size={30} />
      </TouchableOpacity>
      <Text style={styles.headertext}>{props.name}</Text>
      <TouchableOpacity onPress={props.onMenuPress}>
        <Icon name="menu" color="white" size={35} />
      </TouchableOpacity>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  headertext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  headerContainer: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
