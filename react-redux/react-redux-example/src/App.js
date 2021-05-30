import React from 'react'
import store from  './redux/store'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import User from './components/User'
import Fruits from './components/Fruits'
import Todos from './todo/component/Todos'
import Posts  from './components/Posts'

const App = () => {
  return (
    <Provider store = {store}>
      <div>
        <Posts></Posts>
        <Todos></Todos>
        {/*<Counter/>
        <User/>
        <Fruits/>*/}
      </div>
    </Provider>
  )
}

export default App