
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

      <Text style={styles.texto}>- Contador -</Text>
      <Text style={styles.texto2}>{contador}</Text>
      

      <View style={styles.contenedorBotones}>

        <Button title='Incrementa' onPress={()=>setContador(contador +1)} color={'#5b5188ff'}> </Button> 
        <Button title='Decrementa' onPress={()=>setContador(contador-1)} color={'#5b5188ff'}> </Button> 
        <Button title='Reinicia' onPress={()=>setContador(contador - contador)} color={'#5b5188ff'}> </Button> 

      </View>


      <StatusBar style="auto" /> 

    </View>


  );
}


// 3. Styles: Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a3a3aff',
    alignItems: 'center', // start < -- center -- > end
    justifyContent: 'center',
  },

  texto: {
    fontFamily: "Times New Roman",
    fontSize: 45,
    color: '#d7d7d7ff',
    fontWeight: 'bold', // 100 - 900 para grosor de negrtias
    fontStyle: 'italic', // solo italic o normal
    textDecorationLine: 'line-through',
  },
    texto2: {
    fontFamily: "Courier",
    fontSize: 45,
    color: '#ffffffff',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },

  contenedorBotones:{
    marginTop: 25, // espacio hasta arriba
    flexDirection:"row", // alinearlo en horizontal
    gap:20,
  },
});