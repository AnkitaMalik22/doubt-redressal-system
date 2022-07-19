import { useNavigate } from "react-router-dom";

function Navbar({setLoginUser}) {
  const navigate = useNavigate();

  return (
<nav className="bg-white w-full border-b md:border-0 md:static">
    <div className="flex items-center justify-between p-3">
    <h1 className="text-gray-800 text-center font-bold text-2xl md:text-3xl">
                        Doubt<span className="text-indigo-600">Redressing</span>
                    </h1>
       
        <button  className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow" onClick={() =>  setLoginUser({})}>
             log out
            </button>
        
    </div>
</nav>
  )
}

export default Navbar
