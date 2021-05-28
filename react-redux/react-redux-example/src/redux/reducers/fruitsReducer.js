import  {ADD_FRUIT} from '../actions/fruitActions'

const initialState = [
    'Fresa',
    'Manzana'
]

function fruits(state = initialState, action) {
    switch (action.type) {
        case ADD_FRUIT:
            return [
                ...state,
                action.payload.fruit
            ]
        default:
            return state
    }
}

export default fruits

