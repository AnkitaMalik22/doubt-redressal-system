import React from 'react'

import { useState ,useEffect} from "react";
import {useParams} from "react-router-dom";
import {useNavigate } from "react-router-dom";
import axios from "axios";

function TeacherDoubts({user}) {
    let { doubtId } = useParams();
      const ID = doubtId.substring(8, doubtId.length);
    const [data, setData] = useState(null)
const [answer, setAnswer] = useState({
    answer:""
})
const navigate = useNavigate();
 
  useEffect(() => {
handleGetDoubt(ID)
  
  
  }, [])

const handleChange = (e) => {
  
    setAnswer(e.target.value)
  };

  async function handleGetDoubt(id) {
    // console.log(comment,id)
     await axios
       .get(`http://localhost:8080/doubts/${id}`,data)
       .then((response) => {
     setData(response.data)
       })
       .catch((err) => {
         console.log(err);
       });
    
   }

  async function handleAddAnswer(id) {
    // console.log(comment,id)
     await axios
       .post(`http://localhost:8080/doubts/add-answer/${id}`, {answer:answer})
       .then((response) => {

      navigate("/class")
  
       })
       .catch((err) => {
         console.log(err);
       });
    
   }
  return (
    <>
    <div className="flex items-center justify-center w-screen flex-col">
    <h1 className="text-gray-800 text-center font-bold text-2xl md:text-3xl my-4">
                        Solve <span className="text-indigo-600">Doubts</span>
                    </h1>

                 
                      {/* dcfvgbhnjk */}
                      <section className='flex w-[90vw] xl:justify-around flex-col sm:flex-col justify-center   xl:flex-row'>
                      <div className=" xl:w-[50%] md:w-full ">
                      <div className="flex items-center justify-center p-2  flex-col shadow-md border-2 border-slate-200 mb-4 " >
                <div className="question  mb-2 w-full">
                    <h1 className="text-xl mb-2 text-red-400"><span className='font-semibold '>Question : </span>{ data===null ? "" : data.title}</h1>
<p className="text-sm"><span className='font-semibold'>Description : </span>{data===null ? "" : data.description}</p>
                </div>
                <div className="answer flex justify-between items-center flex-row w-full">
                  <span  className='px-4 py-2 bg-blue-400 text-slate-50'><span className="font-semibold">Answer : </span>{data===null ? "":  data.answer}</span>
              
</div>
                <div className="comment-section w-full">
                    <p className="comments-total mb-1"> comments : ({data===null ? "": data.comments.length})</p>
                    <hr />
                    <div className="all-comments  mt-3">
                    comments :
{
  data===null ? "": data.comments.map((el, index) => {
              return  <div className="w-full px-3 bg-blue-100 border-2 rounded mb-2" key={index}>  {el}</div>
            })
          }
                    </div>
                    </div>
                    </div>
                    </div>  
                      {/* cfvgbhjk */}





<div className="answer   ">
   <div className="flex flex-wrap  mb-6 p-4  shadow-md border-2 border-slate-200">
              <div className="w-full px-3 ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-answer"
                >
                 Answer
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-answer"
                  type="text"
                  placeholder="Enter answer"
                  name="answer"
                  value={answer.answer}
                  onChange={handleChange}
                  required
                />
                  <button className="add-answer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>{handleAddAnswer(ID)}}>add answer</button>
                  </div>
              </div>
            </div>

            </section>
            </div>
            
    </>
  )
}

export default TeacherDoubts