import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

const HomeScreen = () => {
    const navigation : any = useNavigation();
    return (
      
      <View style={{borderColor:"black"}}>
        <Text style={{fontSize:25, textAlign:"center"}}>Welkom bij de mooiste applicatie</Text>
        <View style={{borderColor:"black"}}>
        
        <Text onPress={() => navigation.navigate("Detail")} style={{fontSize:12, textAlign:"center", textDecorationLine:"underline"}}>Klik hier om verder te gaan</Text>
        <Text onPress={() => navigation.navigate("Third")} style={{fontSize:12, textAlign:"center"}}>Klik hier om naar ergens anders te gaan</Text>
        </View>
      </View>
    );
  }

  export default HomeScreen
  
  