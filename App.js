import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store'
import tw from 'twrnc'
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
            <KeyboardAvoidingView 
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
              style={tw`flex-1`}>
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
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>

   
    
  );
}


