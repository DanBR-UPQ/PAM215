import { useState } from 'react'
import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'


export default function TextInputScreen() {
  const [nombre, setNombre] = useState('')
  const [password, setPassword] = useState('')
  const [telefono, setTelefono] = useState()

  const mostrarAlerta = () => {
    if (nombre.trim() === '' || password.trim() === '' || telefono.trim() === '') {
      Alert.alert("Error. Favor de llenar todos los campos (movil)")
      alert("Error. Favor de llenar todos lo campos (web)")
    } else {
      Alert.alert(
        "Datos ingresados (movil)",
        `Nombre: ${nombre}\n
        Password: ${password}\n
        Telefono: ${telefono}`
      )

      alert(
        "Datos ingresados\n" + 
        `Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`
      )
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TextInput & Alert</Text>

      <Text style={styles.textos}>Nombre: </Text>
      <TextInput
        placeholder='Escribe tu nombre aquí'
        value={nombre}
        onChangeText={nombre => setNombre(nombre)}
        style={styles.input}
      />

      <Text style={styles.textos}>Password: </Text>
      <TextInput
        placeholder='Escribe tu contraseña aquí'
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Text style={styles.textos}>Telefono: </Text>
      <TextInput
        placeholder='Escribe tu teléfono aquí'
        value={telefono}
        keyboardType='phone-pad'
        onChangeText={setTelefono}
        style={styles.input}
      />

      <View  style={styles.boton}>
        <Button 
        title='Mostrar Alerta'
        onPress={() => mostrarAlerta()}
        color= '#0b1049ff'
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f99f0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 15,
    color:'#0b1049ff',
    textDecorationStyle: 'double',
    textDecorationLine: 'underline',
  },
  textos: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#171f77ff',
    marginBottom: 5,
  },
  boton: {
    marginTop: 15,
  },
  input: {
    width: '35%',
    borderWidth: 2,
    borderColor: '#b3c0ecff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#b3c0ecff',
  }
})