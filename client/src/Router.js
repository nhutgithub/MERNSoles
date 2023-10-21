import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Detail from './components/pages/Detail';
import Search from './components/pages/Search';
import Collection from './components/pages/Collection';
import Cart from './components/pages/Cart';

class DieuHuongURL extends Component {
    render() {
        return (
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/collection/:name" element={<Collection />} />
                <Route path="/search/:keyword" element={<Search />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        );
    }
}

export default DieuHuongURL;