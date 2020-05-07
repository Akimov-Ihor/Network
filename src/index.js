import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
  document.getElementById('root')
);

// const dialogs=[
//   {id:1,name:"Dimych"},
//   {id:2,name:"Andrey"},
//   {id:3,name:"Sveta"},
//   {id:4,name:"Sasha"},
//   {id:5,name:"Victor"},
//   {id:6,name:"Valer"}  
// ]


// const messages=[
//   {id:1,message:"Hi"},
//   {id:2,message:"Hello"},
//   {id:3,message:"What`s up"},
//   {id:4,message:"Fine!And you?"},
//   {id:5,message:"Ty good"},
//   {id:6,message:"It`s very good"}
// ]
// const postData = [
//   { id: 1, message: "Hi,how are you?", likesCount: '15' },
//   { id: 2, message: "It's my first post", likesCount: '20' },
// ]



serviceWorker.unregister();
