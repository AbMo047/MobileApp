import { NavigationContainer, TabActions } from "@react-navigation/native";
import * as React from "react";
import HomeScreen from "./components/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorite from "./components/FavoritePage";
import { FontAwesome } from "@expo/vector-icons";
import NewBooks from "./components/NewBooks";
import {Book} from './books'
import { useState } from "react";


const App = () => {
  const Tab = createBottomTabNavigator();
  const [favorite, setFavorite] = useState<Book[]>([]);
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{
            tabBarIcon: ({color, size}) => <FontAwesome name="home" size={size} color={color} />
        }}>
        {
          () => <HomeScreen favorite={favorite} setFavorite={setFavorite}></HomeScreen> 
        }  
        </Tab.Screen>
        <Tab.Screen name="New Books" options={{
            tabBarIcon: ({color, size}) => <FontAwesome name="archive" size={size} color={color} />
        }}>
          {
            () => <NewBooks favorite={favorite} setFavorite={setFavorite}></NewBooks>
          }
           
        </Tab.Screen>
        <Tab.Screen name="Favorite" options={{
            tabBarIcon: ({color, size}) => <FontAwesome name="star" size={size} color={color} />
        }}>
          {
            () => <Favorite favorite={favorite} setFavorite={setFavorite}></Favorite>
          }
        </Tab.Screen>
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;