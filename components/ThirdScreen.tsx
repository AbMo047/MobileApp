import React from "react";
import { View, Text } from "react-native";

const ThirdScreen = () => {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    return (
      <View>
        <Text>Shit</Text>
        {colors.map(color => (
                <View key={color} style={{height: 200, backgroundColor: color}}/>
            ))}
      </View>
    )
  }
  export default ThirdScreen