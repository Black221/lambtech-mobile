import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Rectangle from './profil';

const circle = () => {
    return (
      <View style={styles.container}>
        <Rectangle />
        
        <View style={styles.circle}></View>
        <Text style={styles.text}>Name {"\n"} {"\n"}Descripton....</Text>
        <Rectangle />
        
        <View style={styles.circle}></View>
        <Text style={styles.text}>Name {"\n"} {"\n"}Descripton....</Text>
        
        
        
        
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom:5,
        marginTop:-10,
        
       alignItems: 'center',
       


    },
    circle: {
      width: 21,  // Largeur du rectangle
      height: 21, // Hauteur du rectangle
      backgroundColor: '#6B4EFF', // Couleur de fond
      marginLeft: 0,
      marginTop:-40,
      
      borderRadius: 20,
      marginVertical: 0,
      marginHorizontal: 10,
    },
    text: {
      fontSize: 14,
      marginTop: -5,
      marginLeft:0,
      
    
      
    }
  });

  export default circle;