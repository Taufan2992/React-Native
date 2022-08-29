import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export default function Addlist() {

  const [form, setForm] = useState({
    name: '',
    category: '',
    date: '',
    description: '',
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
  
      const response = await axios.post('#', body, config);
      console.log(response);
      
      if (response) {
          await AsyncStorage.setItem('token', response.data.token);
      }
          
  } catch (error) {
      console.log(error);
      alert(error.response.data.message);
  }
};

    return (
        <View style={style.container}>
            <StatusBar />

            <View>
                <Text style={style.labelText}>Add List</Text>
            </View>

            <View>
                <TextInput 
                    style={style.textInput} 
                    placeholder="Name" 
                    onChangeText={(value) => handleOnChange('name', value)}
                    value={form.Name}
                />
            </View>
            <View>
                <TextInput 
                    style={style.textInput} 
                    placeholder="Category" 
                    onChangeText={(value) => handleOnChange('category', value)}
                    value={form.Category}
                />
            </View>

            <View>
                <TextInput 
                    style={style.textInput}  
                    placeholder="Choose Date" 
                    onChangeText={(value) => handleOnChange('date', value)}
                    value={form.Date}
                    
                />
            </View>

            <View>
                <TextInput 
                    multiline = {true}
                    // numberOfLines={4}
                    style={style.textAreaInput} 
                    placeholder="Description" 
                    onChangeText={(value) => handleOnChange('description', value)}
                    value={form.Description}
                />
            </View>

            <TouchableOpacity style={style.button} onPress={handleOnPress}>
                <Text style={style.textButton}>Add List</Text>
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
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold"
  },
  waysText: {
    fontSize: 32,
    marginBottom: 15,
    textAlign: "center",
    fontWeight:"bold"
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
  textAreaInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    color: 'grey',
    padding: 10,
    borderColor: 'grey',
    height:100,
    textAlignVertical: 'top'
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
    marginTop: 25
  },
  image: {
    width: 256,
    height: 183,
    marginHorizontal: "auto",
    marginBottom: 30
  },
})