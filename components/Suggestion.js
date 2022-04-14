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

const Suggestion = (props) => {
  const {otherParam} = props.route.params;

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
      <Text style={styles.recorded}> Your response has been recorded </Text>
      <Text style={styles.recorded1}>
        In the event of {otherParam} , we suggest you to follow these steps
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
    left: 15,
    top: 80,
    fontFamily: 'Inter-Regular',
    fontSize: 23,
    // lineHeight: 20,
    fontWeight: "500",
    letterSpacing: 0.374,
    textAlign: 'center',
    color: Colors.black,
    // marginBottom: 20,
  },
  recorded1: {
    marginRight: 10,
    position: 'absolute',
    marginLeft: 17,
    top: 145,
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    lineHeight: 20,
    // letterSpacing: 0.374,
    color: Colors.black,
    marginBottom: 0,
  },
  arr0: {
    marginRight: 20,
    // position: 'absolute',
    left: 15,
    top: 238,
    fontFamily: 'Inter-Regular',
    fontSize:16,
    lineHeight: 20,
    // letterSpacing: 0.374,
    color: Colors.black,
    marginBottom: 0,
  },
  arr1: {
    marginRight: 20,
    // position: 'absolute',
    left: 15,
    top: 270,
    fontFamily: 'Inter-Regular',
    fontSize:16,
    lineHeight: 20,
    // letterSpacing: 0.374,
    color: Colors.black,
    marginBottom: 0,
  },
  arr2: {
    marginRight: 20,
    // position: 'absolute',
    left: 15,
    top: 300,
    fontFamily: 'Inter-Regular',
    fontSize:16,
    lineHeight: 20,
    // letterSpacing: 0.374,
    color: Colors.black,
    marginBottom: 0,
  },
  arr3: {
    marginRight: 20,
    // position: 'absolute',
    left: 15,
    top: 330,
    fontFamily: 'Inter-Regular',
    fontSize:16,
    lineHeight: 20,
    // letterSpacing: 0.374,
    color: Colors.black,
    marginBottom: 0,
  },
  arr4: {
    marginRight: 20,
    // position: 'absolute',
    left: 15,
    top: 360,
    fontFamily: 'Inter-Regular',
    fontSize:16,
    lineHeight: 20,
    // letterSpacing: 0.374,
    color: Colors.black,
    marginBottom: 0,
  },
});

export default Suggestion;
