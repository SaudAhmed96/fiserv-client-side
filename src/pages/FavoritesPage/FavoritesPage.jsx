import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import nasiGoreng from '../../assets/images/nasiGoreng.png'
import assortedSushi from '../../assets/images/assortedSushi.png'
import lambBiryani from '../../assets/images/lambBiryani.png'
import alfredoPasta from '../../assets/images/alfredoPasta.png'

import karahiBoys from '../../assets/images/logos/karahiBoys.png'
import scaramouche from '../../assets/images/logos/scaramouche.png'
import toneSushi from '../../assets/images/logos/toneSushi.png'
import shatterAbbas from '../../assets/images/logos/shatterAbbas.jpg'

import './FavoritesPage.scss'

const FavoritesPage = () => {

    const [selected, setSelected] = useState(true);

    useEffect(() => {
    }, [selected])

    return (
        <div className='favorites'>
            <h1 className='favorites__heading'>My Favorites</h1>
            <div className='favorites__filter'>
                <h2 className={selected ? 'favorites__option favorites__option--selected' : 'favorites__option'}>
                    <NavLink className='favorites__option-link' onClick={() => { setSelected(true) }}>
                        Meals
                    </NavLink>
                </h2>
                <h2 className={selected ? 'favorites__option' : 'favorites__option favorites__option--selected'}>
                    <NavLink className='favorites__option-link' onClick={() => { setSelected(false) }}>
                        Restaurants
                    </NavLink>
                </h2>
            </div>

            {selected ?
                <div className='favorites__body'>
                    <ul className='favorites__list'>
                        <li className='favorites__item'>
                            <NavLink className='favorites__item-link' to={'/'}>
                                <div className='favorites__item-left'>
                                    <img className='favorites__item-image' src={alfredoPasta} />
                                </div>
                                <div className='favorites__item-right'>
                                    <h3 className='favorites__item-title'>Alfredo Pasta</h3>
                                    <h3 className='favorites__item-sub'>Scaramouche</h3>
                                </div>
                            </NavLink>
                        </li>
                        <li className='favorites__item favorites__item--grey'>
                            <NavLink className='favorites__item-link' to={'/'}>
                                <div className='favorites__item-left'>
                                    <img className='favorites__item-image' src={assortedSushi} />
                                </div>
                                <div className='favorites__item-right'>
                                    <h3 className='favorites__item-title'>Assorted Sushi</h3>
                                    <h3 className='favorites__item-sub'>To-Ne Sushi</h3>
                                </div>
                            </NavLink>
                        </li>
                        <li className='favorites__item'>
                            <NavLink className='favorites__item-link' to={'/'}>
                                <div className='favorites__item-left'>
                                    <img className='favorites__item-image' src={lambBiryani} />
                                </div>
                                <div className='favorites__item-right'>
                                    <h3 className='favorites__item-title'>Lamb Biryani</h3>
                                    <h3 className='favorites__item-sub'>Karahi Boys</h3>
                                </div>
                            </NavLink>
                        </li>
                        <li className='favorites__item  favorites__item--grey'>
                            <NavLink className='favorites__item-link' to={'/details'}>
                                <div className='favorites__item-left'>
                                    <img className='favorites__item-image' src={nasiGoreng} />
                                </div>
                                <div className='favorites__item-right'>
                                    <h3 className='favorites__item-title'>Nasi Goreng</h3>
                                    <h3 className='favorites__item-sub'>Shatter Abbas</h3>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                :
                <div className='favorites__body'>
                    <ul className='favorites__list'>
                        <li className='favorites__item'>
                            <NavLink className='favorites__item-link' to={'/'}>
                                <div className='favorites__item-left'>
                                    <img className='favorites__item-imageRestaurant' src={karahiBoys} />
                                </div>
                                <div className='favorites__item-right'>
                                    <h3 className='favorites__item-titleRestaurant'>Karahi Boys</h3>
                                </div>
                            </NavLink>
                        </li>
                        <li className='favorites__item favorites__item--grey'>
                            <NavLink className='favorites__item-link' to={'/'}>
                                <div className='favorites__item-left'>
                                    <img className='favorites__item-imageRestaurant' src={toneSushi} />
                                </div>
                                <div className='favorites__item-right'>
                                    <h3 className='favorites__item-titleRestaurant'>To-Ne Sushi</h3>
                                </div>
                            </NavLink>
                        </li>
                        <li className='favorites__item'>
                            <NavLink className='favorites__item-link' to={'/'}>
                                <div className='favorites__item-left'>
                                    <img className='favorites__item-imageRestaurant' src={scaramouche} />
                                </div>
                                <div className='favorites__item-right'>
                                    <h3 className='favorites__item-titleRestaurant'>Scaramouche</h3>
                                </div>
                            </NavLink>
                        </li>
                        <li className='favorites__item  favorites__item--grey'>
                            <NavLink className='favorites__item-link' to={'/'}>
                                <div className='favorites__item-left'>
                                    <img className='favorites__item-imageRestaurant' src={shatterAbbas} />
                                </div>
                                <div className='favorites__item-right'>
                                    <h3 className='favorites__item-titleRestaurant'>Shatter Abbas</h3>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            }

        </div>
    )
}

export default FavoritesPage