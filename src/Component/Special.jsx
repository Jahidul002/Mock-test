import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';



const Special = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-20 text-center text-4xl font-semibold text-red-600'>Special</h1>
            <h1 className='mb-20 text-center text-4xl font-semibold text-red-600'><FaInstagramSquare></FaInstagramSquare></h1>
        </div>
    );
};

export default Special;