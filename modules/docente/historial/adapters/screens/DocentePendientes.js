import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  import { Card } from "react-native-elements";
  import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
  import { Button, Icon } from "@rneui/themed";
  
  const backImage = require("../../../../assets/backImage.png");
  
  export default function DocentePendientes() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <Image source={backImage} style={styles.backImage} />
        <View style={styles.whiteSheet} />
        <SafeAreaView style={styles.form}>
          <Text style={styles.title}>Pendientes</Text>
  
          <Card containerStyle={{ borderRadius: 20, height: 140 }}>
            <Card.Title>01 CC7 Monitor Dañado</Card.Title>
            <Card.Title style={{ color: "#008f71" }}>Pendientes</Card.Title>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  height: 38,
                  width: 140,
                  backgroundColor: "#01315e",
                }}
                title="Open Incident"
                titleStyle={{ fontWeight: "700" }}
                iconRight
                icon={<Icon name="chat" color={"white"} />}
              />
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  height: 38,
                  width: 140,
                  backgroundColor: "#01315e",
                }}
                title="Open Chat"
                titleStyle={{ fontWeight: "700" }}
                iconRight
                icon={<Icon name="chat" color={"white"} />}
              />
            </View>
          </Card>
  
          <CardDivider />
  
          <Card containerStyle={{ marginTop: 1, borderRadius: 20, height: 140 }}>
            <Card.Title>02 CC7 Monitor Dañado</Card.Title>
            <Card.Title style={{ color: "#008f71" }}>Pendientes</Card.Title>
  
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  height: 38,
                  width: 140,
                  backgroundColor: "#01315e",
                }}
                title="Open Incident"
                titleStyle={{ fontWeight: "700" }}
                iconRight
                icon={<Icon name="chat" color={"white"} />}
              />
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  height: 38,
                  width: 140,
                  backgroundColor: "#01315e",
                }}
                title="Open Chat"
                titleStyle={{ fontWeight: "700" }}
                iconRight
                icon={<Icon name="chat" color={"white"} />}
              />
            </View>
          </Card>
          <CardDivider />
  
          <Card containerStyle={{ marginTop: 1, borderRadius: 20, height: 140 }}>
            <Card.Title>03 CC7 Monitor Dañado</Card.Title>
            <Card.Title style={{ color: "#008f71" }}>Pendientes</Card.Title>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  height: 38,
                  width: 140,
                  backgroundColor: "#01315e",
                }}
                title="Open Incident"
                titleStyle={{ fontWeight: "700" }}
                iconRight
                icon={<Icon name="chat" color={"white"} />}
              />
              <Button
                buttonStyle={{
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                  height: 38,
                  width: 140,
                  backgroundColor: "#01315e",
                }}
                title="Open Chat"
                titleStyle={{ fontWeight: "700" }}
                iconRight
                icon={<Icon name="chat" color={"white"} />}
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
      fontSize: 36,
      fontWeight: "#fff",
      color: "black",
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
    button: {
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
  });
  