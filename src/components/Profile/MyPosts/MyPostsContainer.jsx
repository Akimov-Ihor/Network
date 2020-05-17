import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
  debugger
  let state = props.store.getState();
  let addPost = () => {
    let posts=state.profilePage.postData
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  }


  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost}  posts={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>
  )
  }
  export default MyPostsContainer;  