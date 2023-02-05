import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
  } from "react-native";
  import { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import Icon from "react-native-vector-icons/MaterialIcons";
import Main from "../Main";
import Header from "../Header";
import ButtonGradient from "../ButtonGradient";
import Input from "../Input";

  function Register(props) {
    function display() {
      if(field==="" ){
          alert("Enter Field")
          return;
      }
      if(teamName===""){
          alert("Enter Team Name")
          return;
      }
      if(no===""){
        alert("Enter Number of participants")
        return;
    }
    if((no==="1"&&first==="")||(no==="2"&&(first===""||second===""))||(no==="3"&&(first===""||second===""||third===""))){
        alert("Kindly enter your team members name");
        return;
    }
      const object={
        Field:field,
        Team:teamName,
        Number:no,
        Mem1:first,
        Mem2:second,
        Mem3:third
      }
      console.log(object)
      setfield("");
      setteamname("");
      setno("");
      setfirst("");
      setsecond("");
      setthird("");
      setobj({
        first:true,
        second:true,
        third:true
      })
    }
    function check(num){
        if(num>"3"||num<"1"&&num!==""){
            console.log(num,typeof(num));
            alert("Invalid Number entered Max limit is 3");
            setno("");
        }
        else{
            setno(num);
            if(num==="1"){
                setobj({
                    second:false,first:true,third:false
                })

            }
            else if(num==="2"){
                setobj({
                    third:false,first:true,second:true
                })

            }
            else{
                setobj({
                    first:true,
        second:true,
        third:true
                })

            }
        }
    }
    const [field, setfield] = useState("");
    const [teamName, setteamname] = useState("");
    const [no, setno] = useState("");
    const [obj,setobj]=useState({
        first:true,
        second:true,
        third:true
    })
    const [first,setfirst]=useState("");
    const [second,setsecond]=useState("");
    const [third,setthird]=useState("");

    return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <Header name={props.name}/>
      <View style={styles.container}>
        <Text style={styles.text_display}>Enter Details Below:</Text>
        <Input value={field} setvar={setfield} placeholder="Field" secure={false}/>
        <Input value={teamName} setvar={setteamname} placeholder="Team Name" secure={false}/>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            keyboardType='numeric'
            placeholder="Number of Participants"
            onChangeText={(num) => check(num)}
            value={no}
          />
        </View>
       {obj.first?<Input value={first} setvar={setfirst} placeholder="Member 1" secure={false} />:<></>}
        {obj.second?<Input value={second} setvar={setsecond} placeholder="Member 2" secure={false} />:<></>}
        {obj.third?<Input value={third} setvar={setthird} placeholder="Member 3" secure={false} />:<></>}
        <ButtonGradient text={"Add to Cart"} onclick={display}/>
      </View>
    </ScrollView>
    );
  }
  export default Register;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent: "center",
    },
  
    inputView: {
      backgroundColor: "#fff",
      borderRadius: 10,
      width: "70%",
      height: 45,
      marginBottom: 20,
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 10,
      fontSize: 14,
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
    loginText: {
      color: "#fff",
      fontSize: 16,
      width: "100%",
      height: "100%",
      textAlign: "center",
      marginTop: 20,
    },
    
    text_display: {
      fontSize: 16,
      margin: 5,
      color: "#fff",
      marginBottom: 20,
      width:"70%"
    },
    headerContainer: {
      height: 60,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      
    }
    ,headertext:{
      color:"#fff",
      fontWeight:"bold",
      fontSize:20
    }
  });
  