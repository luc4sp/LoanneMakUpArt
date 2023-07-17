import React from 'react'
import './Home.css'
import { Header } from '../../index';

export function Home() {
    return (
        <div className='main-div'>
            <Header />
            <div className='other-div'>
                <img alt='apropos' src='./fauget.png'/>
            </div>
        </div>
    );
}