import { useState, useRef } from 'react'
import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'


export default function ScrollViewScreen() {
  const scrollRef = useRef()

  const irAlFinal = () => {
    scrollRef.current.scrollToEnd({animated:true})
  }

  return (
    <ScrollView 
    ref={scrollRef}
    style={styles.container}
    contentContainerStyle={styles.content}
    showsVerticalScrollIndicator={true}
    >

      <Text style={styles.titulo}>Práctica: Scrollview</Text>
      <Text style={styles.subtitulo}>Ejemplo de desplazamiento vertical</Text>

      <View >
        <Button
        color='rgba(178, 215, 247, 0.8)'
        title='Ir al final'
        onPress={irAlFinal}
        />
      </View>

      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 1</Text>
      </View>
      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 2</Text>
      </View>
      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 3</Text>
      </View>
      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 4</Text>
      </View>
      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 5</Text>
      </View>

      <Text style={styles.subtitulo}>Ejemplo de desplazamiento horizontal</Text>

      <ScrollView
      horizontal
      nestedScrollEnabled={true}
      style={styles.scrollHorizontal}
      showsHorizontalScrollIndicator={true}
      >
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 1</Text>
        </View>   
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 2</Text>
        </View> 
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 3</Text>
        </View> 
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 4</Text>
        </View> 
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 5</Text>
        </View> 
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 6</Text>
        </View> 
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 7</Text>
        </View> 
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 8</Text>
        </View> 
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 9</Text>
        </View> 
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 10</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 11</Text>
        </View> 
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 12</Text>
        </View>      
      </ScrollView>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcf3abff'
  },
  content: {
    padding: 20,
    paddingBottom:40,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },

  elementos: {
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(178, 215, 247, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },

  elementos2: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(178, 215, 247, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,
  },

  text: {
    fontSize: 16,
    fontFamily: 'Courier',
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '900',
    textDecorationLine: 'underline',
  },

  scrollHorizontal: {
    marginVertical: 10,
    width: '100%',
  },
})