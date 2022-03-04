import { StyleSheet, View, Text, Image,  SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from './components/NavOptions'
// 'react-native-web' doesn't work, import directly from 'react-native'
// import { SafeAreaView } from 'react-native-web'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100, height: 100, resizeMode: 'contain'
          }}
          source={{
            uri:"https://links.papareact.com/gzs",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({});