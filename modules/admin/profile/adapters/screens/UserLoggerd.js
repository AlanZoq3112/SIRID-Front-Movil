import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
  Pressable,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../config/utils/firebase";
const backImage = require("../../../../../assets/backImage.png");
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import * as VideoPicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as Permissions from "expo-permissions";

import { Video } from "expo-av";

import { FlatList } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [division, setDivision] = useState("");
  const [fullname, setFullname] = useState("");
  const [tipo, setTipo] = useState("");

  const [selectedMedia, setSelectedMedia] = useState([]);
  const [videoCount, setVideoCount] = useState(0);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [media, setMeida] = useState(null);

  const handleSelectPhotos = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "denied") {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled) {
        if (selectedMedia.length >= 6) {
          Alert.alert("Error", "Solo se permiten subir hasta 5 fotos.");
          const selectedAsset = result.assets[0];
          const selectedAssetUri = selectedAsset.uri;
          console.log(selectedAssetUri);
        }
        let manipulatedImage = await ImageManipulator.manipulateAsync(
          result.uri,
          [{ resize: { width: 600, height: 600 } }],
          { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
        );
        setSelectedMedia([...selectedMedia, manipulatedImage]);
      }
    } else {
      Alert.alert(
        "Error",
        "La aplicación no tiene permisos para acceder a la cámara."
      );
    }
  };

  const handleSelectVideo = async () => {
    const { status } = await VideoPicker.requestCameraPermissionsAsync();
    if (status !== "denied") {
      let result = await VideoPicker.launchCameraAsync({
        mediaTypes: VideoPicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        if (videoCount >= 1) {
          Alert.alert("Error", "Solo se permite subir un video.");
          return;
        }
        setVideoCount(1);
        setSelectedMedia([result]);
      } else {
        Alert.alert(
          "Error",
          "La aplicación no tiene permisos para acceder a la cámara."
        );
      }
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase
      .storage()
      .ref()
      .put("images/" + Math.random().toString(36).substring(7));
    await ref.put(blob);
    const url = await ref.getDownloadURL();
    console.log(url);
  };

  // Función para subir un video a Firebase Storage
  const uploadVideo = async () => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase
      .storage()
      .ref()
      .child("videos/" + Math.random().toString(36).substring(7));
    await ref.put(blob);
    const url = await ref.getDownloadURL();
    console.log(url);
  };
  const uploadMedia = async () => {
    try {
      await uploadImage();
      await uploadVideo();
    } catch (error) {
      Alert.alert("Error", "Error al sbir las imagenes y videos");
    }
  };

  const onHandleSignup = () => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Signup success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
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

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "#808080", fontSize: 18 }}>
            Subir imagenes y videos
          </Text>
          <FlatList
            data={selectedMedia}
            key={"2"}
            numColumns={2}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) =>
              item.type === "video" ? (
                <Video
                  source={{ uri: item.uri }}
                  style={{ width: 200, height: 200 }}
                  useNativeControls
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={{ uri: item.uri }}
                  style={{ width: 200, height: 200 }}
                />
              )
            }
          />

          <View style={styles.view2}>
            <Button
              color="#26A69A"
              title="Tomar foto"
              onPress={handleSelectPhotos}
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
          <View style={styles.view}>
            <Button
              color="#26A69A"
              title="Grabar video"
              onPress={handleSelectVideo}
            />
            {video && (
              <Video
                source={{ uri: video }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={uploadImage}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            Registrar
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "#fff",
    color: "#fff",
    alignSelf: "center",
    marginTop: 100,
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
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#26A69A",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  view: {
    marginTop: -35.5,
    marginLeft: 200,
  },
  view2: {
    marginRight: 200,
  },
});
