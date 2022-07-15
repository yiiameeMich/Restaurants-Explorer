import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, Alert} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


export default function Header() {

  return (
    <View style={styles.header}>
      <View style={styles.leftSide}>
        <MaterialIcons name="food-bank" size={48} style={styles.logo}></MaterialIcons>
        <View style={{paddingBottom: 8}}>
          <Text style={styles.text}>Restaurant </Text>
          <Text style={styles.text}>Explorer</Text>
        </View>
      </View>
      <MaterialIcons name='info-outline' style={styles.info} onPress={() => {
        Alert.alert('About app', 'In this app you can: search for articles and news about restaurants and see ' +
          'the latest and the most actual information related to restaurants. \n\nTo see details just tap on article you`re' +
          'interested in. \n\nTo sort articles by title or description tap one of the buttons in the bottom of the screen.\n\n' +
          'If you want to read full article in the browser - tap the button  in the bottom on the details page.');
      }}></MaterialIcons>
    </View>
  )

};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '12%',
    borderBottomColor: '#eee',
    borderBottomWidth: 2
  },
  logo: {
    color: '#eee',
    paddingLeft: 30,
    paddingRight: 20,
    paddingBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  info: {
    color: '#eee',
    paddingLeft: 30,
    paddingRight: 20,
    paddingBottom: 13,
    fontSize: 36
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center'
  }
});