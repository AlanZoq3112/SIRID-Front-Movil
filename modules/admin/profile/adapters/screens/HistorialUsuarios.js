import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Card } from "react-native-elements";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
const backImage = require("../../../../assets/backImage.png");

export default function NavigationSesion() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [email, setEmail] = useState("");
  const [division, setDivision] = useState("");
  const [name, setName] = useState("");
  const [tipo, setTipo] = useState("");

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Historial de Usuarios</Text>

        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.table}>
            <Pressable onPress={() => setModalVisible2(!modalVisible2)}>
              <Card containerStyle={{ borderRadius: 20, marginTop: 45 }}>
                <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                  001
                </Text>
                <Text>Nombre: Noe</Text>
                <Text>Primer Apellido: Merida</Text>
              </Card>
            </Pressable>
            <CardDivider />
            <Pressable onPress={() => setModalVisible2(!modalVisible2)}>
              <Card containerStyle={{ borderRadius: 20, marginTop: 45 }}>
                <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                  002
                </Text>
                <Text>Nombre: Alan Matthew</Text>
                <Text>Primer Apellido: Dominguez</Text>
              </Card>
            </Pressable>
            <CardDivider />
          </View>
        </ScrollView>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Crear Usuarios</Text>
        </Pressable>
        <View style={styles.centeredView}>
          <KeyboardAwareScrollView>
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
                  <Text style={styles.titleModal}>Crear Usuarios</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    autoCapitalize="none"
                    keyboardType="Nombre"
                    textContentType="Nombre"
                    autoFocus={true}
                    value={name}
                    onChangeText={(text) => setName(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Primer Apellido"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Segundo Apellido"
                    autoCapitalize="none"
                    keyboardType="tipo"
                    textContentType="tipo"
                    autoFocus={true}
                    value={tipo}
                    onChangeText={(text) => setTipo(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Correo Electronico"
                    autoCapitalize="none"
                    keyboardType="division"
                    textContentType="division"
                    autoFocus={true}
                    value={division}
                    onChangeText={(text) => setDivision(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Rol"
                    autoCapitalize="none"
                    keyboardType="division"
                    textContentType="division"
                    autoFocus={true}
                    value={division}
                    onChangeText={(text) => setDivision(text)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Division academica"
                    autoCapitalize="none"
                    keyboardType="division"
                    textContentType="division"
                    autoFocus={true}
                    value={division}
                    onChangeText={(text) => setDivision(text)}
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
          </KeyboardAwareScrollView>
        </View>

        <View style={styles.centeredView}>
          <KeyboardAwareScrollView>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible2}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.titleModal}>Informacion del Usuario</Text>
                  <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                    001
                  </Text>
                  <Text>Nombre: Noe</Text>
                  <Text>Primer Apellido: Merida</Text>
                  <Text>Segundo Apellido: Merida</Text>
                  <Text>Correo Electronico Apellido: 20213tn121@utez.edu.mx</Text>
                  <Text>Rol: Personal de Soprte </Text>
                  <Text>Estado: Activo</Text>
                  <View style={styles.containers}>
                    <Pressable
                      style={[styles.button, styles.buttonEnviar]}
                      onPress={() => {}}>
                      <Text style={styles.textStyle}>Enviar</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible2(!modalVisible2)}>
                      <Text style={styles.textStyle}>Cerrar</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          </KeyboardAwareScrollView>
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
    fontSize: 30,
    color: "#ffff",
    alignSelf: "center",
    marginTop: 150,
    paddingBottom: 50,
  },
  titleModal: {
    fontSize: 20,
    color: "#000000",
    alignSelf: "center",
    marginTop: 0,
    paddingBottom: 50,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 10,
    padding: 20,
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
    height: "70%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  logotype: {
    width: "100%",
    height: 150,
    marginTop: 10,
  },
  detailIcon: {
    marginRight: 10,
  },
  cardText: {
    fontSize: 20,
    color: "#008f71",
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
  containers: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 15,
  },
  table: {
    backgroundColor: "#26A69A",
    borderRadius: 5,
    margin: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
