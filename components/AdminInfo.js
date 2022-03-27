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
  Image,
  TouchableOpacity,
} from 'react-native';

import {Header, Icon} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';

const AdminInfo = (props) => {
    
  const {otherParam} = props.route.params;
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={{height: 1100}}>
            <Header
              centerComponent={{
                text: otherParam,
                style: {color: '#fff', fontSize: 20},
              }}
              containerStyle={{
                backgroundColor: '#03045E',
                justifyContent: 'space-around',
                textColor: '#ffffff',
              }}
            />
            <Image source={require('../images/cyclone.jpg')} style={{marginTop:20,marginLeft:60,width: 300,height:200,}} />
              <Text style={{marginLeft: 60,fontSize: 17, marginTop: 40}}>Location: Vizag</Text>
              <Text style={{marginLeft: 60,fontSize: 17, marginTop: 40}}>Requirements: Water, Food               </Text>
              <Text style ={{marginLeft:60, fontSize: 17, marginTop: 40}}
              >No of people stuck : 200</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default AdminInfo;
