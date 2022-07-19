import React from "react";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import StudentDoubts from "./StudentDoubts";

function Student({userName,setLoginUser}) {
  // console.log(userName)
  const [error, setError] = useState("");
  const [question, setQuestion] = useState({
    title: "",
    description: "",
    answer:"",
    comments:[],
    askedBy:userName,
    resolved:false
  });
  const navigate = useNavigate();
 



  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion({
      ...question,
      [name]: value,
    });
  };

  async function handleAsk(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/doubts", question)
      .then((response) => {
        alert(response.data.message)
        // navigate("/class")
      })
      .catch((err) => {
       setError(err);
      });
   
  }


  return (
    <>
     <div className="flex items-center justify-between p-3">
    <h1 className="text-gray-800 text-center font-bold text-2xl md:text-3xl">
                        Doubt<span className="text-indigo-600">Redressing</span>
                    </h1>
                   
            <button  className="py-3 px-4 text-white  bg-indigo-600 hover:bg-indigo-700 rounded-md shadow" onClick={() => navigate("/")}>
             go back
            </button>
                    </div>
      <section className=" ask-doubt body-font">
        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col ">
          <h1 className="text-gray-800 text-center font-bold text-xl md:text-3xl mb-3">
            Raise a <span className="text-indigo-600">Doubt</span>
          </h1>
          <div className="w-full max-w-2xl ">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={(e) => handleAsk(e)}
              method="POST"
            >
              {/* -------------------------------Title -------------------------------- */}
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-title"
                  >
                    title
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-title"
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    value={question.title}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* -------------------------------Description -------------------------------- */}
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-title"
                  >
                    Description
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-description"
                    type="text"
                    placeholder="Enter description"
                    name="description"
                    value={question.description}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {error && <span className="text-red-500">{error}</span>}
              {/* <Link to="/login"> */}
              <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded mt-1">
                  Ask Doubt
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
       {/* -------------------------------All Doubts -------------------------------- */}
       <h1 className="text-gray-800 text-center font-bold text-xl md:text-3xl   border-b-2 border-blue-500 mb-3  mx-2 py-3">
          All <span className="text-indigo-600">Doubts </span>
          </h1>
       <StudentDoubts/>
       {/* setComment() */}
    </>
  );
}

export default Student;
