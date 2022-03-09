import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import store 
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'
// Google Complete
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
// import dispatch and actions from Redux
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';


const NavigateCard = () => {
    const origin = useSelector(selectOrigin)
    const dispatch = useDispatch()
  return (
    <View>
        <Text>From: {origin ? origin.description : null}</Text>
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
            dispatch(setDestination({
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
          placeholder="Where To?"
        />
    </View>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})