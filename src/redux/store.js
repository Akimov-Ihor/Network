import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 0, message: 'Wow', likesCount: '0' },
        { id: 1, message: "Hi,how are you?", likesCount: '15' },
        { id: 2, message: "It's my first post", likesCount: '20' }
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valer" }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "What`s up" },
        { id: 4, message: "Fine!And you?" },
        { id: 5, message: "Ty good" },
        { id: 6, message: "It`s very good" }
      ],
      newMessageBody:''
      
    },
    friends: {
      friendsList: [
        { id: 1, name: "Dimych" },
        { id: 5, name: "Victor" },
        { id: 3, name: "Sveta" }
      ]
    }
  },
  _callSubscriber() {
    console.log(1);
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
    this._state.profilePage=profileReducer(this._state.profilePage,action);
    this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
    this._state.friends=friendsReducer(this._state.friends,action)
    
     this._callSubscriber(this._state);
  }
}
 

window.store = store;

export default store;