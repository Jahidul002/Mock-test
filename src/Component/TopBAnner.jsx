import React from 'react';
import food from '../Utilities/food.jpeg'



const TopBAnner = () => {
    return (
        <div className='' id='menu'>
            <div>
                <img className='mx-auto w-[800px] mt-10' src={food} alt="" />
            </div>
            <div className='bg-red-600 w-[800px] mx-auto mt-2 text-center'>
                <button className='bg-white my-5 py-2 px-5 rounded-sm font-semibold'>ORRDER FOR PICK UP OR DELIVERY</button>
            </div>
        </div>
    );
};

export default TopBAnner;