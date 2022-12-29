import { View, Text, Image, StyleSheet, ScrollView, Pressable, Alert, Button } from "react-native";
import { Book } from "../books";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
interface NewProps {
    favorite: Book[],
    setFavorite: (favorite: Book[]) => void
}


const NewBooks = ({ favorite, setFavorite }: NewProps) => {
    const [books, setBooks] = useState<Book[]>([])
    useEffect(() => {
        const apiCallNewBooks1 = async () => {
            const data = await fetch(`https://api.itbook.store/1.0/new`);
            const res = await data.json();
            const x: Book[] = await res.books;
            setBooks(x)
        }
        apiCallNewBooks1()
    }, [])

    const navigation: any = useNavigation();
    return (
        <View>
            <ScrollView>
                <View  style={{  display: "flex",
        backgroundColor: "yellow",
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        }}>
                {
                    books.map(book => {
                        return <View style={styles.booksContainer} key={book.title}>
                            <Pressable onPress={(() => navigation.navigate("Detail", { book: book }))}>
                            <Text style={{ fontSize: 15, textAlign: "center", marginTop: 10 }}>{book.title}</Text>
                            <Image style={{ width: 100, height: 130, alignItems: "center", margin: 22, marginTop: 1 }} source={{ uri: book.image }} />
                            <Pressable style={{ borderWidth: 1, borderColor: "black", backgroundColor: "black", width: 100, margin: 22, marginTop: -25, borderRadius: 10 }} onPress={() => {
                                setFavorite(
                                    [...favorite, book]
                                )
                                Alert.alert("Toegevoegd aan jouw favorieten")
                            }}><Text style={{ textAlign: "center", fontSize: 10, color: "white", padding: 5 }}>Toevoegen aan je favorieten</Text></Pressable>
                        </Pressable>
                        </View>
                    })
                }
                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    booksContainer: {
        justifyContent:"center",
        backgroundColor: "red",
        width: 150,
        height: 260,
        padding: 5,
        margin: 20,
        
    }

});
export default NewBooks;