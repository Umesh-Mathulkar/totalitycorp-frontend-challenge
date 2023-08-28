import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/layout/Navbar';
import Home from './views/Home';
import Layout from './components/layout';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import Cart from './views/Cart';
import ProductList from './views/ProductList';



const App = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} index />
            <Route path="/signin" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/product-list/:category?" element={<ProductList/>}  />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
