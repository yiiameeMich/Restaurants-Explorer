import React, {useState, useEffect, useLayoutEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {ImageBackground, SafeAreaView, StyleSheet, View, ActivityIndicator} from "react-native";
import Header from "../src/components/Header";
import {GetItemsList} from "../src/components/GetItemsList";
import {StatusBar} from "expo-status-bar";
import {Footer} from "../src/components/Footer";

export default function HomeScreen({navigation}) {

  const [isLoading, setLoading] = useState(true)
  const [articlesData, setArticlesData] = useState([])

  useEffect(() => {
    fetchAPI();
    return () => {

    }
  }, [])

  const fetchAPI = () => {
    const options = {
      method: 'GET',

    };

    fetch('https://newsapi.org/v2/everything?q=restaurants&apiKey=65498efcc9d4430a95cfe76a0033258b', options)
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false),
          setArticlesData([...articlesData, ...responseJson.articles])
      })
      .catch(err => console.error(err));
  }

  const background = {uri: 'https://i.pinimg.com/564x/c8/a7/c3/c8a7c3a22a8f1e23c11bfe498146f2d6.jpg'};

  if (isLoading) {

    return (

      <ImageBackground source={background} resizeMode={"cover"} style={styles.image}>
        <Header/>
        <View style={styles.container}>
          <ActivityIndicator size='large' color={'#fff'} style={{justifyContent: 'center'}}/>
        </View>
        <Footer data={articlesData}/>
      </ImageBackground>

    )

  }

  return (
    <ImageBackground source={background} resizeMode={"cover"} style={styles.image}>
      <Header/>
      <View style={styles.container}>
        <GetItemsList style={{width: '90%'}} data={articlesData}/>
      </View>
      <Footer data={articlesData} setArticles={setArticlesData} />
    </ImageBackground>
  )

}

const styles = StyleSheet.create({
  container: {
    height: '75%',
    paddingHorizontal: 30,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start'
  },

});