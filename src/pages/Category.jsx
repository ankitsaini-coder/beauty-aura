/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { RiSoundModuleFill } from "react-icons/ri";
import { PiGreaterThanBold } from "react-icons/pi";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaCheck } from "react-icons/fa";
import Casual_1img from "../assets/img/Casual_1img.png"
import Star_2 from "../assets/img/Star_2.png"
import Star from "../assets/img/Stars.png"
import Top_star from "../assets/img/Top_stars.png"
import Casual_2img from "../assets/img/Casual_2img.png"
import Casual_3img from "../assets/img/Casual_3img.png"
import Casual_4img from "../assets/img/Casual_4img.png"
import Casual_5img from "../assets/img/Casual_5img.png"
import Casual_6img from "../assets/img/Casual_6img.png"
import Casual_7img from "../assets/img/Casual_7img.png"
import Casual_8img from "../assets/img/Casual_8img.png"
import Casual_9img from "../assets/img/Casual_9img.png"
import Top_selling_1 from "../assets/img/Top_selling.png"
import Top_selling_tow from "../assets/img/Top_selling_2.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Filter_como() {
  const [show,setShow] = useState(false)
  const ShowName =()=>{
    if(show == true){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  return (
    <Layout>
    <div className='my-6 max-w-[100%] md:max-w-[1240px] m-auto px-6 md:px-0'>
      <h1 className='flex items-center gap-2 text-gray-500 font-light'>Home <FaChevronRight className='text-gray-500 ' /> <span className='text-black'>Casual</span></h1>
    </div>
    <div className='w-[100%] md:max-w-[1240px] m-auto flex flex-col-reverse  md:flex md:flex-row gap-4 relative'>
        { 
      show && (<div className='w-[100%] z-50 absolute bg-white top-0   m-auto p-3 border border-gray-300 rounded-2xl lg:w-[20%]'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-xl'>Filters</h1>
          <button onClick={ShowName}>
          <IoMdClose className='text-gray-500 text-2xl'/>
          </button>
        </div>
        <hr className='my-4' />
        {/* Filters_section */}
        <Disclosure as="div" className="mb-3" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className=" font-extralight text-gray-500">
              T-shirts
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="">
            ankit
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="mb-3" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className=" font-extralight text-gray-500">
              Shorts
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="">
            ankit
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="mb-3" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className=" font-extralight text-gray-500">
              Shirts
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="">
            ankit
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="mb-3" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className=" font-extralight text-gray-500">
              Hoodie
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="">
            ankit
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="mb-3" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-extralight text-gray-500">
              Jeans
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="">
            ankit
          </DisclosurePanel>
        </Disclosure>
        <hr className='my-4' />
        {/* Pricing_section */}
        <Disclosure as="div" className="mb-" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-semibold text-gray-900 text-xl">
              Price
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-4">
            <div className='class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"'>
              <div className='bg-blue-950 h-2.5 rounded-full w-[45%]'></div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <hr className='my-4' />
        {/* Colors_section */}
        <Disclosure as="div" className="" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-semibold text-gray-900 text-xl">
              Colors
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-4">
            <div className='flex justify-between'>
              <h1 className='w-[40px] h-[40px] bg-[#00C12B] rounded-full border border-red-700'></h1>
              <h1 className='w-[40px] h-[40px] bg-[#F50606] rounded-full border border-red-900'></h1>
              <h1 className='w-[40px] h-[40px] bg-[#F5DD06] rounded-full border border-red-500'></h1>
              <h1 className='w-[40px] h-[40px] bg-[#F57906] rounded-full border border-red-700'></h1>
              <h1 className='w-[40px] h-[40px] bg-[#06CAF5] rounded-full border border-pink-400'></h1>
              <h1 className='w-[40px] h-[40px] bg-[#063AF5] rounded-full border border-blue-900 flex '>
                <FaCheck className='text-white text-center m-auto' />
              </h1>
              <h1 className='w-[40px] h-[40px] bg-[#7D06F5] rounded-full border border-blue-700'></h1>
            </div>
            <div className='flex justify-start gap-[15px] mt-3'>

              <h1 className='w-[40px] h-[40px] bg-[#F506A4] rounded-full border border-pink-700'></h1>
              <h1 className='w-[40px] h-[40px] bg-[#FFFFFF] rounded-full border border-gray-400'></h1>
              <h1 className='w-[40px] h-[40px] bg-[#000000] rounded-full border border-black'></h1>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <hr className='my-4' />
        {/* Size_section */}
        <Disclosure as="div" className="mb-" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-semibold text-gray-900 text-xl">
              Size
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2">
            <div className='flex justify-start items-center gap-2 mb-3'>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>XX-Small</h1>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>X-Small</h1>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>Small</h1>
            </div>
            <div className='flex justify-start items-center gap-2 mb-3'>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>Medium</h1>
              <h1 className='hover:bg-gray-200 font-extralight hover:text-gray-600 text-sm py-2 px-5 rounded-full bg-black text-white duration-300'>Large</h1>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>X-Large</h1>
            </div>
            <div className='flex justify-start items-center gap-2 mb-3'>
            <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>XX-Large</h1>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>3X-Large</h1>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>4X-Large</h1>
            </div>


          </DisclosurePanel>
        </Disclosure>
        <hr className='my-4' />
        {/* Dress_section */}
        <Disclosure as="div" className="mb-" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-semibold text-gray-900 text-xl">
              Dress Style
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2">
            <Disclosure as="div" className="mb-3" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className=" font-extralight text-gray-500">
                  Casual
                </span>
                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="">
                ankit
              </DisclosurePanel>
            </Disclosure>
          </DisclosurePanel>
          <DisclosurePanel className="mt-2">
            <Disclosure as="div" className="mb-3" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className=" font-extralight text-gray-500">
                  Formal
                </span>
                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="">
                ankit
              </DisclosurePanel>
            </Disclosure>
          </DisclosurePanel>
          <DisclosurePanel className="mt-2">
            <Disclosure as="div" className="mb-3" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className=" font-extralight text-gray-500">
                  Party
                </span>
                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="">
                ankit
              </DisclosurePanel>
            </Disclosure>
          </DisclosurePanel>
          <DisclosurePanel className="mt-2">
            <Disclosure as="div" className="mb-3" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className=" font-extralight text-gray-500">
                  Gym
                </span>
                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="">
                ankit
              </DisclosurePanel>
            </Disclosure>
          </DisclosurePanel>
        </Disclosure>
        <button className='bg-black text-white w-full text-md font-light py-3 rounded-full hover:text-black hover:bg-gray-200 duration-300'>Apply Filter</button>
      </div>)
        }
        <div className='w-[100%] p-3 border border-gray-300 rounded-2xl hidden lg:block lg:w-[20%]'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-xl'>Filters</h1>
          <RiSoundModuleFill className='text-gray-500' />
        </div>
        <hr className='my-4' />
        {/* Filters_section */}
        <Disclosure as="div" className="mb-3" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className=" font-extralight text-gray-500">
              T-shirts
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="">
            ankit
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="mb-3" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className=" font-extralight text-gray-500">
              Shorts
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="">
            ankit
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="mb-3" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className=" font-extralight text-gray-500">
              Shirts
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="">
            ankit
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="mb-3" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className=" font-extralight text-gray-500">
              Hoodie
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="">
            ankit
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="mb-3" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-extralight text-gray-500">
              Jeans
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="">
            ankit
          </DisclosurePanel>
        </Disclosure>
        <hr className='my-4' />
        {/* Pricing_section */}
        <Disclosure as="div" className="mb-" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-semibold text-gray-900">
              Price
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-4">
            <div className='class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"'>
              <div className='bg-blue-950 h-2.5 rounded-full w-[45%]'></div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <hr className='my-4' />
        {/* Colors_section */}
        <Disclosure as="div" className="" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-semibold text-gray-900">
              Colors
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-4">
            <div className='flex justify-between'>
              <h1 className='w-[33px] h-[33px] bg-[#00C12B] rounded-full border border-red-700'></h1>
              <h1 className='w-[33px] h-[33px] bg-[#F50606] rounded-full border border-red-900'></h1>
              <h1 className='w-[33px] h-[33px] bg-[#F5DD06] rounded-full border border-red-500'></h1>
              <h1 className='w-[33px] h-[33px] bg-[#F57906] rounded-full border border-red-700'></h1>
              <h1 className='w-[33px] h-[33px] bg-[#06CAF5] rounded-full border border-pink-400'></h1>
            </div>
            <div className='flex justify-between mt-3'>
              <h1 className='w-[33px] h-[33px] bg-[#063AF5] rounded-full border border-blue-900 flex '>
                <FaCheck className='text-white text-center m-auto' />
              </h1>
              <h1 className='w-[33px] h-[33px] bg-[#7D06F5] rounded-full border border-blue-700'></h1>
              <h1 className='w-[33px] h-[33px] bg-[#F506A4] rounded-full border border-pink-700'></h1>
              <h1 className='w-[33px] h-[33px] bg-[#FFFFFF] rounded-full border border-gray-400'></h1>
              <h1 className='w-[33px] h-[33px] bg-[#000000] rounded-full border border-black'></h1>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <hr className='my-4' />
        {/* Size_section */}
        <Disclosure as="div" className="mb-" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-semibold text-gray-900">
              Size
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2">
            <div className='flex justify-start items-center gap-2 mb-3'>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>XX-Small</h1>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>X-Small</h1>
            </div>
            <div className='flex justify-start items-center gap-2 mb-3'>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>Small</h1>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>Medium</h1>
            </div>
            <div className='flex justify-start items-center gap-2 mb-3'>
              <h1 className='hover:bg-gray-200 font-extralight hover:text-gray-600 text-sm py-2 px-5 rounded-full bg-black text-white duration-300'>Large</h1>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>X-Large</h1>
            </div>
            <div className='flex justify-start items-center gap-2 mb-3'>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>XX-Large</h1>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>3X-Large</h1>
            </div>
            <div className='flex justify-start items-center gap-2 mb-3'>
              <h1 className='bg-gray-200 font-extralight text-gray-600 text-sm py-2 px-5 rounded-full hover:bg-black hover:text-white duration-300'>4X-Large</h1>
            </div>

          </DisclosurePanel>
        </Disclosure>
        <hr className='my-4' />
        {/* Dress_section */}
        <Disclosure as="div" className="mb-" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-semibold text-gray-900">
              Dress Style
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2">
            <Disclosure as="div" className="mb-3" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className=" font-extralight text-gray-500">
                  Casual
                </span>
                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="">
                ankit
              </DisclosurePanel>
            </Disclosure>
          </DisclosurePanel>
          <DisclosurePanel className="mt-2">
            <Disclosure as="div" className="mb-3" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className=" font-extralight text-gray-500">
                  Formal
                </span>
                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="">
                ankit
              </DisclosurePanel>
            </Disclosure>
          </DisclosurePanel>
          <DisclosurePanel className="mt-2">
            <Disclosure as="div" className="mb-3" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className=" font-extralight text-gray-500">
                  Party
                </span>
                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="">
                ankit
              </DisclosurePanel>
            </Disclosure>
          </DisclosurePanel>
          <DisclosurePanel className="mt-2">
            <Disclosure as="div" className="mb-3" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className=" font-extralight text-gray-500">
                  Gym
                </span>
                <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="">
                ankit
              </DisclosurePanel>
            </Disclosure>
          </DisclosurePanel>
        </Disclosure>
        <button className='bg-black text-white w-full text-md font-light py-3 rounded-full hover:text-black hover:bg-gray-200 duration-300'>Apply Filter</button>
      </div>

      <div className=' w-[100%] px-6  border-gray-300 rounded-2xl lg:w-[80%]'>
        <div className='hidden lg:flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Casual</h1>
          <div className='flex justify-center gap-3 items-center '>
            <p className='text-gray-500 font-light'>Showing 1-10 of 100 Products</p>
            <div className='flex items-center'>
              <p className='text-gray-500 font-light'>Sort by: </p>
              <select id="popularity" className='border-0'>
                <option value="">Most Popular</option>
                <option value="">Most Popular</option>
                <option value="">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center max-w-full lg:hidden'>
          <div className='flex justify-start items-center gap-2'>
            <h1 className='text-xl font-bold'>Casual</h1>
            <p className='text-gray-500 font-light text-sm'>Showing 1-10 of 100 Products</p>
          </div>
          <button onClick={ShowName}>
          <div className='bg-gray-200 p-2 rounded-full'>
            <RiSoundModuleFill className='text-black  text-xl' />
          </div>
          </button>
        </div>

        {/* card_section 1 */}
        <div className='flex justify-between mt-3 gap-3 md:gap-0'>
          <div className='w-[50%] md:w-auto'>
            <img src={Casual_1img} alt="" />
            <h1 className='mt-2 font-semibold text-sm md:text-xl'>Gradient Graphic T-shirt</h1>
            <img className='mt-1' src={Star_2} alt="" />
            <h1 className='text-2xl mt-1 font-bold hidden md:block'>$145</h1>
            <div className='mt-1 flex items-center gap-1 md:hidden'>
              <h1 className='text-lf font-bold'>$145</h1>
              <s className='text-lg text-gray-400 font-semibold'>$242</s>
              <p className='text-[#FF3333] bg-[#FF33331A] py-1 px-3 text-xs rounded-full'>-20%</p>
            </div>
          </div>
          <div className='w-[50%] md:w-auto'>
            <img src={Casual_2img} alt="" />
            <h1 className='mt-2 font-semibold text-sm md:text-xl hidden md:block'>Polo with Tipping Details</h1>
            <h1 className='mt-2 font-semibold text-sm md:text-xl md:hidden'>Polo with Tipping De...</h1>
            <img className='mt-1' src={Star} alt="" />
            <h1 className='text-2xl mt-1 font-bold hidden md:block'>$180</h1>
            <div className='mt-1 flex items-center gap-1 md:hidden'>
              <h1 className='text-lf font-bold'>$180</h1>
              <s className='text-lg text-gray-400 font-semibold'>$242</s>
              <p className='text-[#FF3333] bg-[#FF33331A] py-1 px-3 text-xs rounded-full'>-20%</p>
            </div>
          </div>
          <div className='hidden md:block'>
            <img src={Casual_3img} alt="" />
            <h1 className='mt-2 font-semibold text-xl'>Black Striped T-shirt</h1>
            <img className='mt-1' src={Top_star} alt="" />
            <div className='mt-1 flex items-center gap-3'>
              <h1 className='text-2xl font-bold'>$120</h1>
              <s className='text-2xl text-gray-400 font-semibold'>$150</s>
              <p className='text-[#FF3333] bg-[#FF33331A] py-2 px-4 text-sm rounded-full'>-30%</p>
            </div>
          </div>
        </div>
        {/* card_section 2 */}
        <div className='flex justify-between mt-3 gap-3 md:gap-0'>
          <div className='w-[50%] md:w-auto'>
            <img src={Casual_4img} alt="" />
            <h1 className='mt-2 font-semibold text-sm md:text-xl'>SKINNY FIT JEANS</h1>
            <img className='mt-1' src={Star_2} alt="" />
            <div className='mt-1 flex items-center gap-1 md:gap-3'>
              <h1 className='text-lg md:text-2xl font-bold'>$240</h1>
              <s className='text-lg  md:text-2xl text-gray-400 font-semibold'>$260</s>
              <p className='text-[#FF3333] bg-[#FF33331A] py-1 px-3 text-xs md:text-sm md:py-2 md:px-4 rounded-full'>-20%</p>
            </div>
          </div>
          <div className='w-[50%] md:w-auto'>
            <img src={Casual_5img} alt="" />
            <h1 className='mt-2 font-semibold text-sm md:text-xl'>CHECKERED SHIRT</h1>
            <img className='mt-1' src={Star} alt="" />
            <h1 className='text-lg mt-1 font-bold md:text-2xl md:block'>$180</h1>
            {/* <div className='mt-1 flex items-center gap-1 md:hidden'>
              <h1 className='text-lg font-bold'>$180</h1>
              <s className='text-lg text-gray-400 font-semibold'>$260</s>
              <p className='text-[#FF3333] bg-[#FF33331A] py-1 px-3 text-xs rounded-full'>-20%</p>
              </div> */}
          </div>
          <div className='hidden md:block'>
            <img src={Casual_6img} alt="" />
            <h1 className='mt-2 font-semibold text-xl'>SLEEVE STRIPED T-SHIRT</h1>
            <img className='mt-1' src={Star} alt="" />
            <div className='mt-1 flex items-center gap-3'>
              <h1 className='text-2xl font-bold'>$130</h1>
              <s className='text-2xl text-gray-400 font-semibold'>$160</s>
              <p className='text-[#FF3333] bg-[#FF33331A] py-2 px-4 text-sm rounded-full'>-30%</p>
            </div>
          </div>
        </div>
        {/* card_section 3 */}
        <div className='flex justify-between mt-3 gap-3 md:gap-0'>
          <div className='w-[50%] md:w-auto'>
            <img src={Casual_7img} alt="" />
            <h1 className='mt-2 font-semibold text-sm md:text-xl hidden md:block'>VERTICAL STRIPED SHIRT</h1>
            <h1 className='mt-2 font-semibold text-sm md:text-xl md:hidden'>VERTICAL STRIPED ...</h1>
            <img className='mt-1' src={Top_star} alt="" />
            <div className='mt-1 flex items-center gap-1 md:gap-3'>
              <h1 className='text-lg md:text-2xl font-bold'>$212</h1>
              <s className='text-lg  md:text-2xl text-gray-400 font-semibold'>$232</s>
              <p className='text-[#FF3333] bg-[#FF33331A] py-1 px-3 text-xs md:text-sm md:py-2 md:px-4 rounded-full'>-20%</p>
            </div>
          </div>
          <div className='w-[50%] md:w-auto'>
            <img src={Casual_8img} alt="" />
            <h1 className='mt-2 font-semibold text-sm md:text-xl flex'>COURAGE GRAPHIC T- <span className='hidden md:block'>SHIRT</span></h1>
            <img className='mt-1' src={Top_selling_1} alt="" />
            <h1 className='text-2xl mt-1 font-bold hidden md:block'>$240</h1>
            <div className='mt-1 flex items-center gap-1 md:hidden'>
              <h1 className='text-lg font-bold'>$240</h1>
              <s className='text-lg text-gray-400 font-semibold'>$260</s>
              <p className='text-[#FF3333] bg-[#FF33331A] py-1 px-3 text-xs rounded-full'>-20%</p>
            </div>
          </div>
          <div className='hidden md:block'>
            <img src={Casual_9img} alt="" />
            <h1 className='mt-2 font-semibold text-xl'>LOOSE FIT BERMUDA SHORTS</h1>
            <img className='mt-1' src={Top_selling_tow} alt="" />
            <h1 className='text-2xl mt-1 font-bold'>$80</h1>
          </div>
        </div>
        <div className='my-6'></div>
        <div className='flex justify-between items-center w-full'>
          <button className='border border-gray-300 py-1 font-light rounded-md px-2 text-sm md:text-lg hover:bg-black hover:text-white duration-300 flex justify-center items-center gap-2'><FaArrowLeftLong />Previous</button>
          <div className='flex justify-center items-center gap-1 lg:gap-2'>
            <h1 className='text-black bg-gray-200 w-[30px] h-[30px] flex items-center justify-center rounded-md hover:bg-black hover:text-white duration-300 text-sm'>1</h1>
            <h1 className='text-gray-500 w-[30px] h-[30px] flex items-center justify-center rounded-md hover:bg-black hover:text-white duration-300 text-sm'>2</h1>
            <h1 className='text-gray-500 w-[30px] h-[30px] hidden lg:flex items-center justify-center rounded-md hover:bg-black hover:text-white duration-300 text-sm'>3</h1>
            <h1 className='text-gray-500 w-[30px] h-[30px] flex items-center justify-center rounded-md hover:bg-black hover:text-white duration-300 text-sm'>...</h1>
            <h1 className='text-gray-500 w-[30px] h-[30px] hidden lg:flex items-center justify-center rounded-md hover:bg-black hover:text-white duration-300 text-sm'>8</h1>
            <h1 className='text-gray-500 w-[30px] h-[30px] flex items-center justify-center rounded-md hover:bg-black hover:text-white duration-300 text-sm'>9</h1>
            <h1 className='text-gray-500 w-[30px] h-[30px] flex items-center justify-center rounded-md hover:bg-black hover:text-white duration-300 text-sm'>10</h1>
          </div>
          <button className='border border-gray-300 py-1 font-light rounded-md px-2 text-sm md:text-lg hover:bg-black hover:text-white duration-300 flex justify-center items-center gap-2'>Next<FaArrowRightLong /></button>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Filter_como