import React, { useEffect, useState, useContext } from "react";
import { FeatherIcon } from "feather-icons";
<<<<<<< HEAD
import {StyleSheet,Text, View, Button, TextInput, Image, SafeAreaView,TouchableOpacity,StatusBar,Alert,Modal,Pressable,} from "react-native";
=======
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
  Modal,
  Pressable,
  size,
} from "react-native";
import {Navigate, useNavigate} from 'react-router-dom'
>>>>>>> 0750238f08d3170b901baf535b7822c614b49057
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Icon } from "react-native-elements";
<<<<<<< HEAD
import { useFormik } from "formik";
import * as yup from "yup";
import AxiosClient from '../../../../config/axios';

const backImage = require("../../../../assets/backImage.png");
const logoUte = require("../../../../assets/logoUte.png");

  const [error, setError] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
=======
const backImage = require("../../../../assets/backImage.png");
const logoUte = require("../../../../assets/logoUte.png");
import Loading from "../../../../kernel/components/Loading";
import { isEmpty } from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosInstance } from "axios";
import axios from "../../../../kernel/http-client.gateway";
import { AuthContext } from "../../../../kernel/components/authcontext/AuthContext";
import { validateEmail } from "../../../../kernel/validation";
import { useFormik } from 'formik';
import * as yup from 'yup';


export default function Login({ onSubmit }) {
  const { isAuth, setAuth } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
>>>>>>> 0750238f08d3170b901baf535b7822c614b49057
  const [showPassword, setShowPassword] = useState(true);
  const payLoad = { email: "", password: "" };
  const [error, setError] = useState(payLoad);
  const [data, setData] = useState(payLoad);
  const [modalVisible, setModalVisible] = useState(false);

  const changePayload = (e, type) => {
    setData({ ...data, [type]: e.nativeEvent.text });
  };

  const login = async () => {
    if (!(isEmpty(data.email) || isEmpty(data.password))) {
      //   try {
      //     const response = await axios.doPost(
      //       "http://192.168.0.116:8090/api_sirid/auth/login",
      //       {
      //         email: data.email
      //       }
      //     );

      //     const { token, role } = response.data;

      //     if (role === "SuperAdmin") {
      //       navigation.navigate('Home', {token})
      //     } else if (role === "Docente") {
      //       navigation.navigate('HomeDocente', {token})
      //     }else if (role === "Docente") {
      //       navigation.navigate('HomeSoporte', {token})
      //     } else{
      //       Alert.alert(
      //         'Error',
      //         'no se puee loggear'
      //       )
      //     }
      //   } catch (error) {
      //       setError('Datos incorrectos')
      //   }

      console.log("primera entrada");
      setShow(true);
      setError(payLoad);
      console.log("si entra esto");
      try {
        console.log("entro al token");
        console.log(data);
        const account = await axios.doPost(
          "/api-sirid/incidence/",
          {
            email: data.email,
            password: data.password,
          }
        );
        console.log(account);
        await AsyncStorage.setItem(
          "token",
          JSON.stringify(account.data.data.token)
        );
        console.log("ya entro", account);

        if (account.data.data.email.authorities[0].authority == "SuperAdmin") {
          await AsyncStorage.setItem(
            "account",
            JSON.stringify(email.data.data)
          );
          setShow(false);
          setAuth(true);
        } else {
          setShow(false);
          Alert.alert("ACCESO DENEGADO", "No se puede ");
          AsyncStorage.removeItem("token");
        }
        console.log("casi ");
      } catch (error) {
        setShow(false);
        Alert.alert(
          "Correo y/o Contraseña incorrectos",
          "",
          [{ text: "Ok", style: "cancel" }],
          { cancelable: true, onDismis: () => console.log() }
        );
      }
    } else {
      Alert.alert("Error", "Campos obligatorios");
    }
  };

  const login1 = () => {
    console.log("login 24 -> data", data);
    if (!isEmpty(data.email || isEmpty(data.password))) {
      if (validateEmail(data.email)) {
        console.log("entra aca");
        if (size(data.password) >= 6) {
          console.log("tambien aqui");
          setShow(true);
          setError(payLoad);
          console.log("Listo para el registro");
          axios({
            method: "POST",
            url: "/auth/login",
            data: JSON.stringify(data),
          })
            .then((response) => {
              setError({ email: "", password: "" });
              console.log("response", response);
              console.log("token", response.data.token);
              console.log("email", response.data.user);
              //Guardar en asyncStorage
              AsyncStorage.setItem(
                "@session",
                JSON.stringify(response.data.token)
              )
                .then(() => {
                  console.log("Session guardada");
                  // AsyncStorage.getItem('@session')
                  // .then((token) => console.log('token asyncStorage',token))
                  // .catch((error) => console.log('error', error))
                  AsyncStorage.setItem(
                    "@userLogged",
                    JSON.stringify(response.data.usuario)
                  )
                    .then(() => {
                      console.log("Usuario guardado con exito");
                      setShow(false);
                      // AsyncStorage.getItem('@userLogged')
                      // .then((usuario) => console.log('usuario asyncStorage',usuario))
                      // .catch((error) => console.log('error', error))
                      if (response.data.usuario.role.name != "Admin") {
                        if (response.data.usuario.status) {
                          setReload(true);
                        } else {
                          setShowModal(true);
                          setModalText(
                            "Usuario inactivo, no se puede iniciar sesión"
                          );
                          setType("error");
                        }
                      } else {
                        setShowModal(true);
                        setModalText(
                          "Aplicación solo disponible para usuarios de enfermería"
                        );
                        setType("error");
                      }
                    })
                    .catch((error) => {
                      console.log("Error al guardar al usuario", error);
                    });
                })
                .catch((error) => {
                  console.log("Error al guardar session", error);
                });
            })
            //Error de inicio de sesión
            .catch((error) => {
              setError({ email: "", password: "No se pudo iniciar sesión" });
              setShow(false);
              console.log("Error", error);
              console.log("bota aca ");
            });
          setShow(false);
        } else {
          setError({
            email: "",
            password: "Logitud de por lo menos 6 carácteres",
          });
        }
      } else {
        setError({
          email: "Debe ser un correo electrónico válido",
          password: "",
        });
      }
    } else {
      setError({
        email: "Campo obligatorio",
        password: "Campo obligatorio",
      });
    }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Campo obligatorio'),
      password: yup.string().required('Campo obligatorio'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await AxiosClient({
          url: '/auth/login',
          method: 'POST',
          data: JSON.stringify(values),
        });
        if (!response.error) {
          const action = {
            type: 'LOGIN',
            payload: response.data,
          };
          dispatch(action);
          navigation('/Perfil', { replace: true });
        }else{
          throw Error()
        }
      } catch (err) {
        Alert.fire({
          title: 'Verificar datos',
          text: 'Usuario y/o contraseña incorrectos',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar',
        });
      }
    },
  });

