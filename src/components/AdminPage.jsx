import React, { useContext } from "react";
import VendorContext from "../context/vendor-context/vendorcontext";

const AdminPage = () => {
  const { vendorApplication } = useContext(VendorContext);
  console.log("vendorApplication", vendorApplication);

  // Safely fetch data from localStorage
  const data = Array.isArray(JSON.parse(localStorage.getItem("vendordata")))
    ? JSON.parse(localStorage.getItem("vendordata"))
    : [];

  return (
    <div>
      <h1>Welcome Admin</h1>
      <div>
        {data.length > 0 ? (
          data.map((applications, index) => (
            <div key={index}>
              <p>{applications.fname}</p>
            </div>
          ))
        ) : (
          <p>No applications found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
