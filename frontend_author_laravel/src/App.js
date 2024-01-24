import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, Login, Product } from './containers';
import { Navbar, Feature } from './components';
const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className='app_navbar'>
                    <Navbar />
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/product' element={<Product />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;