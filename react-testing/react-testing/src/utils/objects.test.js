import {createStore} from './objects'

describe('Test objects', () => {
    test('Add item to object', () => {
        const store = createStore()
        store.addItem({
            id: 'id',
            name:'Andres',
            country: 'Colombia'
        })
        expect(store.getStore()[0]).toEqual({
            id: 'id',
            name:'Andres',
            country: 'Colombia'
        })
    })

    test('Search Item by Item', () => {
        const store = createStore()
        store.addItem({
            id: 1,
            name:'Andres',
            country: 'Colombia'
        })
        expect(store.getById(1)).toEqual({
            id: 1,
            name:'Andres',
            country: 'Colombia'
        })
    })


    test('Validate just one object property ', () => {
        const store = createStore()
        store.addItem({
            id: 1,
            name:'Andres',
            country: 'Colombia'
        })
        expect(store.getById(1)).toMatchObject({
            name:'Andres'
        })
    })


    test('Validate if the object has a property ', () => {
        const store = createStore()
        store.addItem({
            id: 1,
            name:'Andres',
            country: 'Colombia'
        })
        expect(store.getById(1)).toHaveProperty('name')
    })
})