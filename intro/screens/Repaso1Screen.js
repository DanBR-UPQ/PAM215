import { Text, StyleSheet, View, Button, Switch, ImageBackground, TextInput, Pressable, Alert } from 'react-native'
import React, {useState} from 'react';
import validator from 'validator'; 





export default function Repaso1Screen() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [terminos, setTerminos] = useState(false)
  /* const [esCorreo, setEsCorreo] = useState(false)
 */
  const esCorreo = (correo) => {
    return validator.isEmail(correo);
  } 

  const mostrarAlerta = () => {

    if (nombre.trim() === '' && correo.trim() === ''){
      Alert.alert('Error' + '\nPor favor llene todos los campos')
      alert('Error' + '\nPor favor llene todos los campos')
    } else if(nombre.trim() === ''){
      Alert.alert('Error' + '\nPor favor llene el nombre')
      alert('Error' + '\nPor favor llene el nombre')
    } else if(correo.trim() === ''){
      Alert.alert('Error' + '\nPor favor llene el correo')
      alert('Error' + '\nPor favor llene el correo')
    } else if(!esCorreo(correo)){
      Alert.alert('Error' + '\nEl correo es inválido')
      alert('Error' + '\nEl correo es inválido')
    }  
    else if (!terminos){
      Alert.alert('Terminos no aceptados' + '\nPor favor acepte los términos y condiciones')
      alert('Terminos no aceptados' + '\nPor favor acepte los términos y condiciones')
    } else {
      Alert.alert('Registro exitoso' + `\nNombre: ${nombre}\nCorreo: ${correo}`)
      alert('Registro exitoso' +  `\nNombre: ${nombre}\nCorreo: ${correo}`)
    }


  }


  return (
    <ImageBackground
    source={require('../assets/fondo_repaso1.png')}
    resizeMode='cover'
    style={styles.container}
    >
      <View style={styles.registroContainer}>

        <View style={styles.arribaContainer}>
          <Text style={styles.titulo}>REGISTRO DE USUARIO</Text>

          <TextInput
            placeholder='Nombre completo'
            value={nombre}
            onChangeText={nombre => setNombre(nombre)}
            style={styles.input}
          />

          <TextInput
            placeholder='Correo electrónico'
            value={correo}
            onChangeText={correo => setCorreo(correo)}
            style={styles.input}
          />

          <View style={styles.switchContainer}>
            <Text style={styles.texto}>Aceptar términos y condiciones: </Text>
            <Switch
              value={terminos}
              onValueChange={() => setTerminos(!terminos)}
              trackColor={{ true: 'green', false: 'rgba(0, 0, 0, 0.5)' }}
            />
          </View>
        </View>

{/*         <Text>
          {terminos ? 'SI' : 'NO'}
        </Text> */}

        <View style={styles.abajoContainer}>
          <Pressable
            onPress={() => mostrarAlerta()}
          >
            <Text style={styles.registrarse}>Registrarse</Text>
          </Pressable>
        </View>


      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registroContainer: {
    height: '40%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  switchContainer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 70,
  },
  arribaContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    //backgroundColor: 'white', 
  },
  abajoContainer: {
    flex: 1,
    justifyContent: 'end',
    gap: 10,
    //backgroundColor: 'white', 
    marginBottom: 10,    
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: '95%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: 'white',
  },
  texto: {
    color: 'white',
  },
  registrarse: {
    color: '#7599e8ff',
  }
})
