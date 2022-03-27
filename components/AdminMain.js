import React, {useState, useEffect} from 'react';
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
import {collection, getDocs} from 'firebase/firestore';
import {Header, Icon} from 'react-native-elements';
import {db} from '../firebase';
// import {database} from './firebaseNew';
import {useNavigation} from '@react-navigation/native';

const querySnapshot = getDocs(collection(db, 'userData'));

const AdminMain = () => {
  // const readData = ref(db,'victims/')
  // onValue(readData,(snapshot) => {
  //     const data = snapshot.val();
  //     setInfo(postElement,data);
  // })

  const navigation = useNavigation();
  // console.log(info);
  const [dataArray, setDataArray] = useState([]);
  // useEffect(() => {
  //     db.ref('userData').once('value', function (snapshot) {
  //         console.log(snapshot.val())
  //         setDataArray(...data, snapshot.val());
  //    });
  // },[]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{height: 1100}}>
          <Header
            leftComponent={{
              text: 'Admin',
              style: {color: '#fff', fontSize: 20},
            }}
            containerStyle={{
              backgroundColor: '#03045E',
              justifyContent: 'space-around',
              textColor: '#ffffff',
            }}
          />
          <TouchableOpacity style={styles.disaster} onPress= {()=>navigation.navigate('AdminInfo',{otherParam:'Tsunami'})} >
            <Text style={styles.disasterName}>Tsunami</Text>
            <Text style={styles.location}>Mumbai, India</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.disaster, {marginTop: 25 , backgroundColor : 'yellow'}]} onPress= {()=>navigation.navigate('AdminInfo',{otherParam:'Earthquake'})}>
            <Text style={styles.disasterName}>Earthquake</Text>
            <Text style={styles.location}>Bhuj, India</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.disaster, {marginTop: 25 , backgroundColor: 'orange'}]} onPress= {()=>navigation.navigate('AdminInfo',{otherParam:'Cyclone'})}>
            <Text style={styles.disasterName}>Cyclone</Text>
            <Text style={styles.location}>Vizag, India</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.disaster, {marginTop: 25 , backgroundColor:'lightblue'}]} onPress= {()=>navigation.navigate('AdminInfo',{otherParam:'Cloud Burst'})}>
            <Text style={styles.disasterName}>Cloud Burst</Text>
            <Text style={styles.location}>Roorkee, India</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.disaster, {marginTop: 25 , backgroundColor:'brown'}]} onPress= {()=>navigation.navigate('AdminInfo',{otherParam:'LandSlide'})}>
            <Text style={styles.disasterName}>Landslides</Text>
            <Text style={styles.location}>Manali, India</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.disaster, {marginTop: 25 , backgroundColor :'grey'}]} onPress= {()=>navigation.navigate('AdminInfo',{otherParam:'Flood'})}>
            <Text style={styles.disasterName}>Flood</Text>
            <Text style={styles.location}>Guwahati, India</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  disaster: {
    width: 296,
    height: 65,
    left: 55,
    top: 121,
    // borderWidth: 1,
    borderShadow: 2,
    borderColor: 'gray',
    padding: 5,
    fontSize: 17,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    textAlign :'center',
    paddingTop : 15,
  },
  location: {
    left: 150,
    top: -20,
    fontSize: 17,
    fontStyle: 'italic',
  },
  disasterName: {
    top: 2,
    left: 10,
    fontSize: 17,
  },
});

export default AdminMain;
