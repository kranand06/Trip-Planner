import '../index.css';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {

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
                            <NavLink to="/contact" className={({ isActive }) => ` ${(isActive == true) ? "text-orange-400" : "text-gray-700"} hover:text-orange-400` } >
                                Contact Us!
                            </NavLink>
                        </li>


                    </ul>
                </div>


                <div className='flex space-x-5'>
                    <Button size='large' className='bg-black' variant="contained">Sign UP</Button>
                </div>
            </div>
            </header>

        </>
    )
}

export default Navbar
