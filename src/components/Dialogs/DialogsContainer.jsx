import React from "react"
import Dialogs from './Dialogs'
import { sendMesssageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"





const DialogsContainer = (props) => {
   
    let state = props.store.getState();
    

    let onSendMessageClick = () => {
        props.store.dispatch(sendMesssageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return <Dialogs updateNewMessageBodyCreator={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
}

export default DialogsContainer;