<<<<<<< HEAD
  useEffect(()=>{
    AxiosClient.get('http://localhost:8090/api-sirid/auth/login')
      .then(response =>{
        setData(response.data);
      })
      .catch(error =>{

        console.log(error);
      })
  }, [])
=======
>>>>>>> 0750238f08d3170b901baf535b7822c614b49057

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView
        style={styles.form}
        initialValues={{ email: "", password: "" }}
        validationSchema={Login}
        onSubmit={onSubmit}>
        <Text style={styles.title}>Bienvenido</Text>
        <Image source={logoUte} resizeMode="contain" style={styles.logotype} />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          containerStyle={styles.input}
          rightIcon={
            <Icon type="material-comunity" name="account-circle" size={22} />
          }
          autoCapitalize="none"
          onChange={(e) => changePayload(e, "email")}
          errorMessage={error}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          containerStyle={styles.input}
          rightIcon={
            <Icon
              name={showPassword ? "eye-slash" : "eye"}
              type="font-awesome"
              onPress={() => setShowPassword(!showPassword)}
              size={22}
            />
          }
          secureTextEntry={showPassword}
          onChange={(e) => changePayload(e, "password")}
          errorMessage={error}
        />
        <TouchableOpacity style={styles.buttons} onPress={login}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            {" "}
            Ingresar
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}>
          <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
            ¿Olvidaste tu contraseña?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}>
              {" "}
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalTexts}>Ingrese su correo</Text>
                      <TextInput
                        style={styles.inputs}
                        placeholder="Ingrese el correo"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoFocus={true}
                        value={payLoad.email}
                        onChange={(e) => changePayload(e, "email")}
                        rightIcon={
                          <Icon type="material-community" name="email-edit" />
                        }
                      />
                      <View style={styles.containers}>
                        <Pressable
                          style={[styles.button, styles.buttonEnviar]}
                          onPress={() => {}}>
                          <Text style={styles.textStyle}>Enviar</Text>
                        </Pressable>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.textStyle}>Recuperar</Text>
                </Pressable>
              </View>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </KeyboardAwareScrollView>
  );
<<<<<<< HEAD
};
=======
}

>>>>>>> 0750238f08d3170b901baf535b7822c614b49057
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containers: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: "#fff",
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
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  buttons: {
    backgroundColor: "#26A69A",
    height: 58,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#26A69A",
  },
  buttonClose: {
    backgroundColor: "#f00",
    marginStart: 50,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  inputs: {
    backgroundColor: "#F6F7FB",
    borderRadius: 10,
    paddingRight: 150,
    padding: 12,
  },
  buttonEnviar: {
    backgroundColor: "#26A69A",
  },
  modalTexts: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
});
