import {sum, substraction, division, product, getRandomnNum} from './numbers'

describe('Testing math functions', () =>{
    test('testing sum', () => {
        expect(sum(5,5)).toBe(10)
    })

    test('testing sum', () => {
        expect(substraction(5,5)).toBe(0)
    })

    test('testing sum', () => {
        expect(division(5,5)).toBe(1)
    })

    test('testing sum', () => {
        expect(product(5,5)).toBe(25)
    })


    test('testing sum', () => {
        const result = getRandomnNum(5,10)
        expect(result).toBeGreaterThan(5)
        expect(result).toBeLessThanOrEqual(10)
    })
})