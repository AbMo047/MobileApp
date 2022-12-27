import { View, Text, Image, StyleSheet, Button, Alert } from "react-native";
import Constants from "expo-constants";
import { Book } from "../books";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FavProps {
    favorite: Book[],
    setFavorite: (favorite: Book[]) => void
}
const Favorite = ({ favorite, setFavorite }: FavProps) => {

    const removeFavorite = () => {
        setFavorite([...favorite.filter((name,index)=> index.toString())]);
        Alert.alert("Deleting...")
        console.log(...favorite);
    }

    const storeData = async () => {
        await AsyncStorage.setItem("favorite", JSON.stringify(favorite));
      };
      const getData = async () => {
        const value : string | null = await AsyncStorage.getItem("favorite");
        if (value !== null) {
          let x : Book[] = JSON.parse(value);
          setFavorite(x)
        } else {
          alert("No Data found");
        }
      };
      useEffect(()=>{
          getData();
      },[])
      useEffect(()=>{
        storeData();
      },[favorite])

    return (
        <View style={styles.container}>
            {
                favorite.map(book => {
                    return <View style={styles.box} key={book.title}>
                        <Text>{book.title}</Text>
                        <Image style={{ width: 80, height: 80 }} source={{ uri: book.image }} />
                        <Button title="Remove" onPress={() => {
                            setFavorite(favorite.filter(item=>item.title!==book.title))
                        }}></Button>
                    </View>
                })
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
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
export default Favorite;