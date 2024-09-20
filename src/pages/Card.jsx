/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Layout from '../components/Layout'
import Star from "../assets/img/Stars.png"
import Star_2 from "../assets/img/Star_2.png"
import Like_1 from "../assets/img/Like_img1.png"
import Like_2 from "../assets/img/Like_img2.png"
import Like_3 from "../assets/img/Like_img3.png"
import Like_4 from "../assets/img/Like_img4.png"
import Rate from "../assets/img/Rates.png"
import Tow from "../assets/img/20.png"
import Tow_2 from "../assets/img/260.png"
import Top_selling_1 from "../assets/img/Top_selling.png"
import Cut_img from "../assets/img/Cut_1.png"
import Cut_img_2 from "../assets/img/Cut_2.png"
import Top_star from "../assets/img/Top_stars.png"
import Tees_30 from "../assets/img/tees.png"
import { TbMathGreater } from "react-icons/tb";
import E__2 from "../assets/img/E__5.png"
import E__3 from "../assets/img/E__10.png"
import E__4 from "../assets/img/E__16.png"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import Top_bottom from "../assets/img/Top_bottom.png"
import Right_icon from "../assets/img/Right.png"
import Tab_1img from "../assets/img/Tab_1img.png"
import Tab_star_1img from "../assets/img/Tab_star_1img.png"
import Tab_star_2img from "../assets/img/Tab_star_2img.png"
import Tab_star_3img from "../assets/img/Tab_star_3img.png"
import one_life_1img from "../assets/img/one_life_1img.png"
import one_life_2img from "../assets/img/one_life_2img.png"
import one_life_3img from "../assets/img/one_life_3img.png"
import one_life_4img from "../assets/img/one_life_4img.png"
import { MdDone } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import { HiPlus } from "react-icons/hi";




