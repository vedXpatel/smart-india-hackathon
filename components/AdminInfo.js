import React,{useState} from 'react';
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

import { initializeApp } from 'firebase/app';
import { getDatabase ,ref,onValue} from "firebase/database";
const firebaseConfig = {
    "apiKey": "AIzaSyC6Kl26Y1kY35DRudHAsXA9EjHE0zu4Wvo",
    "authDomain": "disaster-data-extraction.firebaseapp.com",
    "databaseURL": "https://disaster-data-extraction-default-rtdb.firebaseio.com",
    "projectId": "disaster-data-extraction",
    "storageBucket": "disaster-data-extraction.appspot.com",
    "messagingSenderId": "403244136343",
    "appId": "1:403244136343:web:90b7b6190ee0e49533b6d2",
    "measurementId": "G-HMEZSZZ1DX"
  }

  const app = initializeApp(firebaseConfig);

  // Get a reference to the database service
  const database = getDatabase(app);

  const [info,setInfo] = useState([]);

const AdminInfo = () => {

    const readData = ref(db,'victims/')
    onValue(readData,(snapshot) => {
        const data = snapshot.val();
        setInfo(postElement,data);
    })

    console.log(info);

    return(
        
            <Text>
                this is shit
            </Text>
        
    )
}

export default AdminInfo;