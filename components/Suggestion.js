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
import {Header, Icon} from 'react-native-elements';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const suggestionArray = [
    '1. Seek higher ground. Do not wait for instructions',
    '2. Use a stick to walk through water to understand the depth.',
    '3. Do not try to drive over a flooded road.If your car stalls abandon it immediately and seek an alternate route.',
    '4. Turn off gas and electricity connections',
    '5. Be ready to evacuate',
  ];

  return (
    <View style={{}}>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        containerStyle={{
          backgroundColor: '#03045E',
          justifyContent: 'space-around',
        }}
      />
      <Text style={styles.recorded}> Your response has been recorded </Text>
      <Text style={styles.recorded1}>
        Till we arrive, we suggest you to follow these steps
      </Text>
      <Text style={styles.arr0}> {suggestionArray[0]} </Text>
      <Text style={styles.arr1}> {suggestionArray[1]} </Text>
      <Text style={styles.arr2}> {suggestionArray[2]} </Text>
      <Text style={styles.arr3}> {suggestionArray[3]} </Text>
      <Text style={styles.arr4}> {suggestionArray[4]} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recorded: {
    position: 'absolute',
    left: 60,
    right: 30,
    top: 100,
    fontFamily: 'Inter-Regular',
    fontWeight: 'regular',
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.374,
    color: Colors.black,
  },
  recorded1: {
    marginRight: 0,
    position: 'absolute',
    marginLeft: 17,
    top: 145,
    fontFamily: 'Inter-Regular',
    fontWeight: 'regular',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.374,
    color: Colors.black,
  },
  arr0: {
    marginRight: 20,
    position: 'absolute',
    left: 15,
    top: 218,
    fontFamily: 'Inter-Regular',
    fontWeight: 'regular',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.374,
    color: Colors.black,
  },
  arr1: {
    marginRight: 20,
    position: 'absolute',
    left: 15,
    top: 300,
    fontFamily: 'Inter-Regular',
    fontWeight: 'regular',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.374,
    color: Colors.black,
  },
  arr2: {
    marginRight: 20,
    position: 'absolute',
    left: 15,
    top: 400,
    fontFamily: 'Inter-Regular',
    fontWeight: 'regular',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.374,
    color: Colors.black,
  },
  arr3: {
    marginRight: 20,
    position: 'absolute',
    left: 15,
    top: 500,
    fontFamily: 'Inter-Regular',
    fontWeight: 'regular',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.374,
    color: Colors.black,
  },
  arr4: {
    marginRight: 20,
    position: 'absolute',
    left: 15,
    top: 600,
    fontFamily: 'Inter-Regular',
    fontWeight: 'regular',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.374,
    color: Colors.black,
  },
});

export default Login;
