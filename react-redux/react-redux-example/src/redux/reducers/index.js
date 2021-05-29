import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import fruits from './fruitsReducer'
import todos from './../../todo/reducer/todoReducer'
import posts from './postReducer'

export default combineReducers({
    counter,
    user,
    fruits,
    todos,
    posts
})