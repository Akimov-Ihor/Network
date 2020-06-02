import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import s from './Users.module.css'


let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, followingInProgress, follow, unfollow, ...props }) => {
    return <div className={s.users}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount} pageSize={pageSize} />
        {

            users.map(u => <User user={u}
                key={u.id}
                followingInProgress={followingInProgress}
                unfollow={unfollow}
                follow={follow}
            /> )
            }
           
            
        
        </div>
}



export default Users;