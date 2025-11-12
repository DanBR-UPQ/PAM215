import { useState } from 'react'
import { Text, StyleSheet, View, Pressable, TextInput, Modal } from 'react-native'


export default function ModalScreen() {
  const [mostrar, setMostrar] = useState(null)

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>

        <Pressable onPress={() => setMostrar('login')} style={styles.boton}>
          <Text style= {styles.text}>Iniciar Sesión</Text>
        </Pressable>

        <Pressable onPress={() => setMostrar('registro')} style={styles.boton}>
          <Text style= {styles.text}>Registrarse</Text>
        </Pressable>

        <Pressable onPress={() => setMostrar('alerta')} style={styles.boton}>
          <Text style= {styles.text}>Alerta</Text>
        </Pressable>

        <Text>{mostrar}</Text>

        <Modal
        animationType='slide'
        transparent={false}
        visible={mostrar === 'login'}
        onRequestClose={() => setMostrar(null)}
        >

          <View style={styles.container2}>
            <Text style={styles.titulo}> Formulario de Inicio de Sesión</Text>

            <TextInput placeholder='Ingrese su Usuario'
            style={styles.input}
            />
            <TextInput placeholder = 'Ingrese su Contraseña'
            secureTextEntry={true}
            style = {styles.input}
            />

            <Pressable style={styles.boton} onPress={() => setMostrar(null)}>
              <Text style={styles.text}>Iniciar Sesión</Text>
            </Pressable>
          </View>

        </Modal>



        <Modal
        animationType='slide'
        transparent={false}
        visible={mostrar === 'registro'}
        onRequestClose={() => setMostrar(null)}
        >

          <View style={styles.container2}>
            <Text style={styles.titulo}>Formulario de Registro</Text>

            <TextInput placeholder='Ingrese su Usuario'
            style={styles.input}
            />
            <TextInput placeholder='Ingrese su Email'
            style={styles.input}
            keyboardType='email-address'
            />
            <TextInput placeholder = 'Ingrese su Contraseña'
            secureTextEntry={true}
            style = {styles.input}
            />

            <Pressable style={styles.boton} onPress={() => setMostrar(null)}>
              <Text style={styles.text}>Registrarse</Text>
            </Pressable>
          </View>

        </Modal>


        <Modal
        animationType='fade'
        transparent={false}
        visible={mostrar === 'alerta'}
        onRequestClose={() => setMostrar(null)}
        >
          <View style={styles.container3}>
            <View style={styles.containerAlerta}>

              <Text style={styles.textAlerta}>Esto es una Alerta !!</Text>

              <View style={styles.containerBoton}>
                <Pressable style={styles.boton1} onPress={() => setMostrar(null)}>
                  <Text style={styles.text}>Ok</Text>
                </Pressable>

                <Pressable style={styles.boton2} onPress={() => setMostrar(null)}>
                  <Text style={styles.text}>Cerrar</Text>
                </Pressable>

              </View>
            </View>
          </View>
        </Modal>

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#967e7eff'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#928989ff'
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000e2'
  },
  boton: {
    backgroundColor: '#603b91ff',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    width: '70%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500'
  },
  titulo: {
    fontSize: 25,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#c7ababff'
  },
  containerAlerta: {
    width: 300,
    height: 200,
    backgroundColor: '#a48b8bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textAlerta: {
    fontSize: 20,
    color: 'black',
  },
  boton1: {
    backgroundColor: '#3a2868ff',
    padding: 15,
    borderRadius: 20,
    marginRight: 10,
    width: 100,
    alignItems: 'center'
  },
  boton2: {
    backgroundColor: '#642868ff',
    padding: 15,
    borderRadius: 20,
    marginRight: 10,
    width: 100,
    alignItems: 'center'
  },
  containerBoton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    width: '80%'
  }
})