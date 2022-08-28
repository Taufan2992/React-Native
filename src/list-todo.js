import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, CheckBox} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";


export default function Listtodo() {

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
                <Text style={style.labelText}>Hi Radif</Text>
            </View>
            <View>
                <Text style={style.labelTextList}>200 List</Text>
            </View>

            <View>
                <TextInput 
                    style={style.textInput} 
                    placeholder="Search list..." 
                    onChangeText={(value) => handleOnChange('name', value)}
                    value={form.Name}
                />
            </View>

            <View style={style.viewButton}>
              <TextInput 
                    style={style.textInputView} 
                    placeholder="Name" 
                    onChangeText={(value) => handleOnChange('name', value)}
                    value={form.Name}
                />
              <TextInput 
                    style={style.textInputView} 
                    placeholder="Name" 
                    onChangeText={(value) => handleOnChange('name', value)}
                    value={form.Name}
                />
                <TextInput 
                    style={style.textInputView} 
                    placeholder="Name" 
                    onChangeText={(value) => handleOnChange('name', value)}
                    value={form.Name}
                />
          </View>

          <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor:"#DAEFFF"}}>
            <View style={{width: "70%", padding:10}}>
              <Text style={{fontWeight:"bold"}}>Study-Golang</Text>
              <Text style={{color:"grey", marginVertical:10}}>Learn golang to improve fundamentals and familiarize with coding.</Text>
              <Text style={{color:"grey"}}>19 July 2022</Text>
            </View>
            <View style={{width: "30%", padding:10}}>
              <TouchableOpacity style={{backgroundColor: '#81C8FF',height: 25,width: 70,borderRadius: 5,justifyContent: 'center',marginTop: 5,color:"white", textAlign:"center"}}>Study</TouchableOpacity>
            </View>
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
    fontWeight: "bold"
  },
  labelTextList: {
    fontSize: 12,
    marginBottom: 30,
    color : "red"
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
  textInputView: {
    height: 40,
    width: "33%",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    color: 'grey',
    padding: 10,
    margin: 2,
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },
  image: {
    width: 256,
    height: 183,
    marginHorizontal: "auto",
    marginBottom: 30
  },
  // containerCheck: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // checkboxContainer: {
  //   flexDirection: "row",
  //   marginBottom: 20,
  // },
  // checkbox: {
  //   alignSelf: "center",
  // },
  // labelCheck: {
  //   margin: 8,
  // },
})