import React from "react"
import s from '../Dialogs/Dialogs.module.css'
import DialogItem from './/DialogItem/DialogItem'
import Message from './Message/Message'
import { NavLink } from "react-router-dom"
import { sendMesssageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"




const Dialogs = (props) => {
    let state = props.dialogsPage;
    let messagesElements = state.dialogs.messages.map(m => <Message message={m.message} />);
    let dialogsElements = state.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let newMessageBody = state.dialogs.newMessageBody;

    let newElementMessage = React.createRef();

    let onSendMessageClick = () => {
       props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
       props.updateNewMessageBodyCreator(body)
    }
    let textAreaMessage = () => {
        let text = newElementMessage.current.value;
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div className={s.messageItem}><div>{messagesElements}</div></div>
                <div className={s.communication}>
                    <textarea placeholder="Enter your message"
                        ref={newElementMessage}
                        onChange={onNewMessageChange}
                        value={newMessageBody}></textarea>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>

            </div>
        </div>);
}

export default Dialogs;