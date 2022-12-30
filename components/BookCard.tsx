import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Alert, Image } from "react-native";
import { Card, Button } from "react-native-paper";
import { Book } from "../books";
interface BookCardInterface{
    bookTitle: string;
    bookImg: string;
    btnName: string;
    favorite: Book[],
    setFavorite: (favorite: Book[]) => void

}

const BookCard = ({bookTitle, bookImg, btnName, favorite,setFavorite}: BookCardInterface) => {
  return (
    <>
      <Card>
        <Card.Title title={bookTitle} style={{ flex: 1 }} />
        <Card.Content>
          <Image
            style={{
              width: 100,
              height: 130,
              alignItems: "center",
              margin: 22,
              marginTop: 1,
            }}
            source={{ uri: bookImg }}
          />
        </Card.Content>

        <Button
          onPress ={() => {
            setFavorite([...favorite, book]);
            Alert.alert(" Added to your favorite");
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          {btnName}
          <MaterialIcons name="add-box" size={16} color="white" />
        </Button>
      </Card>
    </>
  );
};

export default BookCard;
