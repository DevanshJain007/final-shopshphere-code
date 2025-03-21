# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
for creating protected user first create a path like route and as element pass a component for us let us say <protectedRoute/>
and the inside that create children routes
like this
<Route  element={<ProtectedRoute/>}>

      <Route path='/BecomeVendor' element={<BecomeVendor/>}/>
      <Route path='/Products' element={<ProductsList data={data}/>}/>
      <Route path='/SearchCategories' element={<SearchCategories/>}/>
      <Route path='/Admin' element={<AdminPage/>}/>
</Route>








inside in protectedRoute


import React, { useContext } from 'react'
import LoginContext from '../context/login-context/LoginContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const {isLogin}=useContext(LoginContext);
  return (
    <div>
      {isLogin?<Outlet/>:<Navigate to={'/login'} replace/>}
    </div>
  )
}

export default ProtectedRoute


1Browser Route for app.js wrap the app .js in
2then Router
3 routes which has path and then the element
also there is hashrouter same as Browser Router that is
<HashRouter>
<app/>
<HashRouter/>
also there is History Router
also there is Memory Router
also there is Static ROutere which has simplify the location and we use because i fyou want to render on the particular link and when we go to that link then only the app.js will be used then we also used for server side rendering
and there is native router for native route



Now Dynamic Route <Route path='/book/:id" element={BookList}
use params hook
const {id }=useParams()
<Router path='*' linterally mean anything element <NotFounf/>


Nested Route
<Router path='books'>
         <Route index element={BookList}
<Route path='id' element={BookList}
<Route path='new' element={BookList}
         


what if i wnt to create a template so i just create a component and called at here in the parent route
<Router path='books' element='<BookLayout/>'>
         <Route index element={BookList}
<Route path='id' element={Book}
<Route path='new' element={NewBook}
but all these will not run why because all the children will not render and to render it simply called the <outlet/> inside that book layput.js


inside that we can pass a simple context in the outlet
here is the eg. <Outlet context={{hello:'World'}} /> here hello is the key and world is values and we can use anywhere that context
in any child for eg lets us called in Book
const obj=useOutletContext()


okay now if you have multiple routes make a just file <BookRoutes/> and inside that define all the routes similiarly inside the return but how we goona call in app.js
and here is the how
<Routes path="books/*" element ={<BookRoutes/> the important is /* and you know that what is used for



we can create a custom hook for the routes


and here is the idea <Link to'/' replace/>
so what does the replace do if the user login after filling all the details and if the user hit the back button it we dont use replace it will show the login page again even after login and so it remove the back page from history
and also there is state name as {} along with to and element it will pass data even not showing to the link


now NavLink initially there are three properties 1 className
2style and children
eg.<Navlink style={({isActive})=>{
return isActive ?{color:'red'}:{}
})
to='/'>
Home or if we used here style={({isActive})=>{
return isActive ?{'ActiveHome'}:{'home'}
})
<Navlink


and now we use searchParams for what if i take input and it is updated on the link and find that particular link after that gp to this and watch again https://www.youtube.com/watch?v=Ul3y1LXxzdU







oakay ksy here is the main idea so what we do and how to store or create a context api 1 the simple trick is that remember the Cpu  create Provide and useContext and also one thing is if i want to use a particular navigate use navigate also know the use of useParams and gere is the idea of creating a structure of a folder 1 create a folder similar like components and name it as context inside that create as many folders as you want name them according to the context like fetch context or vender context or data-context inside these folder crete two files 1 name as VendorContext.js which is pure javascript file which will create a context and allso that create another file name as vendor context provider and insider that we will provide the context of the whatever and in this we create a use statte and this  state will be used to update the data or etc and here is the code of these folders and here is the next things will be followed by that 
1 VendorContext .js
 import React from 'react'

const VendorContext=React.createContext();

export default VendorContext
2 VendorContextProvider 
import React, { useState } from 'react'
import VendorContext from './vendorcontext';

const VendorContextProvider = ({children}) => {
    const [vendorApplication,setVendorApplication]=useState([]);
  return (
    <VendorContext.Provider value={{vendorApplication,setVendorApplication}}>
        {children}
    </VendorContext.Provider>
  )
}

export default VendorContextProvider
here is what you should know that componet which create through context and use provider and pass it to childrens and after that there should be that steps to follow go to the main.jsx and wrap these insides those components so that they will be accessibele to those who are inside that wrap 
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
   
    <VendorContextProvider>

      <Navbar />
      <Routes>
      <Route path='/' element={<HeroSection/>}/>

      <Route path='/BecomeVendor' element={<BecomeVendor/>}/>
      <Route path='/Products' element={<ProductsList data={data}/>}/>
      <Route path='/SearchCategories' element={<SearchCategories/>}/>
      <Route path='/Admin' element={<AdminPage/>}/>
    </Routes>
   

      {/*
      <SearchCategories />
      <FeaturedProducts data={data}/>
      <Footer/>
      <BecomeVendor/>
      <ProductsList data={data}/> */}
      </VendorContextProvider>
  );
}

