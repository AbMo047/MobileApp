import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Book } from "../books"

const HomeScreen = () => {
  const [books,setBooks] = useState<Book[]>([])
  useEffect(() => {
    const apiCall = async () => {
      const data = await fetch("https://api.itbook.store/1.0/search/mongodb%22");
      const res = await data.json();
      const x : Book[] = await res.books;
      setBooks(x);
    }
    apiCall();
  },[])
  return (
    <View style={styles.container}>
      {books.map(book => {
        return <View key={book.title}>
        <Text>{book.title}</Text>
        <Image style={{width:40, height:50}} source={{uri:book.image}}/>
        </View>
      })}
    </View>
  );
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