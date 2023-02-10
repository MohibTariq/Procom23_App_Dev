import React, { useEffect } from "react";
import { Text } from "react-native";

export default function NavigateExplore({navigation}){
    useEffect(()=>{
        navigation.navigate("Exp");
    }, [])
}