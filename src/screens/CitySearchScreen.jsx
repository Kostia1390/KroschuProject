import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import CustomInput from '../components/CustomInput';
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from 'expo-image-picker';

const CitySearchScreen = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [image, setImage] = useState(null);
  const [requestStatus, setRequestStatus] = useState(null);



  const onSearch = () => {
    onCitySelect(); 
  };

  const onCitySelect = () => {
    navigation.navigate('MainScreens', { selectedCity: city });
  };

  const sendRequestToServer = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('image', {
      uri: image,
      type: 'image/jpeg', 
      name: 'photo.jpg',
    });

    try {
      setRequestStatus('Отправка запроса...');
      const response = await fetch('https://morning-escarpment-40202.herokuapp.com/process_image', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();

      if (data.letter) {
        setCity(prevCity => prevCity + data.letter);
      } else {
        console.log('Буква не была получена');
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    } finally {
      setRequestStatus(null);
      setImage(null);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setRequestStatus(null);
    }
  };

  return (
    <LinearGradient
      colors={ ["#a7ddef", "#3aa1c9"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        </TouchableOpacity>
        <CustomInput city={city} setCity={setCity} onSearch={onSearch} />
        <View style={{ width: 30, height: 30 }} />
      </View>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {image && (
        <TouchableOpacity style={styles.sendButton} onPress={sendRequestToServer}>
          <Text style={{ fontSize: 22, fontWeight: 'semibold' }}>Відправте запит на сервер</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.acceptButtonWrapper} onPress={pickImage}>
        <Text style={{ fontSize: 22, fontWeight: 'semibold' }}>Оберіть фото з галереї</Text>
      </TouchableOpacity>
      {requestStatus && <Text style={{ fontSize: 22, fontWeight: 'semibold', marginVertical: 20 }}>{requestStatus}</Text>}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%', 
        paddingTop: 40, 
        alignItems: 'center',
      },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
  },
  sendButton: {
    backgroundColor: "#fff",
    borderRadius: 7,
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,

  },
  acceptButtonWrapper: {
    backgroundColor: "#fff",
    borderRadius: 7,
    width: 280,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  goBackButton: {
    backgroundColor: "#fff",
    borderRadius: 7,
    width: 280,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:10,
    marginBottom: 20, 
  },

});

export default CitySearchScreen;