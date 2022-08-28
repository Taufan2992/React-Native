import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Select } from "native-base";
import { FlatList } from "react-native-gesture-handler";

export default function Listtodo() {
  const [form, setForm] = useState({
    name: "",
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
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await axios.post("#", body, config);
      console.log(response);

      if (response) {
        await AsyncStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <View style={style.container}>
      <StatusBar />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 40,
        }}
      >
        <View>
          <Text style={style.labelText}>Hi Radif</Text>
          <Text style={style.labelTextList}>200 List</Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://res.cloudinary.com/drlr20stb/image/upload/v1661726857/ReactNative/orang_doxgcd.jpg",
            }}
            style={{ width: 60, height: 60, borderRadius:50, marginBottom:20}}
          />
        </View>
      </View>

      <View>
        <TextInput
          style={style.textInput}
          placeholder="Search list..."
          onChangeText={(value) => handleOnChange("name", value)}
          value={form.Name}
        />
      </View>

      <View style={style.viewButton}>
        <TextInput
          style={style.textInputView}
          placeholder="Choose Date"
          onChangeText={(value) => handleOnChange("date", value)}
          value={form.Name}
        />
        <Select
          placeholder="Category"
          backgroundColor="muted.100"
          borderColor="muted.100"
          style={style.textInputView}
        >
          <Select.Item label="Study" />
          <Select.Item label="Home Work" />
          <Select.Item label="Workout" />
        </Select>
        {/* <TextInput 
                    style={style.textInputView} 
                    placeholder="Category" 
                    onChangeText={(value) => handleOnChange('category', value)}
                    value={form.Name}
                /> */}
        <Select
          placeholder="Status"
          backgroundColor="muted.100"
          borderColor="muted.100"
          style={style.textInputView}
        >
          <Select.Item label="Done" />
          <Select.Item label="On Progres" />
        </Select>
        {/* <TextInput 
                    style={style.textInputView} 
                    placeholder="Status" 
                    onChangeText={(value) => handleOnChange('status', value)}
                    value={form.Name}
                /> */}
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#DAEFFF",
        }}
      >
        <View style={{ width: "70%", padding: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Study-Golang</Text>
          <Text style={{ color: "grey", marginVertical: 10 }}>
            Learn golang to improve fundamentals and familiarize with coding.
          </Text>
          <Text style={{ color: "grey" }}>19 July 2022</Text>
        </View>
        <View style={{ width: "30%", padding: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#81C8FF",
              height: 25,
              width: 70,
              borderRadius: 5,
              justifyContent: "center",
              marginTop: 5,
              color: "white",
              textAlign: "center",
            }}
          >
            Study
          </TouchableOpacity>
          <TouchableOpacity style={style.Markround}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Create Variable for CSS
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    color: "orange",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  labelText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  labelTextList: {
    fontSize: 12,
    marginBottom: 30,
    color: "red",
  },
  listCategory: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 100,
    fontWeight: "bold",
  },
  waysText: {
    fontSize: 32,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    color: "grey",
    padding: 10,
    borderColor: "grey",
  },
  textInputView: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    color: "grey",
    padding: 10,
    margin: 2,
    borderColor: "grey",
  },
  textAreaInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    color: "grey",
    padding: 10,
    borderColor: "grey",
    height: 100,
    textAlignVertical: "top",
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: "red",
    height: 40,
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 25,
  },
  viewButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: 256,
    height: 183,
    marginHorizontal: "auto",
    marginBottom: 30,
  },
  Markround: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
    marginTop: 20,
    marginHorizontal: 10,
  },
});
