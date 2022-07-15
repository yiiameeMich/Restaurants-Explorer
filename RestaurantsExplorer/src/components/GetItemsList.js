import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
} from "react-native";
import {ShowItemsList} from "./ShowItemsList";
import {Entypo} from "@expo/vector-icons";

export const GetItemsList = ({data}) => {

  const [inputValue, setInputValue] = useState('');

  const filtered = data.filter((item) => {
    return (item?.title.toLowerCase().includes(inputValue.toLowerCase()) ||
      item?.description.toLowerCase().includes(inputValue.toLowerCase())
    )
  });

  return (
    <>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={(value) => {
            setInputValue(value);
          }}
          placeholder={'Find a restaurant'}
          placeholderTextColor={'#eee'}
          autoCorrect={false}
          autoCapitalize={'none'}
        />
        <TouchableOpacity
          activeOpacity={0.5}>
          <Entypo name='magnifying-glass' size={32} color={'#eee'}></Entypo>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ShowItemsList item={item}/>
        )}/>
    </>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 10
  },
  input: {
    width: '85%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    color: '#eee',
  }
});
