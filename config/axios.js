import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//generar url base
<<<<<<< HEAD

const SERVER_URL = "http://localhost:8090/api-sirid";
=======
const SERVER_URL = "http://192.168.0.116:8090/api_sirid";
>>>>>>> 0750238f08d3170b901baf535b7822c614b49057

//crear instancia de axios
const AxiosInstance = axios.create({
	baseURL: SERVER_URL, //url base
	timeout: 3000, //si se demora mas de 3 segundos, se cancela la peticion
});

<<<<<<< HEAD
AxiosInstance.interceptors.request.use(async (config) => {
	const token = await AsyncStorage.getItem("token");
	if (token) {
	config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
	});

=======
AxiosInstance.interceptors.request.use(async(config) =>{
	const token = await AsyncStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
})

//exportar instancia
>>>>>>> 0750238f08d3170b901baf535b7822c614b49057
export default AxiosInstance;
