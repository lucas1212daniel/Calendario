import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Alimentacao = (props) => 
  <View>
    <Text style={styles.text}>Alimentação</Text>
    <Text style={styles.paragrafo}>É importante lembrar que o excesso de carboidratos, por exemplo, aumenta a acidez vaginal, colaborando para o desequilíbrio e o aparecimento de problemas como a candidíase. Seguir uma dieta balanceada ajuda a regularizar o ciclo, prevenir o desequilíbrio da flora vaginal e até aliviar os sintomas da TPM.</Text>
    <Text style={styles.paragrafo}>Por isso homens, saibam o que devem oferecer para suas mulheres.</Text>
    <Text style={styles.paragrafo}>Seguir uma dieta equilibrada, com mais frutas, verduras e grãos integrais, e menos sal, gordura e açúcar, também ajuda a ganhar saúde e regularizar a produção hormonal. É importante destacar que nada deve ser banido do cardápio, apenas balanceado.</Text>
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
export default Alimentacao;