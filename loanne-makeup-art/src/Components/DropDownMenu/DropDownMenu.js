import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import './DropDownMenu.css'

export function PrestationsMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate(); 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const routeChange = (value) =>{  
    navigate(value);
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='text'
        disableRipple='true'
      >
        {props.buttonTitle}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id='item' onClick={() => routeChange('/' + props.link1)}>{props.link1}</MenuItem>
        <MenuItem id='item' onClick={() => routeChange('/' + props.link2)}>{props.link2}</MenuItem>
        {
          props.link3 ? <MenuItem id='item' onClick={() => routeChange('/' + props.link3)}>{props.link3}</MenuItem> : <></>
        }

        {
          props.link4 ? <MenuItem id='item' onClick={() => routeChange('/' + props.link4)}>{props.link4}</MenuItem> : <></>
        }

      </Menu>
    </div>
  );
}