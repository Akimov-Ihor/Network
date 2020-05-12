import React from 'react'
import  s from'./Navbar.module.css'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
    console.log (props.friendsList)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div  className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings"activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            {/* <div className={s.item}> */}
            <Friends name={props.friendsList}/>
            {/* console.log (props.friendsList);
            </div> */}
        </nav>);
}

export default Navbar;