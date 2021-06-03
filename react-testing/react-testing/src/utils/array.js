export const createStore = () => {
    let fruits = []
    return {
        addFruit: (param) => {
            fruits.push(param)
        },
        getFruits: () => {
            return fruits
        }
    }
}