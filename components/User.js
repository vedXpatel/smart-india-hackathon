import React, {useState} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import {Header, Icon} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-picker';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AudioRecord from 'react-native-audio-record';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login.js';

const Drawer = createDrawerNavigator();


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
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [image, setImage] = useState('');

  const [location, setLocation] = useState('Location');

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

  const options = {
    sampleRate: 16000,  // default 44100
    channels: 1,        // 1 or 2, default 1
    bitsPerSample: 16,  // 8 or 16, default 16
    audioSource: 6,     // android only 
    wavFile: 'test.wav' // default 'audio.wav'
  };

  const onStartRecord = async () => {
    const path = 'hello.m4a';
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    console.log('audioSet', audioSet);
    const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);
    this.audioRecorderPlayer.addRecordBackListener(e => {
      this.setState({
        recordSecs: e.current_position,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.current_position),
        ),
      });
    });
    console.log(`uri: ${uri}`);
  };

  AudioRecord.init(options);


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{height: 1100}}>
          <Header
            leftComponent={{ text: 'NDRF', style:{color: '#fff' ,fontSize: 20}}}
            containerStyle={{
              backgroundColor: '#03045E',
              justifyContent: 'space-around',
              textColor: '#ffffff',
            }}
          />
          <Drawer.Navigator>
            <Drawer.Screen name="Login" component={Login} />
          </Drawer.Navigator>
          <Text style={styles.location}>{location}</Text>
          <View style={{marginLeft: 50,marginRight:50,top: 50,}}>
            <Text>{image.uri}</Text>
          </View>
          <View style={styles.imageUploadContainer}>
          <TouchableOpacity style={styles.uploadImage} onPress={selectImage}>
            <Text style={{marginTop: 5,fontSize: 15,color:'white'}}>Upload Image</Text>
          </TouchableOpacity>
          </View>
          <View style={[styles.imageUploadContainer, {marginTop:60,}]}>
          <TouchableOpacity style={[styles.uploadImage]} onPress={selectImage}>
            <Text style={{marginTop: 5,fontSize: 15,color:'white'}}>Upload Audio</Text>
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
              setIsFocus(false);
            }}
            labelField="label"
            selectedTextStyle={{color:'#191F36'}}
            valueField="value"
            style={[styles.dropdown, isFocus && {borderColor: 'gray'}]}
          />
          <Text style={styles.people}>Number of people involved</Text>
          <TextInput
            style={styles.dropdown2}
            placeholder=""
          />
          <Text style={styles.additional}>
            Additional Information / Requirements
          </Text>
          <TextInput
            style={styles.requirements}
            placeholder="Additional Information"
          />
          <TouchableOpacity style={styles.submit}>
            <Text style={{color: 'white', marginTop: 7,fontSize: 15}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  location: {
    left: 170,
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
    color:'blue',
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
    fontSize: 17,color: '#010725',
  },
  additional: {
    top: 260,
    left: 65,
    fontSize: 17,color: '#010725',
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
  }
});

export default User;
