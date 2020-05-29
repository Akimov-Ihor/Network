import React from "react"
import Dialogs from './Dialogs'
import { sendMesssageCreator} from "../../redux/dialogs-reducer"
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
    sendMessage: (newMessageBody)=> { 
        dispatch(sendMesssageCreator(newMessageBody))
    }
  }
}






export default compose(
  connect(mapStateToProps,mapDispatchToProps) ,
  withAuthRedirect
)(Dialogs);