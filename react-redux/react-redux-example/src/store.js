import { createStore, } from 'redux'

const initialState = 0
function counter(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT': {
            return state +1 
        }
        case 'DECREMENT': {
            return state  - 1 
        }
        default:
            return state
    }
}

const store = createStore(counter)
store.subscribe(() => console.log(store.getState()))

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})



export default store