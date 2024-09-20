/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../assets/img/Logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Visa from "../assets/img/Visa.png"
import Mastercard from "../assets/img/Mastercard.png"
import Paypal from "../assets/img/Paypal.png"
import Apple from "../assets/img/Pay.png"
import GPay from "../assets/img/G Pay.png"


function Footer() {
  return (
    <>
      <div className="w-full bg-gray-200 mt-8  h-auto py-8 px-5 items-center">
        <div className="max-w-[1240px] m-auto">
          <div className='grid grid-cols-12  gap-6  border-b-[1px] border-gray-300 pb-5'>
            <div className='col-span-12 lg:col-span-4  '>
              <img src={Logo} alt="" className="mb-4 w-[130px]" />
              <p className="w-8/12 text-sm font-extralight leading-7 ">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex justify-start gap-5 mt-6 cursor-pointer">
                <FaTwitter className=" bg-white text-3xl rounded-full p-2 hover:bg-black hover:text-white" />
                <FaFacebookF className=" bg-black text-white text-3xl rounded-full p-2  hover:bg-white hover:text-black" />
                <FaInstagram className=" bg-white text-3xl rounded-full p-2  hover:bg-black hover:text-white" />
                <FaGithub className=" bg-white text-3xl rounded-full p-2  hover:bg-black hover:text-white" />
              </div>
            </div>
            <div className='col-span-6 lg:col-span-2'>
              <h2 className="mb-4 uppercase tracking-widest	"> Company </h2>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                About
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Features
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Works
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Career
              </p>
            </div>
            <div className='col-span-6 lg:col-span-2 '>
              <h2 className="mb-4 uppercase tracking-widest	"> Help </h2>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Customer Support
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Delivery Details
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Terms & Conditions
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Privacy Policy
              </p>
            </div>
            <div className='col-span-6 lg:col-span-2 '>
              <h2 className="mb-4 uppercase tracking-widest	"> FAQ </h2>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Acc uppercase ount
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Manage Deliveries
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Orders
              </p>
              <p className="font-extralight cursor-pointer text-sm leading-9">
                Payments
              </p>
            </div>
            <div className='col-span-6 lg:col-span-2 '>
              <h2 className="mb-4 uppercase tracking-widest	"> Resources </h2>
              <p className="font-extralight	cursor-pointer text-sm leading-9">
                Free eBooks
              </p>
              <p className="font-extralight	cursor-pointer text-sm leading-9">
                Development Tutorial
              </p>
              <p className="font-extralight	cursor-pointer text-sm leading-9">
                How to - Blog
              </p>
              <p className="font-extralight	cursor-pointer text-sm leading-9">
                Youtube Playlist
              </p>
            </div>
          </div>
        </div>


        <div className="max-w-[1240px] m-auto pt-5">
          <div className=" lg:flex justify-between text-center ">
            {/*==============> {Footer Copy right text _section} <==================*/}
            <div className="">
              <p className="font-extralight text-sm ">
                Shop.co © 2000-2024, All Rights Reserved
              </p>
            </div>

            {/*==============> {payIcons_section} <==================*/}
            <div className="flex justify-center items-center gap-5 mt-5 lg:mt-0">
              <div className="bg-white w-11 h-5 py-4 rounded-md flex items-center justify-center cursor-pointer">
                <img src={Visa} alt="" />
              </div>
              <div className="bg-white w-11 h-5 py-4 rounded-md flex items-center justify-center cursor-pointer">
                <img src={Mastercard} alt="" />
              </div>
              <div className="bg-white w-11 h-5 py-4 rounded-md flex items-center justify-center cursor-pointer">
                <img src={Paypal} alt="" />
              </div>
              <div className="bg-white w-11 h-5 py-4 rounded-md flex items-center justify-center cursor-pointer">
                <img src={Apple} alt="" />
              </div>
              <div className="bg-white w-11 h-5 py-4 rounded-md flex items-center justify-center cursor-pointer">
                <img src={GPay} alt="" />
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Footer