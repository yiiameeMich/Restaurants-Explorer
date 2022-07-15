import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ImageBackground, Image, ScrollView, ActivityIndicator} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FooterForDetails from "../src/components/FooterForDetails";
import {MaterialIcons} from '@expo/vector-icons';
import HeaderForDetails from "../src/components/HeaderForDetails";

export default function DetailScreen({route}) {


  const {
    item: {
      author,
      content,
      description,
      publishedAt,
      title,
      url,
      urlToImage,
      source
    }
  } = route.params;

  const {name, id} = source;

  const background = {uri: 'https://i.pinimg.com/564x/d2/06/39/d2063997cd200a30c7ee7c25e861b255.jpg'}

  const imageCheck = (data) => {

    if (data.includes('.png') || data.includes('.jpg') || data.includes('.jpeg')) {
      return <Image source={{uri: urlToImage}} style={styles.image}/>
    } else {
      return (<View style={styles.noImage}>
        <Text style={styles.noImageText}>SORRY, THIS ARTICLE HAS NO IMAGE</Text>
      </View>)
    }

  }

  const date = (date) => {
     return (
       date.slice(0, 10)
     )
  }

  return (
    <ImageBackground source={background} resizeMode={'cover'} style={styles.background}>
      <HeaderForDetails/>
      <View style={styles.container}>
        {imageCheck(urlToImage)}
        <ScrollView>
          <Text style={styles.title}>{title} </Text>
          <View>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description}>{content.length > 200 ? `${content.slice(0, 200)}` : content}</Text>
            <Text style={styles.date}>Publised at: {date(publishedAt)}</Text>
            <Text style={styles.author}>Author: {author} from {name}</Text>
          </View>
          <Text style={styles.trapToLink}>This article has interested you? If so,
            you can read a full article by clicking the button below</Text>
        </ScrollView>
      </View>
      <FooterForDetails data={url}/>
    </ImageBackground>
  )

}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '75%',
    paddingHorizontal: 10,
    paddingTop: 20
  },
  image: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#eee',
    width: 300,
    height: 200
  },
  noImage: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#eee',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noImageText: {
    fontSize: 28,
    color: '#eee',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'left',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    letterSpacing: -0.5
  },
  description: {
    color: '#eee',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'left',
    paddingTop: 10,
    paddingHorizontal: 20,
    letterSpacing: -0.5
  },
  trapToLink: {
    color: '#9f9f9f',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  date: {
    color: '#9f9f9f',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10
  },
  author: {
    color: '#9f9f9f',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
  }
)