import React from 'react'
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import './Nav.scss'

import { IoHome } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";

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
                <li className='nav__item'>
                    <NavLink
                        className='nav__link'
                        onClick={() => { changeSelection("home") }}
                        to={'/'}>
                        <IoHome className='nav__icon' />
                        {selected === "home" ? <p className='nav__text'>Home</p> : <></>}
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink
                        className='nav__link'
                        onClick={() => { changeSelection("favorites") }}
                        to={'/favorites'}>
                        <GoHeart className='nav__icon' />
                        {selected === "favorites" ? <p className='nav__text'>Wishlist</p> : <></>}
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink
                        className='nav__link'
                        onClick={() => { changeSelection("checkout") }}
                        to={'/checkout'}>
                        <AiOutlineShoppingCart className='nav__icon' />
                        {selected === "checkout" ? <p className='nav__text'>Cart</p> : <></>}
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink
                        className='nav__link'
                        onClick={() => { changeSelection("profile") }}
                        to={'/profile'}>
                        <HiOutlineUser className='nav__icon' />
                        {selected === "profile" ? <p className='nav__text'>Profile</p> : <></>}
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav