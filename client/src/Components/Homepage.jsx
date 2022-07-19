import React from 'react'
import { Link} from "react-router-dom";

function Homepage() {




  return (<>
    {/* <section className={`${LogIn ? "hidden" :"block"} mt-36 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8`} > */}
    <section className={` mt-36 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8`} >
                <div className="text-center space-y-4">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                        Welcome to
                         <span className="text-indigo-600">Doubt Redressal System</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p>
                </div>
                <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <Link to='/register'>
                    <button className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto" >
                    Create Account
                    </button>
                    </Link>
                    <Link to='/login'>
                    <button  className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto" >
                       Log in
                    </button>
                    </Link>
                </div>
            </section>



            </>
  )
}

export default Homepage