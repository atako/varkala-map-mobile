import React, { Component } from 'react'
import { MapView } from 'expo'

const mapStyle = require('../mapstyle.json')

export default class Map extends Component {
  state = {
    mapRegion: {
      latitude: 8.737457,
      longitude: 76.708158,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  }

  render() {
    return (
      <MapView
        style={{
          alignSelf: 'stretch',
          flex: 1
        }}
        region={this.state.mapRegion}
        provider={MapView.PROVIDER_GOOGLE}
        // onRegionChange = {this._handleMapRegionChange}
        customMapStyle={mapStyle}
      >
        <MapView.Marker
          coordinate={{ latitude: 8.737361561056908, longitude: 76.70826528836062 }}
          title='Title'
          description='Description'
          image={require('../../assets/supermarkets.png')}
        />
      </MapView>
    )
  }
}

