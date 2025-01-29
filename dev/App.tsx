import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/index';
import Register from './App/register'; // Page d'inscription
import HomePage from './App/homePage'; // Page d'accueil
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Librairie d'icônes

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} // Cache l'en-tête
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={({ navigation }) => ({
            title: '', 
            headerStyle: {
              backgroundColor: '#fff',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()} // Navigation en arrière
                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}
              >
                <Ionicons name="arrow-back" size={24} color="#000" />
                <Text style={{ color: '#000', fontSize: 18 }}>Retour</Text>
              </TouchableOpacity>
              ),
            })}
        />
        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ headerShown: false }} // Cache l'en-tête
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
