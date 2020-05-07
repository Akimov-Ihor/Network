import React from "react"
import s from '../Dialogs/Dialogs.module.css'
import DialogItem from './/DialogItem/DialogItem'
import Message from './Message/Message'
import { NavLink } from "react-router-dom"




const Dialogs = (props) => {
   
    let messagesElements=props.messages.map(m =><Message message={m.message}/> );
    let dialogsElements= props.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
            {messagesElements}
            </div>
        </div>);
}

export default Dialogs;