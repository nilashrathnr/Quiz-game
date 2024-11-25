import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const InstructionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 55 }}>
      <Image
        style={{
          height: 300,
          width: "100%",
          resizeMode: "contain",
          marginLeft: 10,
        }}
        source={require("../images/Instructionpage01.png")}
      />

      <View style={{ padding: 10 }}>
        <Text
          style={{
            textAlign: "center",
            color: "#E60C57",
            fontsize: 17,
            fontWeight: "600",
          }}
        >
          Rules
        </Text>
        <View
          style={{
            padding: 10,
            backgroundColor: "#F88379",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItem: "center" }}>
            <Text style={{ color: "white" }}>.</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              For each correct answer you get 10 points
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItem: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>.</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              There is no negative marking for wrong answer
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItem: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>.</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Each question has a time limit of 15 seconds
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItem: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>.</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              You should answer all the questions compulsarily
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("HomeScreen")}
        style={{
          backgroundColor: "#FFC928",
          padding: 14,
          width: 100,
          borderRadius: 15,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
        }}
      >
        <Text
          style={{ color: "#E60C57", fontWeight: "800", textAlign: "center" }}
        >
          Home
        </Text>
      </Pressable>
    </View>
  );
};

export default InstructionScreen;
