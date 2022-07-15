import React from "react";
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons  from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from "@expo/vector-icons";

export const ShowCategoryIcon = ({item}) => {

  const {categories, name} = item;

  const iconReturner = categories.map(({name}) => {

    console.log({name})

    return (
      <View>
        <Ionicons name='pizza' size={24} color={'#eee'} />
      </View>

    )
    /*if (name === ('Pizzeria') || name ===('Italian Restaurant')) {
      return (
        <Ionicons name='pizza' size={24} color={'#eee'} />
      )
    } else if (name ===('Restaurant')) {
      return (
        <Ionicons name='wine' size={24} color={'#eee'} />

      )
    } else if (name ===('Seafood Restaurant') || name ===('Asian Restaurant')) {
      return (
        <MaterialCommunityIcons name='fish' size={24} color={'#eee'} />

      )
    } else if (name ===('Fast Food Restaurant') || name ===('Burger Joint')) {
      return (
        <Ionicons name='fast-food' size={24} color={'#eee'} />

      )
    } else {
      return (
        <Ionicons name='restaurant' size={24} color={'#eee'} />
      )
    }*/

  })

}