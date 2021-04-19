import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Introducao from './introducao'
import Fases from './fases'
import Fertil from './fertil'
import Menopausa from './menopausa'

class Periodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      periodo: null,
    };

  }

  onPress(id) {
    
    if (id == "Introducao") {
      this.setState( {periodo: 
      <Introducao/>} );
    } 
    else if (id == "Fases") {
      this.setState( {periodo: 
      <Fases/>} );
    } 
    else if (id == "Fertil") {
      this.setState( {periodo: 
      <Fertil/>} );
    } 
    else if (id == "Menopausa") {
      this.setState( {periodo: 
      <Menopausa/>} );
    } 
   
  }

  render() {

    return (
      
        <View style={styles.container}>
        <View>
        <Text style={styles.text}>Ciclo Mentrual</Text>
          <View>
          <Button
            onPress={ () => { this.onPress("Introducao") } }
            title= "Introducão"
            color='#6c757d'
            />
            </View>
            <View style = {styles.size}  >
            <Button 
            onPress={ () => { this.onPress("Fases") } }
            title= "Fases do Período"
            color='#6c757d'
            />
            </View>
            <View style = {styles.size} >
            <Button 
            onPress={ () => { this.onPress("Fertil") } }
            title= "Período Fertil"
            color='#6c757d'
            />
            </View>
            <View style = {styles.size} >
            <Button 
            onPress={ () => { this.onPress("Menopausa") } }
            title= "Menopausa"
            color='#6c757d'
            />
          </View>
         </View>
             <View>{this.state.periodo}</View>
        </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    minWidth: '320px',
    borderWidth: 3,
    borderColor: '#ffffdd',
    backgroundColor: '#ffffff',
   
    
  },

  text: {
        color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 8
  },

});



export default Periodo;