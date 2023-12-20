// BottomMenu.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomMenu = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Scan')}>
        <Text style={styles.menuText}>Scan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.menuText}>Map</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('ArtDetail')}>
        <Text style={styles.menuText}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    paddingVertical: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },


  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 20,
  },
});

export default BottomMenu;