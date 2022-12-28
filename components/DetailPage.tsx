import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Linking, Button, Pressable } from "react-native";
const Detail = ({ route }: any) => {
  const navigation : any = useNavigation();
  return (

    <View style={styles.DetailContainer} >
      <Pressable onPress={()=> navigation.navigate('Home')}><Text style={{marginTop:25}}>Go back home</Text></Pressable>
      <Text style={{ textAlign: "center", marginTop:150,fontSize:25 }}>{route.params.book.title}</Text>
      <Image style={{ width: 200, height: 400,justifyContent:'center', alignItems:"center", marginTop:10, marginLeft:"auto", marginRight:"auto" }} source={{ uri: route.params.book.image }} />
      <Text style={styles.Text}>{route.params.book.subtitle}</Text>
      <Text style={styles.Text}>{route.params.book.isbn13}</Text>
      <Text style={styles.Text}>{route.params.book.price}</Text>
      <Text style={styles.Text}
      onPress={() => Linking.openURL(`${route.params.book.url}`)}>
  Klik hier voor URL van de boek.
</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  DetailContainer : {
    marginTop:25
  },
  Text:{
    textAlign:"center",
    fontSize:15,
    marginTop:10
  }
});




export default Detail;