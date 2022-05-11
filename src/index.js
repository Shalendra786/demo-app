import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbaar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import NoPage from './components/NoPage';

export default function App() {
  return (
    
      <Router>
        
          <Route exact path="/"  ><Home /> </Route>
          <Route path="/contact" > <Contact /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="*" > <NoPage /> </Route>
       
      </Router>
  
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Home />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
