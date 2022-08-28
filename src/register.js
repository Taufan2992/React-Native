import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export default function Register({navigation}) {
    const [form, setForm] = useState({
        firstName: '',
        email: '',
        password: '',
    });
    
    const handleOnChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleOnPress = async () => {
        try {
            const config = {
                headers: {
                'Content-type': 'application/json',
                },
            };
        
            const body = JSON.stringify(form);
        
            const response = await axios.post('https://api.kontenbase.com/query/api/v1/d4092d20-bf08-4b97-a40f-d9cce26be7ea/auth/register', body, config);
            console.log(response);
            
            if (response) {
                await AsyncStorage.setItem('token', response.data.token);
            }
                
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                console.log(value);
                navigation.navigate("#")
            }
                
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    return (
        <View style={style.container}>
            <StatusBar />

            <Image
              source={{ uri: '#'}}
              style={style.image}
            />

            <View>
                <Text style={style.labelText}>Register</Text>
            </View>

            <View>
                <TextInput 
                    style={style.textInput} 
                    placeholder="Name" 
                    onChangeText={(value) => handleOnChange('firstName', value)}
                    value={form.firstName}
                />
            </View>
            <View>
                <TextInput 
                    style={style.textInput} 
                    placeholder="email" 
                    onChangeText={(value) => handleOnChange('email', value)}
                    value={form.email}
                />
            </View>

            <View>
                <TextInput 
                    style={style.textInput} 
                    secureTextEntry={true} 
                    placeholder="password" 
                    onChangeText={(value) => handleOnChange('password', value)}
                    value={form.password}
                />
            </View>

            <TouchableOpacity style={style.button} onPress={handleOnPress}>
                <Text style={style.textButton}>Register</Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate("Login")} style={style.textBottom}>You already have an account? <Text style={{fontWeight: 'bold'}}>Login!</Text></Text>
        </View>
    );
}

// Create Variable for CSS
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  labelText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    color: 'grey',
    padding: 10,
    borderColor: 'grey'
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'red',
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
  textBottom: {
    color: 'grey', 
    marginTop: 5,
    textAlign: "center"
  }
})