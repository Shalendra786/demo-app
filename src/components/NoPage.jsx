import React from "react";
import './Contact.css';
import Navbaar from './Navbar';
const NoPage = () => {
  return (
    <>
      <Navbaar />
      <center className="text">
        <h1>
        <code>404 </code>
        Page Not Found</h1></center>
    </>
  );
};

export default NoPage;