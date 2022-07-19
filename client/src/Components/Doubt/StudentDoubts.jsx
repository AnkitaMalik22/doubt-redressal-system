import React from 'react'
import { useState ,useEffect} from "react";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

function StudentDoubts() {
    const [allDoubts, setAllDoubts] = useState([])
    const [comment, setComment] = useState({
        comment:""
    })
    // const [allComments, setALlComments] = useState(null)
   

useEffect(() => {
  handleAllDoubts()
  
// handleGetComment()

}, [])

const handleChange = (e) => {
  
    setComment(e.target.value)
  };

    async function handleAllDoubts() {
        
        await axios
          .get("http://localhost:8080/doubts/all-doubts", allDoubts)
          .then((response) => {
        setAllDoubts(response.data)
        // setALlComments(response.data.comments)
            // navigate("/class")
          })
          .catch((err) => {
            console.log(err);
          });
       
      }

      async function handleAddComment(id) {
       console.log(comment,id)
        await axios
          .post(`http://localhost:8080/doubts/add-comment/${id}`, {comment:comment})
          .then((response) => {
        alert("commented")
          })
          .catch((err) => {
            console.log(err);
          });
       
      }
      // async function handleGetComment() {
        
      //   await axios
      //     .get("http://localhost:8080/doubts/get-comments", comment)
      //     .then((response) => {
      //       setALlComments(response.data)
      //       console.log(allComments)
      //         })
      //         .catch((err) => {
      //           console.log(err);
      //         });
       
      // }
  return (
    <>
    <div className='w-full flex items-center justify-center justify-items-center flex-col mt-4'>
          {allDoubts === null
          ? "Loading.."
          : allDoubts.map((element, index) => {




              return <div className="w-[90%] flex items-center justify-center p-2  flex-col shadow-md border-2 border-slate-200 mb-4" key={index}>
                <div className="question  w-full mb-2">
                    <h1 className="text-xl mb-2 text-red-400"><span className='font-semibold '>Question : </span>{element.title}</h1>
<p className="text-sm"><span className='font-semibold'>Description : </span>{element.description}</p>
                </div>
                <div className="answer flex justify-between items-center flex-row w-full">
                  <span  className='px-4 py-2 bg-blue-400 text-slate-50'><span className="font-semibold">Answer : </span>{element.answer}</span>
                <span>{element.resolved ? <p  className='px-4 py-2 bg-green-400'>resolved</p> : ""}</span>
</div>
                <div className="comment-section w-full">
                    <p className="comments-total mb-1"> comments : ({element.comments.length})</p>
                    <hr />
                    <div className="all-comments  mt-3">
                   
                    { element.comments.length > 0 
          ?  
          element.comments.map((el, index) => {
              return  <div className="w-full px-3 bg-blue-100 border-2 rounded mb-2" key={index}>{el}</div>
            })
            : <p>no comments</p>
          } 
              <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-comment"
                >
                  comment
                </label>
                <input
                  className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id={element._id}
                  type="text"
                  placeholder="Enter comment"
                  name="comment"
                  value={comment.comment}
                  onChange={handleChange}
                  required
                />
                <button className="add-comment bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>{handleAddComment(element._id)}}>add comment</button>
              </div>
            </div>
           
      
                    </div>
                </div>
            </div>





            })} </div>


            
            </>
  )
}

export default StudentDoubts