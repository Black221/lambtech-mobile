import React from 'react';
import { View, StyleSheet,Text,  } from 'react-native';
import circle from './name&descrip';

const CircleName = () => {
    return (
      <View style={styles.circleName}>
        <circle/>
        <Text>Name</Text>
        
      </View>
    );
  };
  const styles = StyleSheet.create({
    circleName: {
      width: 25,  // Largeur du rectangle
      height: 25, // Hauteur du rectangle
      backgroundColor: '#6B4EFF', // Couleur de fond
      
      borderRadius: 20,
      marginVertical: 0,
      marginHorizontal: 120,
    },
    text: {
      fontSize: 14,
      
    }
  });
