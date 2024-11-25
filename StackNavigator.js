import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartingScreen from "./screen/StartingScreen";
import HomeScreen from "./screen/HomeScreen";
import RegisterScreen from "./screen/RegisterScreen";
import QuizScreen from "./screen/QuizScreen";
import ResultsScreen from "./screen/ResultsScreen";
import LeaderboardScreen from "./screen/LeaderboardScreen";
import InstructionScreen from "./screen/InstructionScreen"

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartingScreen"
          component={StartingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InstructionScreen"
          component={InstructionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LeaderboardScreen"
          component={LeaderboardScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
