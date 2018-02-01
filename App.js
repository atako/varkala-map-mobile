import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './src/reducers'
import Index from './src/containers/index'
import { fetchPoints } from './src/actions';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
  )
)

store.dispatch(fetchPoints())

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Index />
      </Provider>
    )
  }
}





