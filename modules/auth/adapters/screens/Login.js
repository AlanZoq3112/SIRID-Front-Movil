import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../config/utils/firebase";
import { Icon } from "react-native-elements";
const backImage = require("../../../../assets/backImage.png");
const logoUte = require("../../../../assets/logoUte.png");


export default function Login() {
  const [error, setError] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log('Signup success'))
      .catch((err) => Alert.alert("Login error", err.message));
  }
};
  
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form} >
        <Text style={styles.title}>Bienvenido</Text>
		<Image
		source={logoUte} resizeMode="contain" style={styles.logotype}
		/>
        <TextInput
           
        style={styles.input}
        
        placeholder="Ingrese el correo"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        
        placeholder="Ingrese la contraseña"
        
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
		  
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Ingresar</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>¿Olvidaste tu contraseña? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}> Recuperar</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </KeyboardAwareScrollView>
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
    marginTop: 70,
    paddingBottom: 50,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  
    marginTop: 20,
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
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,

  },
  logotype: {
	width: "100%",
	height: 150,
	marginTop: 10,
},
detailIcon: {
  marginRight: 10,
},

});