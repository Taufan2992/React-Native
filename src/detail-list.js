import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Listtodo() {

  return (
    <View style={style.container}>
      <StatusBar />

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
          Learn Golang to improve fundamentals and familiarize with coding.
 Advantages of Go
Go has advantages over other languages, including:

Supports concurrency at the language level with fairly easy application
Supports data processing with multiple processors at the same time (parallel processing)
Have a garbage collector
The compilation process is very fast
It's not a hierarchical programming language and it's not strict OOP, giving developers the freedom to how to write code. 
Listing Material :

Installation
Setup Go Modules
Setup Gopath & Workspace
Go Command
Hello World
Variable
Tipe DataKonstanta
Operator
Condition
Loops
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
