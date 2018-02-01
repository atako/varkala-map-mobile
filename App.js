import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import {
  Constants,
  Components,
} from 'expo'
import Map from './src/components/Map'
import { Icon } from 'react-native-elements'



export default class App extends Component {
  state = {
    mapRegion: {
      latitude: 8.737457,
      longitude: 76.708158,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({
      mapRegion
    });
  };



  render() {
    return ( 
    <View style = {styles.container}>
      <Icon 
        name='menu'
        size={40}
      />
      <Map />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
})
