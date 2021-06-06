const getValue = (exp) => {
    switch(exp) {
        case 'defined':
            return {}
        case 'undefined':
            return undefined
        case 'true':
            return true
        case 'false':
            return false
        default:
            return null
    }
}

describe('Test null, undefined and booleans values', () => {
    test('Check if is defined', () => {
        expect(getValue('defined')).toBeDefined()
    })
    
    test('Check if is undefined ', () => {
        expect(getValue('undefined')).not.toBeDefined()
    })

    test('Check if is null', () => {
        expect(getValue()).toBeNull()
    })

    test('check if it is true', () => {
        expect(getValue('true')).toBeTruthy()
    })

    test('check if it is false', () => {
        expect(getValue('false')).toBeFalsy()
    })
    
    test('check if it is NaN', () => {
        expect(NaN).toBeNaN()
    })
})