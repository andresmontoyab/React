import { greetings } from './strings'


describe('Testing Greetings', () => {
    const greeting = greetings('Andres')
    test('Testing Greetings functions', () => {
        expect(greeting).toMatch('Hello I am Andres')
    })
})

// toMatch is like contains even receives regex