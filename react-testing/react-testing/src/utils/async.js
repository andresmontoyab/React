export const getDataCallback = (callback) => {
    const name = 'Andres montoya'
    setTimeout(()=> {
        callback(name)
    }, 200)
}

export const getDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Andres Montoya')
        }, 200)
    })
}

export const getDataPromiseReject = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error')
        }, 200)
    })
}

export const getDataPromiseAsyncAwait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Andres Montoya')
        }, 200)
    })
}