import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup({setLoginUser}) {


  const [error, setError] = useState("");
  const [user, setUser] = useState({
   
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

// const handleSubmit=async(e)=>{
//   e.preventDefault();
//   try{
//     const url ='http://localhost:8080/api/auth';
//     const { data : res } = await axios.post(url,data)
// localStorage.setItem("token",res.data)
// window.location("/")

//   }catch(error){
//     if(error.response && error.response.status >=400 && error.response.status <=500){
//       setError(error.response.data.message)
//     }
//   }
// }

async function handleSubmit() {
  // e.preventDefault()
    
    await axios.post('http://localhost:8080/login',user)
    .then((response)=>{ 
     // alert(response.data.message)
     if(response.data.message == "Login Successfull"){  
      setLoginUser(response.data.user);
      navigate('/')}
     else{setError(response.data.message)}
  })
         .catch((err)=>{console.log(err)})

}






  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 className="text-gray-800 text-center font-bold text-2xl md:text-3xl mb-3">
                        Login to Your <span className="text-indigo-600">Account</span>
                    </h1>
          <div className="w-full max-w-md">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >



             
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

               {/* -------------------------------Class Code [FOR STUDENTS] -------------------------------- */}

              {/* <div className={selectValue === "Teacher" ? "hidden" :  "block"}>
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
                    />
                  </div>
                </div>
              </div> */}
            {error && <span className="text-red-500 my-2">{error}</span>}
              <div className="flex items-center justify-between">
    
                {/* <Link to="/login"> */}
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-1"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Sign In
                  </button>
                {/* </Link> */}
                <Link to="/register">
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  create accoount?
                </a>
                </Link>
              </div>
            </form>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
