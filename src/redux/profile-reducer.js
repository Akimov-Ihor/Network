const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
    { id: 0, message: 'Wow', likesCount: '0' },
    { id: 1, message: "Hi,how are you?", likesCount: '15' },
    { id: 2, message: "It's my first post", likesCount: '20' }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 0,
        message: state.newPostText,
        likesCount: 0
      };
      let stateCopy = { ...state }
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost)
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
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
export const updateNewPostActionCreator = (text) => {
  return { type: 'UPDATE-NEW-POST-TEXT', newText: text }
}

export default profileReducer;