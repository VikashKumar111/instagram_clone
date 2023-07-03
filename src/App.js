
import { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    { username:"clever qazi" , caption:"day three of live sessions awesome" , imageUrl:"https://i.pinimg.com/564x/5f/88/6a/5f886abc01c18bc33b58ff5be07c2e79.jpg" },
    { username:"vikas thakur" , caption:"welldone brother u have done it" ,imageUrl:"https://i.pinimg.com/564x/f0/cd/89/f0cd89de60fa627f422a1b6d8880e79a.jpg" },
    { username:"saurabh chauhan" , caption:"enjoying the holidays " ,imageUrl:"https://i.pinimg.com/564x/97/f1/a5/97f1a5510f7f2268f412e73a666410d4.jpg" },
    { username:"abhishek thakur" , caption:"turkey is awesome country" , imageUrl:"https://i.pinimg.com/564x/71/56/3b/71563b077c5722a896abaa9e6c0b1c32.jpg"}
 ])
  return (
    <div className="app">
      
      <div className="app__header">
        <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
      </div>

      <h1>Hello clever programmers lets build an instagram clone using react</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
      


    </div>
  );
}

export default App;
