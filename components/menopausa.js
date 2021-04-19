import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Menopausa = (props) => 
  <View>
<Text style={styles.text}>Menopausa</Text>
      <Text style={styles.paragrafo}>Com o passar dos anos, vai havendo uma perda gradativa de folículos primários, restando um número bastante reduzido após os 40 anos e praticamente acabando após os 50. A ausência desses folículos é a principal causa da menopausa. Na menopausa, a mulher para de ovular e menstruar, chegando ao fim de seu período reprodutivo.</Text>
      <Text style={styles.paragrafo}>Durante o período que precede a menopausa e após seu início, a mulher pode sentir diversos desconfortos, decorrentes das alterações hormonais. Mudanças de hábitos na alimentação e a prática de atividades físicas podem ajudar a diminuir esses desconfortos. No entanto, é importante sempre conversar com um médico de confiança para receber orientações sobre a melhor forma de enfrentar esse período.</Text>
     
  </View>
const styles = StyleSheet.create({
  
 
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    padding: 2
  },

    paragrafo: {
    color: 'black',
    textAlign: 'start',
    fontSize: 16,
   
    padding: 2
  }
});
export default Menopausa;