import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Switch, Button, Animated, Easing, SplashScreen } from 'react-native';

export default function App() {
  const [e1, sete1] = useState(false)
  const [e2, sete2] = useState(false)
  const [e3, sete3] = useState(false)
  const [e4, sete4] = useState(false)
  const [e5, sete5] = useState(false)
  const [e6, sete6] = useState(false)

  const [cargando, setCargando] = useState(true)
  const desvanecido = new Animated.Value(1)


  useEffect(() =>{
    const timer = setTimeout(()=>{
      Animated.timing(desvanecido, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(()=> setCargando(false));
    }, 2000);
    return()=> clearTimeout(timer);
  },[]);




  return (
    <ImageBackground
    source= {require('./assets/fondoExamen.png')}
    resizeMode= 'cover'
    /* style= {{height: '100%', width: '100%'}} */

    imageStyle={{height: '100%', width: '100%'}}
    style={styles.container}
    >
      
      <View style={styles.topContainer}>
        <Text style={styles.titulo}>Mis Deberes</Text>
        <Text style={styles.subtitulo}>7/11/2025</Text>
      </View>


      <ScrollView contentContainerStyle= {styles.scrollContainer} style={{width: '100%'}}>

        <View style= {styles.categoriaE}>
          <Text style={styles.subtitulo}>ESTUDIOS</Text>

          <View style={styles.tarea}>
            <Text>Descripción: Terminar la tarea de cálculo diferencial</Text>
            <Text>Prioridad: Media</Text>
            <Text>Estatus: {e1 ? 'Completada' : 'Pendiente'}</Text>
            <Switch 
            value={e1}
            onValueChange= {sete1}
            />
          </View>

          <View style={styles.tarea}>
            <Text>Descripción: Estudiar para estructuras de datos</Text>
            <Text>Prioridad: Alta</Text>
            <Text>Estatus: {e2 ? 'Completada' : 'Pendiente'}</Text>
            <Switch 
            value={e2}
            onValueChange= {sete2}
            />
          </View>
        </View>


        <View style= {styles.categoriaH}>
          <Text style={styles.subtitulo}>HOGAR</Text>

          <View style={styles.tarea}>
            <Text>Descripción: Sacar a pasear al perro</Text>
            <Text>Prioridad: Baja</Text>
            <Text>Estatus: {e3 ? 'Completada' : 'Pendiente'}</Text>
            <Switch 
            value={e3}
            onValueChange= {sete3}
            />
          </View>

          <View style={styles.tarea}>
            <Text>Descripción: Trapear mi cuarto</Text>
            <Text>Prioridad: Media</Text>
            <Text>Estatus: {e4 ? 'Completada' : 'Pendiente'}</Text>
            <Switch 
            value={e4}
            onValueChange= {sete4}
            />
          </View>
        </View>

        <View style= {styles.categoriaP}>
          <Text style={styles.subtitulo}>PERSONAL</Text>

          <View style={styles.tarea}>
            <Text>Descripción: Ir al gym</Text>
            <Text>Prioridad: Alta</Text>
            <Text>Estatus: {e5 ? 'Completada' : 'Pendiente'}</Text>
            <Switch 
            value={e5}
            onValueChange= {sete5}
            />
          </View>

          <View style={styles.tarea}>
            <Text>Descripción: Leer hábitos atomicos</Text>
            <Text>Prioridad: Baja</Text>
            <Text>Estatus: {e6 ? 'Completada' : 'Pendiente'}</Text>
            <Switch 
            value={e6}
            onValueChange= {sete6}
            />
          </View>
        </View>


        <View style={styles.botonContainer}>
          <Button title='REINICIAR'
          onPress= { () => {
            sete1(false);
            sete2(false);
            sete3(false);
            sete4(false);
            sete5(false);
            sete6(false);
          }
          }
          color= 'gray'
          />
        </View>



      </ScrollView>


      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    /* justifyContent: 'center', */
  },
  topContainer: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 3,
  },
  scrollContainer: {
    /* backgroundColor: 'gray', */
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,    
  },


  categoriaE: {
    backgroundColor: 'rgba(228, 97, 97, 0.7)',
    alignItems: 'center',
    borderRadius: 10,
    /* justifyContent: 'center', */
    height: 350,
    paddingTop: 10,
    width: '90%',
    marginBottom: 20,
    borderWidth: 3,
  },
  categoriaH: {
    backgroundColor: 'rgba(97, 156, 228, 0.7)',
    alignItems: 'center',
    borderRadius: 10,
    /* justifyContent: 'center', */
    height: 350,
    paddingTop: 10,
    width: '90%',
    marginBottom: 20,
    borderWidth: 3,
  },
  categoriaP: {
    backgroundColor: 'rgba(97, 228, 162, 0.7)',
    alignItems: 'center',
    borderRadius: 10,
    /* justifyContent: 'center', */
    height: 350,
    paddingTop: 10,
    width: '90%',
    marginBottom: 20,
    borderWidth: 3,
  },

  tarea: {
    backgroundColor: '#c5c0c0ff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: '90%',
    gap: 5,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: '700',
  },


  botonContainer: {
    marginBottom: 20,
  },



  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  splashImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },  
  splashText: {
    position: 'absolute',
    marginBotton: 60,
    fontSize: 20,
    color: '#333',
  },
});
