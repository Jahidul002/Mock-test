import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navber = () => {
    return (
        <div>
            <div>
                <h1 className='bg-red-600 font-semibold md:text-2xl text-center text-white py-2'>3214 St,San Francosco ,CA94114 Phone:415 913 4585</h1>
            </div>
            <div className='flex justify-between mx-10 my-3'>
                <div className='text-red-600 md:text-3xl font-semibold'>
                    Mesopotamia Kitchen
                </div>
                <div className='md:font-semibold'>
                    Phone:415 913 4585
                </div>
            </div>
            <div>
                <div className="navbar bg-[#f5d9d7]">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="/">Home</Link>
                                <Link to="/">Manu</Link>
                                <Link to="/">Special</Link>
                                <Link to="/">Order Catering</Link>



                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <Link className='font-semibold mx-3' to="/">Home</Link>
                            <Link className='font-semibold mx-3' to="#menu">Manu</Link>
                            <Link className='font-semibold mx-3' to="#sec-about">Special</Link>
                            <Link className='font-semibold mx-3' to="/">Order Catering</Link>

                        </ul>
                    </div>
                    <div className="navbar-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;