import React from "react"
import s from '../Dialogs/Dialogs.module.css'
import DialogItem from './/DialogItem/DialogItem'
import Message from './Message/Message'
import { NavLink } from "react-router-dom"




const Dialogs = () => {
    const dialogs=[
        {id:1,name:"Dimych"},
        {id:2,name:"Andrey"},
        {id:3,name:"Sveta"},
        {id:4,name:"Sasha"},
        {id:5,name:"Victor"},
        {id:6,name:"Valer"}  
    ]
  

    const messages=[
        {id:1,message:"Hi"},
        {id:2,message:"Hello"},
        {id:3,message:"What`s up"},
        {id:4,message:"Fine!And you?"},
        {id:5,message:"Ty good"},
        {id:6,message:"It`s very good"}
    ]
    let messagesElements=messages.map(m =><Message message={m.message}/> );
    let dialogsElements= dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );

    
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