function Card() {
  let Links = [
    { name: "Home ", link: "/" },
    { name: "Shop ", link: "/" },
    { name: "Men ", link: "/" },
    { name: "T-shirts ", link: "/" },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  const handelTabChange = (tab) => {
    setActiveTab(tab)
  }
  return (
    <Layout>
      <div className=" w-full h-auto p-5 lg:p-10">
        <div className="w-full lg:w-[1240px]  m-auto ">
          {/* top_heading_icon_section */}

          <div className="flex gap-3 items-center ">
            <h2 className="flex items-center gap-2 text-[#00000099] text-md ">
              Hello{" "}
              <span>
                <TbMathGreater />
              </span>{" "}
            </h2>
            <h2 className="flex items-center gap-2 text-[#00000099] text-md ">
              Shop{" "}
              <span>
                <TbMathGreater />
              </span>{" "}
            </h2>
            <h2 className="flex items-center gap-2 text-[#00000099] text-md ">
              Men{" "}
              <span>
                <TbMathGreater />
              </span>{" "}
            </h2>
            <h2 className="flex items-center ">T-shirts</h2>
          </div>

          {/* main_section */}

          <div className=" w-full lg:flex gap-10 lg:justify-start  mt-7 ">
            <div className="flex flex-col-reverse md:flex md:flex-row gap-3">
              {/* side_image_section */}

              <div className="  flex justify-center items-center gap-3  md:flex-col lg:justify-start md:gap-5">
                <div className="w-full md::w-[140px] flex justify-center items-center bg-[#F0EEED] rounded-2xl">
                  <img src={one_life_1img} alt="" />
                </div>

                <div className="w-full md:w-[140px] flex justify-center items-center bg-[#F0EEED] rounded-2xl">
                  <img src={one_life_2img} alt="" />
                </div>

                <div className="w-full md:w-[140px] flex justify-center items-center bg-[#F0EEED] rounded-2xl">
                  <img src={one_life_3img} alt="" />
                </div>
              </div>

              {/* center_image_section */}

              <div className=" w-full lg:w-[550px lg:h-[500px] bg-[#F0EEED] rounded-2xl">
                <img
                  src={one_life_4img}
                  alt=""
                  className=" w-full h-[500px] object-contain"
                />
              </div>
            </div>
            {/* right_text_area */}

            <div className="">
              {/* heading */}
              <h2 className="text-3xl  xl:text-4xl font-extrabold uppercase mt-5 lg:mt-2  ">
                One Life Graphic T-shirt
              </h2>
              {/* stars_section */}
              <div className="flex items-cente gap-1 py-1 my-1">
                <FaStar className="text-yellow-500 text-xl" />
                <FaStar className="text-yellow-500 text-xl" />
                <FaStar className="text-yellow-500 text-xl" />
                <FaStar className="text-yellow-500 text-xl" />
                <FaStarHalf className="text-yellow-500" />
                <p className="text-black text-sm">
                  4.5/ <span className="text-gray-500">5</span>{" "}
                </p>
              </div>
              {/* price_section */}
              <div className="my-1">
                <h2 className="text-md sm:text-lg xl:text-2xl  flex gap-2  font-bold">
                  $260
                  <s className="text-gray-400  text-md  sm:text-2xl">
                    $300
                  </s>{" "}
                  <span className="bg-[#FF33331A] text-[#FF3333] font-light rounded-3xl text-sm px-2 flex items-center">
                    -40%
                  </span>
                </h2>
              </div>
              {/* paragraph_area */}
              <div className="my-3">
                <p className="text-[16px] w-full lg:w-[450px] text-[#00000099] mb-5 lg:mb-2">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
                <p className="border-b border-[#0000001A] my-3"></p>
              </div>
              {/* select_color */}
              <div>
                <p className="my-4">Select Colors</p>
                <div className="flex  gap-3 my-2">
                  <div className=" w-10 h-10 bg-[#4F4631] rounded-full flex justify-center items-center">
                    <MdDone className="text-white" />
                  </div>
                  <div className=" w-10 h-10 bg-[#314F4A] rounded-full flex justify-center items-center"></div>
                  <div className=" w-10 h-10 bg-[#31344F] rounded-full flex justify-center items-center"></div>
                </div>
                <p className="border-b border-[#0000001A] mt-6 lg:mt-3"></p>

                {/* size_section */}

                <h2 className="text-[#00000099] mt-5 text-[16px] mb-4 lg:mb-2">
                  Choose Size
                </h2>
                <div className="flex gap-4 text-center ">
                  <div className=" w-20 flex items-center justify-center md:w-24 rounded-3xl text-[#00000099] hover:text-white py-2 text-md bg-[#F0F0F0] hover:bg-black duration-500 font-light ">
                    Small
                  </div>
                  <div className=" w-20 flex items-center justify-center md:w-24 rounded-3xl text-[#00000099] hover:text-white  py-2 text-md bg-[#F0F0F0] hover:bg-black duration-500 font-light ">
                    Medium
                  </div>
                  <div className=" w-20 flex items-center justify-center md:w-24 rounded-3xl text-[#fff] hover:text-[#00000099] py-2 text-md bg-[#000] hover:bg-[#F0F0F0] font-light duration-500 ">
                    Large
                  </div>
                  <div className=" w-20 flex items-center justify-center md:w-24 rounded-3xl text-[#00000099] hover:text-white py-2 text-md bg-[#F0F0F0] hover:bg-black duration-500 font-light ">
                    X-Large
                  </div>
                </div>

                <p className="border-t border-[#0000001A] my-5"></p>

                {/* Minas_Plus_section */}

                <div className="flex gap-10 ">
                  <div className="bg-[#F0F0F0] px-3 py-3 gap-7  lg:w-[170px] flex justify-center lg:flex lg:justify-between items-center  rounded-3xl lg:py-3 lg:px-4">
                    <LuMinus
                      className="text-xl"
                    // onClick={() => setCounter((Counter) => Counter - 1)}
                    />
                    <p className="text-md">1</p>
                    <HiPlus
                      className="text-xl"
                    // onClick={() => setCounter((Counter) => Counter + 1)}
                    />
                  </div>
                  <button className=" w-96 lg:w-72 xl:w-[400px] hover:bg-[#F0F0F0] bg-black hover:text-black text-white rounded-3xl text-center shadow-md duration-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
      {/* Tab__section */}
      <div className='px-4 md:px-0'>
      <div className='w-[100%] md:w-[1240px] m-auto mt-6'>
        <div className='tabs mb-5 flex justify-around text-lg md:text-2xl font-extralight text-gray-500'>
          <button className={activeTab === 'tab1' ? 'active-tab' : ''} onClick={() => handelTabChange('tab1')}>
            Product Details
          </button>
          <button className={activeTab === 'tab2' ? 'active-tab' : ''} onClick={() => handelTabChange('tab2')}>
            Rating & Reviews
          </button>
          <button className={activeTab === 'tab3' ? 'active-tab' : ''} onClick={() => handelTabChange('tab3')}>
            FAQs
          </button>
        </div>
        <hr />
        <div className='w-full my-4 flex justify-between items-center '>
          <div className=''>
            <h1 className='text-lg md:text-2xl font-semibold'>All Reviews <span className='text-xs md:text-sm text-gray-400 font-light'> (451)</span></h1>
          </div>
          <div className='flex justify-center items-center gap-2 md:gap-4'>
            <img className='w-[40px] h-[40px] md:w-auto md:h-auto' src={Top_bottom} alt="" />
            <form className="max-w-xs mx-auto hidden md:block">
              <select id="countries" className="bg-gray-200 border-0 text-sm rounded-lg w-full p-2.5">
                <option selected>Latesty</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            <button className='bg-black text-white py-2 px-4 md:px-5 rounded-full border-0 hover:bg-[#F0F0F0] hover:text-[#00000099] text-sm md:text-lg duration-500'>Write a Review</button>
          </div>
        </div>
        <div className=' max-w-full'>
          <div className=' max-w-full'>
            {activeTab === 'tab1' && (
              <div className='md:flex justify-between'>

                <a href="#" className="mb-4 md:mb-0 block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='flex justify-between mb-2'>
                    <img src={Tab_star_1img} alt="" />
                    <img src={Tab_1img} alt="" />
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Samantha D. <img src={Right_icon} alt="" /></h5>
                  <p className="font-extralight text-gray-700 dark:text-gray-400">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                  <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 14, 2023</h2>
                </a>

                <a href="#" className="block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='flex justify-between mb-2'>
                    <img src={Tab_star_2img} alt="" />
                    <img src={Tab_1img} alt="" />
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Alex M. <img src={Right_icon} alt="" /></h5>
                  <p className="font-extralight text-gray-700 dark:text-gray-400">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
                  <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 15, 2023</h2>
                </a>

              </div>
            )}
            {activeTab === 'tab2' && (
              <div className='md:flex justify-between'>

                <a href="#" className="mb-4 md:mb-0 block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='flex justify-between mb-2'>
                    <img src={Tab_star_3img} alt="" />
                    <img src={Tab_1img} alt="" />
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Ethan R. <img src={Right_icon} alt="" /></h5>
                  <p className="font-extralight text-gray-700 dark:text-gray-400">""This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.""</p>
                  <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 16, 2023</h2>
                </a>

                <a href="#" className="block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='flex justify-between mb-2'>
                    <img src={Tab_star_2img} alt="" />
                    <img src={Tab_1img} alt="" />
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Olivia P. <img src={Right_icon} alt="" /></h5>
                  <p className="font-extralight text-gray-700 dark:text-gray-400">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
                  <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 17, 2023</h2>
                </a>

              </div>
            )}
            {activeTab === 'tab3' && (
              <div className=' md:flex justify-between'>

                <a href="#" className="mb-4 md:mb-0 block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='flex justify-between mb-2'>
                    <img src={Tab_star_2img} alt="" />
                    <img src={Tab_1img} alt="" />
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Liam K. <img src={Right_icon} alt="" /></h5>
                  <p className="font-extralight text-gray-700 dark:text-gray-400">""This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
                  <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 18, 2023</h2>
                </a>

                <a href="#" className="block max-w-[600px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className='flex justify-between mb-2'>
                    <img src={Tab_star_1img} alt="" />
                    <img src={Tab_1img} alt="" />
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">Ava H. <img src={Right_icon} alt="" /></h5>
                  <p className="font-extralight text-gray-700 dark:text-gray-400">"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
                  <h2 className='text-gray-700 dark:text-gray-400 mt-4 font-light'>Posted on August 19, 2023</h2>
                </a>

              </div>
            )}
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="w-[230px] border border-gray-200 m-auto text-sm rounded-full py-3 shadow-sm hover:bg-black hover:text-white duration-500">Load More Reviews</button>
        </div>
      </div>
      </div>
  
      {/* cards_section */}
      <div className="w-full bg-white mt-8 ">
        <h1 className="text-center text-3xl font-black uppercase">You might also like</h1>
        <div className="w-[100%] md:gap-3 overflow-x-scroll lg:w-8/12 m-auto mt-8 md:flex justify-between ">
          <div className="w-[295px] mx-auto mb-4 md:mb-0">
            <img className="w-full" src={Like_1} alt="" />
            <h3 className="text-sm mt-2 font-bold">Polo with Contrast Trims</h3>
            <img className="mt-1" src={Top_selling_1} alt="" />
            <h2 className="mt-1 font-bold text-2xl flex items-center gap-2">$212 <img src={Cut_img} alt="" /> <img src={Tow} alt="" /> </h2>
          </div>
          <div className="w-[295px] mx-auto mb-4 md:mb-0">
            <img className="w-full" src={Like_2} alt="" />
            <h3 className="text-sm mt-2 font-bold capitalize">Gradient Graphic T-shirt</h3>
            <img className="mt-1" src={Star_2} alt="" />
            <h2 className="mt-1 font-bold text-2xl flex items-center gap-2">$145</h2>
          </div>
          <div className="w-[295px] mx-auto mb-4 md:mb-0">
            <img src={Like_3} alt="" />
            <h3 className="text-sm mt-2 font-bold capitalize">Polo with Tipping Details</h3>
            <img className="mt-1" src={Star} alt="" />
            <h2 className="mt-1 font-bold text-2xl">$180</h2>
          </div>
          <div className="w-[295px] mx-auto">
            <img src={Like_4} alt="" />
            <h3 className="text-sm mt-2 font-bold capitalize">Black Striped T-shirt</h3>
            <img className="mt-1" src={Top_star} alt="" />
            <h2 className="mt-1 font-bold text-2xl flex items-center gap-2">$120 <img src={Cut_img_2} alt="" /> <img src={Tees_30} alt="" /> </h2>
          </div>
        </div>
      </div>

      {/* Tab_section */}
    </Layout>
  )
}

export default Card