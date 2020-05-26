import React from "react"
import Dialogs from './Dialogs'
import { sendMesssageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



let mapStateToProps =(state)=>{
   
    return{
        dialogsPage:state,
       
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






export default compose(
  connect(mapStateToProps,mapDispatchToProps) ,
  withAuthRedirect
)(Dialogs);