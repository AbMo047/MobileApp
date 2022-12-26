import { View, Text, Image, StyleSheet, ScrollView, Pressable, Alert } from "react-native";
import { Book } from "../books";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
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


    return (
        <View style={{ flex: 1, alignItems: "center", marginTop: 25, marginBottom: 25 }}>
            <ScrollView>
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
        height: 175,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        marginTop: 25
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        color: "white"
    },
    text: {
        fontSize: 8,
        lineHeight: 0,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

});
export default NewBooks;