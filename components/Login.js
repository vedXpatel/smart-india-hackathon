import React, {useEffect, useState} from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { withNavigation } from 'react-navigation';

import {useNavigation} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from "react-native-login-screen";

const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigation = useNavigation();

  const signIn = (email, password) => {
    if (email === '111.fakep@gmail.com' && password === '44774477') {
      navigation.navigate('AdminMain');
      console.log(`logged in`);
    }
  };

  return (
    <View style = {styles.loginView}>
    <LoginScreen
  logoImageSource={require("../images/ndrf.png")}
  onLoginPress={() => {}}
  onHaveAccountPress={() => {}}
  onEmailChange={(email) => {}}
  onPasswordChange={(password) => {}}
  disableSocialButtons
/>
    </View>
    
  );
};

const styles = StyleSheet.create({

  loginView:{
    height:5000,
    marginTop: 150,

  },
  login: {
    position: 'absolute',
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: 50,
    letterSpacing: 0.374,
    color: Colors.black,
    marginTop: 171,
  },
  login_input: {
    paddingLeft: 20,
    height: 60,
    left: 0,
    right: 0,
    top: 372,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 350,
    borderRadius: 10,
    fontSize: 15,
  },
  login_password: {
    fontSize: 15,
    paddingLeft: 20,
    height: 60,
    left: 0,
    right: 0,
    top: 402,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    placeholderTextColor: 'gray',
    width: 350,
    borderRadius: 10,
  },
  login_button: {
    height: 46,
    top: 638,
    backgroundColor: '#007AFF',
    width: 350,
    borderRadius: 10,
    alignItems: 'center',
  },
  login_button_text: {
    top: 10,
    color: 'white',
    fontSize: 17,
  },
  forgotPassword: {
    color: 'blue',
    top: 711,
    right: 120,
  },
});

export default Login;
