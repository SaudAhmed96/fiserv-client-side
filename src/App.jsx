import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Nav from './components/Nav/Nav';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import PaymentScreen from './components/PaymentScreen/PaymentScreen';
import CouponPage from './pages/CouponPage/CouponPage';

function App() {

  return (
    <>

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentScreen/>}/>
        <Route path="/coupons" element={<CouponPage />}/>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace={true} />} />
      </Routes>
      <Nav />
    </>
  )
}

export default App
