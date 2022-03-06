import { FlatList,Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
// "./images/uber-icon.jpeg"
// image: "https://links.papareact.com/3pn",
// image: "https://links.papareact.com/28w",
// image: require('./images/uber-icon.jpeg'),

const data = [
    {
        id: "123",
        title: "Get a ride", 
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food", 
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
 
]

const NavOptions = () => {
  return (
    <FlatList 
        data={ data }
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 m-2 bg-gray-200 w-40 rounded-lg shadow-sm`}>
                <View>
                    <Image
                        style={{
                            width: 120, height: 120, resizeMode: 'contain'
                          }}
                        source={{ url: item.image }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        type='antdesign'
                        name='arrowright'
                        color='white'
                    />
                  
                </View>
            </TouchableOpacity>
        )}
    />
  
  )
}

export default NavOptions
