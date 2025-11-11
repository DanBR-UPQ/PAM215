import { Text, StyleSheet, View, FlatList, SectionList, ScrollView } from 'react-native'


export default function FlatListScreen() {

  const datos = [
    { id: '1', nombre: 'manzana'},
    { id: '2', nombre: 'platano'},
    { id: '3', nombre: 'naranja'},
    { id: '4', nombre: 'uva'},
    { id: '5', nombre: 'fresa'},
    { id: '6', nombre: 'kiwi'},
  ]

  const secciones = [
    { 
      titulo: 'Frutas', 
      data:[
        {nombre: 'manzana'},
        {nombre: 'platano'},
        {nombre: 'naranja'},
        {nombre: 'uva'},
      ]
    },
    {
      titulo: 'Verduras',
      data: [
        {nombre: 'zanahoria'},
        {nombre: 'lechuga'},
        {nombre: 'tomate'},
        {nombre: 'brocoli'}
      ]
    },
  ]

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.Titulo}>AAAAAAAAAA</Text>


          <FlatList
          data={datos}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.elementos}>
              <Text style={styles.text}>{item.nombre}</Text>
            </View>
          )}
          scrollEnabled = {false}
          ItemSeparatorComponent={() => <View style={styles.separador}/>}
          >
          </FlatList>

          <Text style={styles.Titulo2}>Ejemplo de SectionList</Text>

          <SectionList
          sections={secciones}
          keyExtractor={(item, index) => item.nombre + index}
          renderItem={({item}) => (
            <View style={styles.itemSection}>
              <Text style={styles.textItem}>{item.nombre}</Text>
            </View>
          )}
          renderSectionHeader={({section: {titulo}}) => (
            <View style={styles.encabezado}>
              <Text style={styles.tituloSeccion}>{titulo}</Text>
            </View>
          )}
          scrollEnabled={false}
          stickySectionHeadersEnabled={false}
          ></SectionList>


        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1, */
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8ccccff'
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  Titulo2: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center',
  },
  elementos: {
    width: '100%',
    height: '80%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    color: 'white',
    fontWeight: '900',
    textDecorationLine: 'underline'
  },
  separador: {
    height: 10,
  },
  encabezado: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 12,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloSeccion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  itemSection: {
    backgroundColor: '#ffd700',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    marginLeft: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  textItem: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },
})