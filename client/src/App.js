
// import './App.css';

import { useState } from "react";
import{Route,Routes,Navigate} from 'react-router-dom'
import Homepage from "./Components/Homepage";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import Create from "./Components/Classroom/Create";
import Join from "./Components/Classroom/Join";
import Teacher from "./Components/Doubt/Teacher";
import Student from "./Components/Doubt/Student";
import TeacherDoubts from "./Components/Doubt/TeacherDoubts";

function App() {
  const [ user, setLoginUser] = useState({});
  const [userType, setUserType] = useState(null)


  return (
    <div className="App">
    
 
<Routes>
<Route path="/" exact element={
              user && user._id ? 
              <Welcome setLoginUser={setLoginUser} user={user} />
               : <Homepage/>
              
  }/>
<Route path="/login" exact element={ <Login setLoginUser={setLoginUser}/>}/>
<Route path="/register" exact element={ <Register/>}/>
<Route path="/" element={<Navigate replace to="/login"/>}/>
<Route path="/class" exact element={
              userType && userType==="Teacher" ? 
              <Teacher userName={user.firstName} user={user} />
               : <Student userName={user.firstName}  setLoginUser={setLoginUser}/>
              
  }/>
  <Route path="/" element={<Navigate replace to="/class"/>}/>
<Route path="/class/create" exact element={ user && user._id ? <Create/> : <Login setLoginUser={setLoginUser} userEmail={user.email}userName={user.firstName} />}/>
<Route path="/class/join" exact element={   user && user._id ? <Join setUserType={setUserType} userEmail={user.email} /> :<Login setLoginUser={setLoginUser}/>}/>

  <Route path='/solve/:doubtId' exact element={<TeacherDoubts />}/>
</Routes>

       </div>
  );
}

export default App;
