import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const [error, setError] = useState("");
  const [user, setUser] = useState({
  
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  
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
  // console.log('====================================');
  // console.log(user);
  // console.log('====================================');
  // if(data.title==="" || data.snippet==="" || data.body===""){
  //   handleValidation()
  // }
   await axios.post('http://localhost:8080/register',user)
     .then((response)=>{ 
      // alert(response.data.message)
      if(response.data.message !== "registered"){ navigate('/login')}
      else{setError("Already registered! ")}
   })
          .catch((err)=>{console.log(err)})
          // navigate('/login')
        }
  


  return (
    <section className=" create-class body-font">
      <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col ">
        <h1 className="text-gray-800 text-center font-bold text-2xl md:text-3xl mb-3">
          Create a <span className="text-indigo-600">Account</span>
        </h1>
        <div className="w-full max-w-md ">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>handleSubmit(e)} method="POST">
           

            <div className="flex flex-wrap -mx-3 mb-6 ">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                {/* -------------------------------First Name ---------------------- */}

                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  required
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> border-red-500  */}
              </div>

              {/* -------------------------------last Name -------------------------- */}
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                 
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {/* -------------------------------Email -------------------------------- */}
            <div className="flex flex-wrap -mx-3 mb-6">
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
            </div>
            {/* ------------------------------- Password -------------------------------- */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>

            {/* -------------------------------Class Name ------------------------------- */}
            {/* <div className={selectValue === "Student" ? "hidden" :  "block"}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-classname"
                >
                  Class Name
                </label>
                <input
                  className={selectValue === "Student" ? "hidden" : `appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight  focus:bg-white focus:border-gray-500`}
                  id="grid-classname"
                  type="text"
                  placeholder="Example : Computer Networks"
                  name="classname"
                  value={user.classname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            </div> */}
            {error && <span className="text-red-500">{error}</span>}
            {/* <Link to="/login"> */}
            <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded mt-1"
             
            >
              Create
            </button>
            <Link to="/login">
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Already have a account?
                </a>
                </Link>
                </div>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
