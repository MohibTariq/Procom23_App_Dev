import { StyleSheet, View, TextInput } from "react-native";
function Input(props) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder={props.placeholder}
        onChangeText={(value) => props.setvar(value)}
        value={props.value}
        secureTextEntry={props.secure ? true : false}
      />
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 25,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignSelf: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    fontSize: 14,
  },
});
