import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import employee from './data.json';
import { Button } from '@mui/material';

const Component=()=> {
    
  let navigate = useNavigate();

    
        return (
        <>
        <div >{JSON.stringify(employee)}
        
        </div>
        <div><Button onClick={()=>{navigate('/about')}}>to Click to Go Back </Button></div>
        </>
        );
    
}

export default Component;