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


# Steps to setup stripe

Install the next dependencies

```sh 
npm install @stripe/stripe-js
npm install @stripe/react-stripe-js
```

After that, we need to create an stripe account.

After creating the account go the `Developer` section and copy the `API keys`