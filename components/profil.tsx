import React from 'react';
import { View, StyleSheet } from 'react-native';

const Rectangle = () => {
  return (
    <View style={styles.rectangle} />
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 100,  // Largeur du rectangle
    height: 100, // Hauteur du rectangle
    backgroundColor: '#D9D9D9', // Couleur de fond
    flexDirection: 'row',
    
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingHorizontal: 10,
    marginTop: 20, // Marge supérieure pour afficher la barre en haut
    marginHorizontal: 10,
  },
});

export default Rectangle;
