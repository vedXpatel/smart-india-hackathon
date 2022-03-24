import React, {useState,useEffect} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  SafeAreaView,
  Platform,
  PermissionsAndroid
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-picker';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import AudioRecord from 'react-native-audio-record';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login.js';

import {useNavigation} from '@react-navigation/native';
import {db} from '../firebase';
import {addDoc, collection} from 'firebase/firestore/lite';
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';
import DocumentPicker from 'react-native-document-picker';
// import {Notifications, Notification} from 'react-native-notifications';
// import PushNotification from 'react-native-push-notification';
import {LocalNotification} from './LocalNotification';
import axios from 'axios';

// const Drawer = createDrawerNavigator();


const data = [
  {label: 'Earthquake', value: 'Earthquake'},
  {label: 'Tsunami', value: 'Tsunami'},
  {label: 'Cyclone', value: 'Cyclone'},
  {label: 'Flood', value: 'Flood'},
  {label: 'Wildfires', value: 'Wildfires'},
  {label: 'Drought', value: 'Drought'},
  {label: 'Heat Waves', value: 'Heat Waves'},
  {label: 'LandSlides', value: 'LandSlides'},
];



const User = () => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [image, setImage] = useState('');
  const [number, setNumber] = useState(0);
  const [requirements, setRequirements] = useState('');
  const [location,setLocation] = useState([]);
  const [latitude,setLatitude] = useState([]);
  const navigation = useNavigation();

  const [multipleFile, setMultipleFile] = useState([]);

  const handleNotification = () => {
      LocalNotification();
  }

  axios.get('https://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+location+'&appid=c00ade2e07b8527a06d0b858815fd0f7').then((response) => {
    console.log(response.data);
  });
 

  const selectMultipleFile = async () => {
    //Opening Document Picker for selection of multiple file
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
        //There can me more options as well find above
      });
      for (const res of results) {
        //Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);
      }
      //Setting the state to show multiple file attributes
      setMultipleFile(results);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from multiple doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  useEffect(()=>{
    try{
      Geolocation.getCurrentPosition(info => {setLocation(JSON.stringify(info.coords.longitude));
      setLatitude(JSON.stringify(info.coords.latitude))});
      // console.log(location.toString());
    } catch (e) {
      setLocation("Permission Denied");
      // console.log(location);
    }
  },[])


  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log(source);
        setImage(source);
      }
    });
  };

  const submitForm = async () => {

    try {
      const docRef = await addDoc(collection(db, 'userData'), {
        Disaster: value,
        Image: image,
        Location: 'Mumbai, India',
        People: number,
        Requirements: requirements,
      });
      console.log(docRef.id);
      navigation.navigate('Suggestion', {otherParam: value});
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{height: 1100}}>
          <Header
            leftComponent={{text: 'User', style: {color: '#fff', fontSize: 20}}}
            containerStyle={{
              backgroundColor: '#03045E',
              justifyContent: 'space-around',
              textColor: '#ffffff',
            }}
          />

          <Text style={styles.location}>Longitude: {location} </Text>
          <Text style={styles.location}>Latitude: {latitude} </Text>
          <View style={{marginLeft: 50, marginRight: 50, top: 50}}>
            <Text>{image.uri}</Text>
          </View>
          <View style={styles.imageUploadContainer}>
            <TouchableOpacity style={styles.uploadImage} onPress={selectImage}>
              <Text style={{marginTop: 5, fontSize: 15, color: 'white'}}>
                Upload Image
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.imageUploadContainer, {marginTop: 60}]}>
            <TouchableOpacity
              style={[styles.uploadImage]}
              onPress={selectMultipleFile }>
              <Text style={{marginTop: 5, fontSize: 15, color: 'white'}}>
                Upload Audio
              </Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity style={styles.uploadAudio} >
            <Text style={{marginTop: 5,fontSize: 15}}>Upload Audio</Text>
          </TouchableOpacity> */}
          <Text style={styles.disaster}>Choose the type of disaster</Text>
          <Dropdown
            data={data}
            placeholder="Select Disaster"
            onChange={item => {
              setValue(item.value);
              console.log(value);
            }}
            labelField="label"
            selectedTextStyle={{color: '#191F36'}}
            valueField="value"
            style={[styles.dropdown, isFocus && {borderColor: 'gray'}]}
          />
          <Text style={styles.people}>Number of people involved</Text>
          <TextInput
            style={styles.dropdown2}
            placeholder=""
            onChangeText={(text) => {
              setNumber(text);
            }}
          />
          <Text style={styles.additional}>
            Additional Information / Requirements
          </Text>
          <TextInput
            style={styles.requirements}
            placeholder="Additional Information"
            onChangeText={text => setRequirements(text)}
          />
          <TouchableOpacity style={styles.submit} onPress={submitForm}>
            <Text style={{color: 'white', marginTop: 7, fontSize: 15}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  location: {
    left: 100,
    top: 60,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
  },
  uploadImage: {
    width: 240,
    height: 35,
    top: 100,
    alignItems: 'center',
    backgroundColor: '#001061',
    borderRadius: 60,
  },
  uploadAudio: {
    width: 240,
    height: 35,
    left: 90,
    top: 365,
    alignItems: 'center',
    backgroundColor: '#001061',
  },
  dropdown: {
    width: 300,
    top: 170,
    borderColor: '#7a7a7a',
    borderRadius: 60,
    borderWidth: 1.2,
    left: 60,
    height: 27,
    padding: 20,
  },
  dropdown2: {
    width: 300,
    top: 230,
    borderColor: '#7a7a7a',
    borderRadius: 60,
    borderWidth: 1.2,
    left: 60,
    height: 37,
    fontSize: 15,
    paddingLeft: 20,
  },
  requirements: {
    top: 280,
    width: 300,
    left: 60,
    height: 40,
    borderColor: '#7a7a7a',
    borderWidth: 1,
    fontSize: 15,
    borderRadius: 60,
    paddingLeft: 20,
    color: '#010725',
  },
  submit: {
    width: 300,
    height: 40,
    left: 60,
    top: 330,
    alignItems: 'center',
    backgroundColor: '#001061',
    fontSize: 15,
    borderRadius: 60,
  },
  disaster: {
    top: 150,
    left: 65,
    fontSize: 17,
    color: '#010725',
  },
  people: {
    top: 210,
    left: 65,
    fontSize: 17,
    color: '#010725',
  },
  additional: {
    top: 260,
    left: 65,
    fontSize: 17,
    color: '#010725',
  },
  imageUploadContainer: {
    width: 300,
    height: 157,
    left: 50,
    top: 92,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#7a7a7a',
    alignItems: 'center',
  },
});

export default User;
