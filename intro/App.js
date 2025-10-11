
// 1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import React, {useState} from 'react';


// 2. Main: Zona de componentes
// Ahorita es una función que cuando se compila, regresa una vista
export default function App() {

  const [contador, setContador] = useState(0); // Destructuración de useState

  return (


    <View style={styles.container}>

      <Text>Contador: {contador}</Text>
      <br></br>
      <Button title='Incrementa' onPress={()=>setContador(contador+1)}> </Button> <br></br>
      <Button title='Decrementa' onPress={()=>setContador(contador-1)}> </Button> <br></br>
      <Button title='Reinicia' onPress={()=>setContador(contador - contador)}> </Button> <br></br>

      <StatusBar style="auto" /> 

    </View>


  );
}


// 3. Styles: Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
