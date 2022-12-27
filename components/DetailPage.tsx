import { View, Text, StyleSheet, Image } from "react-native";
import react from 'react'
import Constants from "expo-constants";
const Detail = ({route}:any) => {
    return (

            <View style={styles.box}>
                        <Text>{route.params.book.title}</Text>
                        <Image style={{ width: 80, height: 80 }} source={{ uri: route.params.book.image }} />
                        
                    </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: "#fff",
  
    },
    box: {
      alignItems: "center",
      width: 200,
      height: 200,
      paddingTop: 5,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 10
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    }
  
  });




export default Detail;