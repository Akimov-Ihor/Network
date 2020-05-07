import React from 'react';
import s from '../MyPosts/MyPosts.module.css';
import Post from '../MyPosts/Post/Post'

const MyPosts = () => {
  const postData = [
    { id: 1, message: "Hi,how are you?", likesCount: '15' },
    { id: 2, message: "It's my first post", likesCount: '20' },
  ]
  let posts = postData.map(p => <Post message={p.message} likeCount={p.likesCount} />);
  return (
    <div className={s.postBlock}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts}
        <Post />
      </div>
    </div>);
}
export default MyPosts;