import React from "react";
import {
    Routes,Route
  } from "react-router-dom";
import Footer from "../../components/Footer";
import About from '../About'
import Account from "../Account";
import Eco from '../Eco'
import Home from "../Home";
import Products from "../Products";


const AppRoutes = () => {
    return (

       <>
       <Routes>
           <Route path='' element={<Home/>} />
           <Route path='products' element={<Products/>} />
           <Route path='account' element={<Account />} />
           <Route path='about' element={<About />} />
           <Route path='eco' element={<Eco/>} />
       </Routes>
       <Footer/>
       </>
    )
}

export default AppRoutes;