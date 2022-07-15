import React, {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, ImageBackground, FlatList, TextInput} from 'react-native';
import Header from './src/components/Header'
import {GetItemsList} from "./src/components/GetItemsList";
import {Footer} from "./src/components/Footer";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
          title: 'Restaurants Explorer',
          headerTranslucent: true,
        }}/>
        <Stack.Screen name='DetailsScreen' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  )


}


