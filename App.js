import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Test from "./Components/Test";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://wallpapers.com/images/hd/splashing-water-gradient-background-mobile-v5hlk4ta55rn5w3x.jpg",
        }}
        resizeMode="cover"
        style={styles.img}
      >
        <Text style={styles.txt}>Email</Text>
        <TextInput style={styles.imp} />
        <Text style={styles.txt}>Password</Text>
        <TextInput style={styles.imp} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.4,
  },
  txt: {
    fontSize: 22,
  },
  imp: {
    backgroundColor: "#888",
    width: "94%",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 12,
  },
});
