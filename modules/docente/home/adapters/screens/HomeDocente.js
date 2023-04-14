import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'

const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.0.200:8080/api-sirid/user/')
      .then(response => {
        const filteredDocentes = response.data.filter(user => user.roles.name === "Docente");
        setDocentes(filteredDocentes);
        console.log(response);

      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  export default function HomeDocente(){
  return (
    <View>
      <Text>Docentes:</Text>
      {docentes.map(docente => (
        <View key={docente.id}>
          <Text>{docente.name} {docente.primerApellido} {docente.segundoApellido}</Text>
          <Text>{docente.correoElectronico}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({})