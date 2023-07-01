
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
      <Post username="clever qazi" caption="day three of live sessions awesome" imagrUrl="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      <Post username="vikas thakur" caption="welldone brother u have done it" imageUrl=" https://img.freepik.com/premium-photo/full-length-portrait-handsome-young-man-posing-isolated-gray-wall_171337-83295.jpg?w=2000"/>
      <Post username="saurabh chauhan" caption="enjoying the holidays "/>
      <Post username="abhishek thakur" caption="turkey is awesome country"/>
      


    </div>
  );
}

export default App;
