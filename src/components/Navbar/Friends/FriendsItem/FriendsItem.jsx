import React from 'react';
import s  from '../FriendsItem/FriendsItem.module.css'

const FriendsItem=(props)=>{
 console.log(props.name)
    return(
 <div className={s.item}>
     <div className={s.wrapper}>
     <a> <img src="https://vignette.wikia.nocookie.net/discord-wikia/images/9/9a/MEE6.jpg/revision/latest/top-crop/width/360/height/450?cb=20190905185549&path-prefix=ru" alt=""/>
    {props.name}</a>
    </div>
     </div>);
     
}


export default FriendsItem;