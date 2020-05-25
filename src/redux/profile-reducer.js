import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';

let initialState = {
  postData: [
    { id: 0, message: 'Wow', likesCount: '0' },
    { id: 1, message: "Hi,how are you?", likesCount: '15' },
    { id: 2, message: "It's my first post", likesCount: '20' }
  ],
  newPostText: '',
  profile:null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 0,
        message: state.newPostText,
        likesCount: 0
      };
      let stateCopy = {
         ...state, 
         postData:[...state.postData,newPost],
         newPostText:''
        
        }
        return stateCopy;
      
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText:action.newText
            }
    }
    case SET_USER_PROFILE:{
      return {
        ...state,profile:action.profile
      }
    }
    default:
      return state;
  }
}
export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

export const setUserProfile = (profile) => {
  return {
    type: 'SET_USER_PROFILE',profile
  }
}
export const getUserProfile = (userId) =>(dispatch)=> {

     usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
            });
    }

export const updateNewPostActionCreator = (text) => {
  return { type: 'UPDATE-NEW-POST-TEXT', newText: text }
}

export default profileReducer;