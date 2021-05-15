import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)
//store.subscribe(() => console.log(store.getState()))
//
store.dispatch({type: 'INCREMENT'})
//store.dispatch({type: 'INCREMENT'})
//store.dispatch({type: 'DECREMENT'})



export default store