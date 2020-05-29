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
  ]
};

const dialogsReducer=(state=initialState,action)=>{
    switch(action.type){
        case SEND_MESSAGE:{
          let body= action.newMessageBody;
         return{
            ...state,
             messages:[...state.messages,{id:7, message: body}]
          }
          
       
        }
          
           
        
        default:
          return state;
    }
}

    export  const sendMesssageCreator = (newMessageBody) => {
      return{type:'SEND_MESSAGE',newMessageBody}
     }
     
export default dialogsReducer;