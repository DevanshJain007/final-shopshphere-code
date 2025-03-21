import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchCategories from './components/SearchCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import BecomeVendor from './components/BecomeVendor';
import ProductsList from './components/ProductsList';
import { Route, Router, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import VendorContextProvider from './context/vendor-context/VendorContextProvider';
import Login from './components/Login';
import LoginContextProvider from './context/login-context/LoginContextProvider';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [data,setData]=useState([])
  const fetchesData = async () => {
    try {
      const url = 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const datas = await response.json();
      setData(datas)
      datas.forEach((item) => {
        console.log(item.category);
      });

      console.log(datas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchesData();

  }, []);

  return (
    <LoginContextProvider>
    <VendorContextProvider>

      <Navbar />
      <Routes>
      <Route path='/' element={<HeroSection/>}/>
<Route  element={<ProtectedRoute/>}>

      <Route path='/BecomeVendor' element={<BecomeVendor/>}/>
      <Route path='/SearchCategories' element={<SearchCategories/>}/>
      <Route path='/Admin' element={<AdminPage/>}/>
      <Route path='/Products' element={<ProductsList data={data}/>}/>
</Route>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   

      {/* 
      <SearchCategories />
      <FeaturedProducts data={data}/>
      <Footer/>
      <BecomeVendor/>
      <ProductsList data={data}/> */}
    
      </VendorContextProvider>
      </LoginContextProvider>
  );
}

export default App;
