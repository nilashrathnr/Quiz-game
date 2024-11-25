import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
// import axios from "axios"; // Import Axios

const ResultsScreen = ({ navigation }) => {
  const route = useRoute();
  const { points } = route.params; // Extracting answers, points, username, and age from route params

  // Function to send points to the backend using Axios
  // const savePointsToDatabase = async (points) => {
  //   try {
  //     const response = await axios.post("http://localhost:19006/updateScore", {
  //       newScore: points,
  //     });
  //     // console.log("Score saved successfully:", response.data);
  //     // You can handle the response as needed
  //   } catch (error) {
  //     // console.error("Error saving score:", error);
  //     // Handle errors here
  //   }
  // };

  // Call this function when the component mounts to save the score to the database
  // useEffect(() => {
  //   savePointsToDatabase( points);
  // }, []);
  // console.log(route.params);
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View
        style={{
          marginTop: 35,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Your Results</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text>Questions Answered</Text>
        <Text>(10/10)</Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          height: 450,
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#E60C57",
            fontSize: 15,
            fontWeight: "500",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Score Card: {points} {/* Displaying the total score */}
        </Text>
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="checkcircle"
                  size={20}
                  color="green"
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="closecircle"
                  size={20}
                  color="red"
                />
              )}
            </View>
          )}
        />

        <Pressable
          style={{
            backgroundColor: "#E60C57",
            padding: 8,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 10,
            borderRadius: 5,
          }}
        >
          <Text
            onPress={() => navigation.navigate("LeaderboardScreen")}
            style={{ color: "white", textAlign: "center", fontSize: "bold" }}
          >
            Leaderboard
          </Text>
        </Pressable>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "#E60C57",
          padding: 8,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 20,
          borderRadius: 5,
        }}
      >
        <Text
          onPress={() => navigation.navigate("HomeScreen")}
          style={{ color: "white", textAlign: "center", fontSize: "bold" }}
        >
          Retry
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ResultsScreen;
