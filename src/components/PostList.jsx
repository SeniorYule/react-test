import React from "react";

const PostList = ({posts}) => {
    return(
        <div>
            {posts.map(post =>
            <PostItems post={post} key={post.id}/> 
      )}
        </div>
    )

}
export default App;