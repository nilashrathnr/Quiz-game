import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 55 }}>
      <Image
        style={{
          height: 300,
          width: "100%",
          resizeMode: "contain",
          marginTop: 80,
        }}
        source={require("../images/QA-IMG.png")}
      />
      <Pressable
        onPress={() => navigation.navigate("QuizScreen")}
        style={{
          backgroundColor: "#FFC928",
          padding: 14,
          width: 150,
          borderRadius: 15,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
        }}
      >
        <Text
          style={{ color: "#E60C57", fontWeight: "800", textAlign: "center" }}
        >
          Quiz
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("InstructionScreen")}
        style={{
          backgroundColor: "#FFC928",
          padding: 14,
          width: 150,
          borderRadius: 15,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
        }}
      >
        <Text
          style={{ color: "#E60C57", fontWeight: "800", textAlign: "center" }}
        >
          Instructions
        </Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
