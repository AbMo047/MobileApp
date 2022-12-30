import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { Book } from "../books";
import { useNavigation } from "@react-navigation/native";
import { wrap } from "module";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Card, Button } from "react-native-paper";

interface HomeProps {
  favorite: Book[];
  setFavorite: (favorite: Book[]) => void;
}

const HomeScreen = ({ favorite, setFavorite }: HomeProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const navigation: any = useNavigation();
  const apiCall = async (query: string) => {
    const data = await fetch(`https://api.itbook.store/1.0/search/${query}`);
    const res = await data.json();
    const x: Book[] = await res.books;
    setBooks(x);
  };
  const [text, setText] = useState("");
  return (
    <View>
      <ScrollView>
        <Text style={{ textAlign: "center", fontSize: 25, marginTop: 15 }}>
          Search for a book :
        </Text>
        <TextInput
          onChangeText={(text) => setText(text)}
          style={{
            height: 40,
            margin: 30,
            borderWidth: 1,
            textAlign: "center",
            padding: 10,
            borderRadius: 10,
          }}
          placeholder="Type here you're book"
        ></TextInput>
        <Pressable
          style={{
            borderWidth: 2,
            height: 40,
            margin: 100,
            marginTop: -10,
            backgroundColor: "black",
            borderRadius: 10,
          }}
          onPress={() => {
            apiCall(text);
          }}
        >
          <Text
            style={{
              textAlign: "center",
              paddingTop: 5,
              color: "white",
              fontSize: 20,
            }}
            onPress={() => apiCall(text)}
          >
            Search <AntDesign name="search1" size={24} color="white" />
          </Text>
        </Pressable>
        <View
          style={{
            display: "flex",
            backgroundColor: "white",
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {books.map((book) => {
            return (
              <View style={styles.booksContainer} key={book.title}>
                <Pressable
                  onPress={() => navigation.navigate("Detail", { book: book })}
                >
                  <Card>
                    <Card.Title  title={book.title} style={{flex:1}}/>
                    <Card.Content>
                      <Image
                        style={{
                          width: 100,
                          height: 130,
                          alignItems: "center",
                          margin: 22,
                          marginTop: 1,
                        }}
                        source={{ uri: book.image }}
                      />
                    </Card.Content>

                    <Button
                     onPress={() => {
                      setFavorite([...favorite, book]);
                      Alert.alert("Toegevoegd aan jouw favorieten");
                    }}
                    style={{justifyContent: "center",
                    alignItems: "center",}}
                    >
                      Toevoegen  
                      <MaterialIcons name="add-box" size={16} color="black" /> 
                    </Button>
                  </Card>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  booksContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
    height: 260,
    padding: 5,
    margin: 20,
   
  },
});
export default HomeScreen;
