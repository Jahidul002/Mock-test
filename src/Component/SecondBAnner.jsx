import React from 'react';
import MArk from '../Utilities/mark.jpeg'


const SecondBAnner = () => {
    return (
        <div className='my-20'>
            <h1 className='mb-20 text-center text-4xl font-semibold text-red-600'>SUCCESS</h1>
            <div className='flex flex-col justify-center items-center'>
                <img src={MArk} alt="" />
                <h1 className='text-center font-semibold'>Mesopotemia Kitchen Of <br /> Exellence </h1>
                <h1><small>The Test From the Past</small></h1>
            </div>
        </div>
    );
};

export default SecondBAnner;