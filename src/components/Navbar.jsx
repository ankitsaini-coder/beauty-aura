/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../assets/img/Logo.png"
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'




const Navbar = () => {
  const navigation = [
    { name: 'Shop', href: '/' },
    { name: 'On Sale', href: '/card' },
    { name: 'New Arrivals', href: '/category' },
    { name: 'Brands', href: '/product' },
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const handleLogout = ()  => {
      localStorage.removeItem("token");
      navigate("/");
    }

    useEffect(() => {
      if (token === null) {
        navigate("/");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[token])

  return (
    <>

      <div className="bg-white">
        <header className="inset-x-0 top-0 z-50 bg-white m-auto w-full sm:w-full lg:w-12/12 xl:w-10/12">
          <nav className=" flex items-center justify-between p-3 lg:px-8" aria-label="Global">

            {/* Logo_section */}
            <div className="flex lg:flex-1">
              <div className="flex mr-2 lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <a href="#" className=" w-[70px] lg:-m-1.5 p-1.5 lg:w-[100px]">
                <Link to="/">
                <img src={Logo} className='' alt="" />
                </Link>
              </a>

            </div>


            {/* list_section */}
            <div className="hidden lg:flex lg:gap-x-12 items-center ">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
              <div className='w-[350px] rounded-full flex items-center py-2 px-4  bg-[#F0F0F0] gap-[2px]'>
                <CiSearch className='text-xl font-semibold' />
                <input className='bg-[#F0F0F0] w-full outline-none border-0 focus:outline-none' placeholder='Search For Products...' type="text" />
              </div>
            </div>

            {/* input_section */}


            {/* icon__section */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
              <div className='flex iteams-center gap-4'>
                <FaCartShopping className='text-3xl' />
                <Menu>
                  <MenuButton><CgProfile className='text-3xl' /></MenuButton>
                  <MenuItems className="bg-white shadow-xl border-2 py-2 px-6" anchor="bottom">
                    <MenuItem>
                     <button className='block'>LogIn</button>
                    </MenuItem>
                    <MenuItem>
                    <button onClick={handleLogout}>Logout</button>
                    </MenuItem>
                  </MenuItems>
                </Menu>

              </div>
            </div>
            <div className='flex iteams-center gap-[7px] lg:hidden'>
              <IoSearch className='text-xl font-bold' />
              <FaCartShopping className='text-xl' />
              <Menu>
                  <MenuButton><CgProfile className='text-xl' /></MenuButton>
                  <MenuItems className="bg-white shadow-xl border-2 py-2 px-6" anchor="bottom">
                    <MenuItem>
                     <button className='block'>LogIn</button>
                    </MenuItem>
                    <MenuItem>
                    <button onClick={handleLogout}>Logout</button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
            </div>
          </nav>

          <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className=' w-[100px]' src={Logo} alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>


      </div>
    </>
  )
}

export default Navbar









