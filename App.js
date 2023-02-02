import { StyleSheet, Text, View ,TextInput,ImageBackground,SafeAreaView,StatusBar, ScrollView } from 'react-native';
import About from './About';
import Competition from './Competition';
import Developer from './Developer';
import Profile from './Profile';
import Register from './Register';
import Signup from './Signup';
import Update from './Update';
export default function App() {
  return (
  <SafeAreaView style={styles.AndroidSafeArea}>
 
    <ImageBackground source={require('./img.jpg')} resizeMode="cover" style={styles.image}>
      {/* <Signup /> */}
      {/* <Profile /> */}
      {/* <Update /> */}
      {/* <Register  name={"Photography"}/> */}
      {/* <Competition name={"Photography"}/> */}
      {/* <About /> */}
     <Developer />
    </ImageBackground>
  
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  contentContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#000",
    height:"100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
  }
});
