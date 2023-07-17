import React from 'react'
import './Header.css'
import { PrestationsMenu } from '../../index';
import { useNavigate } from "react-router-dom";
import { HeaderButton } from '../../index';

export function Header() {
    
    let navigate = useNavigate(); 
    const routeChange = (value) =>{  
        navigate(value);
    }
    return (
        <div class='header-div'>
            <img alt='main-logo' src='./logo.png' onClick={() => routeChange('/')}/>
            <PrestationsMenu buttonTitle='Prestations' link1='Maquillage' link2='Coiffure' />
            <HeaderButton title='Mariage'/>
            <PrestationsMenu buttonTitle='Portfolio' link1='Mariage' link2='Shooting' link3='Audiovisuel' link4='Evenementiel'/>
            <HeaderButton title='Contact'/>
        </div>
    );
}