import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const StartingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Kid's Quiz Game</Text>
      <Button
        color={"#E60C57"}
        title="Start"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texts: {
    fontSize: 40,
    marginBottom: 25,
  },
});

export default StartingScreen;
