import React, { useEffect } from "react";
// import { Button } from "@/components/ui/button";
import shopshphere from '../assets/shopsphere.png'
import storeInLocalStorage from "../components/storeLocalStorage";
const HeroSection = () => {
  // useEffect(()=>{storeInLocalStorage('login','false')},[])
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Empowering Vendors. Elevating Shopping.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                A next-gen multi-vendor marketplace where sellers and buyers come together for an unparalleled
                e-commerce experience.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="/products">
                {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700"> */}
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Start Shopping
                    </button>
                
                
                 
                {/* </Button> */}
              </a>
              <a href="/BecomeVendor">
                {/* <Button size="lg" variant="outline"> */}
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Become a Vendor
                    </button>
                 
                {/* </Button> */}
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={shopshphere}
              width={550}
              height={550}
              alt="ShopSphere Marketplace"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
