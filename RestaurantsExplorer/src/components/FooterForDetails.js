import {Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function FooterForDetails({data}) {

  return (
    <View style={styles.footer}>
      <TouchableOpacity activeOpacity={0.5} style={styles.btnCont} onPress={()=>{
        Linking.openURL(data);
      }}>
        <Text style={styles.footText}>Open in browser</Text>
        <MaterialCommunityIcons name='monitor-eye' size={24} style={{color: '#eee'}}></MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({

  footer: {
    height: '13%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderTopColor: '#eee',
    borderTopWidth: 2
  },
  btnCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 5,
    padding: 10
  },
  footText: {
    color: '#eee',
    fontSize: 26,
    letterSpacing: 1,
    fontWeight: '600',
    padding: 10,
  },

});