import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";


export default function Addcategory() {

  const [form, setForm] = useState({
    name: '',
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
                <Text style={style.labelText}>Add Category</Text>
            </View>

            <View>
                <TextInput 
                    style={style.textInput} 
                    placeholder="Name" 
                    onChangeText={(value) => handleOnChange('name', value)}
                    value={form.Name}
                />
            </View>

            <TouchableOpacity style={style.button} onPress={handleOnPress}>
                <Text style={style.textButton}>Add Category</Text>
            </TouchableOpacity>

            <View>
                <Text style={style.listCategory}>List Category</Text>
            </View>

          <View style={style.viewButton}>
            <TouchableOpacity style={style.buttonStudy} onPress={handleOnPress}>
                <Text style={style.textButton}>Study</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonHomework} onPress={handleOnPress}>
                <Text style={style.textButton}>Home Work</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonWorkout} onPress={handleOnPress}>
                <Text style={style.textButton}>Workout</Text>
            </TouchableOpacity>
          </View>


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
  listCategory: {
    fontSize: 30,
    marginBottom: 20,
    marginTop:100,
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
  viewButton: {
    display: "flex",
    flexDirection: "row",
  },
  buttonStudy: {
    backgroundColor: '#81C8FF',
    height: 25,
    width: 70,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonHomework: {
    backgroundColor: '#FF8181',
    height: 25,
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 5,
    marginStart: 5
  },
  buttonWorkout: {
    backgroundColor: '#FFB681',
    height: 25,
    width: 70,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 5,
    marginStart: 5
  },
  image: {
    width: 256,
    height: 183,
    marginHorizontal: "auto",
    marginBottom: 30
  },
})