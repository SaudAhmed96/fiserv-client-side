import React from 'react'
import { NavLink } from 'react-router-dom'

import './FavoritesPage.scss'

const FavoritesPage = () => {
    return (
        <div className='favorites'>
            <h1 className='favorites__heading'>My Favorites</h1>
            <div className='favorites__filter'>
                <h2 className='favorites__option'>
                    <NavLink to={'/favorites'}>Meals</NavLink>
                </h2>
                <h2 className='favorites__option'>
                    <NavLink to={'/'}>Restaurants</NavLink>
                </h2>
            </div>

            <div className='favorites__body'>
                <ul className='favorites__list'>
                    <li className='favorites__item'>
                        <NavLink className='favorites__link' to={'/'}>
                            <div>h</div>
                        </NavLink>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default FavoritesPage