// LeaderboardScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LeaderboardScreen = () => {
  const leaderboardData = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
    // Add more data as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      {leaderboardData.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text>{item.name}</Text>
          <Text>{item.age} years old</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 10,
  },
});

export default LeaderboardScreen;
