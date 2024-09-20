/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navigation from "../routes/Navigation";

function Login_form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const navigate =  useNavigate();
    
      const [token, setToken] = useState(null);
      const [error, setError] = useState('');
      const useToken = localStorage.getItem('token');
    
      useEffect(() => {
        if (useToken) {
          navigate('/home');
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[useToken]);
    
      const onSubmit = (data) => {
    
         fetch('https://reqres.in/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json()).then(res => {
          if (res.token) {
            localStorage.setItem('token', res.token)
          navigate('/home')
          } else {
            setError(res.error)
          }
          
        });
      };
    return (
        <>
            <div className='bg-slate-900 w-full h-screen flex justify-center items-center'>
                    <div className="my-20 w-[300px] m-auto bg-white p-10 relative rounded-2xl">
                        <img
                            className="animate-bounce  w-[100px] absolute top-[-55px] right-[100px] border-[7px] border-slate-900 rounded-full"
                            src="https://mavenjseo.com/img/man_2.png"
                            alt=""
                        />
                        <form className="">
                            <div className="relative z-0 w-full mb-5 group mt-6">
                                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required {...register("email", {required: true})} />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Email</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required {...register("password", {required: true})}/>
                                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                            </div>

                            <button onClick={handleSubmit(onSubmit)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
               
            </div>
        </>
    )
}

export default Login_form