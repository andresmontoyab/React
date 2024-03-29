import { useEffect, useState } from 'react';
import './App.css';
import { auth, db } from './firebase';
import Post from './Post';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';

// thisistheemailusingforinsyeah@studing.io
// thisistheemailusingforins

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles()
  const [posts, setPosts] = useState([])
  const [open, setOpen] = useState(false)
  const [openSigniIn, setOpenSigniIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [modalStyle] = useState(getModalStyle);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser){
          // user has logged in
          console.log(authUser)
          setUser(authUser)
        } else {
          // user has logged out
          setUser(null)
        }
      })
    
    return () => {
      // perform clean up actions
      unsubscribe();
    }
  }, [user, username])
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        })))
      })
  }, [])

const handleLogin = (event) => {
  event.preventDefault();
  auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error)=> alert(error.message))
}

const signIn = (event) => {
  event.preventDefault();
  auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))
  setOpenSigniIn(false)
} 
  
  return (

    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__sign_up">
            <center>
              <div className="app__header">
                <img 
                  className=".app__headerImage"
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                  alt=""/>
              </div>
            </center>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="username"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          <Button type="submit" onClick={handleLogin}>Sign up</Button>
        </form>
        </div>
      </Modal>
      <Modal
        open={openSigniIn}
        onClose={() => setOpenSigniIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__sign_up">
            <center>
              <div className="app__header">
                <img 
                  className=".app__headerImage"
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                  alt=""/>
              </div>
            </center>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <Button type="submit" onClick={signIn}>Sign In</Button>
        </form>
        </div>
      </Modal>
     <div className="app__header">
       <img 
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
        alt=""/>
             {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
     ): (
       <div>
         <Button onClick={() => setOpenSigniIn(true)}>Sign In</Button>
         <Button onClick={() => setOpen(true)}>Sign Up</Button>
       </div>
        
     )} 
     </div>
     <div className="app__posts">
      {posts.map(({id, post}) => (
        <Post
          key={id}
          postId = {id}
          imageUrl={post.imageUrl}
          username={post.username}
          user={user}
          caption={post.caption}
        />
      ))}
     </div>     
     {user?.displayName ? (
        <ImageUpload username={user.displayName}/>
      ): (
        <h3>Sorry you need to Log in</h3>
      )}
      
    </div>
  );
}

export default App;
