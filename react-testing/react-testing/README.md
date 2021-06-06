# React Testing

* [Getting Start](#Getting-Start)


# Testing       

When we are talking about software development there is one main important topic that we need to cover, testing.

Testing it is a strategy to ensure that our code is doing what we expected, and also that in future changes all the old functionalities keep working in the same way.

# Getting Start

In order to start with testing with react there are several approaches, in this repository we are going to talk about the next stack:

- Jest
- Enzyme

To start doing testing in react we need to install react with npx

```sh 
npx create-react-app name app
```

After run the above command we can run our test running the next commands

```sh
npm run test
```


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




