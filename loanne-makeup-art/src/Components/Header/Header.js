import React from 'react'
import './Header.css'
import { PrestationsMenu } from '../../index';
import { useNavigate } from "react-router-dom";

export function Header() {
    
    let navigate = useNavigate(); 
    const routeChange = (value) =>{  
        navigate(value);
    }
    return (
        <div class='header-div'>
            <img alt='main-logo' src='./logo.png' onClick={() => routeChange('/')}/>
            <PrestationsMenu />
        </div>
    );
}