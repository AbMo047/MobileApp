import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const SecondScreen = () => {
    const navigation : any = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
        <Text onPress={() => navigation.navigate("Home")}>Klik hier om terug te gaan</Text>
      </View>
    );
  }
  export default SecondScreen