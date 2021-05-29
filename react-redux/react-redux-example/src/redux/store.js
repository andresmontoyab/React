import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import reduxLogger from 'redux-logger'
import thunk from 'redux-thunk'


const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('An Actions has happened', action)
            next(action)
        }
    }
}

const confirmDeleteTodo = (store) => (next) => (action) => {
    if (action.type === 'DELETE_TODO') {
        let confirmation = window.confirm('Are you sure you want to delete the task?')
        if (confirmation) {
            next(action)
        }
    }
}
const store = createStore(rootReducer, applyMiddleware(reduxLogger, confirmDeleteTodo, thunk))
//store.subscribe(() => console.log(store.getState()))
//
store.dispatch({type: 'INCREMENT'})
//store.dispatch({type: 'INCREMENT'})
//store.dispatch({type: 'DECREMENT'})



export default store