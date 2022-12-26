import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button, ScrollView, Alert, Pressable } from "react-native";
import Constants from "expo-constants";
import { Book } from "../books"

interface HomeProps {
  favorite: Book[],
  setFavorite: (favorite: Book[]) => void
}

const HomeScreen = ({ favorite, setFavorite }: HomeProps) => {
  const [books, setBooks] = useState<Book[]>([])

  const apiCall = async (query: string) => {
    const data = await fetch(`https://api.itbook.store/1.0/search/${query}`);
    const res = await data.json();
    const x: Book[] = await res.books;
    setBooks(x);
  }
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, alignItems: "center", marginTop: 0 }}>
          <TextInput style={{ height: 40, width: 250, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => setText(text)}
            value={text} />
          <Button title="Show Value" onPress={() => { apiCall(text) }} />
          {
            books.map(book => {
              return <View style={styles.box} key={book.title}>
                <Text>{book.title}</Text>
                <Image style={{ width: 80, height: 80 }} source={{ uri: book.image }} />
                <Pressable style={styles.button} onPress={() => {
                  setFavorite(
                    [...favorite, book]
                  )
                  Alert.alert("Toegevoegd aan jouw favorieten")
                }}></Pressable>
              </View>
            })
          }
        </View>
      </ScrollView>
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
export default HomeScreen;