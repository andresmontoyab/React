import React from 'react'
import store from  './redux/store'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import User from './components/User'
import Fruits from './components/Fruits'

const App = () => {
  return (
    <Provider store = {store}>
      <div>
        <Counter/>
        <User/>
        <Fruits/>
      </div>
    </Provider>
  )
}

export default App