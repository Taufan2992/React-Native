import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export default function Waystodo({navigation}) {
    const [isLoading, setIsLoading] = useState(false);

    // const handleOnPress = async () => {
    //     try {
    //         const config = {
    //             headers: {
    //             'Content-type': 'application/json',
    //             },
    //         };
        
    //         const body = JSON.stringify(form);
    //         setIsLoading(true)
    //         const response = await axios.post('https://api.kontenbase.com/query/api/v1/d4092d20-bf08-4b97-a40f-d9cce26be7ea/auth/login', body, config);
    //         // console.log(response);
    //         setIsLoading(false)           
    //         if (response) {
    //             await AsyncStorage.setItem('token', response.data.token);
    //         }
            
    //         const value = await AsyncStorage.getItem('token');
    //         if (value !== null) {
    //             console.log(value);
    //             navigation.navigate("Users")
    //         }
                
    //     } catch (error) {
    //         console.log(error);
    //         alert(error.response.data.message);
    //         setIsLoading(false)           

    //     }
    // };

    return (
        <View style={style.container}>
            <StatusBar />

            <Image
              source={{ uri: 'https://res.cloudinary.com/drlr20stb/image/upload/v1661672915/ReactNative/accept-request_1_vqxwik.png'}}
              style={style.image}
            />

            <View>
                <Text style={style.waysText}>Ways <span style={{color: "#B82020"}}>To</span><span style={{color: "#FF5555"}}>Do</span></Text>
            </View>

            <View>
                <Text style={style.labelText}>Write your activity and finish your activity.
                Fast, simple and easy to use</Text>
            </View>

            <TouchableOpacity style={style.buttonLogin} onPress={() => navigation.navigate("Login")}>
                <Text style={style.textButton}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonRegister} onPress={() => navigation.navigate("Register")}>
                <Text style={style.textButton}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

// Create Variable for CSS
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    color: 'orange',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  labelText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center"
  },
  waysText: {
    fontSize: 32,
    marginBottom: 15,
    textAlign: "center",
    fontWeight:"bold"
  },

  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  buttonLogin: {
    backgroundColor: 'red',
    height: 40,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 20
  },
  buttonRegister: {
    backgroundColor: 'grey',
    height: 40,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 20
  },
  image: {
    width: 256,
    height: 183,
    marginHorizontal: "auto",
    marginBottom: 30
  },
})