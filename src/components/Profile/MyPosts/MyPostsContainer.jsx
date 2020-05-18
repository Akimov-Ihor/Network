import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';


const mapStateToProps =(state)=>{
  console.log(state)
  return{
    posts:state.profilePage.postData,
    newPostText:state.profilePage.newPostText
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    updateNewPostText:(text)=>{
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
    addPost:()=>dispatch(addPostActionCreator())

  }
}

const MyPostsContainer= connect (mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;  