import { View, Text, Image, StyleSheet, Button, Alert } from "react-native";
import Constants from "expo-constants";
import { Book } from "../books";


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

    return (
        <View style={styles.container}>
            {
                favorite.map(book => {
                    return <View style={styles.box} key={book.title}>
                        <Text>{book.title}</Text>
                        <Image style={{ width: 80, height: 80 }} source={{ uri: book.image }} />
                        <Button title="Remove" onPress={() => {
                            removeFavorite()
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