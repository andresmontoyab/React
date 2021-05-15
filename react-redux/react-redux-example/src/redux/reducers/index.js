import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import fruits from './fruitsReducer'

export default combineReducers({
    counter,
    user,
    fruits
})