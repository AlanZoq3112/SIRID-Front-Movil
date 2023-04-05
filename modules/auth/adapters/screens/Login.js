import React, { useEffect, useState } from "react";
import { FeatherIcon } from "feather-icons";
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
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../config/utils/firebase";
import { Icon } from "react-native-elements";
const backImage = require("../../../../assets/backImage.png");
const logoUte = require("../../../../assets/logoUte.png");
import { useFormik } from "formik";
import * as yup from "yup";
import AxiosClient from '../../../../config/axios';

  const [error, setError] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] =useState([]);
  const login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Signup success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("Campo obligatorio"),
      password: yup.string().required("Campo obligatorio"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await AxiosClient({
          url: "/auth/login",
          method: "POST",
          data: JSON.stringify(values),
        });
        if (!response.error) {
          const action = {
            type: "LO GIN",
            payload: response.data,
          };
          dispatch(action);
          navigation("/Perfil", { replace: true });
        } else {
          throw Error();
        }
      } catch (err) {
        
      }
    },
  });

  useEffect(()=>{
    AxiosClient.get('http://localhost:8090/api-sirid/auth/login')
      .then(response =>{
        setData(response.data);
      })
      .catch(error =>{
        console.log(error);
      })
  }, [])

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Bienvenido</Text>
        <Image source={logoUte} resizeMode="contain" style={styles.logotype} />
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
                        value={email}
                        onChangeText={(text) => setEmail(text)}
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
