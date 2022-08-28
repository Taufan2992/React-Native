import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Pages
import Login from "./src/Login";
import Register from "./src/Register";
import Waystodo from "./src/Waystodo"
import Addlist from "./src/add-list"
import Addcategory from "./src/add-category"
import Listtodo from "./src/list-todo"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab () {
    return(
        <Tab.Navigator
            screenOptions={({route}) =>({
                headerShown:false,

                tabBarIcon: ({focused}) =>{
                    let iconName

                    if(route.name == 'List-todo'){
                        iconName = focused ? 'journal' : 'journal-outline'
                    } else if(route.name == 'Add_list'){
                        iconName = focused ? 'list' : 'list-outline'
                    } else if(route.name == 'Add_category'){
                        iconName = focused ? 'bookmarks' : 'bookmarks-outline'
                    }

                    return <Ionicons name={iconName} size={20} color='red' />
                },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'grey'
            })
        }
        >
            <Tab.Screen name='List-todo' component={Listtodo}/>
            <Tab.Screen name='Add_list' component={Addlist}/>
            <Tab.Screen name='Add_category' component={Addcategory}/>
        </Tab.Navigator>
    )
}

export default function Container(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Waystodo" component={Waystodo} options={{headerShown: false}} />
                {/* <Stack.Screen name="DetailList" component={DetailList} options={{headerShown: false}} /> */}
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="List-todo" component={Listtodo}/>
                <Stack.Screen name="Add_list" component={Addlist}/>
                <Stack.Screen name="Add_category" component={Addcategory}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}