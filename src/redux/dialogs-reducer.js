const UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE='SEND_MESSAGE';

let initialState={
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
  
}

const dialogsReducer=(state=initialState,action)=>{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:{
         return{
            ...state,
            newMessageBody:action.body
          }
        }
        case SEND_MESSAGE:{
          let body= state.newMessageBody;
         return{
            ...state,
             newMessageBody:"",
             messages:[...state.messages,{id:7, message: body}]
          }
          
       
        }
          
           
        
        default:
          return state;
    }
}

    export  const sendMesssageCreator = () => {
      return{
        type:'SEND_MESSAGE'
      }
     }
     export const updateNewMessageBodyCreator = (body)=>{
       return{type:'UPDATE_NEW_MESSAGE_BODY', body:body}
     }
     
export default dialogsReducer;