# WhatsApp Clone

## Requirements

```sh
npm i @material-ui/core
npm i @material-ui/icons
npm i firebase
```

## Auth LogIn With Google

Create the next two variables using the firebase import 

```js
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
```

Use the previous variables

```js
const signIn = () => {
    auth.signInWithPopup(provider)
        .then(result => console.log(result))
        .catch(error => alert(error.message))
}
```

Also you need to do the next steps in your firebase console.

1. Go to your firebase console.
2. Click in `Authentication`
3. Click in `Sign-in Method`
4. Click `Google`
5. Toogle to `Enable` and put your email.
6. Save