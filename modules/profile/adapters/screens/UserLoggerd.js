import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,Platform,  TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../config/utils/firebase'
const backImage = require("../../../../assets/backImage.png");
import * as ImagePicker from 'expo-image-picker';

export default function Signup({ navigation }) {

  const [email, setEmail] = useState('');
  const [division, setDivision] = useState('');
  const  [fullname, setFullname] = useState ('');
  const [tipo, setTipo] = useState ('');

const onHandleSignup = () => {
    if (email !== '' && password !== '') {
  createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Signup success'))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Crear Incidencias</Text>
        <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre"
        autoCapitalize="none"
        keyboardType="fullname"
        textContentType="fullname"
        autoFocus={true}
        value={fullname}
        onChangeText={(text) => setFullname(text)}
      />
         <TextInput
        style={styles.input}
        placeholder="Descripcion"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese el tipo de Aula"
        autoCapitalize="none"
        keyboardType="tipo"
        textContentType="tipo"
        autoFocus={true}
        value={tipo}
        onChangeText={(text) => setTipo(text)}
      />
         <TextInput
        style={styles.input}
        placeholder="Ingrese la docencia "
        autoCapitalize="none"
        keyboardType="division"
        textContentType="division"
        autoFocus={true}
        value={division}
        onChangeText={(text) => setDivision(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Registrar</Text>
      </TouchableOpacity>
 
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: '#fff',
    color: "#fff",
    alignSelf: "center",
    marginTop: 30,
    paddingBottom: 50,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 35,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#26A69A',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});