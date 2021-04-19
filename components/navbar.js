import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Calendar from './calendar'
import Periodo from './periodo'
import Importante from './importante'
import Home from './home'


class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      abas: 
      <Home/>,
    };

  }

  onPress(id) {
    
    if (id == "Período") {
      this.setState( {abas: 
      <Periodo/>} );
    } 
    else if (id == "Calendário") {
      this.setState( {abas: 
      <Calendar/>} );
    } 
    else if (id == "Importante") {
      this.setState( {abas: 
      <Importante/>} );
    } else if (id == "#") {
      this.setState( {abas: <Home/>} );
    } 
   
  }

  render() {

    return (
      
        <View>
          <View style={styles.container}>
          <Button 
            onPress={ () => { this.onPress("#") } }
            title= "Home"
            color='#ccc'
            
            />
          <Button 
            onPress={ () => { this.onPress("Período") } }
            title= "O que é?"
            color='#ccc'
            
            />
            <Button 
            onPress={ () => { this.onPress("Calendário") } }
            title= "Calendario"
            color='#ccc'
            />
            <Button 
            onPress={ () => { this.onPress("Importante") } }
            title= "Importante"
            color='#ccc'
            />
          </View>
         
             <View>{this.state.abas}</View>
        </View>
    )
    
  }
}

const styles = StyleSheet.create({
  
  container: {
    marginBottom: 20,
    padding: 0, 
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffdddd',
    borderColor: '#ffdddd',
    maxWidth: 'auto',
    
    alignItems: 'center'
  },
  size: {
    minWidth: 'auto',
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: '900',
  },
 
  line: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    flex: 1,
    margin: 3,
  },
});

export default NavBar;