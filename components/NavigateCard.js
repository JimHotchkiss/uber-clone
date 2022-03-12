import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
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
    const today = new Date()
    const hour = today.getHours()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
   
      >
        <View>
          <Text style={
            tw`text-center py-5 text-xl`
          }>{
            hour >= 18 ? 'Good Evening, ' :
            hour >= 12 ? 'Good Afternoon, ' :
            'Good Morning, ' } Jimmy
          </Text>
          <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
              <GooglePlacesAutocomplete
                //  nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                placeholder="Where to?"
                styles={toInputBoxStyles}
                enablePoweredByContainer={false}
                query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language: 'en'
                }}

              onPress={(data, details = null) => {
                dispatch(setDestination({
                  location: details.geometry.location,
                  description: data.description
                }))

                dispatch(setDestination(null))
              }}
              fetchDetails={true}
              returnKeyType={"search"}
              
              minLength={2}
              
            
            />

            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
    
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})