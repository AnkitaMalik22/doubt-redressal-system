import React from "react";

import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import {axiosInstance} from '../../config'
import {useNavigate } from "react-router-dom";



function Teacher({user}) {
  const [allDoubts, setAllDoubts] = useState([])
  
  const navigate = useNavigate();
  useEffect(() => {
    handleAllDoubts()
    
  
  
  }, [])

  async function handleAllDoubts() {


    await axiosInstance
      .get("/doubts/all-doubts", allDoubts)
      .then((response) => {
    setAllDoubts(response.data)
   
      })
      .catch((err) => {
        console.log(err);
      });
   
  }

  return (
    <>
   <div className="flex items-center justify-between p-3">
    <h1 className="text-gray-800 text-center font-bold text-2xl md:text-3xl">
                        Doubt<span className="text-indigo-600">Redressing</span>
                    </h1>
                    <div className="flex flex-row ">
                    <p className="py-3 px-4 mr-2  text-white bg-indigo-600 hover:bg-indigo-700 rounded-md ">class Id : {user._id}</p>
                    <button  className="py-3 px-4  text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow mr-6" onClick={() => {navigator.clipboard.writeText(user._id) ;alert("copied")}}>
                    copy
            </button>
            <button  className="py-3 px-4 text-white bg-red-600 hover:bg-red-700 rounded-md shadow" onClick={() => navigate("/")}>
             go back
            </button>
                    </div>
                   
       
      
       
    </div>

  
<div className="w-screen flex items-center justify-center flex-col mb-3 my-1">
       {
       allDoubts === null
          ? "Loading.."
          : allDoubts.map((element, index) => {
            return !element.resolved ? <div className="container flex items-center justify-between p-2 bg-slate-100 border border-blue-800 mx-w-xl mb-3"><h1 className="text-xl mb-2">{element.title}</h1>
            <Link to={`/solve/doubtId=${element._id}`}>
           <button className="add-comment bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Accept</button>
           </Link>
            </div>
            : <div className="container flex items-center justify-between p-2 bg-slate-100 border border-blue-800 mx-w-xl mb-3"><h1 className="text-xl mb-2">{element.title}</h1>
          <Link to={`/solve/doubtId=${element._id}`}>
           <button className="add-comment hover:bg-transparent bg-green-500 hover:text-green-700 font-semibold text-white py-2 px-4 border hover:border-green-500 hover:border-transparent rounded" >Resolved</button>
           </Link>
            </div>
               
          })
          }
          </div>

        
          
    </>
  );
}

export default Teacher;
