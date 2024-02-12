import React from 'react'
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import './Nav.scss'

import { IoHome } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toggleNav } from '../../reducers/navSlice';


const Nav = () => {

    // const [selected, setSelected] = useState("");
    const select = useSelector(state => state.navigation)
    const cart = useSelector(state => state.cartTracker)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(select)
        console.log(cart.count)
    }, [select])

    // const changeSelection = (myVal) => {
    //     setSelected(myVal);
    // }

    return (
        <div className='nav'>
            <ul className='nav__list'>
                <li className={select.selection === "home" ? 'nav__item nav__item--selected' : 'nav__item'}>
                    <NavLink
                        className='nav__link'
                        onClick={() => { dispatch(toggleNav("home")) }}
                        to={'/'}>
                        <IoHome className={select.selection === "home" ? 'nav__icon nav__icon--selected' : 'nav__icon'} />
                        {select.selection === "home" ? <p className='nav__text'>Home</p> : <></>}
                    </NavLink>
                </li>
                <li className={select.selection === "favorites" ? 'nav__item nav__item--selected' : 'nav__item'}>
                    <NavLink
                        className='nav__link'
                        onClick={() => { dispatch(toggleNav("favorites")) }}
                        to={'/favorites'}>

                        <GoHeart className={select.selection === "favorites" ? 'nav__icon nav__icon--selected' : 'nav__icon'} />
                        {select.selection === "favorites" ? <p className='nav__text'>Favorites</p> : <></>}

                    </NavLink>
                </li>
                <li className={select.selection === "checkout" ? 'nav__item nav__item--selected' : 'nav__item'}>
                    <NavLink
                        className='nav__link'
                        onClick={() => { dispatch(toggleNav("checkout")) }}
                        to={'/checkout'}>
                        <AiOutlineShoppingCart className={select.selection === "checkout" ? 'nav__icon nav__icon--selected' : 'nav__icon'} />
                        {select.selection === "checkout" ? <p className='nav__text'>Cart</p> : <></>}
                        {cart.count ?
                            <div className='nav__cart-count'>
                                <p className='nav__cart-text'>{cart.count}</p>
                            </div>
                            : <></>
                        }
                    </NavLink>
                </li>
                <li className={select.selection === "profile" ? 'nav__item nav__item--selected' : 'nav__item'}>
                    <NavLink
                        className='nav__link'
                        onClick={() => { dispatch(toggleNav("profile")) }}
                        to={'/profile'}>
                        <AiOutlineUser className={select.selection === "profile" ? 'nav__icon nav__icon--selected' : 'nav__icon'} />
                        {select.selection === "profile" ? <p className='nav__text'>Profile</p> : <></>}
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav