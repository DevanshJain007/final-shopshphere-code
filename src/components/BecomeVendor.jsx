import React, { useContext, useState } from 'react';
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

    const handleSubmit = (vendor) => {
        console.log(vendor);
        const updatedData = [...(vendorApplication || []), vendor];
        setVendorApplication(updatedData);
        localStorage.setItem('vendordata', JSON.stringify(updatedData));
    };

    if (!vendor) {
        return <p>Loading...</p>;
    }

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
                onClick={() => handleSubmit(vendor)}
                className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-500 transition-all duration-200">
                Submit
            </button>
        </div>
    );
};





export default BecomeVendor;
