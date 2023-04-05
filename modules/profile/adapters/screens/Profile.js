import {
	StyleSheet, Text, View, Image, StatusBar, SafeAreaView, TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  import { Card } from "react-native-elements";
  import { Button, Icon } from "@rneui/themed";
  import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
  const backImage = require("../../../../assets/backImage.png"); 
export default function NavigationSesion(navigation) {
	return (
		<KeyboardAwareScrollView style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
  
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Lista de Creaciones </Text>
        <Card containerStyle={{ borderRadius: 20, marginTop: 45, backgroundColor:  "#ec658c" }}>
          <Card.Title style={styles.cardText}>Usuarios</Card.Title>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button
                buttonStyle={{
                borderRadius: 10,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 0,
                height: 40,
                width: 145,
                backgroundColor: "#01315e",
                justifyContent: 'center',
                alignItems: 'center',
              }}
              title="Abrir"
              titleStyle={{ fontWeight: "700", }}
              />
          </View>
        </Card>

        <Card containerStyle={{ marginTop: 1, borderRadius: 20, marginTop: 10, backgroundColor: "#7ea9f3" }}>
          <Card.Title style={styles.cardText}>Aulas</Card.Title>
          <View
style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button
              buttonStyle={{
                borderRadius: 10,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 0,
                height: 40,
                width: 145,
                backgroundColor: "#01315e",
              }}
              title="Abrir"
              titleStyle={{ fontWeight: "700" }}
            />
          </View>
        </Card>

        <Card containerStyle={{ marginTop: 1, borderRadius: 20,  marginTop: 10 }}>
          <Card.Title style={styles.cardText}> Docencias</Card.Title>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button
              buttonStyle={{
                borderRadius: 10,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 0,
                height: 40,
                width: 145,
                backgroundColor: "#01315e",
              }}
              title="Abrir"
              titleStyle={{ fontWeight: "700" }}
            />
          </View>
        </Card>

        <Card containerStyle={{ marginTop: 1, borderRadius: 20,  marginTop: 10, backgroundColor: "#cc8ff1" }}>
          <Card.Title style={styles.cardText}>Personal de Soporte</Card.Title>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button
              buttonStyle={{
                borderRadius: 10,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 0,
                height: 40,
                width: 145,
                backgroundColor: "#01315e",
              }}
              title="Abrir"
              titleStyle={{ fontWeight: "700" }}
            />
          </View>
        </Card>
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
  logotype: {
    width: "100%",
    height: 150,
    marginTop: 10,
  },
  detailIcon: {
    marginRight: 10,
  },
  cardText:{
    fontSize:20,
    color: "#008f71"
  }
});