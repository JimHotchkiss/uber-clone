import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native'
import { React } from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Google api key
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch, useSelector } from 'react-redux';
// import our actions from our slices
import { setDestination, setOrigin, selectDestination, selectOrigin } from '../slices/navSlice';
// 'react-native-web' doesn't work, import directly from 'react-native'
// import { SafeAreaView } from 'react-native-web'
import NavOptions from '../components/NavOptions'
import NavFavorites from '../components/NavFavorites';


const HomeScreen = () => {
  const dispatch = useDispatch();
  const selectedOrigin = useSelector(selectOrigin)
  const selectedDestination = useSelector(selectDestination)

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        {console.log(selectedOrigin, selectedDestination)}
        <Image
          style={{
            width: 100, height: 100, resizeMode: 'contain'
          }}
          source={{
            uri:"https://links.papareact.com/gzs",
          }}
        />
        {/* { selectedOrigin && selectedDestination ?  <Text style={tw`ml-auto`}>
          New search
        </Text> : null} */}
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
        <NavFavorites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({});