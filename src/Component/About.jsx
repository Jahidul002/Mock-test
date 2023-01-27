import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';



const About = () => {
    return (
        <div id='sec-about' className='my-20 bg-[#f5e7e6] text-center flex flex-col justify-center items-center '>
            <h1 className='mb-20  text-4xl font-semibold text-red-600'>About US</h1>
            <h1 className='font-semibold'>Our Chef and Staff</h1>
            <div className='w-96 '>
                <h1><small className=' '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum expedita iure unde odi itaque repudiandae, sapiente voluptates  hic temporibus molestias omnis optio culpa ullam accusamus vero ratione explicabo numquam accusantium maiores!
                    <br />
                    <a className='text-red-600 underline' href="mesopotemia@gmail.com">mesopotemia@gmail.com</a>
                </small></h1>
            </div>
            <Link className='py-1 my-10  border-b-2 border-red-600  text-red-600 font-semibold flex justify-center items-center  hover:bg-red-300 px-3 py-1 rounded-md' to="">Reserve Now <IoIosArrowForward></IoIosArrowForward></Link>
            <h1 className='font-semibold'>Dine in or Take Out</h1>
            <div className='w-96 '>
                <h1><small className=' '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum expedita iure unde odi itaque repudiandae, sapiente voluptates  hic temporibus molestias omnis optio culpa ullam accusamus vero ratione explicabo numquam accusantium maiores!</small></h1>
            </div>
            <Link className='py-1 my-10  border-b-2 border-red-600 text-red-600 font-semibold flex justify-center items-center hover:bg-red-300 px-3 py-1 rounded-md' to="">Order Delivery  <IoIosArrowForward></IoIosArrowForward>
            </Link>
        </div>
    );
};

export default About;