import { View, Text, Image, StyleSheet, Button, Alert, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import { Book } from "../books";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

interface FavProps {
    favorite: Book[],
    setFavorite: (favorite: Book[]) => void
}
const Favorite = ({ favorite, setFavorite }: FavProps) => {
    const navigation : any = useNavigation();
    const storeData = async () => {
        await AsyncStorage.setItem("favorite", JSON.stringify(favorite));
    };

    const getData = async () => {
        const value: string | null = await AsyncStorage.getItem("favorite");
        if (value !== null) {
            let x: Book[] = JSON.parse(value);
            setFavorite(x)
        } else {
            alert("No Data found");
        }
    };

    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        storeData();
    }, [favorite])

    return (
        <View>
            <ScrollView>
                <View style={{  display: "flex",
        
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        }}>

                {
                    favorite.map(book => {
                        return <View style={styles.booksContainer} key={book.title}>
                            <Pressable onPress={(() => navigation.navigate("Detail", { book: book }))}>
                            <Text style={{ fontSize: 15, textAlign: "center", marginTop: 10 }}>{book.title}</Text>
                            <Image style={{ width: 100, height: 130, alignItems: "center", margin: 22, marginTop: 1 }} source={{ uri: book.image }} />
                            <Pressable style={{ borderWidth: 1, borderColor: "black", backgroundColor: "black", width: 100, margin: 22, marginTop: -25, borderRadius: 10 }} onPress={() => {
                                setFavorite(favorite.filter(item => item.title !== book.title))                                
                                Alert.alert("Verwijderd uit je favorieten")
                            }}><Text style={{ textAlign: "center", fontSize: 10, color: "white", padding: 5 }}>Verwijder uit je favorieten</Text></Pressable>
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
        borderColor:"grey",
        width: 150,
        height: 260,
        padding: 5,
        margin: 20,
        
    }
});
export default Favorite;