import React from "react"
import s from '../Dialogs/Dialogs.module.css'
import DialogItem from './/DialogItem/DialogItem'
import Message from './Message/Message'
import { NavLink } from "react-router-dom"




const Dialogs = (props) => {
   
    let messagesElements=props.messages.map(m =><Message message={m.message}/> );
    let dialogsElements= props.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );
    let newElementMessage=React.createRef();
    let sendMessage=()=>{
     let newMessage=newElementMessage.current.value;
      alert(newMessage);
    }

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
            {messagesElements}
            <div className={s.communication}>
            <textarea ref={newElementMessage}></textarea>
            <button onClick={sendMessage}>Send</button>
            </div>
            
            </div>
        </div>);
}

export default Dialogs;