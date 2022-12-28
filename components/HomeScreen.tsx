import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button, ScrollView, Alert, Pressable } from "react-native";
import Constants from "expo-constants";
import { Book } from "../books"
import { useNavigation } from "@react-navigation/native";

interface HomeProps {
  favorite: Book[],
  setFavorite: (favorite: Book[]) => void
}

const HomeScreen = ({ favorite, setFavorite }: HomeProps) => {
  const [books, setBooks] = useState<Book[]>([])
  const navigation : any = useNavigation();
  const apiCall = async (query: string) => {
    const data = await fetch(`https://api.itbook.store/1.0/search/${query}`);
    const res = await data.json();
    const x: Book[] = await res.books;
    setBooks(x);
  }
  const [text, setText] = useState("");
  return (
    <View>
      <ScrollView>
      <Text style={{ textAlign: "center", fontSize: 25, marginTop: 15 }}>Search a book :</Text>
      <TextInput onChangeText={text=>setText(text)} style={{ height: 40, margin: 30, borderWidth: 1, textAlign: "center", padding: 10,borderRadius : 10 }} placeholder="Type here you're book"></TextInput>
      <Pressable style={{borderWidth:2, height:40,margin:100, marginTop:-10, backgroundColor:"black",  borderRadius : 10}} onPress={() => { apiCall(text) }}>
        <Text style={{textAlign:"center",paddingTop:5, color:"white", fontSize:20}} onPress={()=> apiCall(text)}>Search</Text>
      </Pressable>
      {
        books.map(book=> {
          return <View style={styles.booksContainer} key={book.title}>
            <Pressable onPress={(()=>navigation.navigate("Detail",{book:book}))}>
              <Text style={{fontSize:15, textAlign:"center", marginTop:10}}>{book.title}</Text>
              <Image style={{width:150,height:180, alignItems:"center", margin:22,marginTop:1}} source={{uri:book.image}}/>
              <Pressable style={{borderWidth:1, borderColor:"black", backgroundColor:"black",width:150, margin:22,marginTop:-25, borderRadius : 10}} onPress={() => {
                  setFavorite(
                    [...favorite, book]
                  )
                  Alert.alert("Toegevoegd aan jouw favorieten")}}><Text style={{textAlign:"center", fontSize:15, color:"white", padding:5}}>Toevoegen aan je favorieten</Text></Pressable>
            
            </Pressable>
            
          </View>
        })
      }
      </ScrollView>
    </View>

  )
}
const styles = StyleSheet.create({
  booksContainer:{
    flex:1,
    flexDirection:"column",
    backgroundColor:"red",
    margin:5,
    marginTop:5,
    borderWidth:1,
    width:200,
    height:300
  }

});
export default HomeScreen;