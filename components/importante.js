import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Exercicios from './exercicios'
import Autocuidado from './autocuidado'
import Alimentacao from './alimentacao'
class Importante extends Component {

 constructor(props) {
    super(props);
    this.state = {
      importante: null,
    };

  }

  

  onPress(id) {
    
    if (id == "Alimentacao") {
      this.setState( {importante: 
      <Alimentacao/>} );
    } 
    else if (id == "Autocuidado") {
      this.setState( {importante: 
      <Autocuidado/>} );
    } 
    else if (id == "Exercicios") {
      this.setState( {importante: 
      <Exercicios/>} );
    } 
   
  }

  render() {
    
    return (
      
        <View style={styles.container}>
        <Text style={styles.text}>Importante saber</Text>
          <View>
          <Button 
            onPress={ () => { this.onPress("Alimentacao") } }
            title= "Alimentacao"
            color='#6c757d'

            />
            <Button 
            onPress={ () => { this.onPress("Autocuidado") } }
            title= "Autocuidado"
            color='#6c757d'

            />
            <Button 
            onPress={ () => { this.onPress("Exercicios") } }
            title= "Exercicios"
            color='#6c757d'

            />
           
          
         
             <View>{this.state.importante}</View>
             </View>
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

export default Importante;