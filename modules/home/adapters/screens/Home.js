

import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert, Input} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getAuth, signOut } from "firebase/auth";
import { Icon } from "@rneui/base";
const backImage = require("../../../../assets/backImage.png");
import React, {useState} from "react";
export default function Home() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState(require('../../../../assets/images.png'));
	const [username, setUsername] = useState('Maximiliano Carsi Castrejon');
	const [division, serDivision] = useState ('Division Academica:');
	const [cargo, setCargo] = useState('Administrador');
	const auth = getAuth();
	const handleSignOut = async () => {
		try {
			await signOut(auth);
			console.log("Usuario desconectado");
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<KeyboardAwareScrollView style={styles.container}>
			  <Image source={backImage} style={styles.backImage} />
			  <View style={styles.whiteSheet} />
			  <SafeAreaView style={styles.form} >
			  <Image source={profilePic} resizeMode="contain" style={styles.profilePic} />
			  <Text style={styles.username}>{username}</Text>
			   <View>
          		<Text style={styles.user}>Tipo de usuario:</Text>
       		 </View>
			  <View style={styles.detail}>
          		<Text style={styles.detailText}>{cargo}</Text>
       		 </View>
			<View style={styles.detail}>
          		<Text style={styles.user}>{division}</Text>
       		 </View>
			<View >
          		<Text style={styles.detailText}>DATID</Text>
       		 </View>

				<View >
          		<Text style={styles.Text}>Editar Información:</Text>
       		 </View>
     		
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
          	<TouchableOpacity style={styles.btn} onPress={handleSignOut}>
        		<Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18, margin: 10}}>Cerrar sesión</Text>
      		</TouchableOpacity>  
			  </SafeAreaView>
		</KeyboardAwareScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "#fff",
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
		height: '80%',
		position: "absolute",
		bottom: 0,
		backgroundColor: '#fff',
		borderTopLeftRadius: 60,
		borderTopRightRadius: 60,
	  },
	  form: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 30,
		alignItems: 'center',
	  },
	  title: {
		fontSize: 36,
		fontWeight: '#26A69A',
		color: "#26A69A",
		alignSelf: "center",
		marginTop: 30,
		paddingBottom: 50,
	  },
	  profilePic: {
		width: "50%",
		height: 150,
		borderRadius: 75,
		marginBottom: 20,
		marginTop: 60,
		fontSize: 36,
		fontWeight: '#26A69A',
		color: "#26A69A",
		alignSelf: "center",
		paddingBottom: 50,
	  },
	  username: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 2,
	  },
	  user: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 2,
	  },
	 
		btn: {
			backgroundColor: '#26A69A',
			height: 58,
			borderRadius: 20,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 20,
			fontSize:30
			
		},
		detail: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			marginVertical: 5,
		  },
		detailText: {
			fontSize: 18,
			color: 'grey',
		},

		Text: {
			marginTop:35,
			marginEnd:70,
			fontSize: 18,
			color: 'bold',
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
})
