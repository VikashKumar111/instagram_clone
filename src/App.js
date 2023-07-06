
import { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import { auth, db } from './firebase';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import ImageUpload from './ImageUpload';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openLogIn, setOpenLogIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
          // user has logged in
        console.log(authUser);
        setUser(authUser);
        }
       else {
          //  user has logged out
        setUser(null);
      }
    })
    return () => {
      // perform some cleanup actions
      unsubscribe();
    }
  }, [user, username]);
  
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, post: doc.data()
      })))
    });
    
  } , [])
  
  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName:username
        })
    })
      .catch((error) => alert(error.message))
    
    setOpen(false);
  }
  
  const logIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))
    
    setOpenLogIn(false);
  }
  return (
    <div className="app">

      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
          <h3>sorry you need to login to upload</h3>
      )}
      
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <form className='app__signup'>
          <center>
            <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
            />
          </center>
          
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type='submit' onClick={signUp}>Sign Up</Button>
            
          </form>
        </Box>
      </Modal>


      <Modal
        open={openLogIn}
        onClose={() => setOpenLogIn(false)}
      >
        <Box sx={style}>
          <form className='app__signup'>
          <center>
            <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
            />
          </center>
          
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type='submit' onClick={logIn}>Login</Button>
            
          </form>
        </Box>
      </Modal>




      <div className="app__header">
        <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
      </div>
      
      {user ? (
        <Button onClick={() => auth.signOut()}>Log Out</Button>
      ) : (
        <div className='app__loginContainer'>  
          <Button onClick={() => setOpenLogIn(true)}>Login</Button>
          <Button onClick={() => setOpen(true)}>Sign Up</Button>
        </div>    
      )}
     


      <h1>Hello clever programmers lets build an instagram clone using react</h1>

      {
        posts.map(({id , post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
      


    </div>
  );
}

export default App;
