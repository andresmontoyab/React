import {
    getDataCallback,
    getDataPromise,
    getDataPromiseReject,
    getDataPromiseAsyncAwait
} from './async'

describe('Testing async operations', () => {
    test('testing callback, good way', (done) => {
        getDataCallback((name) => {
            expect(name).toBe('Andres montoya')
            done()
        })
    })

    test('Testing promises', (done) => {
        getDataPromise()
            .then(name => {
                expect(name).toBe('Andres Montoya')
                done()
            })
    })
    
    test('Testing promises with out done', () => {
        return expect(getDataPromise()).resolves.toBe('Andres Montoya')
    })

    test('Testing promises catch', (done) => {
        getDataPromiseReject()
            .catch(error => {
                expect(error).toBe('Error')
                done()
            })
    })
    
    test('Testing promises catch with out done', () => {
        return expect(getDataPromiseReject()).rejects.toBe('Error')
    })
    
    test('Testing promises with async await', async () => {
        const name = await getDataPromiseAsyncAwait()
        expect(name).toBe('Andres Montoya')
    })

    test('Testing promises catch async await', async () => {
        try {
            const name = await getDataPromiseReject()
        } catch(error) {
            expect(error).toBe('Error')
        }
        
    })
    
});