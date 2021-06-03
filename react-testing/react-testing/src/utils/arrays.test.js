import { createStore } from './array'

describe('Testing arrays', () => {
    test('Adding new fruit', () => {
        const store = createStore()
        store.addFruit('apple')
        store.addFruit('strawberry')
        expect(store.getFruits()).toStrictEqual(['apple','strawberry'])
    })

    test('Checking if array contains apple', () => {
        const store = createStore()
        store.addFruit('apple')
        expect(store.getFruits()).toContain('apple')
    })

    test('Checking if array not contains apple', () => {
        const store = createStore()
        store.addFruit('banana')
        expect(store.getFruits()).not.toContain('apple')
    })

    test('Checking array lenght', () => {
        const store = createStore()
        store.addFruit('banana')
        store.addFruit('apple')
        expect(store.getFruits()).toHaveLength(2)
    })
})