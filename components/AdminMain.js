import React,{useState,useEffect} from 'react';
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
import { collection, getDocs } from "firebase/firestore"; 
import {Header, Icon} from 'react-native-elements';
import {db} from '../firebase';

const querySnapshot = getDocs(collection(db,'userData'));

const AdminMain = () => {
  const [dataArray,setDataArray] = useState([]);
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
          <TouchableOpacity style={styles.disaster}  >
            <Text style={styles.disasterName}>Tsunami</Text>
            <Text style={styles.location}>Mumbai, India</Text>
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
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    fontSize:17,
    borderRadius : 10,
  },
  location: {
      left: 150,
      top : -20,
      fontSize:17,
      fontStyle : "italic",
  },
  disasterName:{
      top:2,
      left: 10,
      fontSize:17,
  }
});

export default AdminMain;
