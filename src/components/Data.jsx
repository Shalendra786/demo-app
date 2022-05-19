import { useNavigate,useLocation } from 'react-router-dom';
import React from 'react';
import { Button } from '@mui/material';
import Navbaar from './Navbar';
import '../App.css';

const Component=()=> {
    
  let navigate = useNavigate();
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('lid');

    
        return (
        <div className="App2">
         <Navbaar />
         <br />
       
        <div style={{width:"100%"}} >
         <p style={{display: "flex", flexWrap: "wrap", padding: "5px 35px", width: "100%", justifyContent: "center", overflowWrap:"anywhere"}} > {JSON.stringify(name)}
         </p>
          </div>
        
        <br />
        <div>
        <center><Button variant='contained' style={{backgroundColor:'#7510F7'}} color="success" onClick={()=>{navigate('/about')}}>Click to Go Back </Button></center>
        
        </div>
        
        </div>
        );
    
}

export default Component;