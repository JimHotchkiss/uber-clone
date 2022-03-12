import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'
// Access Redux state
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'
// Import stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackActions } from '@react-navigation/native'
// import NavigateCard
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {
  const origin = useSelector(selectOrigin)
  const Stack = createNativeStackNavigator()
  return (
    <View>
      {/* {console.log('mapScreen', origin)} */}
      <View style={tw`h-1/2`}>
        <Map/>
      </View>
      <View style={tw`h-1/2 `}>
        {/* These are the screens we'll nav through */}
        <Stack.Navigator>
          <Stack.Screen 
            name="NavigateCard" 
            component={NavigateCard} 
            options={{
              headerShown: false,
            }}/>

        {/* Ride Options Card */}
        <Stack.Screen 
            name="RideOptionsCard" 
            component={RideOptionsCard} 
            options={{
              headerShown: false,
            }}/>
        </Stack.Navigator>
      </View>
      
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})