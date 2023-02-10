import React, {useState, useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../store/actions/user';
import { useDispatch } from 'react-redux';

export default function DrawerContent(props) {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  useEffect(()=>{
    AsyncStorage.getItem("current").then((result)=>{
      let user = JSON.parse(result);
      setUser(user)
    })
  }, [])

  function signout(){
    AsyncStorage.removeItem("current").then(()=>{
        dispatch(logout());
    })
  }

  return (
    <DrawerContentScrollView {...props} >
      <Text style={{ padding: 15, fontSize: 30, color: "white", fontWeight: "bold", marginTop: 30 }}>{`${user.fullname}`}</Text>
      {
        user.isAmbassador ? <Text style={{ marginLeft: 15, fontSize: 20, color: "white", fontWeight: "bold", marginBottom: 30 }}>{"(Ambassador)"}</Text>
        : <></>
      }
      
      <DrawerItemList {...props} />
      <TouchableOpacity onPress={signout}>
          <Text style={{color: "white", marginLeft: 20}}>Log out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}