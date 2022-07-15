import React from "react";
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

export const ShowItemsList = ({item}) => {

  const navigation = useNavigation();

  const {title, author, source, description} = item;

  return (

    <TouchableOpacity activeOpacity={0.5} onPress={() => {
      navigation.navigate('DetailsScreen', {item})
    }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title.length > 40 ? `${title.slice(0, 40)}…` : title}</Text>
        </View>
        <View key={source.id}>
          <Text
            style={styles.descr}>Description: {description.length > 60 ? `${description.slice(0, 60)}…` : description}</Text>
        </View>
      </View>

    </TouchableOpacity>

  )

}


const styles = StyleSheet.create({

  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
    textShadowColor: 'black'
  },
  title: {
    paddingBottom: 10,
    fontSize: 20,
    color: '#eee',
    letterSpacing: 1,
    fontWeight: '600'
  },
  descr: {
    fontSize: 16,
    fontWeight: '300',
    letterSpacing: 0.1,
    color: '#7f7f7f'
  },
});