export default App;
Now go to the folder wherver you want that data and use use context to access it here is the simple idea here watch page 4 and how did i use it import React, { useContext, useState } from 'react';
import VendorContext from '../context/vendor-context/vendorcontext';
import { Navigate, useNavigate } from 'react-router-dom';

const BecomeVendor = () => {
    const [page, setPage] = useState(1);
    const basicInfo={
        fname:"",
        lname:"",
        email:"",
        phoneNo:"",
        pass:"",
        repass:"",
        storeName:"",
        des:"",
        btype:"",
        address:"",
        taxid:"",
        typeProduct:"",
        noOfProducts:"",
        returnpolicy:"",
    }
 
    const [vendor,setVendor]=useState(basicInfo)
   
    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <div className="text-center py-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold">Become a Vendor</h1>
                <p className="mt-2 text-lg">Join us and start selling your products online</p>
            </div>
           
            <div className="max-w-2xl mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
                {page === 1 && <Page1 vendor={vendor} setVendor={setVendor}/>}
                {page === 2 && <Page2 vendor={vendor} setVendor={setVendor}/>}
                {page === 3 && <Page3 vendor={vendor} setVendor={setVendor}/>}
                {page === 4 && <Page4 vendor={vendor} setVendor={setVendor} />}

                <div className="flex justify-between mt-6">
                    {page > 1 && (
                        <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500" onClick={() => setPage(page - 1)}>
                            Back
                        </button>
                    )}
                    {page < 4 && (
                        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500" onClick={() => setPage(page + 1)}>
                            Continue
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const Page1 = ({vendor,setVendor}) => (
    <div>
        <h2 className="text-2xl font-semibold">Basic Information</h2>
        <p className="text-gray-400">Tell us about yourself and your contact information</p>
        <form className="mt-4 space-y-4">
            <div className="flex gap-4">
                <input type="text" placeholder="First Name" onChange={(e)=>{setVendor({...vendor,fname:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
                <input type="text" placeholder="Last Name" onChange={(e)=>{setVendor({...vendor,lname:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
            </div>
            <input type="email" placeholder="Email Address" onChange={(e)=>{setVendor({...vendor,email:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
            <input type="text" placeholder="Phone Number" onChange={(e)=>{setVendor({...vendor,phoneNo:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
            <input type="password" placeholder="Create Password" onChange={(e)=>{setVendor({...vendor,pass:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
            <input type="password" placeholder="Confirm Password" onChange={(e)=>{setVendor({...vendor,repass:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
        </form>
    </div>
);

const Page2 = ({vendor,setVendor}) => (
    <div>
        <h2 className="text-2xl font-semibold">Business Details</h2>
        <p className="text-gray-400">Provide the details of your business</p>
        <form className="mt-4 space-y-4">
            <input type="text" placeholder="Business/Store Name" onChange={(e)=>{setVendor({...vendor,storeName:e.target.value})}} className="w-full p-2 rounded bg-gray-700"  />
            <textarea placeholder="Business Description" onChange={(e)=>{setVendor({...vendor,des:e.target.value})}} className="w-full p-2 rounded bg-gray-700"></textarea>
            <input type="text" placeholder="Business Type" onChange={(e)=>{setVendor({...vendor,btype:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
            <input type="text" placeholder="Address" onChange={(e)=>{setVendor({...vendor,address:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
            <input type="text" placeholder="Tax ID/Business Registration Number" onChange={(e)=>{setVendor({...vendor,taxid:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
        </form>
    </div>
);
 
const Page3 = ({vendor,setVendor}) => (
    <div>
        <h2 className="text-2xl font-semibold">Products & Shipping</h2>
        <p className="text-gray-400">Tell us about your products and shipping options</p>
        <form className="mt-4 space-y-4">
            <input type="text" placeholder="Type of Products You Want to Sell" onChange={(e)=>{setVendor({...vendor,typeProduct:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
            <input type="number" placeholder="How many products do you want to sell initially?" onChange={(e)=>{setVendor({...vendor,noOfProducts:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
            <input type="text" placeholder="Describe your return policy" onChange={(e)=>{setVendor({...vendor,returnpolicy:e.target.value})}} className="w-full p-2 rounded bg-gray-700" />
        </form>
    </div>
);

const Page4 = ({ vendor }) => {
    const { setVendorApplication, vendorApplication } = useContext(VendorContext);
    const navigate = useNavigate();
    const handleSubmmit = (vendor) => {
        console.log(vendor);
        setVendorApplication([...vendorApplication, vendor]);
        navigate('/admin')
    };
   
    return (

    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Review & Submit</h2>
        <p className="text-gray-500 mb-6">Review your information before submitting</p>

        {/* Personal Information */}
        <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
                <p><span className="font-medium">First Name:</span> {vendor.fname}</p>
                <p><span className="font-medium">Last Name:</span> {vendor.lname}</p>
                <p><span className="font-medium">Email:</span> {vendor.email}</p>
                <p><span className="font-medium">Phone No:</span> {vendor.phoneNo}</p>
                <p><span className="font-medium">Password:</span> {vendor.pass}</p>
            </div>
        </div>

        {/* Store Details */}
        <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Store Details</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
                <p><span className="font-medium">Store Name:</span> {vendor.storeName}</p>
                <p><span className="font-medium">Description:</span> {vendor.des}</p>
                <p><span className="font-medium">Business Type:</span> {vendor.btype}</p>
                <p><span className="font-medium">Address:</span> {vendor.address}</p>
                <p><span className="font-medium">Tax ID:</span> {vendor.taxid}</p>
            </div>
        </div>

        {/* Product Details */}
        <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Product Details</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
                <p><span className="font-medium">Type of Product:</span> {vendor.typeProduct}</p>
                <p><span className="font-medium">Number of Products:</span> {vendor.noOfProducts}</p>
                <p><span className="font-medium">Return Policy:</span> {vendor.returnpolicy}</p>
            </div>
        </div>

        <button
        onClick={()=>handleSubmmit(vendor)}
        className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-500 transition-all duration-200">
            Submit
        </button>
    </div>
)};
and rember that how did i extract it  
const { setVendorApplication, vendorApplication } = useContext(VendorContext);
and here the main course const navigate = useNavigate();
    const handleSubmmit = (vendor) => {
        console.log(vendor);
        setVendorApplication([...vendorApplication, vendor]);
        navigate('/admin')
    }; and your create context is complete



    why dont we use anchor tage instead we use Link through react router because of the wholee page reloads instead of that we use that
and we use to instide that link tag
call back is used when we want to that the state is active or is pending and it is inbuilt how we used ({isActive})=>{

}
routing ka andar router 
Router path and element 
const router =createbrowserRouter([
    {
        path:"/",
        element:<Layout/>
    },{
        path:"/About"
        element:<About/>
    },{}
])
Now in app.jsx hee is hte idean 
<reactstrictMode>
<RouteProvider router={router}>
anothe way 
const router =createBrowserRouter(
    createRoutesElements(
        <Route path='/' element={<Layout/>}>

    )
)
<router path='aboutus/userid:' element={User}>
we can used params State to fetcht the parameters also wowo

and now when you fetch the url with the data we use useeffect but there is a beeteer wayto do is loader inside the div it even run before the useEfffect 
<Route path element and now loader={({request})=>
fetch(api),{
    signal:request.signal
}
}>
what if you want to give the template that means uf you want to that in any page there should be always a header and footer and in between the content should come and also maeke sure that how you use it 
1 create a layout.jsx fi;e in which 
<>
<Header/>
<Outlet/>//theis is used to create a template and this wil contain the outlet the jsx 
<Footer/>
</>
so basically there is react provider and then there is router and there is route 
