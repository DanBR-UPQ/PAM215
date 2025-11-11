import { use, useState } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, Button } from 'react-native'


export default function ActivityScreen() {
  const [loading, setLoading] = useState(false)
  const startLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }
  /* {loading ? } */
  if (loading){
    return(
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size="large"
            color="#711212ff"
            animating={true}
            hidesWhenStopped={true}
          />
          <Text style={styles.title}>Cargando...</Text>
        </View>
      </View>
    );
  } else {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>ActivityIndicator</Text>
        <Button title="Carga de datos" onPress={startLoading}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a3a3a3ff',
  },
  texto: {
    color: 'white',
  },
  title:{
    fontSize: 20,
    marginBottom: 20,
  },
  loaderContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
})