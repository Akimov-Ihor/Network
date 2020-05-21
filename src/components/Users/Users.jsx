import React from 'react';
import userPhoto from '../../assets/images/usersSmallicon.png'
import s from './Users.module.css';

let Users = (props) => {
    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize) / 11);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    console.log(props)

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} 
                onClick={(e) => { props.onPageChanged(p)}}>{p}</span> } )
                };

            </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} /></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{u.location.city}</div> */}
                        {/* <div>{u.location.country}</div> */}

                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;