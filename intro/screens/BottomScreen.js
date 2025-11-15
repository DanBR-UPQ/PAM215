import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useState, useRef, useMemo} from 'react';



export default function BottomScreen() {
    const bottomSheetRef1 = useRef(null)
    const bottomSheetRef2 = useRef(null)
    const snapPoints = useMemo(() => [1,'50%','75%'])
    const handleOpenSheet1 = () => bottomSheetRef1.current?.expand()
    const handleOpenSheet2 = () => bottomSheetRef2.current?.expand() 




    return (
      <GestureHandlerRootView style={styles.rootView}>
          <View style={styles.container}>
              <View style={styles.productoContainer}>


                  <Text style={styles.titulo}>Tenis Nike Air Max</Text>
                  <Image style={styles.imgTenis} source={require('../assets/tenis.png')}></Image>
                  
              </View>


              <TouchableOpacity
                  onPress = {handleOpenSheet1}
                  style = {styles.botonVerInfo}
              >
                  <Text style={styles.botonText}>Ver Infomación</Text>
              </TouchableOpacity>


              <TouchableOpacity
                  onPress = {handleOpenSheet2}
                  style = {styles.botonComprar}
              >
                  <Text style={styles.botonText}>Comprar</Text>
              </TouchableOpacity>
          </View>


          <BottomSheet
              ref={bottomSheetRef1}
              snapPoints= {snapPoints}
              enablePanDownToClose={true}
              backgroundStyle= {styles.BSheet}
              index={-1}
              backdropComponent={
                  (props) => (
                      <BottomSheetBackdrop 
                          {...props} 
                          disappearsOnIndex={-1}
                          opacity={0.2}
                          pressBehavior='close'
                      />
                  )
              }
          >


              <BottomSheetView style={styles.BView}>
                  <Text style={styles.sheetTitle}> Información del producto</Text>
                  <Text style={styles.sheetText}> Marca: Nike</Text>
                  <Text style={styles.sheetText}> Modelo: Air Max</Text>
                  <Text style={styles.sheetText}> Precio: $175</Text>
                  <Text style={styles.sheetText}> Descripción: Comodidad y estilo en cada paso con los Nike Air Max</Text>


                  <TouchableOpacity style={styles.botonCerrar} onPress={() => bottomSheetRef1.current?.close()}>
                      <Text style={styles.botonText}>Cerrar</Text>
                  </TouchableOpacity>
              </BottomSheetView>
          </BottomSheet>


          <BottomSheet
              ref={bottomSheetRef2}
              snapPoints= {snapPoints}
              enablePanDownToClose={true}
              backgroundStyle= {styles.BSheet}
              index={-1}
              backdropComponent={
                  (props) => (
                      <BottomSheetBackdrop 
                          {...props} 
                          disappearsOnIndex={-1}
                          opacity={0.2}
                          pressBehavior='close'
                      />
                  )
              }
          >


              <BottomSheetView style={styles.BView}>
                  <Text style={styles.sheetTitle}> Realizar Pago </Text>
                  <Text style={styles.sheetText}> Total a pagar: $150 </Text>


                  <View>
                      <TouchableOpacity style={styles.botonPagar} onPress={() => alert('Compra Realizada')}>
                          <Text style={styles.botonText}>Pagar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.botonCerrar} onPress={() => bottomSheetRef2.current?.close()}>
                          <Text style={styles.botonText}>Cancelar</Text>
                      </TouchableOpacity>
                  </View>
              </BottomSheetView>
          </BottomSheet>
      </GestureHandlerRootView>
    )
}


const styles = StyleSheet.create({
    rootView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#747474ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    productoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 200,
    },
    sheetTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sheetText: {
        fontSize: 16,
        marginBottom: 10,
    },
    BSheet: {
        backgroundColor: '#caccdfff',
    },
    BView: {
        flex: 1,
        alignItems: 'center',
    },
    botonVerInfo: {
        backgroundColor: '#686ce4ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'white'
    },
    botonComprar: {
        backgroundColor: '#308030ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 200,
        borderWidth: 2,
        borderColor: 'white'
    },
    botonPagar: {
        backgroundColor: '#308030ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
    },
    botonCerrar: {
        backgroundColor: '#88302dff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
    },
    botonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imgTenis: {
        flex: 1,
        resizeMode: 'contain',
        marginTop: 20,
        width: 200,
        height: 200,
        borderRadius: 20,
    },
})