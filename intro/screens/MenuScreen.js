import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'

import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import Botones2Screen from './Botones2Screen';
import ActivityScreen from './ActivityScreen';
import BottomScreen from './BottomScreen';
import FlatListScreen from './FlatListScreen';
import ImageBgScreen from './ImageBgScreen';
import ScrollViewScreen from './ScrollViewScreen';
import TextInputScreen from './TextInputScreen';
import ModalScreen from './ModalScreen';
import Repaso1Screen from './Repaso1Screen';

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'text':
            return <TextInputScreen/>;
        case 'image':
            return <ImageBgScreen/>
        case 'repaso':
            return <Repaso1Screen/>
        case 'scroll':
            return <ScrollViewScreen/>
        case 'act':
            return <ActivityScreen/>
        case 'flat':
            return <FlatListScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottom':
            return <BottomScreen/>
        case 'menu':
            default:
                return (
                    <View style={styles.container}>
                        <Text style={styles.texto}>Menú de Prácticas</Text>

                        <View style={styles.containerBotones}>
                            <Button onPress={() => setScreen('contador')} title='pract: contador'/>
                            <Button onPress={() => setScreen('botones')} title='pract: buttons'/>
                            {/*<Button onPress={() => setScreen('botones2')} title='pract: buttons terminado'/>*/}   
                            <Button onPress={() => setScreen('text')} title='pract: textinput'/> 
                            <Button onPress={() => setScreen('image')} title='pract: image background'/>
                            <Button onPress={() => setScreen('repaso')} title='pract: repaso'/>
                            <Button onPress={() => setScreen('scroll')} title='pract: scrollview'/>
                            <Button onPress={() => setScreen('act')} title='pract: activity indicator'/>
                            <Button onPress={() => setScreen('flat')} title='pract: flatlist'/>
                            <Button onPress={() => setScreen('modal')} title='pract: modal'/>
                            <Button onPress={() => setScreen('bottom')} title='pract: bottom sheet'/>
                        </View>
                        
                    </View>
                )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292828ff',
    alignItems: 'center', // start < -- center -- > end
    justifyContent: 'center',
  },

  texto: {
    fontFamily: "Times New Roman",
    fontSize: 45,
    color: '#d7d7d7ff',
    fontWeight: 'bold', // 100 - 900 para grosor de negrtias
    fontStyle: 'italic', // solo italic o normal
  },

  containerBotones: {
    marginTop: 25,
    gap: 20,
  },
})