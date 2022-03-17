import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyApp from "./app/MyApp";

export default function App() {
  return <MyApp />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
