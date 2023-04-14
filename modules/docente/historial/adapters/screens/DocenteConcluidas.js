import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'

const DocenteConcluidas = () => {
const [docentes, setDocentes] = useState([]);

const filterDocentes = (users) => {
  return users.filter(user => user.roles.name.toLowerCase() === "docente");
}

useEffect(() => {
  axios.get('http://192.168.0.200:8080/api-sirid/user/')
    .then(response => {
      if (Array.isArray(response.data)) { 
        console.log(response.data)
        const filteredDocentes = filterDocentes(response.data);
        setDocentes(filteredDocentes);
        console.log(filteredDocentes);
      }
    })
    .catch(error => {
      console.log(error);
    });
}, []);

return (
  <View>
  <Text>Docentes:</Text>
  <Text>Aquí se muestran los docentes:</Text>
  {docentes && docentes.map(docente => (
    <View key={docente.id}>
      <Text>{docente.name} {docente.primerApellido} {docente.segundoApellido}</Text>
      <Text>{docente.correoElectronico}</Text>
    </View>
  ))}
</View>
);
}
export default DocenteConcluidas;