import React, { useState } from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';

export default function Botones2Screen() {
  const [isOn, setIsOn] = useState(false);
  const [color, setColor] = useState('#ffff33');
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Control de luz</Text>

      <Text style={[styles.light, { color: isOn ? color : '#555' }]}>
        {isOn ? 'Luz encendida' : 'Luz apagada'}
      </Text>

      <Switch
        value={isOn}
        onValueChange={() => setIsOn(!isOn)}
        thumbColor={isOn ? '#f7e11a' : '#ccc'}
        trackColor={{ true: '#f5dd4b', false: '#888' }}
      />

      <View style={styles.buttonRow}>
        <Button title="Amarilla" color="#f5e642" onPress={() => isOn && setColor('#f5e642')} />
        <Button title="Azul" color="#4a90e2" onPress={() => isOn && setColor('#4a90e2')} />
        <Button title="Roja" color="#e94f37" onPress={() => isOn && setColor('#e94f37')} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  light: {
    fontSize: 28,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },
});
