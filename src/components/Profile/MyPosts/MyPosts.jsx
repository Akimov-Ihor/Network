import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

const MyPosts = (props) => {
 console.log(props)
  let postsElemets = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} key={p.id} />);
  
  let newPostElement=React.createRef();
  
  let onAddPost = () => {   
   props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
 
  }


  return (
    
    <div className={s.postBlock}>
      My posts
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElemets}
      </div>
    </div>);
    
}
export default MyPosts;