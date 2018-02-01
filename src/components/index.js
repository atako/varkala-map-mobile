import React, { Component } from 'react'
import { View } from 'react-native'
import { Constants } from 'expo'
import Map from '../containers/Map'

export default class Index extends Component {
 

  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
}


