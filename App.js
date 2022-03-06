import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './screens/HomeScreen'
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';

// Stack navigation
const Stack = createNativeStackNavigator()

// Setup Redux 
export default function App() {
  return (
   
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                  headerShown: false,
                }}/>
              <Stack.Screen 
                name="MapScreen" 
                component={MapScreen} />
              <Stack.Screen 
                name="EatsScreen" 
                component={EatsScreen} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>

   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
