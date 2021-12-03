import React from "react";

const PostItems = (props) => {
    console.log(props)
    return(
       <div className = 'post'>
            <div className = 'post__content'>
              <strong>{props.post.id} {props.post.title} </strong>
              <div>
                {props.post.body}   
              </div>
            </div>
            <div className='post__btns'>
              <button className = 'delete__btn'>Удалить</button>
            </div>
        </div>
    )
         
}

export default PostItems;