import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View,TextInput, Alert, Button } from "react-native";
import Constants from "expo-constants";
import { Book } from "../books"

const HomeScreen = () => {
  const [books,setBooks] = useState<Book[]>([])
  const apiCall = async (query:string) => {
    const data = await fetch(`https://api.itbook.store/1.0/search/${query}`);
    const res = await data.json();
    const x : Book[] = await res.books;
    setBooks(x);
  }
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput style={{height:40,width:250, borderColor:"gray", borderWidth:1}}
      onChangeText={text => setText(text)}
      value={text}/>
      <Button title="Show Value" onPress={() => { apiCall(text)}}/>
      {
        books.map(book=> {
          return <View key={book.title}>
            <Text>{book.title}</Text>
            <Image style={{width:40, height:50}} source={{uri:book.image}}/>
            </View>
        })
      }
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;