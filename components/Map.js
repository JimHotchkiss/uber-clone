import { StyleSheet } from 'react-native'
import { React, useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc'
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env'

const Map = () => {
    // Note: origin.location.lat - this comes from the dispatch(setOrigin({ location: 'the pay load'}))
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    // useRef allows me to reference anything I want, in this case our map
    const mapRef = useRef(null)

    // useEffect runs when component re-renders. In this case we want to make 'origin' and 'destination' the dependanies. So when these are updated, useEffect is fired
    useEffect(() => {
      if (!origin || !destination) return;

      // Zoom & fit to the markers
      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: {top: 50, right: 50, bottom: 50, left: 50}
      })
    }, [origin, destination])
  return (
      <MapView
      // we use useRef to say 'point to the map'
        ref={mapRef}
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor='black'
          />
        )}
        {/* Origin marker */}
        {origin?.location && (
            <Marker 
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                }}
                title="Origin"
                description={origin.description}
                identifier="origin"
            />
        )}
        {/* Destination marker */}
        {destination?.location && (
            <Marker 
                coordinate={{
                    latitude: destination.location.lat,
                    longitude: destination.location.lng,
                }}
                title="Destination"
                description={destination.description}
                identifier="destination"
            />
        )}
      </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})