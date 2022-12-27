import { NavigationContainer, TabActions } from "@react-navigation/native";
import * as React from "react";
import HomeScreen from "./components/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "./components/FavoritePage";
import { FontAwesome } from "@expo/vector-icons";
import NewBooks from "./components/NewBooks";
import {Book} from './books'
import { useState } from "react";
import DetailPage from "./components/DetailPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNav = () => {
  const [favorite, setFavorite] = useState<Book[]>([]);
  return (
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
  )
}

const App = () => {
  
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
                <Stack.Screen name="App" component={TabNav} />
                <Stack.Screen name="Detail" component={DetailPage}/>
            </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;