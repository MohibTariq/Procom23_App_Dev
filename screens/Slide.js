import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";

// Default Sample Data
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Procom Blah blah!",
    subtitle: "Some more blah blah",
    image: Image.resolveAssetSource(require("../images/slide-1.jpeg")).uri,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Procom Blah blah Screen 2",
    subtitle: "Some more blah blah",

    image: Image.resolveAssetSource(require("../images/slide-2.jpeg")).uri,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Procom Blah blah Screen 3",
    subtitle: "Some more blah blah",

    // image: require("../images/Background-Img.png"),
    image: Image.resolveAssetSource(require("../images/23.png")).uri,
  },
];
// Default Props
const defaults = {
  height: "100%",
  width: Dimensions.get("window").width,
  delay: 5000,
};

// Default Image Item
const Item = ({ title, image, height, width, onPress, subtitle }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[styles.imageContainer, { height: height, width: width }]}
  >
    <Image
      resizeMode="stretch"
      source={{ uri: image }}
      style={[styles.image, { height: height }]}
    />
    <View style={styles.titleContainer}>
      {title && <Text style={styles.title}>{title} </Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  </TouchableOpacity>
);

// Default On Press Action
const handlePress = (item) => {
  console.log("Pressed", item.id);
};

// Carousal Component
export default function Carousal({
  data = DATA,
  height = defaults.height,
  width = defaults.width,
  delay = defaults.delay,
  onPress = handlePress,
  ItemElement = Item,
}) {
  const [selectedIndex, setselectedIndex] = useState(0);
  const scrollView = useRef();

  // Script which will only executed when component initilizes
  useEffect(() => {
    const fn = setInterval(() => {
      setselectedIndex((oldCount) =>
        oldCount === data.length - 1 ? 0 : oldCount + 1
      );
    }, delay);
    return () => {
      clearInterval(fn);
    };
  }, []);

  // Script will executed every time selectedIndex updates
  useEffect(() => {
    scrollView.current.scrollTo({
      animated: true,
      x: width * selectedIndex,
      y: 0,
    });
  }, [selectedIndex]);

  const setIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    setselectedIndex(Math.floor(contentOffset.x / viewSize.width));
  };
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setIndex}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.carousalContainer}>
          {data.map((item) => (
            <ItemElement
              key={item.id}
              height={height}
              width={width}
              {...item}
              onPress={() => onPress(item)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carousalContainer: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 20,
  },
  imageContainer: { backgroundColor: "yellow" },
  item: {
    backgroundColor: "rgba(91, 91, 91, 0.3)",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    paddingLeft: 10,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 10,
    color: "#fff",
  },
  image: {
    width: defaults.width,
    height: defaults.height,
  },
});
