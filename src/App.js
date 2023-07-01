
import './App.css';
import Post from './Post';

function App() {
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
      <Post username="cleverqazi" caption="day three of live sessions awesome" imagrUrl="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      <Post />
      <Post />
      <Post/>
      


    </div>
  );
}

export default App;
