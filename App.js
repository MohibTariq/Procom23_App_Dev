import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,ImageBackground } from 'react-native';
import Profile from './Profile';
import Signup from './Signup';

export default function App() {
  return (
    <ImageBackground source={require('./img.jpg')} resizeMode="cover" style={styles.image}>
      {/* <Signup /> */}
      <Profile />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
