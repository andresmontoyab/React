npm install @material-ui/core
npm install @material-ui/icons
npm install react-router-dom
npm install firebase
npm install -g firebase-tools

# Steps to setup firebase

```sh
npm install firebase
```

```sh
sudo npm install i -g firebase-tools
```

```sh
firebase login
```

```sh
firebase init
```

Afther we type `firebase init` in the cli, some options are going to be displayed, follow the next steps:

1. Select `Hosting`
2. Select `Use an existing project`
3. Select your firebase project
4. When they asked `What do you want to use as your public directory?` type -> `build`
5. When thet asked `Configure as a single-page app` type -> Y

The last step to deploy our application is run the next commands:

```sh
npm run build
```

```sh
firebase deploy
```

## Firebase Cloud Functions

1. firebase init
2. Choose the option `Functions: Configure and deploy Cloud Functions`
3. Choose `Javascript`
4. After that firebase should creates a folder call `function`, in that folder is are going to be our backend side

In order to develop our function/backend service we need to install some dependencies, please be sure that you are inside the function folder.

```sh
npm i express
npm i cors
npm i stripe
```

### Write your API

One basic example for your cloud function API could be


```js
const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51J3pi0IxX3vLdReGa7OByR0oH1oTHfYc7vEhoe1nwILgi4GFbNkaXBZ3xmeC0MKkE0eZfBcBSgloqvVx0xu3I5sk009oM2NsdO')

// Setup API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => res.status(200).send('Hello world'))

// - Listener
exports.api = functions.https.onRequest(app)
```

### Launch your API in local

In order to start you API in local you need to run the next command

```sh
firebase emulators:start
```


# Deploy cloud firebase function 

```sh
firebase deploy --only functions
```

# Steps to setup stripe

Install the next dependencies

```sh 
npm install @stripe/stripe-js
npm install @stripe/react-stripe-js
```

After that, we need to create an stripe account.

After creating the account go the `Developer` section and copy the `API keys`