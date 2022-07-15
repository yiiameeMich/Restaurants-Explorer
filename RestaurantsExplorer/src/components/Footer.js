import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const Footer = ({data, setArticles} ) => {

  const sortBy = (param) => {
    const sorted = data
      .map((item) => {
        return {
          ...item,
          [param]: item[param].replace(/["'`,.;:‘’<>]/gi, ''),
        };
      })
      .sort((a, b) => (a[param] > b[param] ? 1 : -1));
    setArticles(sorted);
  };

  return (

    <View style={styles.footer}>
      <View style={styles.iconCont}>
        <TouchableOpacity activeOpacity={0.4} onPress={() => sortBy('title')}>
          <View style={{flexDirection: 'column', alignItems: 'center',}}>
            <Text style={styles.iconText}> Sort by title </Text>
            <MaterialCommunityIcons name='order-alphabetical-ascending' size={36}
                                    color={'#eee'}></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4} onPress={() => sortBy('description')}>
          <View style={{flexDirection: 'column', alignItems: 'center',}}>
            <Text style={styles.iconText}> Sort by description </Text>
            <MaterialCommunityIcons name='sort-alphabetical-ascending' size={36}
                                    color={'#eee'}></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4} onPress={() => sortBy('publishedAt')}>
          <View style={{flexDirection: 'column', alignItems: 'center',}}>

            <Text style={styles.iconText}> Sort by date </Text>
            <MaterialCommunityIcons name='sort-clock-ascending-outline' size={36}
                                    color={'#eee'}></MaterialCommunityIcons>
          </View>
        </TouchableOpacity>
      </View>

    </View>

  )

};

const styles = StyleSheet.create({

  footer: {
    height: '13%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderTopColor: '#eee',
    borderTopWidth: 2
  },
  iconCont: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  iconText: {
    color: '#eee',
    fontWeight: '600'
  }

});

