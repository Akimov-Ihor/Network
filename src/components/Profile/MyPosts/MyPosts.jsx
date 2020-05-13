import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import Post from '../MyPosts/Post/Post'

const MyPosts = (props) => {
  let newPostItem=React.createRef();
  let addNewPost=()=>{
    let newPost=newPostItem.current.value;
    alert(newPost);
  }

 
  let posts = props.postData.map(p => <Post message={p.message} likeCount={p.likesCount} />);
  return (
    <div className={s.postBlock}>
      My posts
      <div>
        <div>
          <textarea ref={newPostItem}></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts}
        <Post />
      </div>
    </div>);
}
export default MyPosts;