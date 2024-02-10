import React from 'react'
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import './Nav.scss'

import { IoHome } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Nav = () => {

    const [selected, setSelected] = useState("");

    useEffect(() => {
        if (!selected) {
            setSelected("home")
        }
    }, [selected])

    const changeSelection = (myVal) => {
        setSelected(myVal);
    }

    return (
        <div className='nav'>
            <ul className='nav__list'>
                <li className={selected === "home" ? 'nav__item nav__item--selected' : 'nav__item'}>
                    <NavLink
                        className='nav__link'
                        onClick={() => { changeSelection("home") }}
                        to={'/'}>
                        <IoHome className={selected === "home" ? 'nav__icon nav__icon--selected' : 'nav__icon'} />
                        {selected === "home" ? <p className='nav__text'>Home</p> : <></>}
                    </NavLink>
                </li>
                <li className={selected === "favorites" ? 'nav__item nav__item--selected' : 'nav__item'}>
                    <NavLink
                        className='nav__link'
                        onClick={() => { changeSelection("favorites") }}
                        to={'/favorites'}>

                        <GoHeart className='nav__icon' />
                        {selected === "favorites" ? <p className='nav__text'>Favorites</p> : <></>}

                    </NavLink>
                </li>
                <li className={selected === "checkout" ? 'nav__item nav__item--selected' : 'nav__item'}>
                    <NavLink
                        className='nav__link'
                        onClick={() => { changeSelection("checkout") }}
                        to={'/checkout'}>
                        <AiOutlineShoppingCart className={selected === "checkout" ? 'nav__icon nav__icon--selected' : 'nav__icon'} />
                        {selected === "checkout" ? <p className='nav__text'>Cart</p> : <></>}
                    </NavLink>
                </li>
                <li className={selected === "profile" ? 'nav__item nav__item--selected' : 'nav__item'}>
                    <NavLink
                        className='nav__link'
                        onClick={() => { changeSelection("profile") }}
                        to={'/profile'}>
                        <AiOutlineUser className={selected === "profile" ? 'nav__icon nav__icon--selected' : 'nav__icon'} />
                        {selected === "profile" ? <p className='nav__text'>Profile</p> : <></>}
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav