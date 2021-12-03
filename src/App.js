import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItems from "./components/Post_Items";
import "./Styles/App.css";

function App() {
  
  const [posts, setPosts] = useState([
      {id:1 , title: 'Js', body: 'Description' },
      {id:2 , title: 'Js', body: 'Description' },
      {id:3 , title: 'Js', body: 'Description' },
      {id:4 , title: 'Js', body: 'Description' },
  ])
    
  return (  
    <div className="App">
       {posts.map(post =>
          <PostItems post={post} key={post.id}/> 
      )}
    </div>
  );
}

export default App;
