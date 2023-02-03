import { Text, Center, Box, ScrollView, HStack,VStack, Image } from 'native-base';
import { StyleSheet,ImageBackground} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import ButtonGradient from "./ButtonGradient";

function Payment() {
return (
 <ImageBackground source={require('./procom.jpg')} resizeMode="cover" style={styles.image}>  
 <Box flex={1} safeArea
    py={10}>
    <Center pb={15}>
    <Text color={'#FFFFFF'} fontSize={14} bold
    >
    Payment Options
    </Text>
    </Center>
    <Box h='full' px={7} py={20}>
<ScrollView showsVerticalScrollIndicator={false}>
<VStack space={7} mt={7}>
<HStack
alignItems="center"
bg={"#FFFFFF"}
px={7}
py={1}
justifyContent='space-between'
rounded={5}>
<Box>
<Image source={require("./ezP.png")}
alt="easypaisa"
resizeMode='contain'
w={60}
h={70} />
</Box>
<Ionicons name="checkmark-circle" size={30} color='#3f17d1' />
</HStack>
<HStack
alignItems="center"
bg={"#FFFFFF"}
px={3}
py={1}
justifyContent='space-between'
rounded={5}>
<Box>
<Image source={require("./wire.png")}
alt="wiretransfer"
resizeMode='contain'
w={70}
h={70} />
</Box>
<FontAwesome name="circle-thin" size={30} color='#3f17d1' />
</HStack>
</VStack>
<ButtonGradient text={"Next"} style={styles.gradient}/>
</ScrollView>
</Box>
</Box>
</ImageBackground>
);
}
const styles = StyleSheet.create({
 
  image: {
    flex: 1,
    justifyContent: "center",
  },
  gradient: {
      width: "80%",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      marginBottom: 26,
      marginLeft:40,
    },
  
});
export default Payment;