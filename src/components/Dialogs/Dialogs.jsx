import React from "react"
import s from '../Dialogs/Dialogs.module.css'
import DialogItem from './/DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { Textarea } from "../common/FormsControls/FormsControls"
import { required, maxLengthCreator } from "../../utils/validators/validators"




const Dialogs = (props) => {
    
    let state = props.dialogsPage;
    let messagesElements = state.dialogs.messages.map(m => <Message message={m.message} key={m.id} />);
    let dialogsElements = state.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id}  key={d.id}/>);
    let newMessageBody = state.dialogs.newMessageBody;

    
    let addNewMessage = (values) => {
       props.sendMessage(values.newMessageBody)
    }
    
   if(!props.isAuth ) return <Redirect to={"/login"}/>


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
                
            <div className={s.messages}>
                <div className={s.messageItem}><div>{messagesElements}</div></div>
                <div className={s.communication}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
           
        </div>);
}
let maxLength50=maxLengthCreator(50)
const AddMessageForm=(props)=>{
    return(

            <form onSubmit={props.handleSubmit}>
            <div>
            <Field component={Textarea} validate={[required,maxLength50]} name="newMessageBody" placeholder="Enter your message" />
            
            </div>
                  <div><button>Send</button></div>  
            </form> 
        
       
    )
}
const AddMessageFormRedux=reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;