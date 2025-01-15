import '../index.css';
import Button from '@mui/material/Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Signin from "./Signin";
import { UserContext } from '../App';
import React, { useContext, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { googleLogout } from '@react-oauth/google';



function Navbar() {


    const navigation = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const value = useContext(UserContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        googleLogout();
        localStorage.removeItem("user");
        setAnchorEl(null);
        navigation("/");
    };



    return (
        <>
            <header className="shadow sticky mt-2">
                <div className='flex justify-between items-center px-4 py-1 max-w-screen-xl mx-auto'>
                    <Link to="/">
                        <img className='w-44' src="/logoNavbar.png" alt="logo" />
                    </Link>


                    <div className="hidden  w-full lg:flex lg:w-auto"
                    >
                        <ul className="flex space-x-8 ">
                            <li>
                                <NavLink to="/" className={({ isActive }) => ` ${(isActive == true) ? "text-orange-400" : "text-gray-700"} hover:text-orange-400`}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/createtrip" className={({ isActive }) => ` ${(isActive == true) ? "text-orange-400" : "text-gray-700"} hover:text-orange-400`}>
                                    Create Trip
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/mytrips" className={({ isActive }) => ` ${(isActive == true) ? "text-orange-400" : "text-gray-700"} hover:text-orange-400`} >
                                    My Trips
                                </NavLink>
                            </li>
                            


                        </ul>
                    </div>
                    <Signin />


                    <div className='flex space-x-5'>
                        {user ? <div onClick={handleClick}>
                            <img src={user.picture} alt="user" className="w-10 h-10 rounded-full" />
                        </div> : <Button onClick={() => value.setOpen(true)} size='large' className='bg-black' variant="contained">Sign UP</Button>}

                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}><Link to="/mytrips" >My Trips</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/myprofile" >Profile</Link></MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>

                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar
