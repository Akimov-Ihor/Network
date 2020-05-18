import React from 'react';
import  s from'./Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem'

const Friends = (props) => {
    // let state=props.store.getState().friendsList;
    // let sideBarFriends= state.friendsList.map(p=><FriendsItem name={p.name} />)
    return (
        <div className={s.friends}>
            <span >Friends:</span>
            <div className={s.lists}>
                  {/* {sideBarFriends} */}
                </div>
            </div>
    );
    }

export default Friends;