import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

const Home = (props) => 
  <View style={styles.container}>
            <Text style={styles.text}>Ciclo Periódico Feminino</Text>
            <Image style={styles.logo} source={require('../assets/ciclo-menstrual.jpg')} />
            <Text style={styles.paragrafo}>
            O app tem por finalidade ilustrativa mostrar algumas sugestões, como também informações importantes sobre o Calendário periódico feminino, tanto para as mulheres se situarem sobre o funcionamento do ciclo, quanto para os homens saibam o que deve ou não fazer nesses períodos.
            </Text>
          </View>
  
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  logo: {
    borderRadius: '50%',
    height: 128,
    width: 128,
    padding: 6,
    margin: 6,
  },
 
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 2
  },

    paragrafo: {
    color: 'black',
    textAlign: 'start',
    fontSize: 16,
    padding: 3
  }
});


export default Home;