export const sum = (a,b) => {
    return a +b
}

export const substraction = (a,b) => {
    return a  - b
}

export const product = (a,b) => {
    return a * b
}

export const division = (a,b) => {
    return a / b
}

export const getRandomnNum = (min, max) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
        )
}