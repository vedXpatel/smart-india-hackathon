import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import Login from './components/Login.js';
import User from './components/User.js';
import Suggestion from './components/Suggestion.js';
import AdminMain from './components/AdminMain.js';


import {NavigationContainer} from '@react-navigation/native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Login">
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="User" component={User} />
        {/* <Stack.Screen name="Suggestion" component={Suggestion} /> */}
        {/* <Stack.Screen name="AdminMain" component={AdminMain} /> */}
        {/* <Stack.Screen name="AdminInfo" component={AdminInfo} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
