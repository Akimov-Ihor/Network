import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from "./friends-reducer";

let reducers= combineReducers({
    profilePage:profileReducer,
    dialogs:dialogsReducer,
   friendsList:friendsReducer
})

let store = createStore(reducers)

window.store=store



export default store