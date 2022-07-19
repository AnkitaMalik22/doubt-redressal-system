import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Join({setUserType,userEmail}) {
   console.log(userEmail)
    const [user, setUser] = useState({

        email: userEmail,
         _id: "",
      
      });
      const navigate = useNavigate();
      const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
    
         await axios.post('http://localhost:8080/class/join',user)
           .then((response)=>{ 
            alert("Join Successfull")
            setUserType(response.data.type)
           navigate('/class')
         
         })
                .catch((err)=>{console.log(err)})
                // navigate('/login')
              }
  return (
    <section className="text-gray-600 body-font">
     <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 className="text-gray-800 text-center font-bold text-2xl md:text-3xl mb-2">
                       Join Your <span className="text-indigo-600">Class</span>
                    </h1>
          <div className="w-full max-w-md">

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >

 {/* -------------------------------Email -------------------------------- */}
 {/* <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div> */}
            {/* CLASS CODE */}

<div className="mb-6">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="class-code"
                    >
                      Class Code
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="class-code"
                      type="class-code"
                      placeholder="Enter Class code"
                      name='_id'
                      value={user._id}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* {error && <span className="text-red-500 my-2">{error}</span>} */}
              <div className="flex items-center justify-center">
    
                {/* <Link to="/doubt"> */}
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-1"
                    type="button"
                    onClick={handleSubmit}
                  >
                   Join
                  </button>
                {/* </Link> */}
                
               
              </div>

</form>
            </div>
            </div>
      </section>
  )
}

export default Join