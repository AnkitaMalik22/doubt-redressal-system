import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create({userEmail,userName}) {
  const [display, setDisplay] = useState(false)
  const [Id, setId] = useState("")
    const [user, setUser] = useState({
  
        name:userName,
        email:userEmail,
       className: "",
      
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
    
         await axios.post('http://localhost:8080/class/create',user)
           .then((response)=>{
            setDisplay(true) 
          setId(response.data._id)
          //  navigate('/class/join')
         
         })
                .catch((err)=>{console.log(err)})
                // navigate('/login')
              }
  return (
    <section className="text-gray-600 body-font">
      <div className={display ? "hidden" :"block"}>
     <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 className="text-gray-800 text-center font-bold text-2xl md:text-3xl">
                        Create a <span className="text-indigo-600">Class</span>
                    </h1>
          <div className="w-full max-w-md">

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >


            {/* CLASSS NAME */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-classname"
                >
                  Class Name
                </label>
                <input
                  className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight  focus:bg-white focus:border-gray-500"
                  id="grid-classname"
                  type="text"
                  placeholder="Example : Computer Networks"
                  name="className"
                  value={user.className}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
             {/* <Link to="/doubt"> */}
             <div className="flex items-center justify-center">
             {/* <Link to="/class/join"> */}
             <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-1"
                    type="button"
                    onClick={handleSubmit}
                  >
                  Create
                  </button>
                  {/* </Link> */}
                  </div>
                {/* </Link> */}

</form>
            </div>
            </div>
            </div>

{/* join */}
<div className={!display ? "hidden" :"block"}>
<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 className="text-gray-800 text-center font-bold text-2xl md:text-3xl">
                       Your Class<span className="text-indigo-600">ID</span>
                    </h1>
          <div className="w-full max-w-md">
            <div className='className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" '>
          <p className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight ">class Id : {Id}</p>
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-1" onClick={() => {navigator.clipboard.writeText(Id) ;alert("copied")}}>
                    copy
            </button>
            <Link to="/class/join">
             <button
                    className=" ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-1"
                    type="button" 
                  >
                 Join
                  </button>
                  </Link>
                  </div>
          </div>
          </div>
          </div>
      </section>
  )
}

export default Create