# React Testing

* [Getting Start](#Getting-Start)

# Testing       

When we are talking about software development there is one very important topic that we need to cover, testing.

Testing it is a strategy to ensure that our code is doing what we expected, and also that if we add changes to our code all the old functionalities keep working in the same way.

# Getting Start

There are a lot of frameworks/library to test all kind of languages, in this repository we are going to cover the next stack for react:

- Jest
- Enzyme

In order to start testing in react we are going to use the `npx` tool:

```sh 
npx create-react-app name app
```

After run the above command we can run our test running the next commands

```sh
npm run test
```

# First Test

With unit test basically we are trying to test units of our application, a unit usually is a method, nevertheless a method could have multiples results or branchs, so one method could have more than one unit test.

Let's say that we have a file call `string.js` and we want to create some tests of this file.

```js
// This is the `string.js` file
export const greetings = (name) => {
    return `Hello I am ${name}`
}
```

First create your test file, usually the name convention of this files is the `file_you_want_to_test.test.js`, so if we want to test our `string.js` we should create a new file called `string.test.js`.


```js
import { greetings } from './strings'

describe('Testing Greetings', () => {
    const greeting = greetings('Andres')
    test('Testing Greetings functions', () => {
        expect(greeting).toMatch('Hello I am Andres')
    })
})
```

In the above code we can see our first react test.

1. As you can see we need to import the file that we want to test
2. The `describe` function it is used to group test 
3. The `test` function is actually our test.
4. With `expect` function compare that the result of our function is the same that what we expected.


# Coverage

Run the next command

`npm test -- --coverage --watchAll`


# Testing Async code

# Enzyme 

Enzyme help us to emulate the React component creations

# Installing Enzyme

First install enzyme

`npm i -D enzyme`

Second in order to have good setup install, some other dependencies.

`npm install --save-dev @wojtekmaj/enzyme-adapter-react-17`

You need to install the enzyme adapter that match with your react version




