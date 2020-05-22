import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://img.freepik.com/free-vector/_92675-98.jpg?size=338&ext=jpg"></img>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to='/login'> Login</NavLink>}
            </div>
        </header>);
}

export default Header;