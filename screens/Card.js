import { StyleSheet, Text, View, Image } from "react-native";
function Card(props) {
  return (
    <View style={styles.mainContainer}>
      <Image source={props.image} style={styles.imageContainer} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
}
export default Card;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    width: "80%",
    height: 150,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 15,
  },
  imageContainer: {
    width: "45%",
    height: 150,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 25,
  },
  name: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: "#3E189B",
    fontSize: 15,
    fontWeight: "600",
  },
});
