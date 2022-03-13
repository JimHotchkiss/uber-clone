import { Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { React } from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectOrigin, selectDestination, setDestination, setOrigin } from '../slices/navSlice'


const data = [
    {
        id: "123",
        icon: "home",
        location: "79 Valley Rd, San Anselmo, CA 94960",
        lat: 37.9908772, 
        lng: -122.5829394,
        description: "Home"
        
    },
    {
        id: "456",
        icon: "briefcase",
        location: "5900 Optical Crt, San Jose, CA",
        lat: 37.2547933, 
        lng: -121.783474,
        description: "Work"
       
    }
    
]
const NavFavorites = () => {


    const originCheck = useSelector(selectOrigin)
    const destinationCheck = useSelector(selectDestination)
    const dispatch = useDispatch()
    const navigation = useNavigation()


  return (
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View 
                style={[tw`bg-gray-200`, { height: 0.5 }]}
            />
        )}
        renderItem={({ item: { location, lat, lng, icon, description} }) => (
            <TouchableOpacity 
                style={tw`flex-row items-center p-5`}
                onPress={(data, details = null) => {
                    if (!originCheck) {
                        dispatch(setOrigin({
                            location: {"lat": lat, "lng": lng},
                            description: location,
                            place: description
                          }))

                    } else {
                        console.log('destination 2', description)
                        dispatch(setDestination({
                            location: {"lat": lat, "lng": lng},
                            description: location,
                            place: description
                          }))
                    }
                    navigation.navigate('MapScreen')
                  }}
                >
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-400 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{description}</Text>
                    <Text style={tw`text-gray-500`}>{location}</Text>
                </View>
            </TouchableOpacity>
        )}
      />
  )
}

export default NavFavorites

const styles = StyleSheet.create({})