import React from 'react'
// import { useState } from "react";
import { Link} from "react-router-dom";
import Navbar from './Navbar';

function Welcome({setLoginUser}) {
 
    
  return (
 <>
{/* NAVBAR */}
<Navbar setLoginUser={setLoginUser}/>

{/* <nav className="bg-white w-full border-b md:border-0 md:static">
    <div className="flex items-center justify-between p-3">
    <h1 className="text-gray-800 text-center font-bold text-2xl md:text-3xl">
                        Doubt<span className="text-indigo-600">Redressing</span>
                    </h1>
       
        <button  className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow" onClick={() => setLoginUser({})}>
             log out
            </button>
        
    </div>
</nav> */}
{/* CREATE CLASS OR LOG IN TO YOUR CLASS */}
<section className={` mt-36 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8`} >
                <div className="text-center space-y-4">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                        Welcome To
                         <span className="text-indigo-600"> Your Account</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p>
                </div>
                <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <Link to='/class/create'>
                    <button className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto" >
                    Create Class
                    </button>
                    </Link>
                    <Link to='/class/join'>
                    <button  className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto" >
                       Join Class
                    </button>
                    </Link>
                </div>
            </section>
            {/* LOG OUT */}
            {/* <section className='mt-36 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8'>


            
</section> */}

</>
  )
}

export default Welcome