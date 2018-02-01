import _ from 'lodash'
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
    // console.log(this.props)
    return (
      <MapView
        style={{
          alignSelf: 'stretch',
          flex: 1
        }}
        region={this.state.mapRegion}
        provider={MapView.PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
      >
      {
        _.map(this.props.points, (val) => {
              return (<MapView.Marker
                key={val.id}
                coordinate={{ latitude: val.lat, longitude: val.lng }}
                title = { val.title }
                description = { val.description }
                image = { require(`../../assets/supermarkets.png`) }
            />
              )
        })
      }
        
      </MapView>
    )
  }
}

