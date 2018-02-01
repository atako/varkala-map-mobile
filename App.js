import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './src/reducers'
import Index from './src/containers/index'
import { config } from './src/config/firebase'
import { fetchPoints } from './src/actions';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
  )
)



export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config)
    store.dispatch(fetchPoints())
  }

  render() {
    return (
      <Provider store = {store}>
        <Index />
      </Provider>
    )
  }
}





