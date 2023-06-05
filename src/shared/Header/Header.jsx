import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error))
    }
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Services</Link></li>
        <li><Link to='/'>Blog</Link></li>
        <li><Link to='/'>Contact</Link></li>
        {
            user ? <>
                <li><Link to='/bookings'>My Bookings</Link></li>
                <li><button onClick={handleLogOut}>LogOut</button></li>
            </> :
                <li><Link to='/login'>Log In</Link></li>
        }
    </>
    return (
        <div className='w-[1140px] mx-auto'>
            <div className="navbar bg-base-100 p-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className=" normal-case text-xl"><img className='w-[107px] h-[86px]' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-ghost outline outline-main outline-2 text-main rounded">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Header;