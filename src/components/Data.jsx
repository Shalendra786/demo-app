import { Link, useNavigate,useLocation } from 'react-router-dom';
import React from 'react';
import employee from './data.json';
import { Button } from '@mui/material';

const Component=()=> {
    
  let navigate = useNavigate();
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('lid');

    
        return (
        <>
        <div >{JSON.stringify(name)}
        
        </div>
        <br />
        <br />
        <center><Button variant='contained' onClick={()=>{navigate('/about')}}>to Click to Go Back </Button></center>
        </>
        );
    
}

export default Component;