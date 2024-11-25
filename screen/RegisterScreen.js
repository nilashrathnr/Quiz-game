import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleRegister = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          marginTop: 50,
          marginBottom: 20,
        }}
      >
        Kid's Quiz Game
      </Text>

      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{
          height: 40,
          width: 250,
          textAlign: "center",
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
        }}
      />

      <TextInput
        placeholder="Enter Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
        style={{
          height: 40,
          width: 250,
          textAlign: "center",
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          padding: 5,
        }}
      />
      <Button color={"#E60C57"} title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
  },
  textInput: {
    margin: 10,
    width: "80%",
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
  },
});

export default RegisterScreen;
