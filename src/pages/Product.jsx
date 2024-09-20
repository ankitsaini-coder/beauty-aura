/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/Layout'
import { GoTag } from "react-icons/go";
import Product_1img from "../assets/img/Product_1img.png"
import { RiDeleteBin6Fill } from "react-icons/ri";
import Less_Add from "../assets/img/Less_Add.png"
import Product_2img from "../assets/img/Product_2img.png"
import Product_3img from "../assets/img/Product_3img.png"
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";




function Product() {
  return (
    <Layout>
      <div className=' max-w-[1240px] m-auto mt-6 px-3 sm:px-0'>
        <div className='mb-6'>
          <h1 className='flex items-center gap-2 text-gray-500 font-light'>Home <FaChevronRight className='text-gray-500 ' /> <span className='text-black'>Cart</span></h1>
        </div>
        <div className='max-w-full '>
          <h1 className='uppercase text-4xl font-black mb-4'>Your cart</h1>
          <div className=' sm:flex gap-4'>
            <div className='border border-gray-300 p-3 rounded-xl sm:w-[65%]'>
            <div className='flex gap-2 w-full'>
              <img src={Product_1img} alt="" />
              <div className='flex justify-between w-full'>
                <div>
                  <h1 className='font-semibold'>Gradient Graphic T-shirt</h1>
                  <p className='mt-1'>Size: <span className='font-extralight text-gray-500 text-sm'>Large</span></p>
                  <p className='mt-1'>Color: <span className='font-extralight text-gray-500 text-sm'>White</span></p>
                  <h2 className='text-xl font-bold mt-3'>$145</h2>
                </div>
                <div>
                <RiDeleteBin6Fill className='mt-1 text-red-700' />
                </div>
              </div>
            </div>
              <hr className='my-4'/>
              <div className='flex gap-2 w-full'>
              <img src={Product_2img} alt="" />
              <div className='flex justify-between w-full'>
                <div>
                  <h1 className='font-semibold'>CHECKERED SHIRT</h1>
                  <p className='mt-1'>Size: <span className='font-extralight text-gray-500 text-sm'>Medium</span></p>
                  <p className='mt-1'>Color: <span className='font-extralight text-gray-500 text-sm'>Red</span></p>
                  <h2 className='text-xl font-bold mt-3'>$180</h2>
                </div>
                <div>
                <RiDeleteBin6Fill className='mt-1 text-red-700' />
                </div>
              </div>
            </div>
            <hr className='my-4'/>
            <div className='flex gap-2 w-full'>
              <img src={Product_3img} alt="" />
              <div className='flex justify-between w-full'>
                <div>
                  <h1 className='font-semibold'>SKINNY FIT JEANS</h1>
                  <p className='mt-1'>Size: <span className='font-extralight text-gray-500 text-sm'>Large</span></p>
                  <p className='mt-1'>Color: <span className='font-extralight text-gray-500 text-sm'>Blue</span></p>
                  <h2 className='text-xl font-bold mt-3'>$240</h2>
                </div>
                <div>
                <RiDeleteBin6Fill className='mt-1 text-red-700' />
                </div>
              </div>
            </div>
            </div>

            <div className='border border-gray-300 p-3 rounded-xl mt-6 sm:h-[365px] sm:mt-0  sm:w-[35%]'>
              <h1 className='text-xl font-semibold mb-4'>Order Summary</h1>
              <div className='flex justify-between mb-3'>
                <h1 className='text-xl text-gray-500 font-extralight'>Subtotal</h1>
                <h1 className='font-bold text-lg'>$565</h1>
              </div>
              <div className='flex justify-between mb-3'>
                <h1 className='text-xl text-gray-500 font-extralight'>Discount (-20%)</h1>
                <h1 className='font-bold text-lg text-red-700'>-$113</h1>
              </div>
              <div className='flex justify-between mb-3'>
                <h1 className='text-xl text-gray-500 font-extralight'>Delivery Fee</h1>
                <h1 className='font-bold text-lg'>$15</h1>
              </div>
              <hr />
              <div className='flex justify-between mt-3'>
                <h1 className='text-xl text-gray-900 font-extralight'>Total</h1>
                <h1 className='font-bold text-lg'>$467</h1>
              </div>

              <div className='flex justify-between gap-2 mt-3'>
                <div className='flex items-center justify-center bg-gray-200 px-3 rounded-full'>
                <GoTag />
                <input className='border-0 bg-gray-200 rounded-full focus:outline-none' type="text" placeholder='Add promo code' />
                </div>
                <button className='bg-black text-white border-0 w-[100px] rounded-full hover:bg-gray-200 duration-300 hover:text-black'>Apply</button>
              </div>
              <button className='w-full bg-black text-white mt-5 rounded-full py-4 flex justify-center items-center gap-2 hover:bg-gray-200 duration-300 hover:text-black'>Go to Checkout <FaArrowRight /> </button>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product