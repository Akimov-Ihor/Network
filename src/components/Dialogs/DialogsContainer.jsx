import React from "react"
import Dialogs from './Dialogs'
import { sendMesssageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"
import { connect } from "react-redux";



let mapStateToProps =(state)=>{
    console.log(state);
    return{
        dialogsPage:state

    }
}
let mapDispatchToProps = (dispatch)=>{
  return {
    updateNewMessageBody:(body)=>{
        dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: ()=> { 
        dispatch(sendMesssageCreator())
    }
  }
}
const DialogsContainer= connect(mapStateToProps,mapDispatchToProps) (Dialogs)


export default DialogsContainer;