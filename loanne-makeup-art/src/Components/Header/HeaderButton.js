import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export function HeaderButton(props) {

    let navigate = useNavigate(); 
    const routeChange = (value) =>{  
        navigate(value);
      }
    return (
        <Button
            id="basic-button"
            aria-haspopup="false"
            onClick={() => routeChange('/' + props.title)}
            variant='text'
            disableRipple='true'
        >
            {props.title}
        </Button>
    )
}
