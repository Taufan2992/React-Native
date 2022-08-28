import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/Login";
import Register from "./src/Register";
import Waystodo from "./src/Waystodo"
import Addlist from "./src/add-list"
import Addcategory from "./src/add-category"
import Listtodo from "./src/list-todo"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="List-todo" component={Listtodo} 
        options={{headerShown: false}}/>
      <Stack.Screen name="Add_category" component={Addcategory} 
        options={{headerShown: false}}/>
      <Stack.Screen name="Add_list" component={Addlist} 
        options={{headerShown: false}}/>
        <Stack.Screen name="Waystodo" component={Waystodo} 
        options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}