import React from "react";
import './Contact.css';
import Navbaar from './Navbar';
const NoPage = () => {
  return (
    <>
      <Navbaar />
      <h1 className="text">
        <code>404 </code>
        Page Not Found</h1>
    </>
  );
};

export default NoPage;