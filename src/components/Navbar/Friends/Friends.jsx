import React from 'react';
import  s from'./Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem'

const Friends = (props) => {
    return (
        <div>
            <div className={s.lists}>
                <span>Friends</span>
                   <FriendsItem name={props.friendsList}/>
                </div>
            </div>
    );
    }

export default Friends;