import { StyleSheet, View, Text, Image,  SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Google api key
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
// import our actions from our slices
import { setDestination, setOrigin } from '../slices/navSlice';
// 'react-native-web' doesn't work, import directly from 'react-native'
// import { SafeAreaView } from 'react-native-web'

const HomeScreen = () => {
  const dispatch = useDispatch();
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
        {/* Autocomplete functionality */}
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            }
          }} 
          onPress={(data, details = null) => {
            // console.log(details.geometry.location)
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder="Where From?"
        />
        {/* NavOptions is self closing */}
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({});