import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import store from Redux
import { useSelector } from 'react-redux'
import { selectDestination } from '../slices/navSlice'

const RideOptionsCard = () => {
  const destination = useSelector(selectDestination)
  return (
    <View>
      {console.log(destination.description)}
      <Text>{destination.description}</Text>
    </View>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})