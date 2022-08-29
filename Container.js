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
import ListTodo from "./src/list-todo"
import DetailList from "./src/detail-list"

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
                        iconName = focused ? 'list-circle' : 'list-circle-outline'
                    } else if(route.name == 'Add_list'){
                        iconName = focused ? 'reader' : 'reader-outline'
                    } else if(route.name == 'Add_category'){
                        iconName = focused ? 'shapes' : 'shapes-outline'
                    }

                    return <Ionicons name={iconName} size={20} color='red' />
                },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'grey'
            })
        }
        >
            <Tab.Screen name='List-todo' component={ListTodo}/>
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
                <Stack.Screen name="Detail-list" component={DetailList} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="List-todo" component={MyTab}/>
                <Stack.Screen name="Add_list" component={Addlist}/>
                <Stack.Screen name="Add_category" component={Addcategory}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}